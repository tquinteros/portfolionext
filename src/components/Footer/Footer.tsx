import React from 'react'

const Footer = () => {
    return (
        <footer className="relative z-10 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-custom-teal/20">
            <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} DevSpace Portfolio. Exploring the digital universe.
            </p>
        </footer>
    )
}

export default Footer