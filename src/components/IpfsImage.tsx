import { useState } from 'react';
import Image from 'next/image';

const IpfsImage = ({src, alt}: {src: string, alt: string}) => {
  const [imageSrc, setSrc] = useState(src);
  return (
    <Image
      src={imageSrc}
      alt={alt}
      placeholder="blur"
      blurDataURL="/images/000000.png"
      onError={() => setSrc('/images/000000.png')}
      width="128"
      height="128"
    />
  );
}
export default IpfsImage;