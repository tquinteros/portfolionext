import { Resend } from 'resend';
import { EmailTemplate } from '@/src/components/Email/Email';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const resend = new Resend('re_BaiK41By_49VaMtgUAXfXK4yTMAwnAWL8')
// const resend = new Resend('re_59vwBMnJ_8q1MCy8PwpA7cExPq22mcCdF')


export async function POST(request: NextResponse, res: NextApiResponse) {

    try {
        const body = await request.json();
        console.log(body)
        const { email, name, message } = body;
        const data = await resend.emails.send({
            from: 'PortFolio <onboarding@resend.dev>',
            to: ["tomyquinteros494@gmail.com"],
            subject: "Portfolio Mail",
            react: EmailTemplate({ firstName: name, email: email, message: message }),
            text: message,
        });

        // if (data.status === 'success') {
        //     return NextResponse.json({ status: 'success' })
        // }
        return NextResponse.json(data)

    } catch (error) {
        console.log(error)
    }


}