import React from "react";
import { TechBadgeProps } from "@/types/types";

const TechBadge = ({ label }: TechBadgeProps) => {
    return (
        <div className="border-[1px] border-[#8A2BE2] px-4 py-1 rounded-xl">
            {label}
        </div>
    )
}

export default TechBadge;