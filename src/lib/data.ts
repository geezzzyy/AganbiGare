// Centralized data file for the Aganbi Gare Personal Website.

export const profile = {
    name: "Aganbi Gare",
    taglines: ["Controls Engineer.", "Builder.", "Author.", "Entrepreneur.", "Agentic Programmer.", "IT Specialist."],
    bio: "Control Systems & Instrumentation Engineer with 9+ years of experience bridging Operational Technology and Information Technology. Deep expertise in PLC programming, SCADA/HMI configuration, and industrial process automation — complemented by capabilities in data engineering, business intelligence, and full-stack development.",
    socials: {
        github: "https://github.com/geezzzyy",
        linkedin: "https://www.linkedin.com/in/aganbi/",
        youtube: "https://youtube.com/@aganbigare",
        email: "gare@aganbigare.com",
    },
}

export const engineeringData = {
    cvUrl: "/Gare_Aganbi_CV_(1).pdf",
    story: [
        "I come from a medical family. My parents run a private hospital. Growing up, the natural expectation was that I'd follow in their footsteps and study medicine. But I couldn't do it.",
        "It wasn't a lack of compassion. If anything, it was the opposite. A fear of over-compassion. The few times I saw families break down in tears after losing a loved one at the hospital, I carried it home with me. I had sleepless nights. The weight of other people's grief sat on my chest in a way I knew I couldn't sustain for a lifetime. To this day, I deeply honour health workers. They are superheroes, people who face that reality daily and still show up.",
        "So I chose a different path. Mathematics had always come naturally to me, and back then, if you were good at maths, it was simply presumed you were going to be an engineer. That presumption turned out to be spot on. In senior secondary school, I fell in love with Physics and scored 80-something in the JAMB Physics exam. The direction was set.",
        "I went on to study Electrical & Electronics Engineering at Covenant University, and what followed has been a journey through power plants, control rooms, industrial automation, and eventually into the world of data and software. The timeline below tells the rest of the story.",
    ],
    skills: [
        "PLC Programming (Allen-Bradley, Mitsubishi)",
        "SCADA/HMI Design & Configuration",
        "Instrumentation Design & Calibration",
        "Control Loop Tuning & Optimization",
        "Process Automation & P&ID Interpretation",
        "MATLAB/Simulink & LabVIEW",
        "Signal Processing & Electrical Schematics",
    ],
    certifications: [
        "NEBOSH International General Certificate (IGC)",
    ],
    timeline: [
        {
            type: "education" as const,
            title: "B.S., Electrical & Electronics Engineering",
            organisation: "Covenant University",
            location: "Ota, Nigeria",
            duration: "2011 – 2016",
            description: "Circuit Theory, Control Systems, Power Systems, Electronics. Where the foundation was laid. Five years of rigorous engineering training that shaped everything that came after.",
        },
        {
            type: "work" as const,
            title: "Electrical Engineering Intern",
            organisation: "Omotosho Electric Energy Company",
            location: "Ondo, Nigeria",
            duration: "Jan 2015 – Jun 2015",
            description: "Monitored HMI systems for gas turbines at a 450MW power generation facility, ensuring real-time performance tracking and safety compliance. First real taste of industrial-scale engineering.",
        },
        {
            type: "work" as const,
            title: "Electrical Engineering Intern",
            organisation: "NEMSA (Nigerian Electricity Management Services Agency)",
            location: "Abuja, Nigeria",
            duration: "Jan 2017 – Aug 2017",
            description: "Participated in inspection and certification of power distribution systems including transformers, feeders, distribution lines, and substations. Conducted site assessments ensuring regulatory safety compliance across residential, commercial, and industrial premises.",
        },
        {
            type: "work" as const,
            title: "EC&I Project Engineer",
            organisation: "Ray Control Tech",
            location: "Warri, Nigeria",
            duration: "Mar 2018 – Dec 2018",
            description: "Led end-to-end design and integration of instrumentation and control systems for industrial process automation. Developed PLC control logic using Allen-Bradley and Mitsubishi platforms, configured HMI/SCADA systems, and resolved complex control loop instability issues that had previously eluded detection.",
        },
        {
            type: "education" as const,
            title: "M.S., Engineering Control Systems & Instrumentation",
            organisation: "University of Huddersfield",
            location: "Huddersfield, UK",
            duration: "2019 – 2020",
            description: "PLC Programming, SCADA Design, Control Theory, MATLAB/Simulink. A deep dive into the theory and practice of control engineering at a postgraduate level.",
        },
        {
            type: "education" as const,
            title: "PhD, Electrical Engineering (Dropped Out)",
            organisation: "University of Huddersfield",
            location: "Huddersfield, UK",
            duration: "2020 – 2023",
            description: "Began doctoral research in electrical engineering. Ultimately decided to step away. The pull of building real things in the real world was stronger than the pull of academia.",
        },
        {
            type: "work" as const,
            title: "Quality Control Analyst",
            organisation: "Cummins Turbo Technologies",
            location: "Huddersfield, UK",
            duration: "Sep 2022 – May 2023",
            description: "Executed precision assembly and quality verification of turbocharger components for global automotive and industrial applications. Applied calibrated instrumentation and torque tools ensuring compliance with engineering specifications and ISO quality standards.",
        },
    ],
}

