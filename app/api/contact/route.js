import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "mail.smtp2go.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER, // SMTP2GO username
    pass: process.env.EMAIL_PASS, // SMTP2GO password or API key
  },
});

export async function POST(req) {
  try {
    // Extract data from the incoming request
    const { name, email, message } = await req.json();

    const mailOptions = {
      from: process.env.EMAIL_USER, // Your sender email
      to: "dan@levitate.digital, harry@growth3.co", // Replace with recipient email
      subject: `New Submission from Growth3`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success message
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Respond with an error message
    return new Response(
      JSON.stringify({ message: 'Error sending email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
