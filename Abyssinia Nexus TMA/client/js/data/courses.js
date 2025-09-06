// js/data/courses.js
// This file contains all the course data for Abyssinia Nexus.
// We structure it as a constant variable that we can import anywhere.

/**
 * @constant {Object} COURSE_DATA
 * @description The main data object containing all courses, phases, weeks, and classes.
 * This is a simplified version for our MVP (Version 1).
 */
export const COURSE_DATA = {
    courses: [
        {
            id: 1,
            name: "Full-Stack Web Development",
            description: "Master modern web development from front-end to back-end.",
            phases: [
                {
                    id: 1,
                    name: "Phase 1: Foundation",
                    description: "HTML, CSS, Git & GitHub",
                    weeks: [
                        {
                            id: 1,
                            name: "Week 1",
                            classes: [
                                {
                                    id: 101,
                                    name: "Class 1: Intro to Web & HTML",
                                    // For MVP, we just need the YouTube ID for the link
                                    live_session: { name: "Live Session 1", youtube_id: "dQw4w9WgXcQ" }, // Example ID
                                    session_by_session: [
                                        { name: "Part 1: Basics", youtube_id: "dQw4w9WgXcQ" },
                                        { name: "Part 2: Elements", youtube_id: "dQw4w9WgXcQ" }
                                    ]
                                },
                                {
                                    id: 102,
                                    name: "Class 2: Advanced CSS",
                                    live_session: { name: "Live Session 2", youtube_id: "dQw4w9WgXcQ" },
                                    session_by_session: [
                                        { name: "Part 1: Flexbox", youtube_id: "dQw4w9WgXcQ" },
                                        { name: "Part 2: Grid", youtube_id: "dQw4w9WgXcQ" }
                                    ]
                                },
                                {
                                    id: 103,
                                    name: "Class 1: Cloning a Simple Website",
                                    // For MVP, we just need the YouTube ID for the link
                                    live_session: { name: "Live Session 1", youtube_id: "dQw4w9WgXcQ" }, // Example ID
                                    session_by_session: [
                                        { name: "Part 1: Basics", youtube_id: "dQw4w9WgXcQ" },
                                        { name: "Part 2: Elements", youtube_id: "dQw4w9WgXcQ" }
                                    ]
                                },
                            ]
                        },
                        // We can add more weeks and phases later
                    ]
                },
                {
                    id: 2,
                    name: "Phase 2: JavaScript",
                    description: "Learn the language of the web.",
                    weeks: [
                        
                    ] // We'll fill this in later
                },
                {
                    id: 3,
                    name: "Phase 3: Frontend Framework",
                    description: "React, State Management, and Advanced UI",
                    weeks: [] // We'll fill this in later
                },
                {
                    id: 4,
                    name: "Phase 4: Backend Development",
                    description: "Node.js, Express, Databases, and APIs",
                    weeks: [] // We'll fill this in later
                },
                {
                    id: 5,
                    name: "Phase 5: Capstone & Deployment",
                    description: "Build a full project and deploy it to the world",
                    weeks: [] // We'll fill this in later
                }
            ]
        }
    ]
};