export const techData = {
    summary: "Full-stack development, AI-integrated applications, and data engineering — from concept through deployment.",
    story: [
        "I've always been drawn to technology. During my undergraduate years studying Electrical & Electronics Engineering, I taught myself SQL and Python out of sheer curiosity. Even as a Controls Engineer, the tasks I gravitated towards were the IT-adjacent ones: PLC programming, SCADA system design, and anything that involved logic and data.",
        "But my full plunge into IT came unexpectedly. After completing my MSc in Engineering Control Systems and Instrumentation, COVID struck. I was one leg into a PhD programme, and the world had shut down. I needed to work, but the roles available were ones that didn't require my physical presence. So I called upon the skills I already had: SQL, Excel, data visualisation. I landed a role as a Bid Insight Analyst, and eventually moved into a Business Intelligence Developer position.",
        "Those years weren't easy. I was forced to upskill rapidly in an industry I hadn't planned to enter fully at that point. But in hindsight, I'm grateful for how things turned out. The transition sharpened me in ways I didn't expect.",
        "Today, I'm pursuing another MSc, this time in Information Systems Engineering and Management. I hope I complete this one, because between all the learning and building I do outside of school, the workload is truly a lot. But I love learning, I love building, and I love creating IT solutions. This is my field.",
    ],
    education: [
        {
            institution: "Harrisburg University of Science and Technology",
            degree: "Executive M.S., Information Systems Engineering & Management",
            focus: "OT/IT Integration, Enterprise Systems",
            duration: "2025 – Present",
        },
        {
            institution: "University of Huddersfield",
            degree: "M.S., Engineering Control Systems & Instrumentation",
            focus: "PLC Programming, SCADA Design, Control Theory, MATLAB/Simulink",
            duration: "2019 – 2020",
        },
        {
            institution: "Covenant University",
            degree: "B.S., Electrical & Electronics Engineering",
            focus: "Circuit Theory, Control Systems, Power Systems, Electronics",
            duration: "2011 – 2016",
        },
    ],
    expertise: ["Full-Stack & AI Development", "Data & Business Intelligence", "Cloud & DevOps"],
    certifications: [
        "Microsoft Certified: Azure Data Engineer Associate",
        "Microsoft Certified: Power BI Data Analyst Associate",
    ],
    techExperience: [
        {
            role: "Agentic Full Stack Developer",
            company: "Independent / Freelance",
            location: "Remote, USA",
            duration: "Aug 2025 – Present",
            description: "Building AI-integrated mobile and web applications end-to-end, leveraging agentic AI workflows for rapid prototyping, development, and deployment.",
        },
        {
            role: "Business Intelligence Automation Developer",
            company: "BW Legal Ltd",
            location: "Leeds, UK",
            duration: "Jun 2023 – Jul 2025",
            description: "Architected automated data pipelines using T-SQL and SQL Server Agent jobs, improving cross-departmental efficiency by 60%+. Engineered real-time SSRS reporting for C-suite stakeholders and re-engineered legacy databases for 30% performance gains.",
        },
        {
            role: "Insight Analyst",
            company: "JLA Group",
            location: "Ripponden, UK",
            duration: "Oct 2020 – Jul 2022",
            description: "Designed and deployed Power BI dashboards tracking 50+ KPIs across client behaviour, regional performance, and sales metrics. Analyzed FOI datasets contributing to increased public-sector contract win rates.",
        },
    ],
    projects: [
        {
            title: "Philio",
            description: "A faith-based community introduction platform (React Native/Expo, TypeScript, tRPC, Supabase/PostgreSQL) that reimagines relationship introductions through trusted community matchmakers. Features Google OAuth, Apple Sign-In, real-time chat, and RevenueCat subscriptions. Shipped to App Store and Google Play.",
            tech: ["React Native", "Expo", "TypeScript", "tRPC", "Supabase", "PostgreSQL"],
            link: null as string | null,
            github: null as string | null,
            status: "Live",
        },
        {
            title: "Lonia Telemedicine",
            description: "A telemedicine platform enabling remote patient consultations, appointment scheduling, and secure medical record management. HIPAA-aware architecture with end-to-end encryption, real-time video consultations, and provider dashboard analytics.",
            tech: ["Next.js", "React Native", "NestJS", "Agora", "Paystack", "Cloudinary"],
            link: "https://loniahospital.com",
            github: null as string | null,
            status: "Live",
        },
        {
            title: "Investment & Personal Finance Platform",
            description: "A complete product for personal finance allocation, investment tracking, and portfolio management.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
            link: null as string | null,
            github: null as string | null,
            status: "Planned",
        },
    ],
}

