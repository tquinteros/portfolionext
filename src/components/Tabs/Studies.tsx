import { studies } from "@/data/studies";
import { motion } from "framer-motion";
import React from "react";

const Studies = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="border flex justify-center border-red-500"
        >
            <div className="flex flex-col">
                {
                    studies.map((study, index) => {
                        return (
                            <div key={index}>
                                <h3>{study.title}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default Studies;