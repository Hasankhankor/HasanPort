import React, { useState } from 'react';

// URLs for images
const images = [
  'https://ik.imagekit.io/os33grffu/wallet%20app%20ui.PNG?updatedAt=1722191996485',
  'https://ik.imagekit.io/os33grffu/csos.PNG?updatedAt=1721845003791',
  'https://ik.imagekit.io/os33grffu/Movies%202.PNG?updatedAt=1721845054873',
  'https://ik.imagekit.io/os33grffu/ai.PNG?updatedAt=1721845097640',
  'https://ik.imagekit.io/os33grffu/Sstore.PNG?updatedAt=1721845124578',
];

// Card labels
const labels = [
  { main: 'Medical Store ', sub: 'Hassan Tariq' },
  { main: 'Herbal Store UI', sub: 'Hassan Tariq' },
  { main: 'Fussion TV Stream PK', sub: 'Hassan Tariq' },
  { main: 'AI Portfolio', sub: 'Hassan Tariq' },
  { main: 'Sneakers Store', sub: 'Hassan Tariq' },
];

const OptionsComponent: React.FC = () => {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen">

      <div
        className={`group relative w-full md:w-[900px] h-[350px] overflow-hidden rounded-xl mb-6 transition-transform duration-300 ${
          zoomedIndex === 0 ? 'scale-105' : ''
        }`}
        onMouseEnter={() => setZoomedIndex(0)}
        onMouseLeave={() => setZoomedIndex(null)}
        onClick={() => setZoomedIndex(0)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-300 group-hover:from-black/50" />
        <img
          src={images[0]}
          alt="Featured Card"
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img
            src="https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png"
            alt="Figma Logo"
            className="w-16 h-16 mb-2"
          />
          <h2 className="text-2xl font-bold text-white">Figma UI&apos;s</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            className={`group relative h-[180px] overflow-hidden rounded-xl mb-4 transition-transform duration-300 ${
              zoomedIndex === index + 1 ? 'scale-105' : ''
            }`}
            onMouseEnter={() => setZoomedIndex(index + 1)}
            onMouseLeave={() => setZoomedIndex(null)}
            onClick={() => setZoomedIndex(index + 1)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-300 group-hover:from-black/50" />
            <img
              src={image}
              alt={`Card ${index + 1}`}
              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 group-hover:translate-y-4">
              <h4 className="text-lg font-bold text-white">{labels[index + 1].main}</h4>
              <p className="mt-1 text-white/80">{labels[index + 1].sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsComponent;
