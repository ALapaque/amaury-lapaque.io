interface Platforms {
  isIpad: boolean,
  isIphone: boolean,
  isIOS: boolean,
  isAndroid: boolean,
  isPhablet: boolean,
  isTablet: boolean,
  isCordova: boolean,
  isCapacitorNative: boolean,
  isElectron: boolean,
  isPWA: boolean,
  isMobile: boolean,
  isMobileWeb: boolean,
  isDesktop: boolean,
  isHybrid: boolean,
}

const isMobileWeb = (win: Window): boolean => isMobile(win) && !isHybrid(win);

const isIpad = (win: Window) => {
  // iOS 12 and below
  if (testUserAgent(win, /iPad/i)) {
    return true;
  }

  // iOS 13+
  return testUserAgent(win, /Macintosh/i) && isMobile(win);
};

const isIphone = (win: Window) => testUserAgent(win, /iPhone/i);

const isIOS = (win: Window) => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);

const isAndroid = (win: Window) => testUserAgent(win, /android|sink/i);

const isAndroidTablet = (win: Window) => {
  return isAndroid(win) && !testUserAgent(win, /mobile/i);
};

const isPhablet = (win: Window) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);

  return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
};

const isTablet = (win: Window) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);

  return isIpad(win) || isAndroidTablet(win) || (smallest > 460 && smallest < 820 && largest > 780 && largest < 1400);
};

const isMobile = (win: Window) => matchMedia(win, '(any-pointer:coarse)');

const isDesktop = (win: Window) => !isMobile(win);

const isHybrid = (win: Window) => isCordova(win) || isCapacitorNative(win);

const isCordova = (win: any): boolean => !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);

const isCapacitorNative = (win: any): boolean => {
  const capacitor = win['Capacitor'];
  return !!capacitor?.isNative;
};

const isElectron = (win: Window): boolean => testUserAgent(win, /electron/i);

const isPWA = (win: Window): boolean =>
  (win.matchMedia?.('(display-mode: standalone)').matches || (win.navigator as any).standalone);

const testUserAgent = (win: Window, expr: RegExp) => expr.test(win.navigator.userAgent);

const matchMedia = (win: Window, query: string): boolean => win.matchMedia?.(query).matches;

const PlatformUtils = (win: Window = window): Platforms => ({
  isIpad: isIpad(win),
  isIphone: isIphone(win),
  isIOS: isIOS(win),
  isAndroid: isAndroid(win),
  isPhablet: isPhablet(win),
  isTablet: isTablet(win),
  isCordova: isCordova(win),
  isCapacitorNative: isCapacitorNative(win),
  isElectron: isElectron(win),
  isPWA: isPWA(win),
  isMobile: isMobile(win),
  isMobileWeb: isMobileWeb(win),
  isDesktop: isDesktop(win),
  isHybrid: isHybrid(win)
});

export default PlatformUtils;
