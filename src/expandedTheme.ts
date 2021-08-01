import '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    timeline: {
      fill: string;
    };
    map: {
      series: string;
    };
  }
  interface PaletteOptions {
    timeline: {
      fill: string;
    };
    map: {
      series: string;
    };
  }
}