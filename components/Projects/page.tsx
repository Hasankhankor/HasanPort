import React from 'react';

export default function Project() {
  const projects = [
    { id: 1, title: 'CodeKit By Hassan', price: 'TW Components', imageUrl: 'https://ik.imagekit.io/os33grffu/code2.JPG?updatedAt=1723830890006', url: 'https://codekitx.netlify.app/' },
    { id: 2, title: 'CarouselCraft by Hassan', price: 'Edit Cards', imageUrl: 'https://ik.imagekit.io/os33grffu/cri.JPG?updatedAt=1723830899128', url: 'https://carouselcraft-by-hasan.netlify.app/' },
    { id: 3, title: 'CV By Hasan', price: 'Edit, Read CV', imageUrl: 'https://ik.imagekit.io/os33grffu/cv%20by.PNG?updatedAt=1723831212724', url: 'https://cv-by-hassan.vercel.app/' },
    { id: 4, title: 'Hass Edit Pro', price: 'Edit Videos', imageUrl: 'https://ik.imagekit.io/os33grffu/v34.JPG?updatedAt=1723917377895', url: 'https://hass-edit-pro.vercel.app/' },
    { id: 5, title: 'Web IDE', price: 'HTML,CSS,JS IDE', imageUrl: 'https://ik.imagekit.io/os33grffu/wev.JPG?updatedAt=1723831727856', url: 'https://code-with-hassan.vercel.app/' },
    { id: 6, title: 'Flimflix', price: 'Movies List', imageUrl: 'https://ik.imagekit.io/os33grffu/flim.JPG?updatedAt=1723832776912', url: 'https://github.com/Hasankhankor/Flimflix-Nextjs-Movies-' },
    { id: 7, title: 'Format Fusion', price: 'Multimedia conversion', imageUrl: 'https://ik.imagekit.io/os33grffu/Screenshot%202024-11-30%20205426.png?updatedAt=1732982083746', url: 'https://github.com/Hasankhankor/Format-Fusion' },
    { id: 8, title: 'QR-Dynamics', price: 'QR code Gen', imageUrl: 'https://ik.imagekit.io/os33grffu/Screenshot%202024-11-25%20211542.png?updatedAt=1732981913551', url: 'https://github.com/Hasankhankor/QR-Dynamics-by-Hassan' },
    { id: 9, title: 'Easy-ConvertX ', price: 'Unit Converter ', imageUrl: 'https://ik.imagekit.io/os33grffu/g.JPG?updatedAt=1732982425256', url: 'https://github.com/Hasankhankor/Easy-ConvertX' },
    { id: 10, title: 'Vector-Swap-SVG', price: 'Convert your VectorDrawable files to SVG', imageUrl: 'https://ik.imagekit.io/os33grffu/v3.JPG?updatedAt=1732983344729', url: 'https://github.com/Hasankhankor/Vector-Swap-SVG-NextJS-' },
    { id: 11, title: 'Wp-to-NextJS', price: ' WordPress Redirects from RankMath or YoastSEO ', imageUrl: 'https://ik.imagekit.io/os33grffu/v35.JPG?updatedAt=1732983345164', url: 'https://github.com/Hasankhankor/Wp-to-NextJS' },
    { id: 12, title: 'QuizChowk ', price: 'Online Quiz ', imageUrl: 'https://ik.imagekit.io/os33grffu/qw23.JPG?updatedAt=1732983344359', url: 'https://github.com/Hasankhankor/QuizChowk' },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative group transform transition duration-500 hover:scale-105"
        >
          <div
            className="w-full h-64 bg-gray-200 bg-center bg-cover rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-500 rounded-lg"></div>
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-sm">{project.price}</p>
          </div>
          <button
            onClick={() => window.open(project.url, '_blank')}
            className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white uppercase bg-green-500 rounded hover:bg-green-600 transition duration-300"
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}
