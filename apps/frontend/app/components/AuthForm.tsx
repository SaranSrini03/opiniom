'use client';


import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';


type AuthMode = 'login' | 'signup';
export default function AuthForm({ mode }: { mode: AuthMode }) {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
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
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: { name },
                    },
                });
                if (error) throw error;
                // In many Supabase setups an email confirmation is required.
                setMessage('Signup successful — please check your email for confirmation if enabled.');
            } else {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                // On success, push to the home page (or dashboard)
                router.push('/');
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
                <Input
                    label="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name (optional)"
                />
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