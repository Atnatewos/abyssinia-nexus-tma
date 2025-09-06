// js/views/class-list-view.js
// This module renders the list of classes for a selected week.

// Import navigation functions
import { renderClassDetail } from './class-detail-view.js';
import { updateAppState } from '../core/app-state.js';

/**
 * Renders the Class List view.
 * @param {Array} classesData - The array of class objects to display.
 * @param {string} weekName - The name of the selected week (for the header).
 */
export function renderClassList(classesData, weekName) {
    console.log("Rendering Class List for week:", weekName);
    
    // 1. Get the container where we will inject our view
    const viewContainer = document.getElementById('view-container');
    
    // 2. Create the HTML for the class list view
    let htmlContent = `
        <div class="view__header">
            <h1>${weekName}</h1>
            <p class="view__subtitle">Select a class to view materials</p>
        </div>
        <div class="class-list">
    `;
    
    // 3. Check if this week has any classes yet
    if (classesData.length === 0) {
        htmlContent += `
            <div class="card">
                <p>No classes added for this week yet. 🚀</p>
                <p>Check back later or contact your instructor.</p>
            </div>
        `;
    } else {
        // 4. Loop through the classes and create a card for each one
        classesData.forEach(classItem => {
            htmlContent += `
                <article class="card class-card" data-class-id="${classItem.id}">
                    <h2 class="class-card__title">${classItem.name}</h2>
                    <div class="class-card__actions">
                        <span class="badge">Click to open</span>
                    </div>
                </article>
            `;
        });
    }
    
    htmlContent += `</div>`; // Close the class-list div
    
    // 5. Inject the HTML into the container
    viewContainer.innerHTML = htmlContent;
    
    // 6. Only add click events if there are actual classes
    if (classesData.length > 0) {
        const classCards = document.querySelectorAll('.class-card');
        classCards.forEach(card => {
            card.addEventListener('click', () => {
                // Find the class ID from the data attribute
                const classId = parseInt(card.getAttribute('data-class-id'));
                // Find the full class object from our data
                const selectedClass = classesData.find(classItem => classItem.id === classId);
                
                console.log("Selected class:", selectedClass.name);
                
                // Navigate to the Class Detail view!
                renderClassDetail(selectedClass, selectedClass.name);
                updateAppState('class-detail', selectedClass);
            });
        });
    }
    
    // 7. Make sure the main app container is visible
    const appContainer = document.getElementById('app-container');
    appContainer.hidden = false;
}