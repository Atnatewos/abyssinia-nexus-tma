// js/views/splash-view.js
// This module is responsible for showing and hiding the splash screen.

/**
 * Renders the Abyssinia Nexus splash screen.
 * This function creates the HTML and injects it into the splash screen container.
 */
export function renderSplashScreen() {
    console.log("Rendering Splash Screen...");
    
    // Get the splash screen container element
    const splashContainer = document.getElementById('splash-screen');
    
    // Create the splash screen HTML content
    splashContainer.innerHTML = `
        <img src="assets/images/logo.png" alt="Abyssinia Nexus Logo" class="splash-screen__logo">
        <h1 class="splash-screen__title">Abyssinia Nexus</h1>
        <p class="splash-screen__tagline">Master Full-Stack Development</p>
    `;
    
    // Make sure the splash screen is visible
    splashContainer.classList.remove('splash-screen--hidden');
    splashContainer.hidden = false;
}

/**
 * Hides the splash screen with a smooth fade-out animation.
 * This is called after the timeout in main.js.
 */
export function hideSplashScreen() {
    console.log("Hiding Splash Screen...");
    
    const splashContainer = document.getElementById('splash-screen');
    
    // Add the class that triggers the fade-out animation
    splashContainer.classList.add('splash-screen--hidden');
    
    // After the animation completes, hide it completely
    setTimeout(() => {
        splashContainer.hidden = true;
    }, 300); // This should match the CSS animation duration
}