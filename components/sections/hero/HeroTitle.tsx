import { Cursor, useTypewriter } from 'react-simple-typewriter';

const HeroTitle = () => {
  const [ text, count ] = useTypewriter({
    words: [ '<AngularReactVue 🧡 />', '<TypescriptBeatEmAll />', '<CoffeeAddict />' ],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <h1 className={'text-5xl lg:text-6xl font-semibold px-10'}>
      <span className={'mr-3'}>{ text }</span>
      <Cursor cursorColor={ '#F7AB0A' } />
    </h1>
  );
};

export default HeroTitle;
