export interface ProjectsCardProps {
    title: string;
    description: string;
    image: string;
    index: number;
    techs?: string[];
}

export interface TechBadgeProps {
    label: string;
}

export interface HomeModalProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void;
  }