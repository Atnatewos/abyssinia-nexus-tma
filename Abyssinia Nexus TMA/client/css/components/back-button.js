// js/components/back-button.js
// Component for the back button functionality

import { goBack } from '../core/app-state.js';

/**
 * Creates and returns a back button element.
 * @returns {HTMLElement} The back button element.
 */
export function createBackButton() {
    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.innerHTML = '← Back';
    backButton.setAttribute('aria-label', 'Go back to previous screen');
    
    // Add click event to handle back navigation
    backButton.addEventListener('click', () => {
        goBack();
    });
    
    return backButton;
}

/**
 * Adds a back button to the app header.
 */
export function renderBackButton() {
    const appHeader = document.querySelector('.app-header');
    if (appHeader) {
        // Clear existing header content and add back button
        appHeader.innerHTML = '';
        appHeader.appendChild(createBackButton());
        appHeader.hidden = false; // Make sure header is visible
    }
}