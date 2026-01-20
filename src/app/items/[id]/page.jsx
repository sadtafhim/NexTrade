"use client";
import Image from 'next/image';
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    ShieldCheck,
    Truck,
    RotateCcw,
    ShoppingCart,
    Star,
    Loader2,
    AlertCircle
} from 'lucide-react';

export default function ItemDetailsPage({ params }) {
    // 1. Unwrap the dynamic route parameters
    const resolvedParams = use(params);
    const id = resolvedParams.id;

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                setLoading(true);
                // 2. Fetch from your Express API using the MongoDB _id
                const response = await fetch(`https://nex-trade-backend-ten.vercel.app/api/items/${id}`);

                if (!response.ok) {
                    throw new Error("Item not found");
                }

                const data = await response.json();
                setItem(data);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchItem();
    }, [id]);

    // Loading State
    if (loading) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <Loader2 className="w-12 h-12 animate-spin text-indigo-600 mb-4" />
            <p className="text-gray-500 font-bold tracking-tight">Loading product details...</p>
        </div>
    );

    // Error/Not Found State
    if (error || !item) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
            <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
            <h1 className="text-2xl font-black text-gray-900 mb-2">Item Not Found</h1>
            <p className="text-gray-500 mb-8 text-center max-w-md">
                The product you are looking for might have been removed or the ID is incorrect.
            </p>
            <Link href="/items" className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200">
                Return to Marketplace
            </Link>
        </div>
    );

    return (
        <div className="min-h-screen bg-white pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

                {/* Breadcrumbs */}
                <Link href="/items" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-indigo-600 mb-8 transition-colors group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Marketplace
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Product Image Section */}
                    <div className="sticky top-28">
                        <div className="aspect-square bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={800}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Info Section */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                {item.category || "General"}
                            </span>
                            <div className="h-4 w-px bg-gray-200 mx-2"></div>
                            <div className="flex items-center gap-1 text-amber-400">
                                <Star size={16} fill="currentColor" />
                                <span className="text-sm font-bold text-gray-900">New Listing</span>
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tighter leading-[1.1]">
                            {item.name}
                        </h1>

                        <div className="flex items-baseline gap-4 mb-8">
                            <p className="text-4xl font-black text-emerald-600">${item.price}</p>
                            <span className="text-gray-400 font-bold text-sm uppercase tracking-widest">Free Shipping</span>
                        </div>

                        <div className="bg-gray-50/50 rounded-3xl p-6 mb-10 border border-gray-100">
                            <h4 className="text-gray-900 font-bold mb-3 uppercase text-xs tracking-widest">Product Description</h4>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {item.description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button className="flex-1 bg-indigo-600 text-white py-5 rounded-[1.5rem] font-black text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-indigo-200 active:scale-[0.98]">
                                <ShoppingCart size={22} />
                                Buy This Item
                            </button>
                            <button className="px-10 py-5 border-2 border-gray-100 rounded-[1.5rem] font-bold text-gray-900 hover:bg-gray-50 transition-all active:scale-[0.98]">
                                Save to Wishlist
                            </button>
                        </div>

                        {/* Value Props Grid */}
                        <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="w-12 h-12 bg-emerald-50 flex items-center justify-center rounded-2xl text-emerald-600">
                                    <ShieldCheck size={24} />
                                </div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">Authentic Item</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="w-12 h-12 bg-indigo-50 flex items-center justify-center rounded-2xl text-indigo-600">
                                    <Truck size={24} />
                                </div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">Safe Delivery</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="w-12 h-12 bg-emerald-50 flex items-center justify-center rounded-2xl text-emerald-600">
                                    <RotateCcw size={24} />
                                </div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">Buyer Protection</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
