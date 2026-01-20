import Link from 'next/link';
import { ShoppingCart, Tag, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative bg-white pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
            {/* Background Decorative Blob */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Content */}
                    <div className="text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                            <Tag className="w-4 h-4 text-emerald-600" />
                            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                                Resell, Reuse, Recycle
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight mb-6 leading-[1.1]">
                            The smarter way to <span className="text-indigo-600">Trade</span> your gear.
                        </h1>

                        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                            Join the marketplace where quality meets affordability. Buy pre-loved
                            electronics, fashion, and home goods—or turn your unused items into instant cash.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/items"
                                className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-200 transition-all"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Start Shopping
                            </Link>

                            <Link
                                href="/login"
                                className="flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all"
                            >
                                Sell an Item
                                <ArrowRight className="w-5 h-5 text-gray-400" />
                            </Link>
                        </div>

                        {/* Quick Trust Badges */}
                        <div className="mt-10 flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                <span className="text-sm font-semibold text-gray-500">Verified Sellers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                                    ))}
                                </div>
                                <span className="text-sm font-semibold text-gray-500">10k+ Traders</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Visual Product Grid (Mockup) */}
                    <div className="relative hidden lg:block">
                        <div className="grid grid-cols-2 gap-4 animate-float">
                            <div className="space-y-4 pt-12">
                                <div className="aspect-square bg-indigo-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
                                    <span className="text-indigo-300 font-bold">Tech</span>
                                </div>
                                <div className="aspect-3/4 bg-emerald-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
                                    <span className="text-emerald-400 font-bold">Fashion</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-3/4 bg-gray-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
                                    <span className="text-gray-300 font-bold">Home</span>
                                </div>
                                <div className="aspect-square bg-indigo-50 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
                                    <span className="text-indigo-200 font-bold">Gadgets</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}