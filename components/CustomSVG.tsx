interface Props {
  __html: string,
  className?: string,
}

const CustomSVG = ({ __html, className = '' }: Props) => {
  return (
    <div
      className={ 'custom__svg ' + className }
      dangerouslySetInnerHTML={ { __html } }
    />
  );
};

export default CustomSVG;