export const faithData = {
    summary: "A quiet place for contemplation, theology, and the intersection of belief and daily life.",
    books: [
        {
            title: "7 Things Every Christian Should Be Conscious Of",
            description: "A foundational guide to the key truths every believer should carry daily — awareness that transforms how you walk, pray, and live.",
            year: "2024",
            downloadUrl: "/7things.pdf",
            status: "Available" as const,
        },
        {
            title: "Not Just Man: The Life of God in Man",
            description: "An exploration of the divine nature at work within the believer — understanding your identity beyond the flesh.",
            year: "Upcoming",
            downloadUrl: null as string | null,
            status: "Upcoming" as const,
        },
    ],
    sermons: [] as { title: string; date: string; description: string; youtubeUrl: string }[],
    convictions: [
        "Jesus died. He died for my sins. Which means I died in him.",
        "Jesus rose from the dead 3 days later. I rose with him, signalling my victory over sin and the grave.",
        "After spending time with his disciples and showing them many infallible proofs, Jesus ascended to heaven. He ascended to the right hand of the Father. A seat of authority, with a name greater than every name in heaven and on earth. I ascended with him by virtue of being in Christ.",
        "God loves me. He really likes me. He delights in me.",
        "God has called me to be a minister of reconciliation. A minister of the word, spirit, healing and life.",
        "God's presence is permanent with me. He will never leave nor forsake me.",
        "God is my helper. All my hope, strength and advantage is in him.",
        "God is my righteousness. I have no righteousness of my own. By his grace, he has fully qualified me to be all I am in Christ.",
        "God hears and answers prayers. Prayer is God's gift to humanity and with it we fellowship with God, receive from him and alter circumstances.",
        "Every demon is subject to me. I trample on them, I cast them out and I deliver people from oppression.",
        "Christ is my healer. And God's will for me and humanity is perfect health. He wants me to live in health as well as bring the message and power of deliverance from sickness to the world.",
        "Christ lives in me and I am in him. We've been brought into complete oneness and unity. I have therefore become God's temple, vessel, means of expression and representation upon the earth. I'm full of power by Christ being in me. I have authority because I am in Christ.",
        "I have been bought with a price. I do not own myself. I do not have the liberty to make independent decisions. I have a master who I live for. I am a living sacrifice.",
        "The Bible is God's word. Unbreakable, unchangeable, completely trustworthy and powerful. My life is anchored on the integrity of the word.",
        "I believe in the filling/outpouring of the Spirit, accompanied with speaking in tongues.",
        "Praying in tongues refreshes, charges, edifies, builds us up and helps us pray and give thanks according to God's perfect will.",
        "They that call on the Lord MUST depart from iniquity. Denying the flesh, casting down the old self, obeying the word and the Spirit regardless of consequence, sacrifice or difficulty. We must be willing to suffer like good soldiers of Christ.",
        "Jesus is God. He is the Alpha and Omega. He is the Word made flesh. All things were created by him and for him.",
        "There's no other mediator between God and man. Jesus is the only Way, Truth and Life.",
        "God is good. He is love. There is no evil, wickedness or darkness in him. He does not tempt with evil. He is always just. Never to be blamed.",
        "God wants everyone saved. Every single human. There is no partiality with God. He is not a respecter of persons.",
        "The supernatural is for now. The supernatural is for the church. It is God's desire that we live above human limitations and demonic oppressions. God is glorified when the miraculous is manifested in his church and children.",
        "I believe Jesus is coming back. The dead in Christ will rise. And those alive will receive a celestial body.",
        "I believe in the ministry of angels. They carry out the will of the Father. They help, accompany and protect God's children.",
        "My words are powerful. They are infused with the Spirit and life. I am a life-giving spirit. Dead cells and circumstances come alive in response to my words. Mountains move in response to my words. The anointing of the Spirit is transferred via my words.",
        "My hands are healing hands. Every sick person, irrespective of the ailment, can be healed when I lay my hands on them.",
        "There is an inward witness. The Spirit of God leads via my spirit. There is leading, inspiration and wisdom from within.",
        "God gives me the power to make wealth. God is my provider. He blesses the works of my hands and causes me to be a source of financial blessing to the church and the world at large.",
        "Jesus is Lord. He has supreme authority. Everything bows to his name. It is the name above every other name. There is dominion, authority and power in the name of Jesus.",
        "We have been given the name of Jesus. We have legal right to live, pray and operate in the name of Jesus.",
        "I believe in eternal life in Christ. Life and immortality have been brought to light by the gospel. A Christian may sleep, but a Christian will never die.",
        "Hell is real. A place preserved for Satan and his demons and people who reject the gift of salvation.",
        "The preaching of the gospel is a privilege but a duty. Necessity is laid upon us. We've been given a mandate. A mandate to save the lost. The preaching of the gospel is for every Christian.",
        "The word of God is living, active and operative. The word of God is the sword of the Spirit. The word of God is a good seed and it'll always bear fruit. Fruit of salvation, blessing, healing, righteousness, deliverance.",
        "Our gifts, our honour, our blessings are all by grace. Undeserved and unmerited. We've been blessed with all spiritual blessings IN Christ. It is in Christ, it is by Christ, and we boast in him alone.",
        "We receive by faith what we've been given by grace. Faith is a shield of protection but also a channel for receiving all we've been freely given.",
        "Faith can seem risky, faith can seem stupid, but faith is the only way. We live by faith, we please God by faith, we hear by faith, we prophesy by faith, we heal by faith, we step out by faith, we're saved by faith.",
        "All things were created by Christ and for Christ. Although God gives us pleasure, we do not live for our pleasure. We are for his pleasure, his pleasing, his splendour, his glory, his kingdom.",
        "I believe in biblical standards for morality and godliness. The word is truth. It sets the standard for marriage, sex, generosity, honour, forgiveness, etc.",
        "I believe in the gifts of the Spirit. I believe every Christian can operate in every gift because every Christian has the same Holy Spirit.",
        "I believe in the prophetic. God speaks to people for people. To foretell, to forth-tell, to edify, to warn.",
        "There is a power in salvation to live right. The power of the Spirit that helps a believer walk in the Spirit. But without him we can do nothing.",
        "God heals the brokenhearted. He rescues from trouble. He delivers. Even if everyone else forsakes me, I have a rock. There is a fountain. There is a river that makes glad. God is my helper.",
        "I believe every Christian is called to be a saviour. Called to bring justice to the earth. Open blind eyes, break chains and free those in darkness.",
        "There is no one that cannot be saved. No sin too great, no past too dark, no transgression too great for the blood of Jesus to blot away. Everyone can change, everyone can be saved.",
        "Men of God should be honoured. With respect and with finances. A labourer is worthy of his wages.",
        "Marriage is God's idea. Procreation is God's idea. Family is God's idea.",
        "I believe in the equality of the sexes. I believe that the man is the head of his home. I believe both a man and a woman can be used by God as his vessels.",
        "I believe in the oneness of the Church. We being many are one body. We are all part of one another. No one is greater, no one is lesser. God is not a respecter of persons.",
        "A man's life doesn't consist of the abundance of things he possesses. I do not value myself and others based on material possessions. Although God wants me to prosper, it is not his will that I spend my life in pursuit of prosperity.",
        "I am grossly insufficient on my own. I am a product of mercy. I am dust energised by a treasure within. Without Christ, I can do nothing.",
        "I am the fragrance of God. I am God's atmosphere. I am the light of the world. I am God's solution to the cry of many.",
    ],
}

