const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security-enhanced CORS configuration
const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? ['https://portfolio-thinza.vercel.app', 'https://www.your-domain.com'] // Updated with your actual domain
        : ['http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' })); // Limit payload size

// Security headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    next();
});

app.use(express.static('public'));

// Rate limiting for contact form
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    message: {
        error: 'Too many contact form submissions, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Email configuration
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail', // You can change this to other services like 'outlook', 'yahoo', etc.
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_APP_PASSWORD // App password (not your regular password)
        }
    });
};

// CV download endpoint
app.get('/api/download-cv', (req, res) => {
    const cvPath = path.join(__dirname, 'assets', 'Thihansa_Sanjunie_CV.pdf');

    console.log('CV download requested. File path:', cvPath);
    console.log('File exists:', fs.existsSync(cvPath));

    // Check if CV file exists
    if (fs.existsSync(cvPath)) {
        res.download(cvPath, 'Thihansa_Sanjunie_CV.pdf', (err) => {
            if (err) {
                console.error('Error downloading CV:', err);
                res.status(500).json({ error: 'Error downloading CV' });
            } else {
                console.log('CV downloaded successfully');
            }
        });
    } else {
        console.error('CV file not found at:', cvPath);
        res.status(404).json({ error: 'CV not found' });
    }
});

// Contact form endpoint - Email version with rate limiting
app.post('/api/contact', contactLimiter, async (req, res) => {
    const { name, email, message } = req.body;

    // Enhanced input validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Sanitize inputs
    const sanitizedName = name.trim().substring(0, 100);
    const sanitizedEmail = email.trim().toLowerCase().substring(0, 254);
    const sanitizedMessage = message.trim().substring(0, 2000);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
        return res.status(400).json({ error: 'Please provide a valid email address' });
    }

    // Additional validation
    if (sanitizedName.length < 2) {
        return res.status(400).json({ error: 'Name must be at least 2 characters long' });
    }

    if (sanitizedMessage.length < 10) {
        return res.status(400).json({ error: 'Message must be at least 10 characters long' });
    }

    try {
        const transporter = createTransporter();

        // Email content for you (the portfolio owner)
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // Where you want to receive messages
            subject: `🔔 New Portfolio Contact Message from ${sanitizedName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="margin: 0; font-size: 24px;">📧 New Contact Message</h1>
                        <p style="margin: 10px 0 0 0; opacity: 0.9;">From your portfolio website</p>
                    </div>
                    
                    <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <div style="margin-bottom: 25px;">
                            <h3 style="color: #333; margin: 0 0 10px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">👤 Sender Information</h3>
                            <p style="margin: 5px 0; color: #555;"><strong>Name:</strong> ${sanitizedName}</p>
                            <p style="margin: 5px 0; color: #555;"><strong>Email:</strong> <a href="mailto:${sanitizedEmail}" style="color: #667eea; text-decoration: none;">${sanitizedEmail}</a></p>
                            <p style="margin: 5px 0; color: #555;"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                        </div>
                        
                        <div style="margin-bottom: 25px;">
                            <h3 style="color: #333; margin: 0 0 15px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">💬 Message</h3>
                            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                                <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
                            </div>
                        </div>
                        
                        <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 8px;">
                            <p style="margin: 0; color: #666; font-size: 14px;">
                                💡 <strong>Quick Reply:</strong> 
                                <a href="mailto:${sanitizedEmail}?subject=Re: Your message to Thihansa&body=Hi ${sanitizedName},%0D%0A%0D%0AThank you for your message! " 
                                   style="color: #667eea; text-decoration: none; margin-left: 10px; background: #667eea; color: white; padding: 8px 16px; border-radius: 4px; display: inline-block; margin-top: 10px;">
                                   Reply to ${name.trim()}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            `,
            text: `
New contact message from your portfolio:

Name: ${name.trim()}
Email: ${email.trim()}
Date: ${new Date().toLocaleString()}

Message:
${message.trim()}

Reply to: ${email.trim()}
            `
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        console.log('Contact email sent successfully:', {
            name: name.trim(),
            email: email.trim(),
            timestamp: new Date().toISOString()
        });

        res.json({
            success: true,
            message: 'Thank you for your message! I will get back to you soon.'
        });

    } catch (error) {
        console.error('Error sending contact email:', error);

        // Provide different error messages based on the error type
        let errorMessage = 'Failed to send message. Please try again or contact me directly via email.';

        if (error.code === 'EAUTH') {
            errorMessage = 'Email configuration error. Please try again later.';
        } else if (error.code === 'ENOTFOUND') {
            errorMessage = 'Network error. Please check your connection and try again.';
        }

        res.status(500).json({ error: errorMessage });
    }
});

