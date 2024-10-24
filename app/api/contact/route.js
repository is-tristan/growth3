import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "mail.smtp2go.com",
    port: 2525,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "tristan@levitate.digital",
      subject: `New Contact Form Submission from Growth3`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), {
      status: 500,
    });
  }
}
