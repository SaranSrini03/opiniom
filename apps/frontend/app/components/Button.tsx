'use client';
import React from 'react';


type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
loading?: boolean;
};


export default function Button({ children, loading, disabled, ...props }: Props) {
return (
<button
className={`w-full px-4 py-2 rounded-md text-black bg-white hover:bg-gray-300 cursor-pointer disabled:opacity-60`}
disabled={disabled || loading}
{...props}
>
{loading ? 'Please wait...' : children}
</button>
);
}