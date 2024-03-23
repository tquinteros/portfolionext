import React from 'react'

interface InputProps {
    label?: string;
    autoFocus?: boolean;
    type: string;
    placeholder: string;
    name?: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, type, placeholder, name, value, onChange, required, className }: InputProps) => {
    return (
        <label>
            {
                label && (
                    label
                )
            }
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className={`border px-4 bg-[#151030] border-black rounded-md p-2 mt-2 w-full ${className}`}
            />
        </label>
    )
}

export default Input;