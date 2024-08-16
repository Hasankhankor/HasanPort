import React from 'react';
import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter();

  // This function will navigate to the specific project URL
  const navigateToProject = (projectUrl) => {
    window.location.href = projectUrl; // Use window.location.href for external links
  };

  // Sample projects data with external URLs
  const projects = [
    { id: 1, title: 'CodeKit By Hassan', price: 'TW Components', imageUrl: 'https://ik.imagekit.io/os33grffu/code2.JPG?updatedAt=1723830890006', url: 'https://codekitx.netlify.app/' },
    { id: 2, title: 'CarouselCraft by Hassan', price: 'Edit Cards', imageUrl: 'https://ik.imagekit.io/os33grffu/cri.JPG?updatedAt=1723830899128', url: 'https://carouselcraft-by-hasan.netlify.app/' },
    { id: 3, title: 'CV By Hasan', price: 'Edit, Read CV', imageUrl: 'https://ik.imagekit.io/os33grffu/cv%20by.PNG?updatedAt=1723831212724', url: 'https://cv-by-hassan.vercel.app/' },
    { id: 4, title: 'Hass Edit Pro', price: 'Edit Videos', imageUrl: 'https://ik.imagekit.io/os33grffu/edpro.PNG?updatedAt=1723831316970', url: 'https://hass-edit-pro.vercel.app/' },
    { id: 5, title: 'Web IDE', price: 'HTML,CSS,JS IDE', imageUrl: 'https://ik.imagekit.io/os33grffu/wev.JPG?updatedAt=1723831727856', url: 'https://code-with-hassan.vercel.app/' },
    { id: 6, title: 'Flimflix', price: 'Movies List', imageUrl: 'https://ik.imagekit.io/os33grffu/flim.JPG?updatedAt=1723832776912', url: 'https://github.com/Hasankhankor/Flimflix-Nextjs-Movies-' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-4">
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          <div
            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          ></div>

          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              {project.title}
            </h3>

            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <span className="font-bold text-gray-800 dark:text-gray-200">{project.price}</span>
              <button
                onClick={() => navigateToProject(project.url)}
                className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-green-400 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
              >
                View Project
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
