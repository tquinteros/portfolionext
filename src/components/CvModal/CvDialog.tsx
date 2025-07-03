"use client";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/src/contexts/ModalContext";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
    HeaderSection,
    ProfessionalSummary,
    TechnicalSkills,
    ProfessionalExperience,
    KeyProjects,
    EducationAndCertifications,
    LanguagesAndInterests
} from "./sections";

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
                    <HeaderSection />
                    <ProfessionalSummary />
                    <TechnicalSkills />
                    <ProfessionalExperience />
                    <KeyProjects />
                    <EducationAndCertifications />
                    <LanguagesAndInterests />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CvDialog; 