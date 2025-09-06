// js/core/version.js
// Tracks the current version of the Abyssinia Nexus app

export const APP_VERSION = '1.1.0'; // Major.Minor.Patch
export const RELEASE_DATE = '9/6/2025'; 
export const VERSION_NOTES = [
    '✅ Added back button navigation',
    '✅ Improved app state management',
    '✅ Enhanced user experience',
    '✅ Fixed navigation history'
];

// Log version info on import
console.log(`%cAbyssinia Nexus v${APP_VERSION}`, 'color: #4361ee; font-weight: bold;');
console.log('Release Notes:', VERSION_NOTES);