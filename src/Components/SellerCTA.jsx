import React from 'react';
import Link from 'next/link';
import { DollarSign, Zap, BarChart, ArrowRight } from 'lucide-react';

const SellerCTA = () => {
    const benefits = [
        {
            icon: <DollarSign className="w-5 h-5" />,
            text: "Low transaction fees",
        },
        {
            icon: <Zap className="w-5 h-5" />,
            text: "Instant listing tools",
        },
        {
            icon: <BarChart className="w-5 h-5" />,
            text: "Sales analytics dashboard",
        }
    ];
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-indigo-900 rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-200">

                    {/* Decorative background pattern */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 skew-x-12 translate-x-20" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-12 lg:p-20">

                        {/* Left Content */}
                        <div>
                            <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">
                                Ready to declutter?
                            </h2>
                            <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                                Turn your unused gear into <span className="text-emerald-400">instant cash.</span>
                            </h3>
                            <p className="text-indigo-100 text-lg mb-8 max-w-md">
                                Join 5,000+ sellers who are earning weekly. List your first item in under 60 seconds with our streamlined seller portal.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                <Link
                                    href="/add-item"
                                    className="bg-emerald-500 text-indigo-950 px-8 py-4 rounded-2xl font-black text-lg hover:bg-emerald-400 hover:scale-105 transition-all flex items-center gap-2 shadow-xl shadow-emerald-900/20"
                                >
                                    Start Selling Now
                                    <ArrowRight className="w-5 h-5" />
                                </Link>

                                <div className="flex flex-col gap-3">
                                    {benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-2 text-indigo-200 text-sm font-medium">
                                            <div className="text-emerald-400">{benefit.icon}</div>
                                            {benefit.text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Visual Element (Mock Seller Dashboard) */}
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="h-4 w-24 bg-white/20 rounded-full" />
                                    <div className="h-8 w-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">$</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-12 w-full bg-white/5 rounded-xl flex items-center px-4 gap-3">
                                        <div className="h-6 w-6 bg-indigo-500/50 rounded-md" />
                                        <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                                    </div>
                                    <div className="h-12 w-full bg-white/5 rounded-xl flex items-center px-4 gap-3">
                                        <div className="h-6 w-6 bg-emerald-500/50 rounded-md" />
                                        <div className="h-2 w-2/3 bg-white/20 rounded-full" />
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-white/10 flex justify-between">
                                        <span className="text-indigo-200 text-xs font-bold uppercase">Total Earnings</span>
                                        <span className="text-emerald-400 font-black">$2,450.00</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce shadow-indigo-900/20">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                    📈
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Growth</p>
                                    <p className="text-sm font-black text-gray-900">+14% Weekly</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellerCTA;