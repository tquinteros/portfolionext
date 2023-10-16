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
        <h1>Welcome, {firstName}!</h1>
        <h1>MESSAGE, {message}!</h1>
        <h1>EMAIL, {email}!</h1>
    </div>
);