// Projects data endpoint
app.get('/api/projects', (req, res) => {
    const projects = [
        {
            id: 1,
            title: "SmartCreateAI - AI Content Creation Platform",
            description: "Created a comprehensive AI-driven platform that allows users to generate articles, blog titles, and images, as well as perform advanced image editing such as background and object removal. Features user authentication, community sharing, resume review tools, and seamless AI integration for enhanced productivity.",
            technologies: ["React.js", "Node.js", "Express", "PostgreSQL", "Cloudinary", "Clerk Auth", "OpenAI API", "Gemini API", "Replicate API"],
            year: "2025",
            type: "Solo Project",
            githubUrl: "https://github.com/thinzas/SmartCreateAI",
            image: "/projects/smartcreateai/main.png",
            images: ["/projects/smartcreateai/generate-image.png",
                "/projects/smartcreateai/resume-review.png",
                "/projects/smartcreateai/blog-title.png",
                "/projects/smartcreateai/write-article.png",
                "/projects/smartcreateai/remove-background.png",
                "/projects/smartcreateai/remove-object.png",
                "/projects/smartcreateai/dashboard.png",
                "/projects/smartcreateai/community.png"
            ]
        },
        {
            id: 2,
            title: "MentorMe - Academic Project Management System",
            description: "Developed a group project management system tailored to the unique academic workflow at the University of Colombo School of Computing (UCSC). It offers features like task boards, meeting scheduling, progress tracking, feedback channels, and analytics — all tailored to academic needs.",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            year: "2024",
            type: "Group Project",
            githubUrl: "https://github.com/kalpasuraweera/MentorMe",
            image: "/projects/mentorme/main.jpg",
            images: [
                "/projects/mentorme/dashboard.jpg",
                "/projects/mentorme/tasks.jpg",
                "/projects/mentorme/analytics.jpg"
            ]
        },
        {
            id: 3,
            title: "UniRoute - University Guide System",
            description: "Developing a system that guides Sri Lankan students towards suitable higher education programs and career pathways based on their academic subjects, Z-scores, and personal aspirations. It provides personalized guidance, program details, and decision support tools.",
            technologies: ["React JS", "Django", "Python", "MySQL"],
            year: "2025",
            type: "Group Project",
            githubUrl: "https://github.com/nalantishantha/UniRoute",
            image: "/projects/uniroute/main.png",
            images: [],
            status: "ongoing"
        },
        {
            id: 4,
            title: "Trendira - MERN Stack E-Commerce Platform",
            description: "Developed a web application that enables users to browse products, manage carts, and complete purchases in a dynamic shopping environment featuring support for both Stripe and Razorpay payment gateways for seamless transactions.",
            technologies: ["React JS", "MongoDB", "Express", "Node JS", "Stripe"],
            year: "2025",
            type: "Solo Project",
            githubUrl: "https://github.com/thinzas/Trendira",
            image: "/projects/trendira/main.png",
            images: [
                "/projects/trendira/products.png",
                "/projects/trendira/cart.png",
                "/projects/trendira/checkout.png"
            ]
        }
    ];

    res.json(projects);
});

// Skills data endpoint
app.get('/api/skills', (req, res) => {
    const skills = {
        "Programming Languages": ["Java", "C", "C++", "Python", "PHP", "JavaScript"],
        "Front-end Development": ["React", "Tailwind"],
        "Back-end Development": ["Django", "Node.js"],
        "Databases": ["MySQL", "MongoDB"],
        "Cloud Technologies": ["AWS"],
        "Other Tools & Technologies": ["Git", "Linux", "Figma", "Jira"],
        "Soft Skills": ["Problem-solving", "Analytical Thinking", "Collaboration", "Adaptability", "Communication"],
        "Software Practices": ["Agile", "SDLC"]
    };

    res.json(skills);
});

// Education data endpoint
app.get('/api/education', (req, res) => {
    const education = [
        {
            institution: "University of Colombo School of Computing",
            degree: "Bachelor of Science - Computer Science",
            period: "May 2023 - Present",
            cgpa: "3.44/4.00"
        },
        {
            institution: "Southlands College, Galle",
            period: "2007 - 2020",
            achievements: [
                "G.C.E. Advanced Level (2021) - Combined Mathematics: A, Physics: A, Chemistry: B (Z-score: 1.833)",
                "G.C.E. Ordinary Level (2017) - 9 A's"
            ]
        }
    ];

    res.json(education);
});

// Experience data endpoint
app.get('/api/experience', (req, res) => {
    const experience = [
        {
            title: "Designer",
            organization: "Pahasara Media - UCSC",
            period: "2022 - 2024",
            type: "Volunteering"
        }
    ];

    res.json(experience);
});

// Certifications data endpoint
app.get('/api/certifications', (req, res) => {
    const certifications = [
        "Complete Intro to React, v9 by Frontend Masters",
        "Django Essentials - Build and Deploy Real World Apps by Udemy",
        "Postman API Fundamentals Student Expert– Postman",
        "Introduction to Cloud 101 by Amazon Web Services Training and Certification"
    ];

    res.json(certifications);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
