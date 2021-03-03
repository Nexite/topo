import originalTheme from '@chakra-ui/theme';

const linearGrad = (from, to, deg) => `linear-gradient(${deg}deg, ${from} 0%, ${to} 100%)`;
const linearGrads = (from, to) => (
  [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 240, 270, 300, 330]
    .map((deg) => ({ [deg]: linearGrad(from, to, deg) }))
    .reduce((accum, obj) => ({ ...accum, ...obj }), {})
);

const colors = {
  ...(originalTheme.colors),
  black: '#252222',
  white: '#ffffff',
  gray: {
    50: '#faf9f9',
    100: '#f1ecec',
    200: '#e6dfdf',
    300: '#dbd1d1',
    400: '#cfc1c1',
    500: '#c1afaf',
    600: '#ad9c9c',
    700: '#958686',
    800: '#756969',
    850: '#504d4d',
    900: '#453e3e',
    1000: '#252222',
  },
  red: {
    50: '#fff8f8',
    100: '#ffe8e9',
    200: '#ffd7d9',
    300: '#ffc4c6',
    400: '#ffafb1',
    500: '#ff9598',
    600: '#ff686b',
    700: '#e35d61',
    800: '#b4494d',
    900: '#6a2b2d',
    1000: '#311c1c',
    desaturated: {
      800: '#8c7374',
      600: '#bca9aa',
      200: '#f0e5e6',
    },
  },
  orange: {
    50: '#fff8f2',
    100: '#ffead8',
    200: '#ffdaba',
    300: '#ffc899',
    400: '#ffb473',
    500: '#eea261',
    600: '#d49157',
    700: '#b67c4a',
    800: '#90623b',
    900: '#543a22',
    1000: '#2f2113',
  },
  yellow: {
    50: '#fffdbc',
    100: '#f8f365',
    200: '#ebe660',
    300: '#dcd85a',
    400: '#ccc853',
    500: '#bbb74c',
    600: '#a7a444',
    700: '#8f8c3a',
    800: '#716f2e',
    900: '#42411b',
    1000: '#2b2b12',
  },
  green: {
    50: '#eaffea',
    100: '#b8ffb5',
    200: '#6dfe68',
    300: '#66ee61',
    400: '#5fdd5a',
    500: '#56ca53',
    600: '#4db54a',
    700: '#429b3f',
    800: '#347a32',
    900: '#1f481d',
    1000: '#142f13',
  },
  teal: {
    50: '#e7fff2',
    100: '#acffd3',
    200: '#66fbab',
    300: '#60eca1',
    400: '#59db95',
    500: '#52c889',
    600: '#49b37a',
    700: '#3f9969',
    800: '#317953',
    900: '#1d4731',
    1000: '#132f21',
  },
  cyan: {
    50: '#e3fffe',
    100: '#96fffc',
    200: '#64f6f1',
    300: '#5ee7e2',
    400: '#57d6d2',
    500: '#50c4c0',
    600: '#47afac',
    700: '#3d9693',
    800: '#307774',
    900: '#1c4644',
    1000: '#102827',
  },
  blue: {
    50: '#f5faff',
    100: '#def0ff',
    200: '#c6e5ff',
    300: '#abd8ff',
    400: '#8ccaff',
    500: '#69b9ff',
    600: '#5da5e4',
    700: '#508ec4',
    800: '#3f709a',
    900: '#25425b',
    1000: '#13222f',
  },
  indigo: {
    50: '#f9f9ff',
    100: '#ebecff',
    200: '#dddeff',
    300: '#cecfff',
    400: '#bcbfff',
    500: '#a9acff',
    600: '#9296ff',
    700: '#767aff',
    800: '#595dda',
    900: '#343780',
    1000: '#161736',
  },
  purple: {
    50: '#fbf8ff',
    100: '#f4eaff',
    200: '#ebdaff',
    300: '#e2c9ff',
    400: '#d8b5ff',
    500: '#cca0ff',
    600: '#be85ff',
    700: '#ab66fa',
    800: '#8751c5',
    900: '#4f2f74',
    1000: '#1b1028',
  },
  pink: {
    50: '#fff7fb',
    100: '#ffe7f4',
    200: '#ffd5ec',
    300: '#ffc1e2',
    400: '#ffaad8',
    500: '#ff8ecb',
    600: '#ff6aba',
    700: '#dc5aa0',
    800: '#ae477e',
    900: '#672a4a',
    1000: '#2b121f',
  },
};
// eslint-disable-next-line prefer-destructuring
colors.brand = colors.red[600];
colors.success = {
  border: colors.green[100],
  bg: colors.green[500],
  text: colors.green[900],
};
colors.failure = {
  border: colors.red[100],
  bg: colors.red[500],
  text: colors.red[900],
};
colors.grad = {
  twilight: linearGrads(colors.red[500], colors.indigo[500]),
  lemonlime: linearGrads(colors.cyan[500], colors.green[500]),
  peachy: linearGrads(colors.red[500], colors.orange[500]),
  taffy: linearGrads(colors.yellow[500], colors.pink[500]),
  darken: {
    sm: linearGrads(colors.blackAlpha[300], 'rgba(0,0,0,0)'),
    lg: linearGrads(colors.blackAlpha[700], 'rgba(0,0,0,0)'),
  },
  lighten: {
    sm: linearGrads(colors.whiteAlpha[300], 'rgba(255, 255, 255 ,0)'),
    lg: linearGrads(colors.whiteAlpha[700], 'rgba(255, 255, 255 ,0)'),
  },
  skelly: `linear-gradient(270deg, ${colors.gray[300]} 0, ${colors.gray[100]} 50%, ${colors.gray[300]} 100%)`,
  darkSkelly: `linear-gradient(270deg, ${colors.gray[800]} 0, ${colors.gray[700]} 50%, ${colors.gray[800]} 100%)`,
};
colors.modes = {
  light: {
    color: colors.black,
    text: colors.black,
    textLight: colors.gray[800],
    bg: colors.white,
    background: colors.white,
    primary: colors.brand,
    border: colors.gray[200],
    borderColor: colors.gray[200],
    placeholder: colors.gray[600],
  },
  dark: {
    color: colors.whiteAlpha[900],
    text: colors.whiteAlpha[900],
    textLight: colors.whiteAlpha[500],
    bg: colors.gray[900],
    primary: colors.whiteAlpha[900],
    background: colors.gray[900],
    border: colors.whiteAlpha[300],
    borderColor: colors.whiteAlpha[300],
    placeholder: colors.whiteAlpha[400],
  },
};
colors.current = colors.modes.light; // Todo: change this later

export default colors;
