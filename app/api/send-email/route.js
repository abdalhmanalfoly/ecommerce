import { Resend } from 'resend';
import { EmailTemplate } from '../../_components/email-template';
import { NextResponse } from 'next/server'; 

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['radea4082@gmail.com'],
      subject: 'Successful Payment',
      react: EmailTemplate({ firstName: 'Abdalrhman' }),
    });

    return NextResponse.json(data); 
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
