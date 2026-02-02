'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bell, ArrowLeft, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function BlogComingSoon() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#8a0122] selection:text-white overflow-x-hidden">

            <main className="flex-grow relative flex items-center justify-center min-h-screen">
                {/* Video Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover opacity-40"
                    >
                        <source src="/fitness-bg.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10 pt-32 pb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.span
                            initial={{ letterSpacing: "0.2em", opacity: 0 }}
                            animate={{ letterSpacing: "0.5em", opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-[#8a0122] font-bold uppercase text-sm mb-6 block tracking-[0.5em]"
                        >
                            The Hyfit Experience
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-black mb-8 leading-none italic tracking-tighter"
                        >
                            BLOG <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a0122] via-[#8a0122]/80 to-white">
                                COMING SOON
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
                        >
                            We're building a community-driven platform for fitness enthusiasts.
                            Get ready for exclusive workouts, nutrition guides, and inspiring athlete stories.
                        </motion.p>

                        {/* WhatsApp Redirect Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex items-center justify-center mb-16"
                        >
                            <a
                                href="https://wa.me/917019189128?text=Hi%20Hyfit,%20I'd%20like%20to%20be%20notified%20when%20your%20blog%20goes%20live!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center gap-3 bg-[#8a0122] hover:bg-[#8a0122]/90 text-white px-6 py-4 rounded-full transition-all font-black tracking-widest uppercase shadow-[0_0_30px_rgba(138,1,34,0.3)] hover:shadow-[0_0_50px_rgba(138,1,34,0.5)] active:scale-95 group"
                            >
                                <Instagram className="hidden" /> {/* Using Instagram icon placeholder or Lucide WhatsApp if available */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-7 h-7 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                NOTIFY ME ON WHATSAPP
                                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                            </a>
                        </motion.div>

                        {/* Social Links & Back button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="flex items-center gap-6">
                                <a href="https://www.instagram.com/hyfit.fitnessclub/" className="p-3 bg-white/5 rounded-full hover:bg-[#8a0122] transition-colors border border-white/10">
                                    <Instagram size={24} />
                                </a>
                                <a href="https://www.linkedin.com/company/hyfit-india/" className="p-3 bg-white/5 rounded-full hover:bg-[#8a0122] transition-colors border border-white/10">
                                    <Linkedin size={24} />
                                </a>
                            </div>

                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group text-sm uppercase tracking-widest font-bold"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                Go Back to Homepage
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
            </main>

        </div>
    );
}
