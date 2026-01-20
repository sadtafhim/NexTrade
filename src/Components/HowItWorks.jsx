import React from 'react';
import { UserPlus, Tag, PackageCheck, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            id: "01",
            title: "Create Account",
            description: "Sign up in seconds with our secure mock-auth system to start trading gear.",
            icon: <UserPlus className="w-6 h-6 text-indigo-600" />,
            color: "border-indigo-100 bg-indigo-50",
        },
        {
            id: "02",
            title: "List or Browse",
            description: "Upload your own products to sell or browse our curated categories to buy.",
            icon: <Tag className="w-6 h-6 text-emerald-600" />,
            color: "border-emerald-100 bg-emerald-50",
        },
        {
            id: "03",
            title: "Secure Trade",
            description: "Complete your transaction with peace of mind through our verified system.",
            icon: <PackageCheck className="w-6 h-6 text-indigo-600" />,
            color: "border-indigo-100 bg-indigo-50",
        }
    ];
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background text for design depth */}
            <div className="absolute top-10 left-10 text-gray-50 text-9xl font-black select-none -z-10">
                PROCESS
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-3">
                        Simple & Seamless
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        How Nex<span className="text-indigo-600">Trade</span> Works
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-12 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            {/* Step Number & Icon */}
                            <div className={`relative w-20 h-20 rounded-3xl border-2 ${step.color} flex items-center justify-center mb-8 transform group-hover:-translate-y-2 transition-transform duration-300 shadow-sm`}>
                                {step.icon}
                                <span className="absolute -top-4 -right-4 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-sm font-black text-gray-400 shadow-sm group-hover:text-indigo-600 transition-colors">
                                    {step.id}
                                </span>
                            </div>

                            {/* Text Content */}
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                {step.title}
                            </h4>
                            <p className="text-gray-500 leading-relaxed px-4">
                                {step.description}
                            </p>

                            {/* Mobile Arrow (Visible only between items) */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden mt-8 text-gray-200">
                                    <ArrowRight className="w-8 h-8 rotate-90" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;