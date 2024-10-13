"use client"

import React, { use, useState } from "react";
import Input from "../Input/Input";
import { toast } from "react-toastify";
import Image from "next/image";
import { motion } from "framer-motion";

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
            toast.error("Please fill all the fields!");
            return;
        }

        if (!isValidEmail(email)) {
            setColor("bg-red-500");
            toast.error("Please enter a valid email address!");
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
                toast.success("Message sent successfully!");
                setName("");
                setEmail("");
                setMessage("");
                setProgress(100);
            } else {
                toast.error("Error sending email, please try again!");
            }
        } catch (error) {
            toast.error("Error sending email, please try again!");
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
        <div id="contact" className="my-36 container mx-auto">
            <div className="grid grid-cols-12  gap-4">
                <div className="col-span-12 hidden lg:flex lg:justify-center lg:items-center lg:col-span-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Image src="/contact.png" width={600} height={600} className="select-none animate-spin animate-infinite animate-duration-[35000ms]" alt="Contact" />
                    </motion.div>
                </div>
                <div className="col-span-12 flex flex-col gap-6 p-6 lg:col-span-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-2"
                    >
                        <h3 className="green-text-gradient text-5xl md:text-6xl font-extrabold">Contact Me!</h3>
                        <p className="md:text-xl text-lg max-w-md font-bold">Feel free to send an email, your query does not bother.</p>
                    </motion.div>
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <Input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                            value={name}
                            label="Name"
                            required={false}
                        />
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="Email"
                            value={email}
                            label="Email"
                            required={false}
                        />
                        <label>
                            Message
                            <textarea
                                placeholder="Message"
                                name="message"
                                value={message}
                                rows={4}
                                required={false}
                                onChange={(e) => setMessage(e.target.value)}
                                className="border px-4 bg-[#151030] border-black rounded-md p-2 mt-2 w-full resize-none"
                            />
                        </label>
                        <div className="flex gap-4 justify-center items-center">
                            <button onClick={handleResetForm} type="reset" className="inline-block text-xl text-white bg-[#151030] px-12 py-3 hover:opacity-75 duration-300 rounded-2xl w-48">
                                Reset
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`${loading && 'opacity-75 cursor-not-allowed'} relative inline-flex items-center justify-center w-48 px-12 py-3 overflow-hidden font-medium text-xl tracking-tighter text-white bg-[#151030] rounded-2xl`}
                            >
                                <span
                                    className="absolute left-0 top-0 h-full bg-green-500 transition-all duration-300 ease-out"
                                    style={{ width: `${progress}%` }}
                                ></span>

                                <span className="relative z-10">
                                    {loading ? (
                                        <div className="h-full w-full flex justify-center items-center py-1.5">
                                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-primary" />
                                        </div>
                                    ) : "Send"}
                                </span>
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
