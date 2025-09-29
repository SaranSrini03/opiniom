'use client';

import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';

type AuthMode = 'login' | 'signup';

export default function AuthForm({ mode }: { mode: AuthMode }) {
  const router = useRouter();

  // Form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    try {
      if (mode === 'signup') {
        // 1️⃣ Sign up user
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });
        if (signUpError) throw signUpError;

        if (data.user) {
          // 2️⃣ Call server API to insert profile
          const response = await fetch('/api/createProfile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: data.user.id,
              full_name: fullName,
              username,
              date_of_birth: dob,
            }),
          });

          const result = await response.json();
          if (!response.ok) throw new Error(result.error || 'Failed to create profile');
        }

        setMessage('Signup successful! Check your email to confirm your account.');
      } else {
        // Login
        const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
        if (loginError) throw loginError;
        router.push('/'); // redirect after login
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      {mode === 'signup' && (
        <>
          <Input
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <Input
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            label="Date of Birth"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </>
      )}

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        minLength={6}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}
      {message && <p className="text-sm text-green-600">{message}</p>}

      <Button type="submit" loading={loading}>
        {mode === 'signup' ? 'Create account' : 'Sign in'}
      </Button>
    </form>
  );
}
