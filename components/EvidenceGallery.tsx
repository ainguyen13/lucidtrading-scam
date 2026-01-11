import React, { useState } from 'react';
import { X, ZoomIn, ImageOff } from 'lucide-react';

export interface EvidenceImage {
  src: string;
  alt: string;
  caption: string;
}

interface EvidenceGalleryProps {
  images: EvidenceImage[];
  title?: string;
  aspect?: "video" | "vertical" | "auto";
  cols?: 1 | 2 | 3;
  layout?: "grid" | "timeline"; // Added for timeline view
}

export const EvidenceGallery: React.FC<EvidenceGalleryProps> = ({
  images,
  title = "Verified Evidence",
  aspect = "video",
  cols = 3,
  layout = "grid"
}) => {
  const [selectedImage, setSelectedImage] = useState<EvidenceImage | null>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleError = (index: number) => {
    setFailedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  // Determine height/aspect class
  const aspectClass = aspect === "vertical"
    ? "aspect-[3/4]"
    : aspect === "auto"
      ? "h-auto"
      : "aspect-video";

  // Determine grid class
  const gridClass = cols === 1
    ? "grid-cols-1"
    : cols === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="space-y-6 mt-8">
      {title && (
        <h3 className="text-slate-900 font-semibold text-lg flex items-center gap-2 border-l-4 border-red-500 pl-4">
          {title}
        </h3>
      )}

      {/* Container based on layout */}
      <div className={layout === "timeline"
        ? "flex overflow-x-auto pb-6 snap-x snap-mandatory gap-6 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 -mx-4 md:-mx-6 px-4 md:px-6 w-[calc(100%+2rem)] md:w-[calc(100%+3rem)]"
        : `grid ${gridClass} gap-6`
      }>
        {images.map((img, idx) => {
          const isFailed = failedImages.has(idx);

          return (
            <div
              key={`${idx}-${img.src}`}
              className={`
                group relative bg-white rounded-lg overflow-hidden border transition-all shadow-lg
                ${isFailed ? 'border-red-500/50' : 'border-slate-200 cursor-pointer hover:border-slate-400'}
                ${layout === "timeline" ? "flex-none w-[85vw] md:w-[500px] snap-center" : ""}
                ${aspectClass}
              `}
              onClick={() => !isFailed && setSelectedImage(img)}
            >
              {isFailed ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900/50 p-4 text-center">
                  <ImageOff size={32} className="mb-2 text-red-500 opacity-80" />
                  <span className="text-xs font-mono text-red-400 font-bold">Image Not Found</span>
                  <span className="text-[10px] text-slate-500 mt-2 break-all px-2 border border-slate-700 rounded bg-black/20">{img.src}</span>
                </div>
              ) : (
                <>
                  <img
                    src={img.src}
                    alt={img.alt}
                    onError={() => handleError(idx)}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="text-white w-10 h-10 drop-shadow-lg" />
                  </div>
                </>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent text-xs text-slate-200 translate-y-full group-hover:translate-y-0 transition-transform">
                {img.caption}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full text-white hover:bg-slate-700 transition-colors z-[110]"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl border border-slate-800"
            />
            <p className="text-center text-slate-300 mt-4 px-4 py-2 bg-slate-900/80 rounded-full border border-slate-700 text-sm">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};