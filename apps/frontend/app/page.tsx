'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabaseClient';
import Welcome from '@/app/components/Welcome';
import Home from '@/app/components/Home'; // your actual home component

export default function Page() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    // Optional: listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return user ? <Home /> : <Welcome />;
}
