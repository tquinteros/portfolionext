"use client"

import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import { toast } from "react-toastify";
import Image from "next/image";
// const resend = new Resend('re_59vwBMnJ_8q1MCy8PwpA7cExPq22mcCdF') PORTFOLIO

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
        <div id="contact" className="mb-64">
            <div className="grid grid-cols-12  gap-4">
                <div className="col-span-12 hidden md:flex md:justify-center md:items-center md:col-span-6">
                    <Image src="/contact.png" width={1000} height={1000} className="w-full" alt="Contact" />
                </div>
                <div className="col-span-12 flex flex-col gap-6 p-6  md:col-span-6">
                    <h3 className="green-text-gradient text-6xl font-extrabold">Let&apos;s Talk!</h3>
                    <p className="text-xl max-w-md font-bold">Feel free to reach out if you have any questions or just want to say hi.</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <Input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                            value={name}
                            label="Name"
                            required />
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            type="mail"
                            placeholder="Email"
                            value={email}
                            label="Email"
                            required />
                        <label>
                            Message
                            <textarea
                                placeholder="Message"
                                name="message"
                                value={message}
                                rows={4}
                                required
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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;