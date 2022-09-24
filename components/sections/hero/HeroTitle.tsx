import { Cursor, useTypewriter } from 'react-simple-typewriter';

const HeroTitle = () => {
  const [ text, count ] = useTypewriter({
    words: [ 'AngularReactVue 🧡', 'TypescriptBeatEmAll', 'CoffeeAddict' ],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <h1 className={ 'text-5xl lg:text-6xl font-semibold px-10' }>
      <div className={ 'hero-title inline-block mr-3' }>
        <span>{ `<` }</span>
        <span>{ text }</span>
        <span>{ ` />` }</span>
      </div>
      <Cursor cursorColor={ '#F7AB0A' } />
    </h1>
  );
};

export default HeroTitle;
