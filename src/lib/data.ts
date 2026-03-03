// Centralized data file for the Aganbi Gare Personal Website.
// Replace mock values with real content or swap with CMS/DB queries later.

export const profile = {
    name: "Aganbi Gare",
    taglines: ["Controls Engineer.", "Builder.", "Author.", "Entrepreneur."],
    bio: "A multidimensional individual spanning engineering, technology, faith, and entrepreneurship.",
    socials: {
        github: "https://github.com/geezzzyy",
        linkedin: "https://www.linkedin.com/in/aganbi/",
        youtube: "https://youtube.com/@aganbigare", // placeholder
        email: "gare@aganbigare.com",
    },
}

export const engineeringData = {
    summary: "Precision engineering, process automation, and robust systems design for industrial applications.",
    cvUrl: "/Gare_Aganbi_CV_.pdf",
    skills: [
        "PLC Programming (Allen Bradley, Siemens)",
        "SCADA Systems (Ignition, Wonderware)",
        "HMI Design",
        "Process Control Strategies",
        "Industrial Networking (EtherNet/IP, Modbus)",
        "Piping and Instrumentation Diagrams (P&ID)",
        "Instrumentation Calibration",
    ],
    experience: [
        {
            role: "Senior Controls Engineer",
            company: "Industrial Automation Ltd.",
            duration: "2019 - Present",
            description: "Lead engineer for full-lifecycle automation projects. Designed and commissioned complex control systems for manufacturing facilities.",
        },
        {
            role: "Controls & Instrumentation Engineer",
            company: "Process Tech Inc.",
            duration: "2015 - 2018",
            description: "Developed PLC logic and SCADA graphics. Performed loop tuning and process optimization for chemical plants.",
        },
    ],
}

export const techData = {
    summary: "Showcase of technical depth, product building, and software engineering leveraging modern stacks.",
    education: "Executive MSc in Information Systems & E-business Management (ISEM)",
    expertise: ["Business Intelligence", "Data Analytics", "Full-Stack Development"],
    projects: [
        {
            title: "Lonia Telemedicine",
            description: "A full-stack telemedicine platform featuring hospital website (loniahospital.com), admin portal, mobile app (React Native/Expo), and NestJS API. Integrates video consultations via Agora and payments via Paystack.",
            tech: ["Next.js", "React Native", "NestJS", "Agora", "Paystack", "Cloudinary"],
            link: "https://loniahospital.com",
            github: null as string | null,
            status: "Live",
        },
        {
            title: "Philio",
            description: "A comprehensive matchmaking and relationship platform mobile app focusing on deep compatibility metrics.",
            tech: ["React Native", "Expo", "Node.js", "PostgreSQL"],
            link: null as string | null,
            github: null as string | null,
            status: "In Development",
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
            title: "Understanding Grace",
            description: "A deep dive into the theological foundations of modern Christianity.",
            year: "2023",
            link: "#",
        },
        {
            title: "Faith in the Workplace",
            description: "Practical reflections on integrating biblical principles with professional life.",
            year: "2021",
            link: "#",
        },
    ],
    sermons: [
        {
            title: "The Power of Stillness",
            date: "November 2023",
            description: "A reflection on finding peace in a chaotic world.",
            youtubeUrl: "#", // Replace with actual YouTube URLs
        },
        {
            title: "Walking by Faith",
            date: "September 2023",
            description: "Trusting God's plan when the path is unclear.",
            youtubeUrl: "#",
        },
        {
            title: "Grace in the Everyday",
            date: "July 2023",
            description: "Discovering God's grace in ordinary moments.",
            youtubeUrl: "#",
        },
    ],
    psalms: [
        {
            reference: "Psalm 23:1-3",
            text: "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul.",
            reflection: "A constant reminder of God's provision in every season of life.",
        },
        {
            reference: "Psalm 46:10",
            text: "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.",
            reflection: "In the noise of building and engineering, stillness before God remains the foundation.",
        },
        {
            reference: "Psalm 127:1",
            text: "Except the Lord build the house, they labour in vain that build it.",
            reflection: "Every venture, every line of code, every business — built on this truth.",
        },
    ],
}

export const businessData = {
    summary: "Commercial ventures, business strategy, and scaling operations in emerging markets.",
    ventures: [
        {
            title: "Ongar Nig LTD",
            role: "Founder & CEO",
            description: "Nigerian cocoa export business focusing on premium grade sourcing, sustainable farming practices, and international supply chain logistics.",
            metrics: ["100+ Tons Exported", "Partnered with 50+ Local Farmers"],
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

export const blogData = {
    summary: "Thoughts on engineering, technology, faith, and building businesses.",
    posts: [
        {
            title: "Building Reliable Systems: Lessons from SCADA to Web Apps",
            excerpt: "What industrial automation taught me about state management and fault tolerance in modern front-end frameworks.",
            content: "Industrial automation has been solving state management problems for decades. SCADA systems handle thousands of I/O points, maintaining consistency across distributed controllers. The patterns I learned commissioning control systems — deterministic state machines, watchdog timers, graceful degradation — translate directly to building resilient web applications. In this post, I explore how thinking like a controls engineer makes you a better software developer.",
            date: "October 12, 2023",
            category: "Engineering",
            slug: "building-reliable-systems",
        },
        {
            title: "The Architecture of Philio",
            excerpt: "A deep dive into how we structured the backend to handle complex matching algorithms at scale.",
            content: "Building a matchmaking platform isn't just about swiping. Philio's compatibility engine processes multi-dimensional preference vectors to find meaningful connections. We chose a microservices architecture with PostgreSQL for relational data and Redis for real-time matching queues. The challenge was balancing algorithmic complexity with response time — users expect instant results even when the math behind the scenes is substantial.",
            date: "September 05, 2023",
            category: "Technology",
            slug: "architecture-of-philio",
        },
        {
            title: "Finding Stillness in the Hustle",
            excerpt: "Reflections on balancing faith, entrepreneurship, and the relentless pursuit of building things.",
            content: "There's a tension between building and being still. As an entrepreneur and engineer, the drive to create, ship, and scale is relentless. But faith teaches a different rhythm — one of rest, trust, and surrender. This post is a personal reflection on how I navigate that tension, finding moments of stillness in the middle of sprint cycles and product launches.",
            date: "August 20, 2023",
            category: "Faith",
            slug: "finding-stillness",
        },
    ],
}
