'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar,
    Clock,
    Dumbbell,
    Zap,
    Target,
    Flame,
    ChevronRight,
    ChevronLeft,
    Info
} from 'lucide-react';

const scheduleData = [
    {
        day: "Monday",
        focus: "Strength & Power",
        sessions: [
            { time: "06:00 AM", title: "Elite Strength", type: "Weightlifting", coach: "Sam", intensity: "High" },
            { time: "08:00 AM", title: "Hyrox Pro", type: "Conditioning", coach: "Bijen", intensity: "Extreme" },
            { time: "05:00 PM", title: "Functional Foundation", type: "Strength", coach: "Vinay", intensity: "Medium" },
            { time: "07:00 PM", title: "Metcon Madness", type: "HIIT", coach: "Mahi", intensity: "High" },
        ]
    },
    {
        day: "Tuesday",
        focus: "Endurance & Stamina",
        sessions: [
            { time: "06:00 AM", title: "Engine Room", type: "Cardio", coach: "Ajay", intensity: "High" },
            { time: "08:00 AM", title: "CrossFit Skill", type: "Skill Work", coach: "Imtiyaz", intensity: "Medium" },
            { time: "05:00 PM", title: "Row & Ride", type: "Endurance", coach: "Deekshith", intensity: "Extreme" },
            { time: "07:00 PM", title: "Core Blast", type: "Abs/Core", coach: "Febi", intensity: "Medium" },
        ]
    },
    {
        day: "Wednesday",
        focus: "Hypertrophy & Flow",
        sessions: [
            { time: "06:00 AM", title: "Upper Body Hyper", type: "Bodybuilding", coach: "Sam", intensity: "High" },
            { time: "08:00 AM", title: "Mobility Flow", type: "Recovery", coach: "Niranjana", intensity: "Low" },
            { time: "05:00 PM", title: "Glute Lab", type: "Strength", coach: "Vinay", intensity: "Medium" },
            { time: "07:00 PM", title: "Strictly Strength", type: "Lifting", coach: "Mahi", intensity: "High" },
        ]
    },
    {
        day: "Thursday",
        focus: "Active Recovery",
        sessions: [
            { time: "07:00 AM", title: "Yoga for Athletes", type: "Mindfulness", coach: "Niranjana", intensity: "Low" },
            { time: "09:00 AM", title: "Swimming/Active", type: "Off-site", coach: "Team", intensity: "Low" },
            { time: "06:00 PM", title: "Technique Workshop", type: "Educational", coach: "Ajay", intensity: "Medium" },
        ]
    },
    {
        day: "Friday",
        focus: "Friday Night Lights",
        sessions: [
            { time: "06:00 AM", title: "Full Body Blitz", type: "HIIT", coach: "Sam", intensity: "High" },
            { time: "08:00 AM", title: "Olympic Lifting", type: "Weightlifting", coach: "Imtiyaz", intensity: "Extreme" },
            { time: "05:00 PM", title: "Community WOD", type: "CrossFit", coach: "Team Hyfit", intensity: "Extreme" },
            { time: "07:00 PM", title: "Post-WOD Stretch", type: "Recovery", coach: "Febi", intensity: "Low" },
        ]
    },
    {
        day: "Saturday",
        focus: "Team Challenges",
        sessions: [
            { time: "08:00 AM", title: "Buddy WOD", type: "Team Work", coach: "All Coaches", intensity: "High" },
            { time: "10:00 AM", title: "Hyfit Games Prep", type: "Competition", coach: "Bijen", intensity: "Extreme" },
        ]
    },
    {
        day: "Sunday",
        focus: "Rest & Prep",
        sessions: [
            { time: "09:00 AM", title: "Open Gym", type: "Self Training", coach: "On Staff", intensity: "Varied" },
        ]
    }
];

