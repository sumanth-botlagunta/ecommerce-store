'use client';
import { cn } from '@/lib/utils';
import { Image as ImageType } from '@/store';
import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryProps {
  data: ImageType[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ data }) => {
  const [mainImage, setMainImage] = useState<ImageType>(data[0]);
  return (
    <div className="flex flex-col gap-3 p-7 ml-8">
      <div className="w-[400px] h-[400px] relative rounded-md">
        <Image
          fill
          src={mainImage.url}
          alt={mainImage.url}
          className="rounded-md"
        />
      </div>

      <div className="flex gap-3">
        {data.map((image, index) => (
          <div
            key={image.id}
            className={cn(
              'w-[90px] h-[90px] object-cover relative rounded-md',
              image.id === mainImage.id ? 'border-2 border-blue-500' : ''
            )}
            onClick={() => setMainImage(image)}
          >
            <Image
              fill
              src={image.url}
              alt={image.url}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