export const businessData = {
    summary: "Commercial ventures, business strategy, and scaling operations in emerging markets.",
    ventures: [
        {
            title: "Ongar Nig LTD",
            role: "Co-Founder",
            description: "Nigerian cocoa business focused on premium grade sourcing and sustainable farming practices. Partnering with local farmers and exploring export opportunities and opportunities further down the cocoa value chain.",
            metrics: ["Partnered with 50+ Local Farmers", "Exploring Export & Value Chain Opportunities"],
        },
        {
            title: "Lonia & Philio",
            role: "Technical Co-Founder",
            description: "Driving the technical strategy and product development for innovative startups in the telemedicine and relationship-tech spaces.",
            metrics: ["Healthcare Tech", "Consumer App Development"],
        },
    ],
    futureVentures: {
        teaser: "New ventures in agritech, fintech, and industrial automation consulting are on the horizon. Stay tuned for announcements.",
    },
}

export const servicesData = {
    summary: "Professional IT services for businesses and individuals. From web design to AI-powered content creation, I help you build, grow, and automate.",
    paymentLink: "https://www.paypal.me/OAganbi",
    services: [
        {
            title: "Website Design & Development",
            description: "Custom websites for businesses, portfolios, e-commerce stores, and landing pages. Built with modern frameworks, optimised for speed and mobile.",
            icon: "Globe",
            features: ["Business Websites", "E-Commerce", "Landing Pages", "Portfolios"],
        },
        {
            title: "Email Marketing",
            description: "Campaign setup, email template design, automation workflows, and list management using platforms like Mailchimp, ConvertKit, or Brevo.",
            icon: "Mail",
            features: ["Campaign Design", "Automation Flows", "List Management", "Analytics"],
        },
        {
            title: "SEO & Search Optimisation",
            description: "On-page SEO, keyword research, technical audits, and content strategy to improve search rankings and organic traffic.",
            icon: "Search",
            features: ["Keyword Research", "Technical Audits", "Content Strategy", "Performance Tracking"],
        },
        {
            title: "Social Media Advertising",
            description: "Paid ad campaigns across Facebook, Instagram, LinkedIn, and Google. Audience targeting, creative design, and performance tracking.",
            icon: "Megaphone",
            features: ["Facebook & Instagram Ads", "LinkedIn Ads", "Google Ads", "Audience Targeting"],
        },
        {
            title: "AI Video Creation",
            description: "Professional videos generated using AI tools for product demos, explainers, social media content, and promotional material.",
            icon: "Video",
            features: ["Product Demos", "Explainer Videos", "Social Content", "Promo Material"],
        },
        {
            title: "Faceless Video Production",
            description: "Automated YouTube, TikTok, and Instagram content using AI voiceovers, stock footage, and dynamic editing. Ideal for niche channels and passive content strategies.",
            icon: "Film",
            features: ["YouTube Channels", "TikTok Content", "AI Voiceovers", "Niche Automation"],
        },
        {
            title: "Business Intelligence & Dashboards",
            description: "Custom dashboards and reporting solutions using Power BI, Excel, or web-based tools to help businesses make data-driven decisions.",
            icon: "BarChart3",
            features: ["Power BI Dashboards", "Excel Reporting", "KPI Tracking", "Data Visualisation"],
        },
        {
            title: "AI Automation & Integration",
            description: "Streamline business workflows using AI tools, chatbots, and automation platforms. Reduce manual tasks and increase efficiency.",
            icon: "Bot",
            features: ["Workflow Automation", "Chatbots", "AI Integration", "Process Optimisation"],
        },
        {
            title: "Brand Identity & Design",
            description: "Logo design, brand guidelines, and visual identity packages for startups and small businesses.",
            icon: "Palette",
            features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Colour & Typography"],
        },
        {
            title: "Tech Consulting",
            description: "One-on-one advisory for individuals or businesses looking to adopt technology, build digital products, or improve their online presence.",
            icon: "MessageCircle",
            features: ["Digital Strategy", "Product Advisory", "Tech Stack Selection", "Online Presence"],
        },
    ],
}

export const blogData = {
    summary: "Thoughts on engineering, technology, faith, and building businesses.",
    posts: [] as {
        title: string
        excerpt: string
        content: string
        date: string
        category: string
        slug: string
    }[],
}
