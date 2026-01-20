"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { ShoppingBag, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const MOCK_EMAIL = "admin@nextrade.com";
    const MOCK_PASSWORD = "password123";

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
            Cookies.set('user_token', 'mock_token_abc123', { expires: 7 });

            // This tells Next.js to re-fetch data and refresh components
            router.refresh();

            router.push('/items');
        } else {
            setError('Invalid credentials');
        }
    };
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="bg-indigo-600 p-3 rounded-2xl shadow-xl shadow-indigo-100">
                        <ShoppingBag className="w-8 h-8 text-white" />
                    </div>
                </div>
                <h2 className="text-center text-3xl font-black text-gray-900 tracking-tight">
                    Welcome back to Nex<span className="text-indigo-600">Trade</span>
                </h2>
                <p className="mt-2 text-center text-sm text-gray-500">
                    Enter your credentials to manage your shop
                </p>
            </div>

            <div className="mt-8 sm:mx-auto w-full max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl shadow-indigo-100/50 sm:rounded-3xl sm:px-10 border border-gray-100">
                    <form className="space-y-6" onSubmit={handleLogin}>

                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-400 p-4 text-sm text-red-700">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block text-black/70 w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
                                    placeholder="admin@nextrade.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all text-black/70"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label className="ml-2 block text-sm text-gray-600">Remember me</label>
                            </div>
                            <div className="text-sm">
                                <Link href="#" className="font-bold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-2xl shadow-lg text-lg font-black text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-[1.01]"
                            >
                                Sign In
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                        <div className="inline-flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            <ShieldCheck className="w-4 h-4" />
                            Secure Mock Authentication
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;