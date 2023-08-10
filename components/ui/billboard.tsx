import { BillBoard } from '@/store';
import Image from 'next/image';
import React from 'react';

interface BillboardProps {
  data: BillBoard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <Image fill priority src={data?.imageUrl} alt={data?.label} />
      </div>
    </div>
  );
};

export default Billboard;
