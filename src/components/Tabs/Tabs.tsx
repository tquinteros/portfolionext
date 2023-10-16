"use client"
import React, { useState } from "react";
import Studies from "./Studies";
import ProjectsTabs from "./ProjectsTabs";

const Tabs = () => {

    const [activeTab, setActiveTab] = useState('studies');

    return (
        <div className="mb-[500px] border flex flex-col gap-8">
            <div className="flex justify-center items-center gap-48">
                <div className="">
                    <button className="text-2xl" onClick={() => setActiveTab('studies')}>Studies</button>
                </div>
                <div className="">
                    <button className="text-2xl" onClick={() => setActiveTab('projects')}>Projects</button>
                </div>
            </div>
            {
                activeTab === 'studies' && <Studies />
            }
            {
                activeTab === 'projects' && <ProjectsTabs />
            }
        </div>
    )
}

export default Tabs;