// js/main.js
// Abyssinia Nexus - Main Entry Point

// Import our modules
import { renderSplashScreen, hideSplashScreen } from './views/splash-view.js';
import { renderCourseShelf } from './views/course-shelf-view.js';
import { updateAppState } from './core/app-state.js';
import { COURSE_DATA } from './data/courses.js';

// Main initialization function
function initializeApp() {
    console.log("🚀 Initializing Abyssinia Nexus App...");
    
    // 1. Render the splash screen immediately
    renderSplashScreen();
    updateAppState('splash-screen');
    
    // 2. Initialize Telegram WebApp
    initializeTelegram();
    
    // 3. Set a timeout to hide the splash screen and move to the next view
    setTimeout(() => {
        console.log("⏰ 2.5s timeout finished. Hiding splash and showing course shelf...");
        hideSplashScreen();
        
        // LOG THE DATA TO CONSOLE TO SEE IF IT'S LOADED
        console.log("Course Data:", COURSE_DATA);
        
        // AFTER SPLASH: Render the Course Shelf!
        renderCourseShelf(COURSE_DATA.courses);
        updateAppState('course-shelf', COURSE_DATA.courses);
        console.log("✅ Course shelf render function was called.");
    }, 2500);
}

/**
 * Handles all Telegram-specific initialization
 */
function initializeTelegram() {
    console.log("🤖 Initializing Telegram WebApp...");
    
    // Expand the app to fill the screen
    Telegram.WebApp.expand();
    
    // Check if we have user data from Telegram
    const user = Telegram.WebApp.initDataUnsafe.user;
    if (user) {
        console.log("User data from Telegram:", user);
        // TODO: Personalize the experience based on user data
    } else {
        console.log("No user data available. Running in preview mode?");
    }
    
    // Enable closing confirmation (optional)
    Telegram.WebApp.enableClosingConfirmation();
}

// Start the app when the DOM is fully loaded
if (document.readyState === 'loading') {
    console.log("📄 DOM is still loading, adding event listener...");
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    console.log("📄 DOM is already ready, calling initializeApp directly...");
    initializeApp();
}

console.log("🔥 main.js finished loading (but async imports may still be pending)");