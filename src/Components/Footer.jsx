import Link from 'next/link';
import { ShoppingBag, Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-indigo-600 p-2 rounded-xl">
                                <ShoppingBag className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-black text-gray-900 tracking-tighter">
                                Nex<span className="text-indigo-600">Trade</span>
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            The next generation marketplace for pre-loved premium goods.
                            Syncing your trades with speed and security.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                                <Github size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                                <Linkedin size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Marketplace</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/items" className="text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors flex items-center gap-1 group">
                                    Browse All Items <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/add-item" className="text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors">Sell an Item</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors">Featured Items</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors">Safety Center</Link></li>
                            <li><Link href="#" className="text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors">How it Works</Link></li>
                            <li><Link href="#" className="text-sm font-bold text-gray-500 hover:text-indigo-600 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">Stay Updated</h4>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3 px-4 text-sm focus:ring-2 focus:ring-indigo-600 outline-none transition-all"
                            />
                            <button className="absolute right-2 top-1.5 bg-indigo-600 text-white p-1.5 rounded-xl hover:bg-indigo-700 transition-colors">
                                <Mail size={16} />
                            </button>
                        </div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                            By subscribing, you agree to our <span className="text-indigo-600 underline">Privacy Policy</span>.
                        </p>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs font-bold text-gray-400">
                        © 2026 NexTrade Marketplace. Built for SCIC Assignment.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-[10px] font-black uppercase text-gray-400 hover:text-indigo-600 tracking-widest transition-colors">Privacy</Link>
                        <Link href="#" className="text-[10px] font-black uppercase text-gray-400 hover:text-indigo-600 tracking-widest transition-colors">Terms</Link>
                        <Link href="#" className="text-[10px] font-black uppercase text-gray-400 hover:text-indigo-600 tracking-widest transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}