export default function TrainingCalendar() {
    const [activeDayIdx, setActiveDayIdx] = useState(new Date().getDay() === 0 ? 6 : new Date().getDay() - 1);

    const getTypeColor = (type: string) => {
        const t = type.toLowerCase();
        if (t.includes('strength') || t.includes('lifting')) return 'text-blue-400';
        if (t.includes('cardio') || t.includes('hiit') || t.includes('conditioning')) return 'text-orange-400';
        if (t.includes('recovery') || t.includes('yoga')) return 'text-emerald-400';
        return 'text-white';
    };

    const currentDay = scheduleData[activeDayIdx];

    return (
        <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#8a0122] selection:text-white font-sans">

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/gym-plans.png"
                            alt="Training Calendar"
                            className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[#8a0122] font-black uppercase tracking-[0.3em] text-sm mb-4 block"
                        >
                            Train Like An Elite
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tighter"
                        >
                            TRAINING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a0122] to-white">CALENDAR</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 max-w-2xl mx-auto text-lg font-light"
                        >
                            Our weekly schedule is designed by world-class coaches to ensure optimal performance, growth, and recovery. Find your slot and push your limits.
                        </motion.p>
                    </div>
                </section>

                {/* Calendar Navigation */}
                <section className="py-10 border-b border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="flex overflow-x-auto no-scrollbar gap-2 md:gap-4 justify-between md:justify-center py-4">
                            {scheduleData.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveDayIdx(idx)}
                                    className={`flex-shrink-0 px-6 py-4 rounded-2xl transition-all flex flex-col items-center border ${activeDayIdx === idx
                                        ? 'bg-[#8a0122] border-[#8a0122] shadow-[0_10px_30px_rgba(138,1,34,0.3)]'
                                        : 'bg-white/5 border-white/10 hover:border-white/20'
                                        }`}
                                >
                                    <span className={`text-[10px] uppercase font-black tracking-widest mb-1 ${activeDayIdx === idx ? 'text-white/80' : 'text-gray-500'}`}>
                                        {item.day.slice(0, 3)}
                                    </span>
                                    <span className="text-lg font-black">{item.day}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Schedule Display */}
                <section className="py-20 relative min-h-[600px]">
                    {/* Decorative side text */}
                    <div className="hidden xl:block absolute left-10 top-1/2 -rotate-90 origin-left text-[150px] font-black text-white/[0.02] select-none uppercase">
                        {currentDay.day}
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Day Focus Header */}
                            <motion.div
                                key={currentDay.day + "focus"}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 p-8 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10"
                            >
                                <div>
                                    <h2 className="text-3xl font-black uppercase tracking-tight mb-2">
                                        {currentDay.day}<span className="text-[#8a0122]">'S</span> FOCUS
                                    </h2>
                                    <p className="text-xl text-gray-400 font-light">
                                        {currentDay.focus}
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex flex-col items-center px-6 py-3 bg-black/40 rounded-2xl border border-white/5">
                                        <span className="text-[#8a0122] font-black text-2xl">{currentDay.sessions.length}</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Sessions</span>
                                    </div>
                                    <div className="flex flex-col items-center px-6 py-3 bg-black/40 rounded-2xl border border-white/5">
                                        <Target size={24} className="text-[#8a0122] mb-1" />
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Goal Orient</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Sessions List */}
                            <div className="space-y-6">
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={activeDayIdx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        {currentDay.sessions.map((session, sIdx) => (
                                            <div
                                                key={sIdx}
                                                className="group relative flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-[#8a0122]/30 transition-all"
                                            >
                                                {/* Time Column */}
                                                <div className="flex items-center md:flex-col md:items-start md:min-w-[140px] gap-3">
                                                    <Clock size={16} className="text-[#8a0122] md:hidden" />
                                                    <span className="text-2xl font-black tracking-tighter text-white">
                                                        {session.time.split(' ')[0]}
                                                    </span>
                                                    <span className="text-xs font-black text-gray-500 uppercase tracking-widest ml-2 md:ml-0 md:mt-[-4px]">
                                                        {session.time.split(' ')[1]}
                                                    </span>
                                                </div>

                                                {/* Title & Type Column */}
                                                <div className="flex-grow">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-white/5 rounded-full border border-white/10 ${getTypeColor(session.type)}`}>
                                                            {session.type}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-3xl font-black uppercase tracking-tight group-hover:text-[#8a0122] transition-colors">
                                                        {session.title}
                                                    </h3>
                                                </div>

                                                {/* Coach & Intensity Column */}
                                                <div className="flex items-center justify-between md:flex-row gap-8 pt-6 md:pt-0 border-t md:border-t-0 border-white/5">
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black mb-1">Coach</span>
                                                        <span className="font-bold text-gray-200 uppercase tracking-wide font-black">Coach {session.coach}</span>
                                                    </div>
                                                    <div className="flex flex-col items-end">
                                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black mb-1">Intensity</span>
                                                        <div className="flex gap-1 mt-1">
                                                            {[...Array(3)].map((_, i) => (
                                                                <div
                                                                    key={i}
                                                                    className={`w-4 h-1 rounded-full ${session.intensity === 'Extreme' ? 'bg-[#8a0122]' :
                                                                        session.intensity === 'High' ? (i < 2 ? 'bg-[#8a0122]' : 'bg-white/10') :
                                                                            session.intensity === 'Medium' ? (i < 1 ? 'bg-[#8a0122]' : 'bg-white/10') :
                                                                                'bg-white/10'
                                                                        }`}
                                                                />
                                                            ))}
                                                        </div>
                                                        <span className={`text-[10px] font-black uppercase mt-2 tracking-widest ${session.intensity === 'Extreme' ? 'text-[#8a0122]' : 'text-gray-400'
                                                            }`}>
                                                            {session.intensity}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 bg-black relative border-t border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-to-r from-black via-[#8a0122]/10 to-black p-12 md:p-20 rounded-[3rem] border border-white/10 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#8a0122_0%,_transparent_70%)] opacity-10 animate-pulse" />
                            <div className="relative z-10">
                                <Flame size={48} className="text-[#8a0122] mx-auto mb-8" />
                                <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
                                    READY TO JOIN <br />
                                    <span className="text-white">THE SQUAD?</span>
                                </h2>
                                <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
                                    Don't just watch from the sidelines. Book your slot now and start your transformation with the HYFIT community.
                                </p>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <a href="/membership" className="bg-[#8a0122] hover:bg-[#8a0122]/90 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(138,1,34,0.4)]">
                                        Get Membership
                                    </a>
                                    <a href="https://wa.me/917019189128" target="_blank" className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest transition-all border border-white/10">
                                        Book Trial
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


            {/* Styles for hiding scrollbar */}
            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}
