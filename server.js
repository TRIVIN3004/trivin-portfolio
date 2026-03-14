const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

// =========================
// Middlewares
// =========================
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve your portfolio frontend

// =========================
// Portfolio Data API
// =========================
app.get('/api/portfolio', (req, res) => {
    try {
        const data = {
            name: "Trivin S",
            title: "AI student | AI & ML Enthusiast",

            skills: [
                "MongoDB", "React.js", "Python", "C",
                "Machine Learning", "Deep Learning",
                "OpenCV", "MediaPipe", "SQL", "Excel",
                "Communication",
                "Problem Solving (Skillrack, LeetCode)"
            ],

            projects: [
                {
                    title: "Hologram AI Assistant for Teaching",
                    tech: "AI, Speech Recognition, 3D Projection",
                    description: "A hologram-based AI that responds to questions and interacts with students."
                },
                {
                    title: "Robust Facial Deepfake Detection (CNN-LSTM)",
                    tech: "Deep Learning, Temporal Frame Analysis",
                    description: "Detects manipulated facial videos using hybrid CNN–LSTM architecture."
                },
                {
                    title: "Trivi AI Bot (Voice-enabled chatbot)",
                    tech: "NLP, Speech-to-Text, Text-to-Speech",
                    description: "A conversational assistant capable of voice recognition and response."
                },
                {
                    title: "AI Past Question Paper Analyzer",
                    tech: "NLP",
                    description: "Automatically extracts and categorizes important questions from exam papers."
                },
                {
                    title: "Visual Search in Multispectral Satellite Imagery",
                    tech: "Image Processing",
                    description: "Template-based feature search using multispectral image analysis."
                },
                {
                    title: "Smart No-Due Automation for College",
                    tech: "Full Stack Web App",
                    description: "Automates no-due approval workflow with multiple roles."
                },
                {
                    title: "Virtual Mouse Using Hand Gestures",
                    tech: "OpenCV, MediaPipe",
                    description: "Controls mouse movements using real-time hand tracking."
                }
            ],

            experience: [
                {
                    role: "Python Programmer",
                    company: "Cipherbyte Technologies",
                    duration: "1 Month (August 2024)",
                    details: "Worked on Python scripting and automation tasks."
                },
                {
                    role: "Artificial Intelligence Engineer",
                    company: "Corizo",
                    duration: "2 Months (August–September 2024)",
                    details: "AI training with Intel Inc. including ML model building and deployment."
                },
                {
                    role: "Bootcamp Trainee",
                    company: "USIM (Malaysia)",
                    duration: "15 Days (June 2025)",
                    details: "Trained in AI, ML, IoT, and PowerBI at Universiti Sains Islam Malaysia."
                },
                {
                    role: "Project intern",
                    company: "Intel JIT",
                    duration: "Jan 2024 to till",
                    details: "Trained in AI, ML, DL, computer vision,Blender."
                }
            ],

            education: {
                college: "Jeppiaar Institute of Technology, Sriperumbudur",
                degree: "B.Tech Artificial Intelligence and Data Science (III year)",
                graduation: 2027,
                cgpa: 8.54
            },

            achievements: [
                "Second prize – JIT Data Science Club Hackathon",
                "Consolation prize – Project Expo, MVIT Pondicherry",
                "Third Prize – National Level Paper Presentation, JIT",
                "First Prize – Paper Presentation, Tagore Engineering College",
                "Award for Co-Curricular Activities at JIT",
                "International Bootcamp – USIM (Malaysia)"
            ],

            contact: {
                location: "Sriperumbudur",
                phone: "9344048472",
                email: "trivintrivin2005@gmail.com"
            },

            social: {
                github: "https://github.com/TRIVIN3004",
                linkedin: "https://www.linkedin.com/in/trivin-s-a88944292",
                email: "trivintrivin2005@gmail.com"
            }
        };

        res.json(data);

    } catch (err) {
        res.status(500).json({ error: "Failed to load portfolio data" });
    }
});

// =========================
// Contact Form API
// =========================
app.post('/api/contact', (req, res) => {
    try {
        const { name, email, message, phone } = req.body;

        const newContact = {
            id: Date.now(),
            name: name || "Anonymous",
            email: email || "",
            phone: phone || "",
            message: message || "",
            receivedAt: new Date().toISOString()
        };

        const contactsFile = path.join(__dirname, 'contacts.json');
        let contacts = [];

        if (fs.existsSync(contactsFile)) {
            contacts = JSON.parse(fs.readFileSync(contactsFile, 'utf8') || "[]");
        }

        contacts.push(newContact);
        fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));

        res.json({ success: true, message: "Contact received", contact: newContact });

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to store contact" });
    }
});

// =========================
// Resume Download
// =========================
app.get('/resume', (req, res) => {
    const resumePath = path.join(__dirname, 'public', 'resume.pdf');

    if (!fs.existsSync(resumePath)) {
        return res.status(404).send("Resume not found. Add resume.pdf in /public.");
    }

    res.download(resumePath, 'Trivin_S_Resume.pdf');
});

// =========================
// SPA Fallback
// =========================
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// =========================
// START SERVER
// =========================
app.listen(PORT, () => {
    console.log(`Portfolio server running on http://localhost:${PORT}`);
});
