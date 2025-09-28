"use client";
import React from 'react';
import AuthForm from '../../components/AuthForm';


export default function LoginPage() {
    return (
        <div className=" p-8 ">
            <h1 className="text-2xl font-semibold mb-2">Welcome back to Opiniom</h1>
            <p className="text-sm text-gray-500 mb-6">Sign in to continue</p>
            <AuthForm mode="login" />
            <p className="mt-4 text-sm text-center text-gray-600">
                Don&apos;t have an account? <a href="/auth/signup" className="text-white">Sign up</a>
            </p>
        </div>
    );
}