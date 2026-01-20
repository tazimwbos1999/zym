'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Timer, Star, ArrowLeft, ArrowRight } from 'lucide-react';

// Mock Data for Hyfit Games Winners
const hyfitWinners = [
    { id: 1, name: "Bijen", title: "Hyfit Games 2024 Champion", image: "/Bijen.jpeg", quote: "Consistency is key." },
    { id: 2, name: "Mahi", title: "Strength Category Winner", image: "/Mahi.jpeg", quote: "Push beyond limits." },
    { id: 3, name: "Febi", title: "Endurance Master", image: "/Febi.jpeg", quote: "Don't stop when you're tired." },
    { id: 4, name: "Sam", title: "Overall Athlete of the Year", image: "/Sam.jpeg", quote: "Train hard, win easy." },
    { id: 5, name: "Niranjana", title: "Overall Athlete of the Year", image: "/Niranjana.jpeg", quote: "Train hard, win easy." },
    { id: 6, name: "Imtiyaz", title: "Overall Athlete of the Year", image: "/Imtiyaz.jpeg", quote: "Train hard, win easy." },
];

// Mock Data for Hyrox Athletes with detailed category info
const hyroxAthletes = [
    { id: 1, name: "Deekshith", rank: "1st Place", category: "Men Open", category_details: "HYROX (Men Open)", time: "01:05:23", image: "/Deekshith.jpeg" },
    { id: 2, name: "Ajay", rank: "2nd Place", category: "Pro Men", category_details: "HYROX (Pro Men 30-34)", time: "01:08:45", image: "/Ajay.jpeg" },
    { id: 3, name: "Vinay", rank: "Top 5", category: "Men Open", category_details: "HYROX (Men Open 25-29)", time: "01:12:30", image: "/Vinay.jpeg" },
    { id: 4, name: "Imtiyaz", rank: "Top 10", category: "Doubles", category_details: "HYROX (Mixed Doubles 45-49)", time: "01:15:10", image: "/Imtiyaz.jpeg" },
    { id: 5, name: "Bijen", rank: "Top 10", category: "Doubles", category_details: "HYROX (Mixed Doubles 45-49)", time: "01:15:10", image: "/Bijen.jpeg" },
    { id: 6, name: "Niranjana", rank: "3rd Place", category: "Women Open", category_details: "HYROX (Women Open)", time: "01:20:00", image: "/Niranjana.jpeg" },
];

