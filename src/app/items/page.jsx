"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Loader2, PackageOpen } from 'lucide-react';
import Image from 'next/image';

export default function ItemListPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchItems = async () => {
            try {
                // Fetching from your MongoDB-connected Express server
                const response = await fetch('http://localhost:5000/api/items');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setItems(data);
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    // Filter items based on search input
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Header Section */}
            <div className="bg-white border-b border-gray-100 pt-12 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                                NexTrade <span className="text-indigo-600">Marketplace</span>
                            </h1>
                            <p className="text-gray-500 mt-2 font-medium">Real-time listings from MongoDB Atlas.</p>
                        </div>

                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search products or categories..."
                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-indigo-600">
                        <Loader2 className="w-10 h-10 animate-spin mb-4" />
                        <p className="font-bold text-gray-500">Connecting to database...</p>
                    </div>
                ) : filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredItems.map((item) => (
                            <div
                                key={item._id} // MongoDB uses _id
                                className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
                            >
                                <div className="relative aspect-square overflow-hidden bg-gray-100">
                                    <Image
                                        width={800}
                                        height={500}
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600 shadow-sm">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm line-clamp-2 mt-2 mb-4 leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase">Price</p>
                                            <p className="text-xl font-black text-emerald-600">${item.price}</p>
                                        </div>

                                        {/* Link updated to use _id */}
                                        <Link
                                            href={`/items/${item._id}`}
                                            className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm"
                                        >
                                            <ArrowRight size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
                        <PackageOpen className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900">No items found</h3>
                        <p className="text-gray-500">Try adjusting your search or add a new listing.</p>
                    </div>
                )}
            </div>
        </div>
    );
}