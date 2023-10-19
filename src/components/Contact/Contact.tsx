"use client"

import React, { useState } from "react";
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
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !email || !message) return toast.error("Please fill all the fields!", {
            position: "bottom-right",
            theme: "dark",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
        setLoading(true);
        const body = {
            name: name,
            email: email,
            message: message,
        }
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
        if (response.status === 200) {
            toast.success("Message sent successfully!", {
                position: "bottom-right",
                theme: "dark",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            setLoading(false);
        } else {
            toast.error("Error sending email!", {
                position: "bottom-right",
                theme: "dark",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            setLoading(false);
        }
    }

    const handleResetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
    }


    return (
        <div id="contact" className="mb-32">
            <div className="grid grid-cols-12  gap-4">
                <div className="col-span-12 hidden md:flex md:justify-center md:items-center md:col-span-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image src="/contact.png" width={600} height={600} className="select-none animate-spin animate-infinite animate-duration-[35000ms]" alt="Contact" />
                    </motion.div>
                </div>
                <div className="col-span-12 flex flex-col gap-6 p-6  md:col-span-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-2"
                    >
                        <h3 className="green-text-gradient text-6xl font-extrabold">Contact Me!</h3>
                        <p className="text-xl max-w-md font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aperiam.</p>
                    </motion.div>
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <Input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                            value={name}
                            label="Name"
                            />
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            value={email}
                            label="Email"
                            />
                        <label>
                            Message
                            <textarea
                                placeholder="Message"
                                name="message"
                                value={message}
                                rows={4}
                                
                                onChange={(e) => setMessage(e.target.value)}
                                className="border px-4 bg-[#151030] border-black rounded-md p-2 mt-2 w-full"
                            />
                        </label>
                        <div className="flex gap-4 justify-center items-center">
                            <button
                                onClick={handleResetForm}
                                className="rounded-xl border font-bold text-2xl py-2 px-12"
                            >
                                Reset
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`rounded-xl border font-bold text-2xl py-2 px-12 ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                            >
                                Send
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
