// js/core/app-state.js
// Centralized state management for our application.

/**
 * @typedef {Object} AppState
 * @property {string} currentView - The name of the current view being displayed
 * @property {Object} currentData - The data used to render the current view
 */

/**
 * The global application state object.
 * @type {AppState}
 */
export const APP_STATE = {
    currentView: null,
    currentData: null
};

/**
 * Updates the application state and logs the change (for debugging).
 * @param {string} view - The name of the new current view.
 * @param {Object} data - The data associated with the new view.
 */
export function updateAppState(view, data = null) {
    console.log(`App State Update: Navigating to ${view}`);
    APP_STATE.currentView = view;
    APP_STATE.currentData = data;
    
    // For now, just log the state change. Later, we can add more logic here.
    console.log('Current App State:', APP_STATE);
}