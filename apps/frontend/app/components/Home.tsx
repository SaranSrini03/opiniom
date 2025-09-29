'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [username, setUsername] = useState('User');

  useEffect(() => {
    const fetchUsername = async () => {
      const storedUser = localStorage.getItem('user');
      if (!storedUser) return;

      const user = JSON.parse(storedUser);
      const email = user.email;
      if (!email) return;

      try {
        // Fetch username from profiles table
        const { data, error } = await supabase
          .from('profiles')
          .select('username')
          .eq('email', email); // exact match

        if (error) {
          console.error('Error fetching profile:', error);
          return;
        }

        if (!data || data.length === 0) {
          console.warn('No profile found for this email');
          setUsername('User');
          return;
        }

        setUsername(data[0].username);
      } catch (err) {
        console.error('Unexpected error fetching profile:', err);
      }
    };

    fetchUsername();
  }, []);

  return (
    <div className="min-h-screen font-mono flex items-center justify-center bg-black">
      <h1 className="text-4xl text-white font-bold">Hello {username}!</h1>
    </div>
  );
}
