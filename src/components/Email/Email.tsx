import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    message?: string;
    email?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    message,
    email,
}) => (
    <div>
        <h3>From: {firstName}!</h3>
        <h3>Email:, {email}!</h3>
        <h3>{message}!</h3>
    </div>
);