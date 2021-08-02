import '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    timeline: {
      fill: string;
    };
    map: {
      series: string;
    };
    navBar: Palette['primary'] | Palette['secondary']
  }
  interface PaletteOptions {
    timeline: {
      fill: string;
    };
    map: {
      series: string;
    };
    navBar: PaletteOptions['primary'] | PaletteOptions['secondary']
  }
}