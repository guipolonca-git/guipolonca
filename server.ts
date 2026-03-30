import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for contact form
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    console.log("--- New Contact Form Submission ---");
    console.log(`To: guipolonca@gmail.com`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Message: ${message}`);
    console.log("-----------------------------------");

    // In a real production app, you would use a service like Resend, SendGrid, or Mailgun here.
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'guipolonca@gmail.com',
      from: 'contact@yourdomain.com',
      subject: `New message from ${name}`,
      text: message,
      replyTo: email
    });
    */

    res.status(200).json({ success: true, message: "Message received" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
