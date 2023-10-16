import { motion } from "framer-motion";
import React from "react";

const ProjectsTabs = () => {
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration: 0.5}}
        className="border border-blue-500 flex justify-center"
        >
            ProjectsTabs
        </motion.div>
    )
}

export default ProjectsTabs;