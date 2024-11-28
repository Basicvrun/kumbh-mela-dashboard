@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Styles */
body {
  @apply bg-gray-900 text-gray-300; /* Set background and text colors for the body */
}

.header {
  @apply bg-deepBlue text-white; /* Use the updated color class */
}

.button-primary {
  @apply bg-saffron text-white rounded-full px-4 py-2 hover:bg-deepBlue transition-colors; /* Updated to direct color names */
}

.button-secondary {
  @apply bg-lightGold text-warmGrey rounded-full px-4 py-2 hover:bg-brickRed transition-colors; /* Updated to direct color names */
}

.card {
  @apply bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105;
}

/* Custom cursor styles */
body {
  cursor: none; /* Hide default cursor */
}

.cursor {
  position: fixed;
  width: 20px; /* Adjust size */
  height: 20px; /* Adjust size */
  background-color: rgba(255, 99, 71, 0); /* Customize the fill color */
  border: 4px solid rgba(255, 255, 255, 0.8); /* Customize the border color */
  border-radius: 50%;
  pointer-events: none; /* Make sure it doesn't interfere with clicking */
  mix-blend-mode: difference; /* Makes the cursor stand out on all backgrounds */
  animation: swirl 1s infinite linear; /* Add continuous swirl animation */
}

/* Swirl animation */
@keyframes swirl {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(-50%, -50%) rotate(90deg) scale(1.2);
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg) scale(1);
  }
  75% {
    transform: translate(-50%, -50%) rotate(270deg) scale(1.2);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) scale(1);
  }
}
