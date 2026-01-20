"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { ShoppingBag, Menu, X, User, PlusCircle, LogOut } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('user_token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        Cookies.remove('user_token');
        Cookies.remove('user_email');
        setIsLoggedIn(false);
        router.push('/');
        router.refresh();
    };
    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    {/* LOGO */}
                    <div className="flex items-center gap-2">
                        <div className="bg-indigo-600 p-2 rounded-xl">
                            <ShoppingBag className="w-6 h-6 text-white" />
                        </div>
                        <Link href="/" className="text-2xl font-black text-gray-900 tracking-tighter">
                            Nex<span className="text-indigo-600">Trade</span>
                        </Link>
                    </div>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/items" className="text-sm font-bold text-gray-600 hover:text-indigo-600">
                            Browse
                        </Link>

                        {isLoggedIn ? (
                            <>
                                {/* Visible ONLY when logged in */}
                                <Link href="/add-item" className="flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700">
                                    <PlusCircle className="w-4 h-4" />
                                    Sell Item
                                </Link>
                                <div className="h-6 w-px bg-gray-200"></div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-medium text-gray-400">Account</span>
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-600"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        Logout
                                    </button>
                                </div>
                            </>
                        ) : (
                            /* Visible ONLY when logged out */
                            <div className="flex items-center gap-6">
                                <Link href="/login" className="text-sm font-bold text-gray-600 hover:text-indigo-600">
                                    Login
                                </Link>
                                <Link
                                    href="/login"
                                    className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all"
                                >
                                    Join Now
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;