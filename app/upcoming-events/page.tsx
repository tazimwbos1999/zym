'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Filter, Search, ChevronDown, Mail, Trophy, Users, Camera, X, Play } from 'lucide-react';

// --- Mock Data ---
const EVENTS = [
    {
        id: 1,
        title: "Hyfit Summer Games 2026",
        date: "15 Aug 2026",
        location: "Mumbai, India",
        category: "Endurance",
        image: "/summer_games_thumb.png",
        status: "upcoming",
        price: "₹1499",
        organiser: "Hyfit Official"
    },
    {
        id: 2,
        title: "City Marathon Challenge",
        date: "22 Sep 2026",
        location: "Delhi, India",
        category: "Running",
        image: "/city_marathon_thumb.png",
        status: "upcoming",
        price: "₹999",
        organiser: "Partners"
    },
    {
        id: 3,
        title: "Strength Wars: Regional",
        date: "10 Oct 2026",
        location: "Bangalore, India",
        category: "Strength",
        image: "/strength_wars_thumb.png",
        status: "upcoming",
        price: "₹1999",
        organiser: "Hyfit Official"
    },
    {
        id: 4,
        title: "Winter Hyfit Championship",
        date: "12 Dec 2025",
        location: "Pune, India",
        category: "Mixed",
        image: "/winter_championship_thumb.png",
        status: "past",
        price: "Closed",
        organiser: "Hyfit Official"
    },
    {
        id: 5,
        title: "Monsoon Mud Run",
        date: "10 Jul 2025",
        location: "Goa, India",
        category: "Obstacle",
        image: "/mud_run_thumb.png",
        status: "past",
        price: "Closed",
        organiser: "Partners"
    }
];

const LOCATIONS = ["All Locations", "Mumbai", "Delhi", "Bangalore", "Pune", "Goa"];
const CATEGORIES = ["All Categories", "Endurance", "Strength", "Running", "Mixed", "Obstacle"];

