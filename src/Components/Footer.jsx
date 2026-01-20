import Link from 'next/link';
import { Briefcase, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Brand & Mission */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-indigo-600 p-1.5 rounded-lg">
                                <Briefcase className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">
                                Skill<span className="text-indigo-600">Sync</span>
                            </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Connecting world-class companies with the top 1% of freelance talent.
                            Build your dream team in minutes, not months.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Marketplace</h3>
                        <ul className="space-y-3">
                            <li><Link href="/items" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Browse Talent</Link></li>
                            <li><Link href="/login" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Post a Profile</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Enterprise Solutions</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Success Stories</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Support & Legal */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Cookie Settings</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Get in Touch</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-600 text-sm">
                                <Mail className="w-4 h-4 text-emerald-500" />
                                <span>support@skillsync.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600 text-sm">
                                <MapPin className="w-4 h-4 text-emerald-500" />
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                        <div className="pt-4">
                            <p className="text-xs text-gray-500 mb-2 font-medium uppercase">Stay Updated</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <button className="bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {currentYear} SkillSync Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span className="text-gray-500 text-xs font-medium">System Status: All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}