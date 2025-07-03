"use client"

import React, { use, useState } from "react";
import InputMe from "../Input/Input";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// const resend = new Resend('re_59vwBMnJ_8q1MCy8PwpA7cExPq22mcCdF') PORTFOLIO
const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("bg-green-500");
    const [progress, setProgress] = useState(0);

    const isValidEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setColor("bg-red-500");
            toast.error("Please fill all the fields!", {
                style: {
                    backgroundColor: "#0f172a",
                    color: "#fff",
                },
            });
            return;
        }

        if (!isValidEmail(email)) {
            setColor("bg-red-500");
            toast.error("Please enter a valid email address!", {
                style: {
                    backgroundColor: "#0f172a",
                    color: "#fff",
                },
            });
            return;
        }

        setLoading(true);
        setColor("bg-green-500");
        setProgress(0);

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 90) {
                    return prevProgress + 10;
                }
                return prevProgress;
            });
        }, 300);

        const body = {
            name: name,
            email: email,
            message: message,
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.status === 200) {
                toast.success("Message sent successfully!", {
                    style: {
                        backgroundColor: "#0f172a",
                        color: "#fff",
                    },
                });
                setName("");
                setEmail("");
                setMessage("");
                setProgress(100);
            } else {
                toast.error("Error sending email, please try again!", {
                    style: {
                        backgroundColor: "#0f172a",
                        color: "#fff",
                    },
                });
            }
        } catch (error) {
            toast.error("Error sending email, please try again!", {
                style: {
                    backgroundColor: "#0f172a",
                    color: "#fff",
                },
            });
        } finally {
            clearInterval(interval);
            setLoading(false);
            setTimeout(() => setProgress(0), 1000);
        }
    };

    const handleResetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <section
            id="contact"
            className="w-full py-12 md:py-24 lg:py-32"
            style={{ backgroundColor: "#050816" }}
        >

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-2xl mx-auto">
                    <div className="text-left space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold green-text-gradient">Contact Me!</h2>
                        <p className="text-lg text-gray-300 max-w-lg">
                            Feel free to send an email, your query does not bother.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-white text-base font-medium">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-slate-800/60 border-slate-700/50 text-white placeholder:text-gray-400 h-12 text-base backdrop-blur-sm focus:border-custom-green/50 focus:ring-custom-green/20"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white text-base font-medium">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-slate-800/60 border-slate-700/50 text-white placeholder:text-gray-400 h-12 text-base backdrop-blur-sm focus:border-custom-green/50 focus:ring-custom-green/20"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-white text-base font-medium">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="bg-slate-800/60 border-slate-700/50 text-white placeholder:text-gray-400 min-h-32 text-base backdrop-blur-sm focus:border-custom-green/50 focus:ring-custom-green/20 resize-none"
                                    required
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button
                                    type="button"
                                    onClick={handleResetForm}
                                    variant="outline"
                                    className="flex-1 h-12 bg-slate-800/40 border-slate-600/50 text-white hover:bg-slate-700/60 hover:border-slate-500 hover:text-white backdrop-blur-sm text-base font-medium"
                                >
                                    Reset
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="flex-1 h-12 green-gradient-bg green-gradient-hover text-white border-0 text-base font-medium"
                                >
                                    Send
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        // <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        //     <div className="container px-4 md:px-6 mx-auto relative z-10">
        //         <div className="max-w-2xl mx-auto">
        //             <div className="text-left space-y-6">
        //                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold green-text-gradient">Contact Me!</h2>
        //                 <p className="text-lg text-gray-300 max-w-lg">
        //                     Feel free to send an email, your query does not bother.
        //                 </p>
        //             </div>
        //         </div>
        //         <motion.form
        //             initial={{ opacity: 0, y: 20 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 1.2 }}
        //             viewport={{ once: true }}
        //             onSubmit={handleSubmit} className="flex flex-col gap-4">
        //             <div className="space-y-2">
        //                 <Label htmlFor="name" className="text-white text-base font-medium">
        //                     Name
        //                 </Label>
        //                 <Input
        //                     id="name"
        //                     name="name"
        //                     type="text"
        //                     placeholder="Name"
        //                     value={name}
        //                     onChange={(e) => setName(e.target.value)}
        //                     className="bg-slate-800/60 border-slate-700/50 text-white placeholder:text-gray-400 h-12 text-base backdrop-blur-sm focus:border-custom-green/50 focus:ring-custom-green/20"
        //                     required
        //                 />
        //             </div>
        //             <div className="space-y-2">
        //                 <Label htmlFor="email" className="text-white text-base font-medium">
        //                     Email
        //                 </Label>
        //                 <Input
        //                     id="email"
        //                     name="email"
        //                     type="email"
        //                     placeholder="Email"
        //                     value={email}
        //                     onChange={(e) => setEmail(e.target.value)}
        //                     className="bg-slate-800/60 border-slate-700/50 text-white placeholder:text-gray-400 h-12 text-base backdrop-blur-sm focus:border-custom-green/50 focus:ring-custom-green/20"
        //                     required
        //                 />
        //             </div>
        //             <div className="space-y-2">
        //                 <Label htmlFor="message" className="text-white text-base font-medium">
        //                     Message
        //                 </Label>
        //                 <Textarea
        //                     id="message"
        //                     name="message"
        //                     placeholder="Message"
        //                     value={message}
        //                     onChange={(e) => setMessage(e.target.value)}
        //                     className="bg-slate-800/60 border-slate-700/50 text-white placeholder:text-gray-400 min-h-32 text-base backdrop-blur-sm focus:border-custom-green/50 focus:ring-custom-green/20 resize-none"
        //                     required
        //                 />
        //             </div>
        //             <div className="flex gap-4 justify-center items-center">
        //                 <button onClick={handleResetForm} type="reset" className="inline-block text-xl text-white bg-[#151030] px-12 py-3 hover:opacity-75 duration-300 rounded-2xl w-48">
        //                     Reset
        //                 </button>
        //                 <button
        //                     type="submit"
        //                     disabled={loading}
        //                     className={`${loading && 'opacity-75 cursor-not-allowed'} relative inline-flex items-center justify-center w-48 px-12 py-3 overflow-hidden font-medium text-xl tracking-tighter text-white bg-[#151030] rounded-2xl`}
        //                 >
        //                     <span
        //                         className="absolute left-0 top-0 h-full bg-green-500 transition-all duration-300 ease-out"
        //                         style={{ width: `${progress}%` }}
        //                     ></span>

        //                     <span className="relative z-10">
        //                         {loading ? (
        //                             <div className="h-full w-full flex justify-center items-center py-1.5">
        //                                 <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-primary" />
        //                             </div>
        //                         ) : "Send"}
        //                     </span>
        //                 </button>
        //             </div>
        //         </motion.form>
        //     </div>
        // </section>
    )
}

export default Contact;