export default function UpcomingEventsPage() {
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
    const [selectedLocation, setSelectedLocation] = useState("All Locations");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [selectedOrganiser, setSelectedOrganiser] = useState("All Organisers");
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const activeFilterCount = [
        selectedLocation !== "All Locations",
        selectedCategory !== "All Categories",
        selectedOrganiser !== "All Organisers"
    ].filter(Boolean).length;

    const clearAllFilters = () => {
        setSelectedLocation("All Locations");
        setSelectedCategory("All Categories");
        setSelectedOrganiser("All Organisers");
        setActiveDropdown(null);
    };

    const filteredEvents = EVENTS.filter(event =>
        event.status === activeTab &&
        (selectedLocation === "All Locations" || event.location.includes(selectedLocation)) &&
        (selectedCategory === "All Categories" || event.category === selectedCategory) &&
        (selectedOrganiser === "All Organisers" || event.organiser === selectedOrganiser)
    );

    return (
        <main className="bg-white min-h-screen text-gray-900 overflow-x-hidden">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[80vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero_event_bg.png"
                        alt="Events Hero"
                        layout="fill"
                        objectFit="cover"
                        className="brightness-[0.4] scale-105 animate-slow-zoom"
                        onError={(e) => { e.currentTarget.src = "/ERG_race_cover.jpg" }} // Fallback
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 border border-[#8a0122] text-[#8a0122] bg-black/50 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-widest mb-4"
                    >
                        Ready to Compete?
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none"
                    >
                        Race. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a0122] to-red-600">Conquer.</span><br /> Repeat.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto font-light mb-8"
                    >
                        Join the ultimate fitness challenges across the country. Prove your mettle.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="px-8 py-4 bg-[#8a0122] text-white rounded-full font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-[#8a0122] transition-all duration-300 shadow-[0_0_20px_rgba(138,1,34,0.4)] hover:shadow-[0_0_30px_rgba(138,1,34,0.6)]">
                            Explore Events
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            Subscribe For Updates
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* --- EVENTS & FILTER SECTION --- */}
            <section className="py-20 bg-black text-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider">
                            Fitness Events <span className="text-[#8a0122]">& Challenges</span>
                        </h2>
                    </div>
                    {/* Filter Bar */}
                    <div className="flex flex-col items-center justify-center gap-8 mb-16">
                        {/* Tabs (Pill) */}
                        <div className="bg-gray-800/80 p-2 rounded-full inline-flex items-center gap-2 sm:gap-4 backdrop-blur-sm border border-gray-700 shadow-2xl">
                            <button
                                onClick={() => setActiveTab('upcoming')}
                                className={`relative px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-xl font-bold uppercase tracking-wider transition-all duration-300 w-full md:w-auto overflow-hidden ${activeTab === 'upcoming'
                                    ? 'bg-[#8a0122] text-white shadow-lg'
                                    : 'bg-transparent text-gray-300 hover:text-white hover:bg-gray-700/50'
                                    }`}
                            >
                                <span className="relative z-10">
                                    Upcoming Events
                                </span>
                            </button>
                            <button
                                onClick={() => setActiveTab('past')}
                                className={`relative px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-xl font-bold uppercase tracking-wider transition-all duration-300 w-full md:w-auto overflow-hidden ${activeTab === 'past'
                                    ? 'bg-[#8a0122] text-white shadow-lg'
                                    : 'bg-transparent text-gray-300 hover:text-white hover:bg-gray-700/50'
                                    }`}
                            >
                                <span className="relative z-10">
                                    Past Events
                                </span>
                            </button>
                        </div>

                        {/* Dropdowns */}
                        <div className="flex flex-wrap items-center justify-center gap-4 w-full relative z-20">
                            <div className="flex items-center gap-2 text-gray-500 mr-2">
                                <div className="relative">
                                    <Filter size={20} />
                                    {activeFilterCount > 0 && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-2 -right-2 bg-[#8a0122] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
                                        >
                                            {activeFilterCount}
                                        </motion.div>
                                    )}
                                </div>
                                <span className="uppercase font-bold tracking-wider text-sm">Filters</span>

                                <AnimatePresence>
                                    {activeFilterCount > 0 && (
                                        <motion.button
                                            initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                                            animate={{ opacity: 1, width: 'auto', marginLeft: 8 }}
                                            exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                                            onClick={clearAllFilters}
                                            className="flex items-center gap-1 text-xs text-[#8a0122] font-bold hover:underline whitespace-nowrap overflow-hidden"
                                        >
                                            <X size={12} /> Clear
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </div>

                            {[
                                { label: "Location", options: LOCATIONS, value: selectedLocation, setValue: setSelectedLocation },
                                { label: "Category", options: CATEGORIES, value: selectedCategory, setValue: setSelectedCategory },
                                { label: "Organisers", options: ["All Organisers", "Hyfit Official", "Partners"], value: selectedOrganiser, setValue: setSelectedOrganiser }
                            ].map((filter, idx) => (
                                <div key={idx} className="relative">
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === filter.label ? null : filter.label)}
                                        className={`flex items-center gap-3 bg-[#1e1e1e] border ${activeDropdown === filter.label ? 'border-[#8a0122] text-white' : 'border-gray-800 text-gray-300'} px-6 py-3 rounded-xl hover:border-[#8a0122] hover:text-white transition-all min-w-[200px] justify-between`}
                                    >
                                        <span className="text-sm font-medium">{filter.value}</span>
                                        <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === filter.label ? 'rotate-180 text-[#8a0122]' : 'text-gray-500'}`} />
                                    </button>

                                    {/* Dropdown Content */}
                                    <AnimatePresence>
                                        {activeDropdown === filter.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full mt-2 w-full bg-[#1e1e1e] border border-gray-800 rounded-xl shadow-2xl z-30 overflow-hidden"
                                            >
                                                {filter.options.map((opt) => (
                                                    <div
                                                        key={opt}
                                                        onClick={() => {
                                                            filter.setValue(opt);
                                                            setActiveDropdown(null);
                                                        }}
                                                        className={`px-4 py-3 text-sm cursor-pointer transition-colors border-b border-gray-800 last:border-0 ${filter.value === opt ? 'bg-[#8a0122]/10 text-[#8a0122] font-bold' : 'text-gray-400 hover:bg-[#8a0122] hover:text-white'}`}
                                                    >
                                                        {opt}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            {/* Overlay to close dropdown when clicking outside */}
                            {activeDropdown && (
                                <div className="fixed inset-0 z-10 bg-transparent" onClick={() => setActiveDropdown(null)} />
                            )}
                        </div>
                    </div>

                    {/* Events Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab + selectedLocation + selectedCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredEvents.length > 0 ? (
                                filteredEvents.map((event) => (
                                    <div key={event.id} className="group bg-[#1e1e1e] rounded-3xl overflow-hidden border border-gray-800 hover:border-[#8a0122]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,1,34,0.15)] flex flex-col">
                                        <div className="relative h-96 w-full overflow-hidden">
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 right-4 bg-[#8a0122] backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                                                {event.category}
                                            </div>
                                            <div className="absolute bottom-4 left-4 flex flex-col">
                                                <div className="bg-[#8a0122] text-white px-3 py-1 rounded-t-lg w-fit text-xs font-bold uppercase">
                                                    Date
                                                </div>
                                                <div className="bg-white text-black px-4 py-2 rounded-b-lg rounded-r-lg font-bold font-mono text-sm shadow-lg">
                                                    {event.date}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-[#8a0122] transition-colors">{event.title}</h3>
                                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                                                <MapPin size={16} />
                                                {event.location}
                                            </div>

                                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-800">
                                                <span className="text-xl font-bold text-white">{event.price}</span>
                                                <button className="flex items-center gap-2 text-[#8a0122] font-bold text-sm uppercase tracking-wider group/btn">
                                                    {event.status === 'upcoming' ? 'Register Now' : 'View Results'}
                                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-20">
                                    <div className="inline-block p-4 rounded-full bg-gray-800 text-gray-500 mb-4">
                                        <Search size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-300 mb-2">No Events Found</h3>
                                    <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* --- SECTION 3: FEATURES / WHY JOIN --- */}
            <section className="py-24 relative bg-[url('/city_marathon_thumb.png')] bg-fixed bg-cover bg-center">
                <div className="absolute inset-0 bg-black/70" /> {/* Dark Overlay */}

                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-16 tracking-tight">
                        Why We <span className="text-[#8a0122]">Run.</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Trophy, title: "Earn Glory", desc: "Compete against the best and earn your place on the podium. Medals, prizes, and bragging rights await." },
                            { icon: Users, title: "Join The Community", desc: "Be part of a thriving community of athletes who push each other to be better every single day." },
                            { icon: Camera, title: "Create Memories", desc: "Professional photography and race-day experiences that you will cherish forever." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(138,1,34,0.3)] transition-all duration-300"
                            >
                                <div className="w-20 h-20 bg-[#8a0122] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#8a0122]/30 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 uppercase text-white">{item.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 4: SPOTLIGHT / VIDEO PLACEHOLDER --- */}
            <section className="py-24 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Abstract BG */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8a0122] opacity-20 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900 opacity-20 blur-[100px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block py-1 px-3 border border-[#8a0122] text-[#8a0122] bg-black/50 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-widest mb-4"
                        >
                            Featured Event
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
                            The Hyfit <br /> <span className="text-transparent bg-clip-text bg-gradient-to-tr from-white to-gray-400">Survival Challenge</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Our toughest obstacle course yet. 10 Kilometers. 25 Obstacles. Mud, sweat, and tears guaranteed. Are you tough enough to survive?
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-[#8a0122] text-white rounded-full font-bold uppercase tracking-wider hover:bg-[#a00129] transition-colors shadow-lg shadow-[#8a0122]/30">
                                Register Early Bird
                            </button>
                            <button onClick={() => window.open('https://www.youtube.com/watch?v=akpXPN0dTNE', '_blank')} className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                                <Play size={20} />
                                Watch Trailer
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl skew-y-3 border border-white/10 group">
                        <Image
                            src="/Bijen.jpeg" // Placeholder
                            alt="Featured Event"
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-105 transition-transform duration-700 contrast-125"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pl-1 cursor-pointer hover:scale-110 transition-transform">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 5: NEWSLETTER --- */}
            <section className="py-24 bg-gradient-to-b from-black via-[#5c0016] to-[#8a0122] text-white border-t border-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Mail className="w-12 h-12 text-[#8a0122] mx-auto mb-6" /> {/* Lighter red for visibility */}
                    <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-4">
                        Never Miss a Race
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Subscribe to our newsletter and get early access to event registrations, exclusive training tips, and community stories.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-4 rounded-full border border-gray-600 bg-white focus:outline-none focus:border-[#ff4d6d] focus:ring-2 focus:ring-[#ff4d6d]/20 text-black placeholder-gray-400 backdrop-blur-sm"
                        />
                        <button className="px-8 py-4 bg-white text-[#8a0122] rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors shadow-lg">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
