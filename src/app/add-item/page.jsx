"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';
import { PackagePlus, DollarSign, Image as ImageIcon, Layout, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function AddItemPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
        category: 'Electronics'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Product listed in MongoDB successfully!', {
                    duration: 4000,
                    style: { borderRadius: '15px', background: '#065f46', color: '#fff' }
                });

                setTimeout(() => {
                    router.push('/items');
                    router.refresh();
                }, 1500);
            } else {
                throw new Error('Failed to save item');
            }
        } catch (error) {
            toast.error('Connection failed. Is your Express server running?');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Toaster position="top-center" />

            {/* Header Area */}
            <div className="bg-white border-b border-gray-100 py-10 mb-10">
                <div className="max-w-3xl mx-auto px-4">
                    <Link href="/items" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-indigo-600 mb-4 transition-colors">
                        <ArrowLeft size={16} /> Back to Marketplace
                    </Link>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">
                        Post a <span className="text-emerald-600">Product</span>
                    </h1>
                    <p className="text-gray-500 mt-2">Fill in the details to sync this item with your MongoDB database.</p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-indigo-100/50 border border-gray-100 space-y-6">

                        {/* Item Name */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Item Name</label>
                            <div className="relative">
                                <Layout className="absolute left-4 top-3.5 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. MacBook Pro M2"
                                    className="text-black/70 w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Price */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Price (USD)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-4 top-3.5 text-gray-400" size={20} />
                                    <input
                                        type="number"
                                        required
                                        placeholder="0.00"
                                        className="text-black/70 w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all"
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Category</label>
                                <select
                                    className="text-black/70 w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all appearance-none"
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option value="Electronics">Electronics</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Home Gear">Home Gear</option>
                                    <option value="Gadgets">Gadgets</option>
                                </select>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Description</label>
                            <textarea
                                required
                                rows="4"
                                placeholder="Describe your item..."
                                className="text-black/70 w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all"
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            ></textarea>
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Image URL</label>
                            <div className="relative">
                                <ImageIcon className="absolute left-4 top-3.5 text-gray-400" size={20} />
                                <input
                                    type="url"
                                    required
                                    placeholder="Paste Unsplash image link here..."
                                    className="text-black/70 w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={22} />
                                    Saving to MongoDB...
                                </>
                            ) : (
                                <>
                                    <PackagePlus size={22} />
                                    List My Item
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}