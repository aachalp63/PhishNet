PhishNet – Phishing Detection & Awareness Hub

PhishNet is an AI-powered web platform that empowers users to detect phishing threats and gain cybersecurity awareness. It combines interactive training, real-world case studies, AI-integrated phishing detection, and educational resources to equip individuals and employees against online threats.


● Project Overview

PhishNet is built to simulate phishing detection mechanisms while also functioning as an educational cybersecurity platform. It’s ideal for organizations conducting employee awareness training, cyber bootcamps, or cybersecurity challenges.


● Features (Module  with  Description)
     
▪ Employee Training - Interactive quiz with 15+ questions covering phishing tactics and awareness. 

▪ AI URL Analyzer - Real-time URL analysis using the IPQualityScore API (Free Tier).

▪ Case Studies  -  Real-world phishing examples with breakdowns and impact.

▪ Whitepapers - Downloadable PDF security guides to improve corporate defense strategies.

▪ Simple Navigation Responsive navbar + footer with clean, modern layout.

▪ Responsive Design - Fully optimized for mobile, tablet, and desktop.


● Tech Stack

▪ Frontend - Next.js (App Router)
▪ Styling -  Tailwind CSS
▪ Icons - Lucide React Icons
▪ AI Detection - IPQualityScore API


● Setup & Installation

▪ Prerequisites

- Node.js v18+
- npm (or yarn)
- IPQualityScore API key (free tier works)

1.Clone the Repository

bash
git clone https://github.com/your-username/phishnet.git
cd phishnet

2.Install Dependencies

npm install Or yarn install

3.Set Up Environment Variables

Create a .env.local file in the root directory:
Edit:
IPQS_API_KEY=your_ipqualityscore_api_key

4.Running the App

Development Mode :
bash
npm run dev Or yarn dev
Go to http://localhost:3000 to view the app.

5.Production Build

bash
npm run build
npm start

