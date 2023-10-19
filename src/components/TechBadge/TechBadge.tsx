import React from "react";
import { TechBadgeProps } from "@/types/types";

const TechBadge = ({ label }: TechBadgeProps) => {
    return (
        <div className="border font-bold text-lg bg-[#8A2BE2] bg-opacity-50 border-[#8A2BE2] px-4 py-1 rounded-xl">
            {label}
        </div>
    )
}

export default TechBadge;