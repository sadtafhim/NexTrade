import Marquee from 'react-fast-marquee';
import Image from 'next/image'

const LogoCloud = () => {
    const logos = [
        { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
        { name: "Airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
        { name: "Vercel", url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
        { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
        { name: "Figma", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
        { name: "Slack", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
        { name: "Discord", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Discord_Color_Text_Logo_%282015-2021%29.svg" }
    ];
    return (
        <section className="bg-white py-16 border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-10">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
                    Powering trades for users of
                </p>
            </div>

            <Marquee
                gradient={true}
                gradientColor="white"
                gradientWidth={100}
                speed={40}
                pauseOnHover={true}
            >
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="mx-12 flex flex-col items-center group transition-all duration-300"
                    >
                        <Image
                            src={logo.url}
                            alt={logo.name}
                            width={800}
                            height={500}
                            className="h-8 md:h-10 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        />

                        <div className="h-0.5 w-0 bg-emerald-500 rounded-full mt-2 group-hover:w-full transition-all duration-300"></div>
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default LogoCloud;