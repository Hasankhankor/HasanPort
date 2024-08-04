import React from 'react';
import Link from 'next/link';
const Projects = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="border rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">BudgetBuddy</h2>
          <p className="mb-4">
            A website for managing finances with features like user authentication, CSV file import/export, and more.
          </p>
          <a href="https://your-budgetbuddy-url.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            View Project
          </a>
        </div>

        {/* Project 2 */}
        <div className="border rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">HassanTools</h2>
          <p className="mb-4">
            A collection of tools including a color converter, image converter, password generator, and more.
          </p>
          <a href="https://your-hassantools-url.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            View Project
          </a>
        </div>

        {/* Project 3 */}
        <div className="border rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">HassEditPro</h2>
          <p className="mb-4">
            A powerful video editing website with a user-friendly interface for professional editors and hobbyists.
          </p>
          <a href="https://your-hasseditpro-url.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            View Project
          </a>
        </div>

        {/* Add more projects as needed */}
      </div>
    </div>
  );
};

export default Projects;
