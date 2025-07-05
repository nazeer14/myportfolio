import React from 'react';

function Resume() {
  return (
    <div className="mt-4 flex justify-center px-4 sm:px-6 lg:px-0">
      <iframe
        src="\NazeerShaik-Resume.pdf"
        title="Resume"
        className="w-full max-w-4xl rounded-lg border bg-white dark:bg-gray-800 shadow-lg"
        style={{
          minHeight: '600px',
          height: '80vh',
          maxHeight: '90vh',
          boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
          borderRadius: '0.5rem',
        }}
      />
    </div>
  );
}

export default Resume;
