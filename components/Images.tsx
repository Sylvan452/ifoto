'use client';

import Image from 'next/image';
import useSWR from 'swr';
import fetchImages from '../lib/fetchImages';

type ImageType = {
  name: string;
  url: string;
};

function Images() {
  const {
    data: images,
    isLoading,
    mutate: refreshImages,
    isValidating,
  } = useSWR('/api/getImages', fetchImages, {
    revalidateOnFocus: false,
  });

  console.log(images);

  return <div>Images</div>;
}

export default Images;
