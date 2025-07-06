import React from "react";

const ProfessionalSummary: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-custom-green mb-3 border-l-4 border-custom-green pl-3">
        Professional Summary
      </h2>
      <p className="text-gray-300 leading-relaxed">
        Frontend Developer with nearly 4 years of professional experience building scalable and responsive web applications. I have worked on a wide range of projects at Zetaequis and BLKMarket—including large-scale e-commerce platforms, admin dashboards, product and user management tools, social features, and NFT marketplaces.
        <br />
        I specialize in modern technologies such as TypeScript, React, Next.js, Tailwind CSS, Zod, Zustand, TanStack Query, MongoDB, Framer Motion, and Material UI. I am passionate about building fast, responsive, and accessible user interfaces, and I thrive in collaborative team environments with GitHub workflows and deployments via Vercel.
      </p>
    </div>
  );
};

export default ProfessionalSummary; 