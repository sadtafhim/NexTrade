import Link from 'next/link';
import { ArrowRight, Laptop, Shirt, Sofa, Sparkles } from 'lucide-react';

const CategoryGrid = () => {
    const categories = [
        {
            name: "High-End Tech",
            description: "Laptops, Phones & Gadgets",
            icon: <Laptop className="w-6 h-6" />,
            color: "bg-indigo-600",
            lightColor: "bg-indigo-50",
            textColor: "text-indigo-600",
            imageText: "💻", // Replace with real images in <img> tags later
        },
        {
            name: "Modern Fashion",
            description: "Streetwear & Designer Wear",
            icon: <Shirt className="w-6 h-6" />,
            color: "bg-emerald-600",
            lightColor: "bg-emerald-50",
            textColor: "text-emerald-600",
            imageText: "👟",
        },
        {
            name: "Home & Living",
            description: "Furniture & Decor",
            icon: <Sofa className="w-6 h-6" />,
            color: "bg-gray-900",
            lightColor: "bg-gray-100",
            textColor: "text-gray-900",
            imageText: "🪑",
        },
        {
            name: "Latest Drops",
            description: "Newly listed items",
            icon: <Sparkles className="w-6 h-6" />,
            color: "bg-indigo-500",
            lightColor: "bg-indigo-50",
            textColor: "text-indigo-500",
            imageText: "✨",
        }
    ];
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
                            Explore Our <span className="text-indigo-600">Top Collections</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Carefully curated items from verified sellers across the country.
                            Quality guaranteed, every single time.
                        </p>
                    </div>
                    <Link href="/items" className="group flex items-center gap-2 font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                        View All Categories
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Showcase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, index) => (
                        <div key={index} className="group relative">
                            {/* Image/Visual Area */}
                            <div className={`${cat.lightColor} aspect-[4/5] rounded-3xl mb-6 flex items-center justify-center text-6xl group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden relative shadow-inner`}>
                                <span>{cat.imageText}</span>

                                {/* Floating Icon Badge */}
                                <div className={`absolute top-4 right-4 p-3 rounded-2xl text-white shadow-lg ${cat.color}`}>
                                    {cat.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                                {cat.name}
                            </h3>
                            <p className="text-gray-500 text-sm mb-4">
                                {cat.description}
                            </p>

                            <Link
                                href="/items"
                                className={`inline-flex items-center text-sm font-bold ${cat.textColor} group-hover:gap-3 gap-2 transition-all`}
                            >
                                Browse Items <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;