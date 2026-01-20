import React from 'react';
import { ShieldCheck, Lock, Truck, RefreshCcw } from 'lucide-react';

const Trust = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
            title: "Buyer Protection",
            description: "Get the item you ordered or your money back. Guaranteed."
        },
        {
            icon: <Lock className="w-8 h-8 text-indigo-600" />,
            title: "Secure Payments",
            description: "Encrypted transactions with industry-leading security protocols."
        },
        {
            icon: <Truck className="w-8 h-8 text-emerald-500" />,
            title: "Tracked Shipping",
            description: "Real-time updates from the moment your item is packed."
        },
        {
            icon: <RefreshCcw className="w-8 h-8 text-indigo-600" />,
            title: "Easy Returns",
            description: "Not what you expected? Simple return process for verified items."
        }
    ];
    return (
        <section className="py-16 bg-white border-y border-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4 group">
                            {/* Icon Container */}
                            <div className="bg-white p-3 rounded-2xl shadow-sm border border-indigo-100 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            {/* Text Content */}
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;