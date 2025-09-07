'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PhotoGalleryProps {
  photos: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  title: string;
  emoji: string;
}

export default function PhotoGallery({ photos, title, emoji }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number>(0);

  const selectPhoto = (index: number) => {
    setSelectedPhoto(index);
  };

  return (
    <div className="text-center p-6 glass rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="font-semibold text-white mb-6 text-lg">{title}</h3>
      
      {photos.length > 0 ? (
        <div className="space-y-4">
          {/* Main display area - shows selected photo larger with square ratio */}
          <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
            <Image
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              fill
              className="object-cover transition-all duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                console.log(`Failed to load image: ${photos[selectedPhoto].src}`);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          
          {/* Thumbnail grid - shows all photos as clickable thumbnails */}
          {photos.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                    selectedPhoto === index 
                      ? 'ring-2 ring-blue-400 opacity-100' 
                      : 'opacity-70 hover:opacity-90'
                  }`}
                  onClick={() => selectPhoto(index)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 12vw, 8vw"
                    onError={(e) => {
                      console.log(`Failed to load image: ${photo.src}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="aspect-square rounded-xl bg-gray-700/30 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Add photos here</span>
        </div>
      )}
    </div>
  );
}
