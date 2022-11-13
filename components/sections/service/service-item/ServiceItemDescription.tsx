type Props = {
  description: string
}

const ServiceItemDescription = ({ description }: Props) => {
  return (
    <p className="pl-2 text-sm"
       dangerouslySetInnerHTML={ { __html: description } } />
  );
};

export default ServiceItemDescription;
