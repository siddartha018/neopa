'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CalendarEvent {
  id?: number;
  date: string;
  title: string;
  type: string;
  status: string;
  description: string;
}

interface ContactSubmission {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<CalendarEvent>({
    date: '',
    title: '',
    type: 'Social Media',
    status: 'Scheduled',
    description: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      setIsCheckingAuth(false);
      // Setup DB first if not exists (optional, but good for first run)
      fetch('/api/setup-db').then(() => {
        fetchEvents();
        fetchContactSubmissions();
      });
    } else {
      setIsCheckingAuth(false);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('admin_authenticated', 'true');
        setIsAuthenticated(true);
        // Setup DB and fetch data after successful login
        fetch('/api/setup-db').then(() => {
          fetchEvents();
          fetchContactSubmissions();
        });
      } else {
        setLoginError(data.error || 'Invalid credentials');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
    setLoginData({ username: '', password: '' });
  };

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/calendar');
      const data = await res.json();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
    }
  };

  const fetchContactSubmissions = async () => {
    try {
      const res = await fetch('/api/contact');
      const data = await res.json();
      setContactSubmissions(data);
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEditing && editingId) {
        await fetch('/api/calendar', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            id: editingId
          }),
        });
      } else {
        await fetch('/api/calendar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      setFormData({
        date: '',
        title: '',
        type: 'Social Media',
        status: 'Scheduled',
        description: ''
      });
      setIsEditing(false);
      setEditingId(null);
      fetchEvents();
    } catch (error) {
      console.error('Error saving event:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (event: CalendarEvent) => {
    setFormData(event);
    setIsEditing(true);
    setEditingId(event.id || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id?: number) => {
    if (!id || !confirm('Are you sure you want to delete this event?')) return;
    
    try {
      await fetch('/api/calendar', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleDeleteContact = async (id?: number) => {
    if (!id || !confirm('Are you sure you want to delete this contact submission?')) return;
    
    try {
      await fetch('/api/contact', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      fetchContactSubmissions();
    } catch (error) {
      console.error('Error deleting contact submission:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Show loading state while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-blue-400">Loading...</div>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-md w-full">
          <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-800 p-8">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-blue-500 font-playfair mb-2">Admin Login</h1>
              <p className="text-gray-400 text-sm">Enter your credentials to access the admin dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-bold text-blue-300 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  required
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm placeholder:text-gray-500"
                  placeholder="Enter username"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-bold text-blue-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm placeholder:text-gray-500"
                  placeholder="Enter password"
                />
              </div>

              {loginError && (
                <div className="p-3 rounded-lg bg-red-900/20 border border-red-900/50">
                  <p className="text-red-400 text-sm">{loginError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full px-6 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                {isLoggingIn ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/" className="text-sm text-blue-400 hover:text-blue-300">
                ← Back to Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show admin dashboard if authenticated
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-800 p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-blue-500 font-playfair">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogout}
                className="text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                Logout
              </button>
              <Link href="/" className="text-sm text-blue-400 hover:text-blue-300">← Back to Site</Link>
            </div>
          </div>
          
          <div className="bg-black rounded-xl p-6 border border-blue-900/30 mb-8 shadow-sm">
            <h2 className="text-xl font-bold text-blue-400 mb-4 border-b border-gray-800 pb-2">
              {isEditing ? 'Edit Event' : 'Add New Event'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-blue-300 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-300 mb-1">Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Instagram Post"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-300 mb-1">Type</label>
                  <select
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm"
                  >
                    <option value="Social Media">Social Media</option>
                    <option value="Article">Article</option>
                    <option value="Email">Email</option>
                    <option value="Video">Video</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-300 mb-1">Status</label>
                  <select
                    value={formData.status}
                    onChange={e => setFormData({...formData, status: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm"
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Drafting">Drafting</option>
                    <option value="Review">Review</option>
                    <option value="Published">Published</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-blue-300 mb-1">Description</label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm placeholder:text-gray-500"
                  placeholder="Enter event details..."
                ></textarea>
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 shadow-sm"
                >
                  {loading ? 'Saving...' : (isEditing ? 'Update Event' : 'Add Event')}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setEditingId(null);
                      setFormData({
                        date: '',
                        title: '',
                        type: 'Social Media',
                        status: 'Scheduled',
                        description: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-black text-blue-400 font-medium rounded-lg border border-blue-900/50 hover:bg-gray-900 transition-colors shadow-sm"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          <h2 className="text-2xl font-bold text-blue-400 font-playfair mb-6">Current Schedule</h2>
          <div className="space-y-4">
            {events.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No events scheduled yet.</p>
            ) : (
              events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((event, idx) => (
                <div key={idx} className="bg-black border border-gray-800 rounded-xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-blue-900/50 transition-colors group">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-medium text-blue-400 bg-blue-900/20 px-2 py-1 rounded border border-blue-900/30">{event.date}</span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        event.status === 'Scheduled' ? 'bg-green-900/20 text-green-400 border border-green-900/30' :
                        event.status === 'Drafting' ? 'bg-yellow-900/20 text-yellow-400 border border-yellow-900/30' :
                        'bg-gray-800 text-gray-400 border border-gray-700'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-white group-hover:text-blue-200 transition-colors">{event.title}</h3>
                    <p className="text-sm text-gray-400">{event.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(event)}
                      className="px-3 py-1.5 text-sm font-medium text-blue-400 bg-blue-900/20 rounded-lg hover:bg-blue-900/40 transition-colors border border-blue-900/30"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="px-3 py-1.5 text-sm font-medium text-red-400 bg-red-900/20 rounded-lg hover:bg-red-900/40 transition-colors border border-red-900/30"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Contact Submissions Section */}
        <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-800 p-8 mt-8">
          <h2 className="text-2xl font-bold text-blue-400 font-playfair mb-6">Contact Submissions</h2>
          <div className="space-y-4">
            {contactSubmissions.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No contact submissions yet.</p>
            ) : (
              contactSubmissions.map((submission) => (
                <div
                  key={submission.id}
                  className="bg-black border border-gray-800 rounded-xl p-6 hover:border-blue-900/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-white text-lg">{submission.name}</h3>
                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded border border-gray-700">
                          {formatDate(submission.created_at)}
                        </span>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400 font-medium">Email:</span>
                          <a
                            href={`mailto:${submission.email}`}
                            className="text-gray-300 hover:text-blue-400 transition-colors"
                          >
                            {submission.email}
                          </a>
                        </div>
                        {submission.phone && (
                          <div className="flex items-center gap-2">
                            <span className="text-blue-400 font-medium">Phone:</span>
                            <a
                              href={`tel:${submission.phone}`}
                              className="text-gray-300 hover:text-blue-400 transition-colors"
                            >
                              {submission.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteContact(submission.id)}
                      className="px-4 py-2 text-sm font-medium text-red-400 bg-red-900/20 rounded-lg hover:bg-red-900/40 transition-colors border border-red-900/30"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <p className="text-gray-300 whitespace-pre-wrap">{submission.message}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

