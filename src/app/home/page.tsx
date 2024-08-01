// src/app/home/page.tsx
'use client'
import { useState } from 'react';

const Home = () => {
    const [message, setMessage] = useState<string>('Welcome to the Home Page!');

    return (
        <div className="container flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">{message}</h1>
                <p className="text-lg">This is the home page of your Next.js application.</p>
            </div>
        </div>
    );
}

export default Home;
