// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  
  

  const { name, email, message,phone,service } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.BREVO_HOST,
    port: Number(process.env.BREVO_PORT),
    secure: false,
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_TO}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Form Enquiry',
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong><br/>${phone}</p>
             <p><strong>Service:</strong><br/>${service}</p>
             <p><strong>Message:</strong><br/>${message}</p>`
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}
