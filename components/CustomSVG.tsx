interface Props {
  __html: string,
  className?: string,
}

const CustomSVG = ({ __html, className }: Props) => {
  return (
    <span

      className={ 'custom__svg ' + className }
      dangerouslySetInnerHTML={ { __html } }
    />
  );
};

export default CustomSVG;
