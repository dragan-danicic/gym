var application = require('./application');

// Initialize and start the NodeJS application
if (application.initialize()) {
    console.log("Running application.")
    application.run();
} else {
    // Something failed to initialize properly
    console.log("Failed to initialize application.");
} 