// Week 4 JavaScript Portfolio Project - Data Organization
// learn to organize portfolio data using JavaScript objects and arrays

// Fill in personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Ernest Makaika",        // TODO: Add your name
        title: "Product Manager",      // TODO: Add your professional title
        email: "emakaika@berkeley.edu", // TODO: Add your email
        location: "San Francisco, CA",  // TODO: Add your location  
        bio: "I'm a product manager with a backhround in product design and HCI. Currently a MIMS student at UC Berkeley." // TODO: Add your bio
        },
    
    // Skills as an array
    skills: [
        "Product Management",   // TODO: Replace with your actual skills
        "UX Design",  // TODO: Add more skills
        "Prototyping",    // TODO: Students should have at least 5 skills
        "User Research",    // TODO: Students should have at least 5 skills
        "A/B Testing"    // TODO: Students should have at least 5 skills
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "Beacon",
            description: "Intelligent naviation assistant for blind and low-vision users.",
            technologies: ["HTML", "CSS"], // Array of technologies used
            completionDate: "2025-12-15",   // When you completed it
            featured: true                   // Is this a featured project?
        },
        {
            title: "Cliq", 
            description: "A smart screenshot organizer that surfaces actions",
            technologies: ["Figma", "Claude Code"],
            completionDate: "2025-09-01",
            featured: true
        },

        {
            title: "Swift", 
            description: "Ride-share designed around local mobility habits.",
            technologies: ["Figma", "Claude Code"],
            completionDate: "2026-05-01",
            featured: true
        }
        // TODO: Add more projects during class
    ],
    
    // Contact and availability information
    availability: {
        freelance: false,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// add more console.log() statements to explore the data
// Examples students will try:
console.log("Owner name:", portfolio.owner.name);
console.log("First skill:", portfolio.skills[0]);
console.log("Number of projects:", portfolio.projects.length);

// learn to access nested properties
console.log("Email:", portfolio.owner.email);
console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);

//create summary strings using template literals
let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
console.log("Summary:", summary);