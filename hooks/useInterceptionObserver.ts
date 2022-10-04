import { useEffect, useState } from 'react';

const useInterceptionObserver = (id: string, amountToObserve: number): [ number ] => {
  const [ indexVisible, setIndexVisible ] = useState<number>(0);
  let observer$: IntersectionObserver;

  const _handleIntersectionObserverEntries = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) {
        return;
      }

      setIndexVisible(Number(entry.target.id.replace(id, '')));
    });
  };

  useEffect(() => {
    observer$ = new IntersectionObserver(_handleIntersectionObserverEntries, { threshold: 1 });

    Array.apply(null, Array(amountToObserve)).forEach((value: unknown, index: number) => {
      console.log('id to observe', `${ id }-${ index }`);
      const htmlElementToObserve: HTMLElement | null = document.getElementById(`${ id }${ index }`);

      if (!htmlElementToObserve) {
        return;
      }

      console.log('observing', `${ id }${ index }`);
      observer$.observe(htmlElementToObserve);
    });

    return () => {
      observer$ && observer$.disconnect();
    };
  }, []);

  return [ indexVisible ];
};

export default useInterceptionObserver;
