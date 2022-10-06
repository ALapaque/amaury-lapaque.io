import { ThemeState } from '../stores/data';
import { SanityColor, Theme } from '../typing';

abstract class CssUtils {
  static setDOMColor = (cssVariable: string, theme: ThemeState, themeKey: keyof Theme) => {
    const color: SanityColor = theme[themeKey] as SanityColor;

    document.documentElement.style.setProperty(cssVariable, `${ color.rgb.r }, ${ color.rgb.g }, ${ color.rgb.b }`);
  };

  static hexToRGB(hexValue: string): string {
    let r: string | number = 0, g: string | number = 0, b: string | number = 0;

    // 3 digits
    if (hexValue.length === 4) {
      r = `0x${ hexValue[1] }${ hexValue[1] }`;
      g = `0x${ hexValue[2] }${ hexValue[2] }`;
      b = `0x${ hexValue[3] }${ hexValue[3] }`;

      // 6 digits
    } else if (hexValue.length === 7) {
      r = `0x${ hexValue[1] }${ hexValue[2] }`;
      g = `0x${ hexValue[3] }${ hexValue[4] }`;
      b = `0x${ hexValue[5] }${ hexValue[6] }`;
    }

    return `${ Number(r) }, ${ Number(g) }, ${ Number(b) }`;
  }

  static isColorLightOrDark(color: string): 'light' | 'dark' {
    let r = 0;
    let g = 0;
    let b = 0;

    if (color.match(/^rgb/)) {
      const matches = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

      if (matches) {
        r = Number(matches[1]);
        g = Number(matches[2]);
        b = Number(matches[3]);
      }
    } else {
      const rgbValues = CssUtils.hexToRGB(color);
      const values = rgbValues.split(', ');

      r = Number(values[0]);
      g = Number(values[1]);
      b = Number(values[2]);
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
      return 'light';
    }

    return 'dark';
  }
}

export default CssUtils;
