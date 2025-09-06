// js/views/week-selection-view.js
// This module renders the list of weeks for a selected phase.

// Import navigation functions
import { renderClassList } from './class-list-view.js';
import { updateAppState } from '../core/app-state.js';

/**
 * Renders the Week Selection view.
 * @param {Array} weeksData - The array of week objects to display.
 * @param {string} phaseName - The name of the selected phase (for the header).
 */
export function renderWeekSelection(weeksData, phaseName) {
    console.log("Rendering Week Selection for phase:", phaseName);
    
    // 1. Get the container where we will inject our view
    const viewContainer = document.getElementById('view-container');
    
    // 2. Create the HTML for the week selection view
    let htmlContent = `
        <div class="view__header">
            <h1>${phaseName}</h1>
            <p class="view__subtitle">Select a week to continue</p>
        </div>
        <div class="week-list">
    `;
    
    // 3. Check if this phase has any weeks yet
    if (weeksData.length === 0) {
        htmlContent += `
            <div class="card">
                <p>Content for this phase is coming soon! 🚀</p>
                <p>Check back later or contact your instructor.</p>
            </div>
        `;
    } else {
        // 4. Loop through the weeks and create a card for each one
        weeksData.forEach(week => {
            htmlContent += `
                <article class="card week-card" data-week-id="${week.id}">
                    <h2 class="week-card__title">${week.name}</h2>
                </article>
            `;
        });
    }
    
    htmlContent += `</div>`; // Close the week-list div
    
    // 5. Inject the HTML into the container
    viewContainer.innerHTML = htmlContent;
    
    // 6. Only add click events if there are actual weeks
    if (weeksData.length > 0) {
        const weekCards = document.querySelectorAll('.week-card');
        weekCards.forEach(card => {
            card.addEventListener('click', () => {
                // Find the week ID from the data attribute
                const weekId = parseInt(card.getAttribute('data-week-id'));
                // Find the full week object from our data
                const selectedWeek = weeksData.find(week => week.id === weekId);
                
                console.log("Selected week:", selectedWeek.name);
                
                // Navigate to the Class List view!
                renderClassList(selectedWeek.classes, selectedWeek.name);
                updateAppState('class-list', selectedWeek);
            });
        });
    }
    
    // 7. Make sure the main app container is visible
    const appContainer = document.getElementById('app-container');
    appContainer.hidden = false;
}