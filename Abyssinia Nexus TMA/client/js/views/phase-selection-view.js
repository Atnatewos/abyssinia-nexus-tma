// js/views/phase-selection-view.js
// This module renders the list of phases for a selected course.

// Import navigation functions
import { renderWeekSelection } from './week-selection-view.js';
import { updateAppState } from '../core/app-state.js';

/**
 * Renders the Phase Selection view.
 * @param {Array} phasesData - The array of phase objects to display.
 * @param {string} courseName - The name of the selected course (for the header).
 */
export function renderPhaseSelection(phasesData, courseName) {
    console.log("Rendering Phase Selection for course:", courseName);
    
    // 1. Get the container where we will inject our view
    const viewContainer = document.getElementById('view-container');
    
    // 2. Create the HTML for the phase selection view
    let htmlContent = `
        <div class="view__header">
            <h1>${courseName}</h1>
            <p class="view__subtitle">Select a phase to continue</p>
        </div>
        <div class="phase-list">
    `;
    
    // 3. Loop through the phases and create a card for each one
    phasesData.forEach(phase => {
        htmlContent += `
            <article class="card phase-card" data-phase-id="${phase.id}">
                <h2 class="phase-card__title">${phase.name}</h2>
                <p class="phase-card__description">${phase.description}</p>
            </article>
        `;
    });
    
    htmlContent += `</div>`; // Close the phase-list div
    
    // 4. Inject the HTML into the container
    viewContainer.innerHTML = htmlContent;
    
    // 5. Add click event listeners to each phase card
    const phaseCards = document.querySelectorAll('.phase-card');
    phaseCards.forEach(card => {
        card.addEventListener('click', () => {
            // Find the phase ID from the data attribute
            const phaseId = parseInt(card.getAttribute('data-phase-id'));
            // Find the full phase object from our data
            const selectedPhase = phasesData.find(phase => phase.id === phaseId);
            
            console.log("Selected phase:", selectedPhase.name);
            
            // Navigate to the Week Selection view!
            renderWeekSelection(selectedPhase.weeks, selectedPhase.name);
            updateAppState('week-selection', selectedPhase);
        });
    });
    
    // 6. Make sure the main app container is visible
    const appContainer = document.getElementById('app-container');
    appContainer.hidden = false;
}