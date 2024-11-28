import React from 'react';

const Schedule = () => {
  return (
    <div className="container mx-auto p-6 pt-20"> {/* Added pt-20 for top padding */}
      <h1 className="text-3xl font-bold mb-6">Kumbh Mela 2025 Schedule</h1>
      <p className="text-lg mb-4">Here are the important dates and events for the Kumbh Mela 2025:</p>
      
      <ul className="list-disc list-inside space-y-2">
        <li><strong>January 14, 2025:</strong> Makar Sankranti - First major bathing day</li>
        <li><strong>January 28, 2025:</strong> Paush Purnima - Second major bathing day</li>
        <li><strong>February 10, 2025:</strong> Mauni Amavasya - Main bathing day</li>
        <li><strong>February 12, 2025:</strong> Basant Panchami - Fourth bathing day</li>
        <li><strong>February 26, 2025:</strong> Maghi Purnima - Fifth bathing day</li>
        <li><strong>March 11, 2025:</strong> Mahashivratri - Sixth bathing day</li>
      </ul>

      <p className="mt-6">Stay tuned for more updates and events during the Kumbh Mela 2025!</p>
    </div>
  );
};

export default Schedule;
