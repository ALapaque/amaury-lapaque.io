const AboutDescriptionTitle = () => {
  return (
    <h4 className={ 'text-4xl font-semibold text-[color:var(--text)]' }>
      Here is a&nbsp;
      <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary/60 relative inline-block">
        <span className="relative text-[color:var(--background)]">little</span>
      </span>
      &nbsp;background
    </h4>
  );
};

export default AboutDescriptionTitle;
