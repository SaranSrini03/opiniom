'use client';
import React from 'react';


type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
label?: string;
error?: string | null;
};


export default function Input({ label, error, className = '', ...props }: InputProps) {
return (
<label className="block text-sm">
{label && <div className="mb-1 font-medium text-white">{label}</div>}
<input
className={`w-full px-3 py-3 mb-3 border-b   bg-black/90 focus:outline-none   ${className}`}
{...props}
/>
{error && <p className="mt-1 text-xs text-red-600">{error}</p>}
</label>
);
}