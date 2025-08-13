import nodemailer from 'nodemailer';

// Test SMTP connection
async function testSMTP() {
  try {
    const transporter = nodemailer.createTransporter({
      host: 'mail.killerclick.com',
      port: 465,
      secure: true,
      auth: {
        user: 'smtp@killerclick.com',
        pass: '11KCsmtp11!!',
      },
    });

    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully');

    // Send test email
    const info = await transporter.sendMail({
      from: 'smtp@killerclick.com',
      to: 'crashaw@gmail.com',
      subject: 'Test Email from Nodemailer',
      text: 'This is a test email to verify SMTP configuration.',
      html: '<p>This is a test email to verify SMTP configuration.</p>'
    });

    console.log('✅ Test email sent successfully:', info.messageId);
  } catch (error) {
    console.error('❌ SMTP Error:', error.message);
    console.error('Full error:', error);
  }
}

testSMTP();