export default function AthletesPage() {
    const [activeTab, setActiveTab] = useState<'hyfit' | 'hyrox'>('hyfit');

    // Create a stable, unique array of images for the gallery
    const [galleryImages] = useState(() => {
        return [...hyfitWinners, ...hyroxAthletes].map((img, i) => ({
            ...img,
            uniqueId: `gallery-item-${i}` // Stable unique ID
        }));
    });

    const [galleryIndex, setGalleryIndex] = useState(0);

    const nextSlide = () => {
        setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevSlide = () => {
        setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    // Calculate offsets dynamically for all items, but mostly render the visible ones to save resources
    // We render a larger buffer to ensure smooth entrance from edges
    const getVisibleItems = () => {
        const total = galleryImages.length;
        const items = [];
        const buffer = 3; // Render 3 items on each side

        for (let i = -buffer; i <= buffer; i++) {
            // Circular Index Math
            const index = (galleryIndex + i + total) % total;
            const item = galleryImages[index];

            // Assign dynamic offset for animation logic
            const offset = i;

            items.push({ ...item, offset });
        }
        return items;
    };

    return (
        <main className="bg-white text-gray-900 min-h-screen overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative h-[80vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/mud_run_thumb.png"
                        alt="Hyfit Athletes Background"
                        layout="fill"
                        objectFit="cover"
                        priority
                        className="brightness-[0.4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6"
                    >
                        Hyfit Athletes on the <span className="text-[#8a0122] inline-block transform hover:scale-105 transition-transform duration-300">Podium!</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto mb-8"
                    >
                        Celebrating our champions and record-breakers who redefine human limits.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="px-8 py-4 bg-[#8a0122] text-white rounded-full font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-[#8a0122] transition-all duration-300 shadow-[0_0_20px_rgba(138,1,34,0.4)] hover:shadow-[0_0_30px_rgba(138,1,34,0.6)]">
                            View Our Athletes
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            Join The Community
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* TABS Section */}
            <section className="py-16 px-4 md:px-8 bg-black">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider">
                            Athletes On <span className="text-[#8a0122]">Our Wall</span>
                        </h2>
                    </div>

                    {/* Tab Control */}
                    <div className="flex justify-center mb-16">
                        <div className="bg-gray-800/80 p-2 rounded-full inline-flex items-center gap-2 sm:gap-4 backdrop-blur-sm border border-gray-700">
                            <button
                                onClick={() => setActiveTab('hyfit')}
                                className={`relative px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-xl font-bold uppercase tracking-wider transition-all duration-300 w-full md:w-auto overflow-hidden ${activeTab === 'hyfit'
                                    ? 'bg-[#8a0122] text-white shadow-lg'
                                    : 'bg-transparent text-gray-300 hover:text-white hover:bg-gray-700/50'
                                    }`}
                            >
                                <span className="relative z-10">
                                    Hyfit Games Winners
                                </span>
                            </button>

                            <button
                                onClick={() => setActiveTab('hyrox')}
                                className={`relative px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-xl font-bold uppercase tracking-wider transition-all duration-300 w-full md:w-auto overflow-hidden ${activeTab === 'hyrox'
                                    ? 'bg-[#8a0122] text-white shadow-lg'
                                    : 'bg-transparent text-gray-300 hover:text-white hover:bg-gray-700/50'
                                    }`}
                            >
                                <span className="relative z-10">
                                    Hyrox Legends
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'hyfit' && (
                                <motion.div
                                    key="hyfit"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {hyfitWinners.map((winner) => (
                                            <div key={winner.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                                <div className="relative h-[500px] w-full">
                                                    <Image
                                                        src={winner.image}
                                                        alt={winner.name}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        className="group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                                                </div>

                                                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                    <h3 className="text-3xl font-black uppercase mb-1">{winner.name}</h3>
                                                    <p className="text-[#ff4d4d] font-bold text-sm uppercase tracking-wider mb-2">{winner.title}</p>
                                                    <p className="text-gray-300 italic text-sm border-l-2 border-[#8a0122] pl-3">"{winner.quote}"</p>
                                                </div>

                                                <div className="absolute top-4 right-4 bg-[#8a0122] text-white p-2 rounded-full shadow-lg">
                                                    <Trophy size={20} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'hyrox' && (
                                <motion.div
                                    key="hyrox"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {hyroxAthletes.map((athlete) => (
                                            <div key={athlete.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(138,1,34,0.3)] transition-all duration-300 group ring-1 ring-gray-100 hover:ring-[#8a0122]/20">
                                                {/* Image Container with Ranking Badge */}
                                                <div className="relative h-96 w-full bg-gray-100">
                                                    <Image
                                                        src={athlete.image}
                                                        alt={athlete.name}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        className="transition-transform duration-700 group-hover:scale-105"
                                                    />

                                                    {/* Floating Rank Badge */}
                                                    <div className="absolute -bottom-6 right-6 w-20 h-20 bg-[#8a0122] rounded-full flex flex-col items-center justify-center border-[5px] border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                                                        <span className="text-2xl font-black text-white leading-none -mt-1">
                                                            {athlete.rank.split(' ')[0]}
                                                        </span>
                                                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                                                            {athlete.rank.split(' ')[1] || 'Place'}
                                                        </span>
                                                    </div>

                                                    {/* Category Tag */}
                                                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
                                                        {athlete.category}
                                                    </div>
                                                </div>

                                                {/* Content Details */}
                                                <div className="p-6 relative bg-white">
                                                    <h3 className="text-2xl font-black text-gray-900 mb-1">{athlete.name}</h3>

                                                    {/* New Detailed Category Info */}
                                                    <p className="text-sm font-medium text-[#8a0122] mb-4 uppercase tracking-wide flex items-center gap-2">
                                                        <Medal size={16} />
                                                        {athlete.category_details}
                                                    </p>

                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-white p-2 rounded-lg shadow-sm text-[#8a0122]">
                                                            <Timer size={20} />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Finish Time</p>
                                                            <p className="font-mono font-bold text-lg text-gray-800">{athlete.time}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Motivational / Join Section */}
            <section className="py-24 px-4 bg-gradient-to-b from-black via-[#5c0016] to-[#8a0122] text-white text-center relative overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Star className="w-16 h-16 text-[#8a0122] mx-auto mb-6" fill="currentColor" />
                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">
                            Your Name Could Be <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#8a0122]">Next On The Wall</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            At Hyfit, we don't just train; we build legends. Every drop of sweat brings you closer to the podium.
                            Are you ready to unleash your inner athlete?
                        </p>
                        <button className="bg-white text-black hover:bg-[#8a0122] hover:text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(138,1,34,0.6)]">
                            Start Your Journey
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section - 3D Infinite Carousel */}
            <section className="py-24 bg-black overflow-hidden relative border-t border-gray-900 w-full">
                <div className="text-center mb-16 relative z-10 px-4">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mb-2">
                        Captured <span className="text-[#8a0122]">Moments</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Witness the intensity, the struggle, and the triumph.</p>
                </div>

                <div className="relative w-full h-[600px] flex items-center justify-center">
                    <AnimatePresence initial={false}>
                        {getVisibleItems().map((item: any) => (
                            <motion.div
                                key={item.uniqueId} // Stable key for smooth position transition
                                layout
                                initial={{
                                    opacity: 0,
                                    y: -100, // Enters from top
                                    scale: 0.8
                                }}
                                animate={{
                                    opacity: Math.abs(item.offset) >= 3 ? 0 : 1, // Hide items beyond +/- 2 logic
                                    x: item.offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 70 : 210), // Tighter spacing for overlap
                                    y: 0, // Keep vertically centered
                                    scale: Math.max(0, 1.1 - Math.abs(item.offset) * 0.2), // Progressive scaling: 1.1 -> 0.9 -> 0.7
                                    zIndex: 50 - Math.abs(item.offset), // Stacking order
                                    rotateY: item.offset * -10 // Reduced rotation for cleaner look
                                }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 20,
                                    mass: 1.2
                                }}
                                className="absolute w-[280px] h-[420px] md:w-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 cursor-pointer"
                                style={{
                                    left: '50%',
                                    marginLeft: typeof window !== 'undefined' && window.innerWidth < 768 ? -140 : -200,
                                }}
                                onClick={() => {
                                    if (item.offset === 0) return;
                                    setGalleryIndex((prev) => (prev + item.offset + galleryImages.length) % galleryImages.length);
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-all duration-300" // No grayscale
                                />
                                <div className={`absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${item.offset === 0 ? 'opacity-100' : 'opacity-0'}`}>
                                    <h3 className="text-white font-black text-3xl uppercase tracking-wider drop-shadow-md mb-1">{item.name}</h3>
                                    {(item.title || item.category) && (
                                        <p className="text-[#8a0122] font-bold uppercase tracking-widest text-sm">
                                            {item.title || item.category}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex justify-center items-center gap-8 mt-8 relative z-20">
                    <button
                        onClick={prevSlide}
                        className="w-16 h-16 rounded-full border border-gray-700 bg-black/50 hover:bg-[#8a0122] hover:border-[#8a0122] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md group"
                    >
                        <ArrowLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-16 h-16 rounded-full border border-gray-700 bg-black/50 hover:bg-[#8a0122] hover:border-[#8a0122] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md group"
                    >
                        <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>
        </main>
    );
}
