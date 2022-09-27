import { Cursor, useTypewriter } from 'react-simple-typewriter';

const HeroTitle = () => {
  const [ text, count ] = useTypewriter({
    words: [ 'AngularReactVue', 'TypescriptDev', 'CoffeeAddict' ],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <h1 className={ 'text-5xl lg:text-6xl font-semibold px-10' }>
      <div className={ 'hero-title inline-block mr-1' }>
        <span>{ `<` }</span>
        <span>{ text }</span>
        <span>{ ` />` }</span>
      </div>
      <Cursor cursorColor={ '#f7ab0a99' } />
    </h1>
  );
};

export default HeroTitle;
