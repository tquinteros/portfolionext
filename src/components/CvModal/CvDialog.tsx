"use client";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import ContentModal from "./Content";
import { useModal } from "@/src/contexts/ModalContext";
import { Button } from "@/components/ui/button";
import { Download, Phone, MapPin, Github, Linkedin, Mail, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CvDialog: React.FC = () => {
    const { isModalOpen, closeModal } = useModal();

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Cv.pdf";
        link.download = "Cv.pdf";
        link.click();
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={closeModal}>
            {/* <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-[#050816] border-[#9999ff] text-white"> */}
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-[#050816] border-custom-teal/50 text-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl mt-6 font-bold text-custom-green flex items-center justify-between">
                        Curriculum Vitae
                        <Button
                            onClick={handleDownload}
                            variant="outline"
                            size="sm"
                            className="border-custom-teal/50 text-custom-green hover:bg-custom-teal/20 hover:text-white bg-transparent"
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                        </Button>
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 p-6">
                    {/* Header Section */}
                    <div className="text-center border-b border-custom-teal/30 pb-6">
                        <h1 className="text-3xl font-bold green-text-gradient mb-2">Tomás Quinteros</h1>
                        <p className="text-xl text-custom-green mb-4">Frontend Developer</p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
                            <div className="flex items-center gap-1">
                                <Mail className="h-4 w-4 text-custom-green" />
                                tomyquinteros494@gmail.com
                            </div>
                            <div className="flex items-center gap-1">
                                <Phone className="h-4 w-4 text-custom-green" />
                                +54 9 11 3333-3333
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4 text-custom-green" />
                                Córdoba, Argentina
                            </div>
                            <div className="flex items-center gap-1">
                                <Github className="h-4 w-4 text-custom-green" />
                                github.com/tquinteros
                            </div>
                            <div className="flex items-center gap-1">
                                <Linkedin className="h-4 w-4 text-custom-green" />
                                linkedin.com/in/tomas-quinteros1
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
                            Professional Summary
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Frontend Developer with nearly 4 years of professional experience building scalable and responsive web applications. I’ve worked on a wide range of projects at Zetaequis and BLKMarket—including large-scale e-commerce platforms, admin dashboards, product and user management tools, social features, and NFT marketplaces.
                            <br />
                            I specialize in modern technologies such as TypeScript, React, Next.js, Tailwind CSS, Zod, Zustand, React Query, MongoDB, Framer Motion, and Material UI. I’m passionate about building fast, responsive, and accessible user interfaces, and I thrive in collaborative team environments with GitHub workflows and deployments via Vercel.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold text-custom-teal mb-2">Frontend Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-custom-teal/20 text-custom-green border-custom-teal/50">React</Badge>
                                    <Badge className="bg-custom-teal/20 text-custom-green border-custom-teal/50">Next.js</Badge>
                                    <Badge className="bg-custom-teal/20 text-custom-green border-custom-teal/50">TypeScript</Badge>
                                    <Badge className="bg-custom-teal/20 text-custom-green border-custom-teal/50">Tailwind CSS</Badge>
                                    <Badge className="bg-custom-teal/20 text-custom-green border-custom-teal/50">Tanstack Query</Badge>
                                    <Badge className="bg-custom-teal/20 text-custom-green border-custom-teal/50">MongoDB</Badge>
                                    <Badge className="bg-custom-teal/20 text-custom-green border-custom-teal/50">Zustand</Badge>
                                    <Badge className="bg-custom-teal/20 text-custom-green border-custom-teal/50">Zod Server Actions</Badge>
                                    <Badge className="bg-custom-teal/20 text-custom-green border-custom-teal/50">Framer Motion</Badge>
                                    <Badge className="bg-custom-teal/20 text-custom-green border-custom-teal/50">Material UI</Badge>
                                </div>
                            </div>
                            {/* <div>
                                <h3 className="font-semibold text-custom-teal mb-2">Tools & Platforms</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-custom-green/20 text-custom-teal border-custom-green/50">Git</Badge>
                                    <Badge className="bg-custom-green/20 text-custom-teal border-custom-green/50">Docker</Badge>
                                    <Badge className="bg-custom-green/20 text-custom-teal border-custom-green/50">AWS</Badge>
                                    <Badge className="bg-custom-green/20 text-custom-teal border-custom-green/50">Vercel</Badge>
                                    <Badge className="bg-custom-green/20 text-custom-teal border-custom-green/50">Figma</Badge>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
                            Professional Experience
                        </h2>
                        <div className="space-y-6">
                            <div className="border-l-2 border-gray-600 pl-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-white">Full Stack Developer</h3>
                                        <p className="text-custom-teal">BLKMarket</p>
                                    </div>
                                    <div className="text-right text-sm text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            Feb 2023 - Present
                                        </div>
                                        <div>Remote</div>
                                    </div>
                                </div>
                                <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                                    <li>Developed and maintained scalable web applications using React, Next.js, and TypeScript</li>
                                    <li>Collaborated with cross-functional teams to implement new features and improve user experience</li>
                                    <li>Optimized application performance and implemented best practices for accessibility and SEO</li>
                                    <li>Worked on a variety of projects, including e-commerce platforms, admin dashboards, and user management tools</li>
                                </ul>
                            </div>

                            <div className="border-l-2 border-gray-600 pl-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-white">Frontend Developer</h3>
                                        <p className="text-custom-teal">Zetaequis</p>
                                    </div>
                                    <div className="text-right text-sm text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            Feb 2022 - Present
                                        </div>
                                        <div>Remote (Part time)</div>
                                    </div>
                                </div>
                                <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                                    <li>Developed and maintained scalable web applications using React, Next.js, and TypeScript</li>
                                    <li>Collaborated with cross-functional teams to implement new features and improve user experience</li>
                                    <li>Optimized application performance and implemented best practices for accessibility and SEO</li>
                                    <li>Worked on a variety of projects, including e-commerce platforms, admin dashboards, and user management tools</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mt-4">
                    <ContentModal />
                </div>
                <div className="flex gap-4 mt-6 md:gap-12 flex-col md:flex-row items-center justify-center">
                    <button
                        onClick={closeModal}
                        className="text-2xl px-6 py-2 rounded-2xl hover:opacity-75 duration-300 border border-[#9999ff] w-full"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleDownload}
                        className="text-2xl px-6 py-2 rounded-2xl hover:opacity-75 duration-300 border border-[#9999ff] w-full"
                    >
                        Download CV
                    </button>
                </div> */}
            </DialogContent>
        </Dialog>
    );
};

export default CvDialog; 