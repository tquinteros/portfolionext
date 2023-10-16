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

export interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    name?: string;
    value?: string;
    required: boolean;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}