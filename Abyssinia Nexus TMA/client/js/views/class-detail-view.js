// js/views/class-detail-view.js
// This module renders the detailed view for a single class with all materials.

/**
 * Renders the Class Detail view with videos and materials.
 * @param {Object} classData - The class object with all its materials.
 * @param {string} className - The name of the selected class (for the header).
 */
export function renderClassDetail(classData, className) {
    console.log("Rendering Class Detail for:", className);
    
    // 1. Get the container where we will inject our view
    const viewContainer = document.getElementById('view-container');
    
    // 2. Create the HTML for the class detail view
    let htmlContent = `
        <div class="view__header">
            <h1>${className}</h1>
            <p class="view__subtitle">Access all class materials</p>
        </div>
        
        <div class="class-detail">
    `;
    
    // 3. Add Live Session Section
    htmlContent += `
        <section class="material-section">
            <h2 class="material-section__title">🎥 Live Session</h2>
            <a href="https://www.youtube.com/watch?v=${classData.live_session.youtube_id}" 
               target="_blank" class="video-link">
               ${classData.live_session.name}
            </a>
        </section>
    `;
    
    // 4. Add Session by Session Sections
    htmlContent += `
        <section class="material-section">
            <h2 class="material-section__title">📚 Session by Session</h2>
            <div class="video-list">
    `;
    
    classData.session_by_session.forEach((session, index) => {
        htmlContent += `
            <a href="https://www.youtube.com/watch?v=${session.youtube_id}" 
               target="_blank" class="video-link">
               ${index + 1}. ${session.name}
            </a>
        `;
    });
    
    htmlContent += `
            </div>
        </section>
    `;
    
    // 5. Add Placeholder Sections for Future Materials (Version 2)
    htmlContent += `
        <section class="material-section">
            <h2 class="material-section__title">✅ Class Checklist</h2>
            <p class="coming-soon">Will be available in the next update!</p>
        </section>
        
        <section class="material-section">
            <h2 class="material-section__title">📝 Class Notes</h2>
            <p class="coming-soon">Will be available in the next update!</p>
        </section>
        
        <section class="material-section">
            <h2 class="material-section__title">🔗 Reference Materials</h2>
            <p class="coming-soon">Will be available in the next update!</p>
        </section>
    `;
    
    htmlContent += `</div>`; // Close the class-detail div
    
    // 6. Inject the HTML into the container
    viewContainer.innerHTML = htmlContent;
    
    // 7. Make sure the main app container is visible
    const appContainer = document.getElementById('app-container');
    appContainer.hidden = false;
}