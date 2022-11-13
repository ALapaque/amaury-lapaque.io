type Props = {
  link: string
}

const ServiceItemLink = ({ link }: Props) => {
  return (
    <a href={ link }
       className="flex justify-between items-center text-[color:var(--background)] group-hover:text-[color:var(--primary)] group-hover:font-bold"
       style={ {
         textShadow: '1px 1px var(--background-50)'
       } }>
      <span className="text-sm">Contact</span>
      <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">➜</span>
    </a>
  );
};

export default ServiceItemLink;
