import Image from 'next/image';

type Props = {
  src: string,
  alt: string
}

const TestimonialImage = ({ src, alt }: Props) => {
  return (
    <Image src={ src }
           alt={ alt }
           height={ 1000 }
           width={ 1000 }
           className="w-full rounded-lg shadow-lg rotate-lg-6 md:max-w-[250px] md:width-[13vw]" />
  );
};

export default TestimonialImage;
