type Props = {
  src: string,
  alt: string
}

const TestimonialImage = ({ src, alt }: Props) => {
  return (
    <img src={ src }
         alt={ alt }
         className="w-full rounded-lg shadow-lg rotate-lg-6 md:max-w-[250px] md:width-[13vw]" />
  );
};

export default TestimonialImage;
