// js/views/course-shelf-view.js
// This module renders the main menu view (the list of courses).

// Import navigation functions
import { renderPhaseSelection } from './phase-selection-view.js';
import { updateAppState } from '../core/app-state.js';

/**
 * Renders the Course Shelf view, which is the main menu of the app.
 * It displays available courses as clickable cards.
 * @param {Array} coursesData - The array of course objects to display.
 */
export function renderCourseShelf(coursesData) {
    console.log("Rendering Course Shelf...");
    
    // 1. Get the container where we will inject our view
    const viewContainer = document.getElementById('view-container');
    
    // 2. Create the HTML for the course shelf
    let htmlContent = `
        <div class="view__header">
            <h1>Available Courses</h1>
        </div>
        <div class="course-list">
    `;
    
    // 3. Loop through the courses and create a card for each one
    coursesData.forEach(course => {
        htmlContent += `
            <article class="card course-card" data-course-id="${course.id}">
                <h2 class="course-card__title">${course.name}</h2>
                <p class="course-card__description">${course.description}</p>
            </article>
        `;
    });
    
    htmlContent += `</div>`; // Close the course-list div
    
    // 4. Inject the HTML into the container
    viewContainer.innerHTML = htmlContent;
    
    // 5. Now, add click event listeners to each course card
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('click', () => {
            // Find the course ID from the data attribute we set
            const courseId = parseInt(card.getAttribute('data-course-id'));
            // Find the full course object from our data
            const selectedCourse = coursesData.find(course => course.id === courseId);
            
            console.log("Selected course:", selectedCourse.name);
            
            // Navigate to the Phase Selection view!
            renderPhaseSelection(selectedCourse.phases, selectedCourse.name);
            updateAppState('phase-selection', selectedCourse);
        });
    });
    
    // 6. Make sure the main app container is visible
    const appContainer = document.getElementById('app-container');
    appContainer.hidden = false;
}