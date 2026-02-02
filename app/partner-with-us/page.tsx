'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from 'framer-motion';
import {
    Handshake,
    TrendingUp,
    Users,
    Trophy,
    Mail,
    Phone,
    CheckCircle2,
    Rocket
} from 'lucide-react';

const benefits = [
    {
        icon: <TrendingUp className="text-[#8a0122]" size={32} />,
        title: "Scale Your Business",
        description: "Leverage the Hyfit brand and operational expertise to grow your gym's revenue and footprint."
    },
    {
        icon: <Users className="text-[#8a0122]" size={32} />,
        title: "Access to Community",
        description: "Get immediate access to our massive community of fitness enthusiasts and athletes."
    },
    {
        icon: <Trophy className="text-[#8a0122]" size={32} />,
        title: "Proven Tech-Stack",
        description: "Use our advanced booking systems, member management, and performance tracking tools."
    },
    {
        icon: <Rocket className="text-[#8a0122]" size={32} />,
        title: "Marketing Support",
        description: "Complete 360-degree marketing support to ensure your facility is always buzzing with energy."
    }
];

const partnershipModels = [
    {
        title: "Gym Franchise",
        description: "Open a Hyfit branded gym and be part of the most premium fitness chain.",
        features: ["Brand Licensing", "Operational SOPs", "Staff Training", "Standard Equipment Setup"]
    },
    {
        title: "Corporate Wellness",
        description: "Partner with us to provide elite fitness solutions for your employees.",
        features: ["Custom Workouts", "Nutrition Seminars", "On-site Training", "Exclusive Discounts"]
    },
    {
        title: "Freelance Trainers",
        description: "Use our world-class facilities to train your clients with premium equipment.",
        features: ["Hourly Slots", "Flexible Scheduling", "Pro-Grade Equipment", "Athlete Networking"]
    }
];

// Animated stat that counts up when scrolled into view
function AnimatedStat({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
    const ref = useRef<HTMLElement | null>(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });
    const numeric = parseInt(String(value).replace(/[^\d]/g, ''), 10) || 0;
    const suffixMatch = String(value).match(/[^0-9,\.\s]+$/);
    const suffix = suffixMatch ? suffixMatch[0] : '';

    const motionVal = useMotionValue(0);
    const [display, setDisplay] = useState('0' + suffix);

    useEffect(() => {
        const unsubscribe = motionVal.on('change', (v) => {
            const rounded = Math.round(v).toLocaleString();
            setDisplay(rounded + suffix);
        });

        if (isInView) {
            animate(motionVal, numeric, { duration: 1.6, ease: 'easeOut' });
        }

        return () => unsubscribe();
    }, [isInView, numeric, suffix, motionVal]);

    return (
        <motion.div
            ref={ref as any}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay }}
        >
            <h3 className="text-4xl md:text-6xl font-black text-[#8a0122] mb-2">{display}</h3>
            <p className="text-gray-400 uppercase text-xs font-bold tracking-[0.2em]">{label}</p>
        </motion.div>
    );
}

