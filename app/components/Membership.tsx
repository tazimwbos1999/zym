
'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Check, Clock, Calendar, Users, Trophy, Phone, ChevronRight, Instagram, Twitter, Linkedin } from 'lucide-react';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function MembershipPage() {
    const testimonials = [
        {
            name: "Aryan Sharma",
            role: "Member since 2023",
            quote: "Hiking has become my meditation. The fresh air and feeling of connectedness to nature is so calming. It's helped me build strength I never thought possible.",
            stars: 5,
            img: "/trainer-thomas.png"
        },
        {
            name: "Priya Patel",
            role: "Member since 2024",
            quote: "The flexible PT schedules saved my fitness journey. I can train before work and still have energy for the day. The trainers truly care about your progress.",
            stars: 5,
            img: "/trainer-thomas.png"
        },
        {
            name: "Rohan Verma",
            role: "Member since 2022",
            quote: "Zymnastic classes are intense but incredibly fun. The community vibe keeps me coming back every single day. Highly recommended!",
            stars: 5,
            img: "/trainer-thomas.png"
        },
        // Only three testimonials kept as requested
    ];
    const [activePlan, setActivePlan] = React.useState<'pt' | 'zymnastic'>('zymnastic');

    return (
        <>
            <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-red-600 selection:text-white">

                {/* 1. Hero Section - Full Screen */}
                <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/gym-hero.png"
                            alt="Gym Background"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-[1]" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6 text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
                                Choose the Perfect Membership <br className="hidden md:block" />
                                for Your Fitness Journey
                            </h1>
                            <p className="text-lg md:text-2xl text-neutral-400 mb-10 max-w-3xl mx-auto font-normal">
                                Flexible plans, expert trainers, and programs designed for every fitness goal.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#plans" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                                    View Plans
                                </a>
                                <a href="#contact" className="px-8 py-4 border border-neutral-600 hover:border-white text-white text-lg font-semibold rounded-full transition-all hover:bg-white/5">
                                    Book a Free Demo
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. Membership Plans Section */}
                <section id="plans" className="py-20 md:py-32 bg-black relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/gym-plans.png"
                            alt="Gym Weights"
                            fill
                            className="object-cover object-center opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black z-[1]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Find Your <span className="text-red-600">Perfect</span> Plan</h2>
                            <p className="text-neutral-400">Select the plan that suits your goals.</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* Plan 1: Personal Training */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                onClick={() => setActivePlan('pt')}
                                className={`cursor-pointer p-1 rounded-2xl transition-all duration-300 ${activePlan === 'pt'
                                    ? 'bg-gradient-to-b from-red-600 to-red-900 shadow-[0_0_50px_rgba(220,38,38,0.3)] scale-[1.02]'
                                    : 'bg-neutral-800 hover:bg-neutral-700'
                                    }`}
                            >
                                <div className="bg-neutral-900 h-full rounded-2xl p-8 md:p-12 border border-neutral-800 flex flex-col pt-10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Users size={120} />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 text-white">Personal Training (PT)</h3>
                                    <p className="text-neutral-400 mb-6 font-medium">One-on-one sessions for maximum results.</p>

                                    <div className="mb-8">
                                        <span className="text-4xl font-bold text-white">₹30,000</span>
                                        <span className="text-neutral-500 ml-2">/ month</span>
                                        <div className="text-sm text-neutral-500 mt-1">Includes diet & performance tracking</div>
                                    </div>

                                    <ul className="space-y-4 mb-10 flex-grow">
                                        {[
                                            "1-on-1 Personalized Coaching",
                                            "Customized Diet & Nutrition Plan",
                                            "Weekly Progress Monitoring",
                                            "Advanced Technique Correction",
                                            "Flexible Scheduling"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <Check className="text-red-500 mr-3 mt-1 flex-shrink-0" size={18} />
                                                <span className="text-neutral-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 font-bold rounded-lg transition-colors ${activePlan === 'pt' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-white text-black hover:bg-neutral-200'}`}>
                                        Join Personal Training
                                    </button>
                                </div>
                            </motion.div>

                            {/* Plan 2: Zymnastic */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                onClick={() => setActivePlan('zymnastic')}
                                className={`cursor-pointer p-1 rounded-2xl transition-all duration-300 ${activePlan === 'zymnastic'
                                    ? 'bg-gradient-to-b from-red-600 to-pink-900 shadow-[0_0_50px_rgba(220,38,38,0.3)] scale-[1.02]'
                                    : 'bg-neutral-800 hover:bg-neutral-700'
                                    }`}
                            >
                                <div className="bg-neutral-900 h-full rounded-2xl p-8 md:p-12 border border-neutral-800 flex flex-col pt-10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Trophy size={120} />
                                    </div>
                                    <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                        POPULAR
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 text-white">Zymnastic Program</h3>
                                    <p className="text-neutral-400 mb-6 font-medium">Functional training & movements.</p>

                                    <div className="mb-8 ">
                                        <span className="text-4xl font-bold text-white">₹8,000</span>
                                        <span className="text-neutral-500 ml-2">/ month</span>
                                        <div className="text-sm text-neutral-500 mt-1">Group energy, individual focus</div>
                                    </div>

                                    <ul className="space-y-4 mb-10 flex-grow">
                                        {[
                                            "Functional Body Movements",
                                            "High Energy Group Sessions",
                                            "Strength & Flexibility Focus",
                                            "Beginner to Advanced Levels",
                                            "Community Challenges"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <Check className="text-red-500 mr-3 mt-1 flex-shrink-0" size={18} />
                                                <span className="text-neutral-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 font-bold rounded-lg transition-colors ${activePlan === 'zymnastic' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-white text-black hover:bg-neutral-200'}`}>
                                        Join Zymnastic
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 4. Energizing Exercise Program */}
                <section className="py-24 bg-black overflow-hidden relative">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            {/* Text Content */}
                            <div className="lg:w-1/2">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                >
                                    <div className="inline-block px-4 py-1 mb-6 border border-red-600/30 rounded-full bg-red-600/10 text-red-500 font-semibold text-sm tracking-wide uppercase">
                                        Why Choose Us
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                        Energizing <span className="text-red-600">Exercise</span> Program <br />
                                        for Both <span className="text-red-600">Body</span> and Mind
                                    </h2>
                                    <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                        Many people benefit from customized exercise regimens created by general trainers or fitness experts to target particular fitness objectives, such as weight loss, muscle gain, or or enhanced athletic performance. The flexibility to choose is offered by gym's listings of routines that let people personalize their regiments.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                        {[
                                            "Community & Group Exercise",
                                            "Group Fitness and Community",
                                            "Impact on Mental Health",
                                            "Group Fitness and Community",
                                            "Variety in Exercise",
                                            "Group Fitness and Community"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-red-600/30 transition-colors">
                                                <Check size={16} className="text-red-500" />
                                                <span className="text-neutral-300 text-sm font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-red-900/20">
                                        LEARN MORE
                                    </button>
                                </motion.div>
                            </div>

                            {/* Image Collage */}
                            <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative z-10"
                                >
                                    <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden border border-neutral-800">
                                        <Image
                                            src="/exercise-program.png"
                                            alt="Exercise Program"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    </div>
                                    {/* Floating Stats Card */}
                                    <div className="absolute -bottom-10 -left-10 bg-neutral-900 p-6 rounded-2xl border border-neutral-800 shadow-xl hidden md:block">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="bg-red-600 p-3 rounded-full text-white">
                                                <Users size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold">500+</h4>
                                                <p className="text-neutral-400 text-sm">Happy Members</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Meet Our Trainers */}
                <section className="py-24 bg-neutral-950 relative">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-16"
                        >
                            <div className="inline-block px-4 py-1 mb-6 border border-red-600/30 rounded-full bg-red-600/10 text-red-500 font-semibold text-sm tracking-wide uppercase">
                                Our Trainers
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our <span className="text-red-600">Proficient</span> Trainer</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { name: "Vikram Singh", role: "Biometric Trainer", img: "/trainer-thomas.png" }, // Reusing generated image
                                { name: "Anjali Gupta", role: "Gym Trainer", img: "/trainer-thomas.png" }, // Placeholder styling
                                { name: "Rahul Khanna", role: "Gym Trainer", img: "/trainer-thomas.png", active: true }, // Placeholder
                                { name: "Neha Reddy", role: "Exercise Trainer", img: "/trainer-thomas.png" }  // Placeholder
                            ].map((trainer, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    className="group flex flex-col items-center"
                                >
                                    <div className="relative w-48 h-48 rounded-full mb-6 p-1 bg-neutral-800 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 transition-all duration-300">
                                        <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-neutral-900 text-neutral-200">
                                            <Image
                                                src={trainer.img}
                                                alt={trainer.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold mb-1">{trainer.name}</h4>
                                    <p className="text-neutral-500 text-sm mb-4">{trainer.role}</p>
                                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                        <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-red-600 hover:text-white transition-colors text-neutral-400"><Instagram size={16} /></a>
                                        <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-red-600 hover:text-white transition-colors text-neutral-400"><Twitter size={16} /></a>
                                        <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-red-600 hover:text-white transition-colors text-neutral-400"><Linkedin size={16} /></a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* 6. What Our Clients Say */}
                <section className="py-24 bg-neutral-950 relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/services_bg.jpg"
                            alt="Testimonials Background"
                            fill
                            className="object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/40 to-neutral-950 z-[1]" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-16"
                        >
                            <div className="inline-block px-4 py-1 mb-6 border border-red-600/30 rounded-full bg-red-600/10 text-red-500 font-semibold text-sm tracking-wide uppercase">
                                Testimonials
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our <span className="text-red-600">Members</span> Say?</h2>
                        </motion.div>

                        <div className="max-w-8xl mx-auto md:px-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {testimonials.map((client, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="bg-neutral-900/50 backdrop-blur-md p-8 rounded-2xl border border-neutral-800 hover:border-red-600/30 transition-all duration-300 flex flex-col h-full min-h-[350px]"
                                    >
                                        <div className="flex gap-1 text-yellow-500 mb-6">
                                            {[...Array(client.stars)].map((_, i) => <span key={i}>★</span>)}
                                        </div>

                                        <p className="text-neutral-300 text-lg italic mb-8 flex-grow leading-relaxed">
                                            "{client.quote}"
                                        </p>

                                        <div className="flex items-center gap-4 mt-auto">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-700">
                                                <Image
                                                    src={client.img}
                                                    alt={client.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold">{client.name}</h4>
                                                <p className="text-neutral-500 text-xs uppercase tracking-wider">{client.role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-neutral-950 relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/gym-time.png"
                            alt="Cardio Area"
                            fill
                            className="object-cover object-center opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/40 to-neutral-950 z-[1]" />
                    </div>

                    {/* Decorative Elements - preserved but slightly adjusted z-index */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/5 blur-[100px] rounded-full pointer-events-none z-[2]" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none z-[2]" />

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-20"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Schedule Your Success</h2>
                            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                                Choose a time that works best for you. Flexibility ensures consistency.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    title: "Morning Power",
                                    time: "6:00 AM - 10:00 AM",
                                    icon: <Clock className="text-white" size={28} />,
                                    desc: "Kickstart your metabolism and energize your day.",
                                    gradient: "from-orange-500 to-red-600"
                                },
                                {
                                    title: "Midday Grind",
                                    time: "12:00 PM - 3:00 PM",
                                    icon: <Clock className="text-white" size={28} />,
                                    desc: "Perfect for a lunch break reset and stress relief.",
                                    gradient: "from-blue-500 to-indigo-600"
                                },
                                {
                                    title: "Evening Wind Down",
                                    time: "5:00 PM - 9:00 PM",
                                    icon: <Clock className="text-white" size={28} />,
                                    desc: "Decompress after work and build strength.",
                                    gradient: "from-purple-500 to-pink-600"
                                }
                            ].map((slot, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-8 rounded-3xl overflow-hidden hover:border-neutral-600 transition-all duration-300"
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${slot.gradient} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`} />

                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${slot.gradient} flex items-center justify-center mb-6 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300`}>
                                        {slot.icon}
                                    </div>

                                    <h4 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{slot.title}</h4>
                                    <p className="text-red-500 font-medium mb-4">{slot.time}</p>
                                    <p className="text-neutral-400 leading-relaxed mb-6">
                                        {slot.desc}
                                    </p>

                                    <div className="flex items-center text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
                                        Book This Slot <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <div className="inline-flex items-center gap-8 px-6 py-3 bg-neutral-900 rounded-full border border-neutral-800">
                                <span className="flex items-center gap-2 text-neutral-300 text-sm"><Check size={16} className="text-red-500" /> Free Rescheduling</span>
                                <span className="w-px h-4 bg-neutral-700"></span>
                                <span className="flex items-center gap-2 text-neutral-300 text-sm"><Check size={16} className="text-red-500" /> Cancel Anytime</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Includes & Benefits Split Section */}
                <section className="py-20 bg-black overflow-hidden relative">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/gym-amenities.png"
                            alt="Gym Amenities"
                            fill
                            className="object-cover object-center opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black z-[1]" />
                    </div>

                    <div className="absolute top-0 right-0 w-1/2 h-full bg-red-900/5 blur-3xl rounded-full pointer-events-none z-[2]" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-16 items-start">

                            {/* Includes */}
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-red-600 rounded-sm"></span>
                                    Membership Includes
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Full gym access", "Modern equipment",
                                        "Locker & shower facilities", "Group classes (Yoga/Cardio)",
                                        "Fitness assessment", "Progress tracking"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                                            <Check className="text-red-500 mr-3" size={20} />
                                            <span className="font-medium text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-white rounded-sm"></span>
                                    Additional Benefits
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        { text: "Diet & Nutrition Guidance", sub: "Personalized meal plans" },
                                        { text: "Personal Workout Plan", sub: "Tailored to your body type" },
                                        { text: "Trainer Support & Follow-ups", sub: "We keep you accountable" },
                                        { text: "Special Discounts", sub: "On long-term plans" }
                                    ].map((benefit, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="mt-1 bg-red-600/20 p-2 rounded-full text-red-500">
                                                <Calendar size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">{benefit.text}</h4>
                                                <p className="text-neutral-500 text-sm">{benefit.sub}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-8 p-4 bg-neutral-800 rounded-xl border border-red-900/30 flex items-center justify-between">
                                    <span className="text-red-400 font-semibold">Limited Time Offer: Free Trial Session</span>
                                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">CLAIM NOW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Call to Action */}
                <section id="contact" className="py-24 bg-gradient-to-t from-red-900 to-black text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring" }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic">
                                Start Your Transformation
                            </h2>
                            <p className="text-xl text-neutral-200 mb-10 max-w-2xl mx-auto">
                                Don't wait for tomorrow. Your fitness journey begins with a single step today.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <button className="px-10 py-5 bg-white text-red-900 font-bold text-xl rounded-full shadow-2xl hover:bg-neutral-200 transition-all flex items-center gap-3">
                                    <Phone size={24} />
                                    Book a Free Demo
                                </button>
                                <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white/10 transition-all">
                                    Contact Us
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}
