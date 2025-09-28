"use client";
import React from 'react';
import AuthForm from '../../components/AuthForm';


export default function SignupPage() {
    return (
        <div className="p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-2">Create your Opiniom account</h1>
            <p className="text-sm text-gray-500 mb-6">Quick — no spam, just connection.</p>
            <AuthForm mode="signup" />
            <p className="mt-4 text-sm text-center text-gray-600">
                Already have an account? <a href="/auth/login" className="text-white">Sign in</a>
            </p>
        </div>
    );
}