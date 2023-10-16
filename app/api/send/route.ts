import { Resend } from 'resend';
import { EmailTemplate } from '@/src/components/Email/Email';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const resend = new Resend('re_BaiK41By_49VaMtgUAXfXK4yTMAwnAWL8');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const body = JSON.parse(req.body);
        console.log(body);
        const { email, name, message } = body;
        const data = await resend.emails.send({
            from: 'PortFolio <onboarding@resend.dev>',
            to: ["tomyquinteros494@gmail.com"],
            subject: "Portfolio Mail",
            react: EmailTemplate({ firstName: name, email: email, message: message }),
            text: message,
        });

        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error" });
    }
}