export default function PartnerWithUs() {
    const modelsSectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: modelsSectionRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#8a0122] selection:text-white">

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/gym-hero.png"
                            alt="Gym Partnership"
                            className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <span className="text-[#8a0122] font-bold uppercase tracking-[0.3em] mb-4 block">Collaboration</span>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                                GROW WITH <br />
                                <span className="text-[#8a0122]">HYFIT</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-xl">
                                Join India's most energetic fitness movement. Whether you own a gym or want to start one, let's redefine fitness together.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#inquiry-form" className="bg-[#8a0122] hover:bg-[#8a0122]/90 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105">
                                    Become a Partner
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-32 bg-black relative">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-24">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-black mb-6 uppercase"
                            >
                                Why <span className="text-[#8a0122]">Partner?</span>
                            </motion.h2>
                            <div className="w-24 h-2 bg-[#8a0122] mx-auto" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-[#8a0122]/50 transition-all group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8a0122]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="mb-8 p-5 bg-[#8a0122]/10 rounded-2xl w-fit group-hover:bg-[#8a0122] transition-all duration-500">
                                        {React.cloneElement(benefit.icon as React.ReactElement, {
                                            className: "group-hover:text-white group-hover:scale-110 transition-all"
                                        })}
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{benefit.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-light">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Models Section with Parallax */}
                <section ref={modelsSectionRef} className="relative py-40 overflow-hidden min-h-screen flex items-center">
                    {/* Parallax Background */}
                    <motion.div
                        style={{ y: yParallax }}
                        className="absolute inset-0 z-0 h-[140%] top-[-20%]"
                    >
                        <img
                            src="/gym-plans.png"
                            alt="Gym Background"
                            className="w-full h-full object-cover opacity-30 grayscale-[50%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black" />
                    </motion.div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-24">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-4xl md:text-6xl font-black mb-6 uppercase"
                            >
                                Partnership <span className="text-[#8a0122]">Models</span>
                            </motion.h2>
                            <p className="text-gray-400 text-lg uppercase tracking-widest">Scalable solutions for your vision</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {partnershipModels.map((model, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.8 }}
                                    className="relative p-10 rounded-[2.5rem] border border-white/10 bg-black/60 backdrop-blur-2xl hover:border-[#8a0122]/30 transition-all group"
                                >
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#8a0122]/10 blur-[50px] rounded-full group-hover:bg-[#8a0122]/20 transition-all" />
                                    <h3 className="text-2xl font-black mb-6 text-[#8a0122] uppercase">{model.title}</h3>
                                    <p className="text-gray-300 mb-10 font-light leading-relaxed">{model.description}</p>
                                    <ul className="space-y-5">
                                        {model.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center gap-4 group/item">
                                                <div className="p-1 bg-[#8a0122]/20 rounded-full group-hover/item:bg-[#8a0122] transition-colors">
                                                    <CheckCircle2 size={16} className="text-[#8a0122] group-hover/item:text-white" />
                                                </div>
                                                <span className="font-bold text-gray-200 uppercase text-xs tracking-wider">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact / Stats Section */}
                <section className="py-24 bg-black relative border-y border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                            {[
                                { label: "Active Members", value: "5000+" },
                                { label: "Expert Coaches", value: "50+" },
                                { label: "Growth YoY", value: "200%" },
                                { label: "Happy Partners", value: "15+" }
                            ].map((stat, i) => (
                                <AnimatedStat key={i} value={stat.value} label={stat.label} delay={i * 0.1} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Exclusive Events Section */}
                <section className="py-32 bg-black relative overflow-hidden">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[300px] bg-[#8a0122]/5 blur-[120px] rounded-full" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 text-left">
                                <span className="text-[#8a0122] font-bold uppercase tracking-widest text-sm mb-4 block">The Ecosystem</span>
                                <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight italic">
                                    NOT JUST A GYM, <br />
                                    <span className="text-[#8a0122]">A MOVEMENT</span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                                    Partners gain exclusive rights to host and participate in <span className="text-white font-bold italic underline decoration-[#8a0122]">HYFIT GAMES</span>—India's premier functional fitness competition. Our events drive massive footfall and viral social media presence to your facility.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {["Broadcasted Competitions", "National Athlete Network", "Brand Sponsorships", "Massive Social Reach"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <Trophy size={20} className="text-[#8a0122]" />
                                            <span className="text-gray-200 font-bold uppercase text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:w-1/3 relative group">
                                <div className="absolute -inset-4 bg-[#8a0122]/20 rounded-[1rem] blur-xl group-hover:bg-[#8a0122]/30 transition-all opacity-0 group-hover:opacity-100" />
                                <img
                                    src="/exercise-program.png"
                                    alt="Hyfit Games Event"
                                    className="rounded-[1rem] relative z-10 shadow-2xl transition-all duration-700"
                                />
                                <div className="absolute bottom-2 left-2 z-20">
                                    <div className="bg-[#8a0122] backdrop-blur-md p-2 rounded-xl border border-white/10">
                                        <p className="text-white font-black text-[12px] italic uppercase tracking-tighter">Hyfit Games 1.1</p>
                                        <p className="text-gray-400 text-[10px] tracking-widest uppercase">Official Partner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Onboarding Roadmap */}
                <section className="py-32 bg-black relative border-t border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">The Journey</h2>
                            <p className="text-gray-400">From first handshake to grand launch</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#8a0122]/60 to-transparent" />

                            {[
                                { step: "01", title: "Strategic Inquiry", desc: "Submit your inquiry. Our team analyzes your location and market potential." },
                                { step: "02", title: "Infrastructure", desc: "We provide detailed SOPs, equipment layout, and staff training programs." },
                                { step: "03", title: "Grand Reveal", desc: "Go live with our massive marketing push and high-energy launch events." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="text-center group relative pt-10"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 text-8xl font-black text-white/[0.08] group-hover:text-[#8a0122]/10 transition-colors">
                                        {item.step}
                                    </div>
                                    <div className="w-16 h-16 bg-[#8a0122] text-white rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-8 relative z-10 shadow-[0_0_20px_rgba(138,1,34,0.5)]">
                                        <Rocket size={24} />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-gray-400 font-light max-w-[250px] mx-auto leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Inquiry Form Section */}
                <section id="inquiry-form" className="py-24 bg-black text-white relative overflow-hidden">
                    {/* Decorative Gradients */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#8a0122]/10 blur-[120px] rounded-full" />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
                            <div className="lg:w-1/2">
                                <h2 className="text-5xl font-black mb-8 leading-tight">READY TO <br /><span className="text-[#8a0122]">REVOLUTIONIZE</span> <br />YOUR SPACE?</h2>
                                <p className="text-gray-400 text-lg mb-12">
                                    Fill out the form and our partnership team will get back to you within 24-48 hours with a customized proposal.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="p-4 bg-[#8a0122]/20 rounded-full text-[#8a0122]">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">Email us at</p>
                                            <p className="text-xl font-bold">partnerships@hyfit.co.in</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="p-4 bg-[#8a0122]/20 rounded-full text-[#8a0122]">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">Call us at</p>
                                            <p className="text-xl font-bold">+91 70191 89128</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2 bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#8a0122] outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#8a0122] outline-none transition-all" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Company / Gym Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#8a0122] outline-none transition-all" placeholder="Enter name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Partnership Type</label>
                                        <select className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 focus:border-[#8a0122] outline-none transition-all appearance-none text-gray-300">
                                            <option>Gym Franchise</option>
                                            <option>Corporate Wellness</option>
                                            <option>Freelance Trainer</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
                                        <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[#8a0122] outline-none transition-all" placeholder="Tell us more about your vision..."></textarea>
                                    </div>
                                    <button className="w-full bg-[#8a0122] hover:bg-[#8a0122]/90 text-white font-black py-5 rounded-xl transition-all flex items-center justify-center gap-3 group">
                                        SEND INQUIRY
                                        <Handshake size={20} className="group-hover:rotate-12 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}
