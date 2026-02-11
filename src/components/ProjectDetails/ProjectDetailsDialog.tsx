"use client";

import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export type ProjectFeature = {
  title: string;
  items: string[];
};

export type ProjectDetails = {
  general?: {
    mainStack?: string;
    integrations?: string[];
    features?: string[];
  };
  sections?: ProjectFeature[];
  nextSteps?: string[];
};

type ProjectDetailsDialogProps = {
  title: string;
  details: ProjectDetails;
};

export const ProjectDetailsDialog = ({
  title,
  details,
}: ProjectDetailsDialogProps) => {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white green-text-gradient">
            {title} - Project Details
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Comprehensive overview of features and implementation details
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* General Section */}
          {details.general && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-custom-green flex items-center gap-2">
                <span className="text-2xl">⚙️</span> General
              </h3>
              <div className="bg-slate-800/50 rounded-lg p-4 space-y-3 border border-slate-700">
                {details.general.mainStack && (
                  <div>
                    <p className="text-sm font-medium text-gray-300 mb-1">
                      Main Stack:
                    </p>
                    <p className="text-sm text-gray-400">
                      {details.general.mainStack}
                    </p>
                  </div>
                )}
                {details.general.integrations && (
                  <div>
                    <p className="text-sm font-medium text-gray-300 mb-2">
                      Integrated Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {details.general.integrations.map((tech, idx) => (
                        <Badge
                          key={idx}
                          className="bg-custom-teal/20 text-custom-green border-custom-teal/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {details.general.features && (
                  <div>
                    <p className="text-sm font-medium text-gray-300 mb-2">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      {details.general.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-400 flex items-start gap-2"
                        >
                          <CheckCircle2 className="h-4 w-4 text-custom-green mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Feature Sections */}
          {details.sections && (
            <div className="space-y-4">
              {details.sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="space-y-3">
                  <h3 className="text-xl font-semibold text-custom-green flex items-center gap-2">
                    <span className="text-2xl">
                      {section.title.includes("🏠")
                        ? "🏠"
                        : section.title.includes("🏟️")
                        ? "🏟️"
                        : section.title.includes("💳")
                        ? "💳"
                        : section.title.includes("👤")
                        ? "👤"
                        : section.title.includes("🧑‍💼")
                        ? "🧑‍💼"
                        : section.title.includes("🛠️")
                        ? "🛠️"
                        : section.title.includes("💰")
                        ? "💰"
                        : section.title.includes("📈")
                        ? "📈"
                        : "📋"}
                    </span>
                    {section.title.replace(/[🏠🏟️💳👤🧑‍💼🛠️💰📈]/g, "").trim()}
                  </h3>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="text-sm text-gray-400 flex items-start gap-2"
                        >
                          <CheckCircle2 className="h-4 w-4 text-custom-green mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Next Steps Section */}
          {/* {details.nextSteps && details.nextSteps.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-custom-green flex items-center gap-2">
                <span className="text-2xl">📈</span> Next Steps (Post-MVP)
              </h3>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <ul className="space-y-2">
                  {details.nextSteps.map((step, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-custom-green mt-0.5">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )} */}
        </div>
      </DialogContent>
  );
};

