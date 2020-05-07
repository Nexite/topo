import selectors from './selectors';

export default (theme) => `
  /* All buttons */
  ${Object.values(selectors.buttons).join(', ')} {
    border-radius: ${theme.radii.sm} !important;
    font-size: ${theme.fontSizes.md} !important;
    font-family: ${theme.fonts.heading} !important;
    font-weight: 600 !important;
    height: ${theme.sizes[10]} !important;
    min-width: ${theme.sizes[10]} !important;
  }

  ${Object.values(selectors.buttons).join(':focus, ')}:focus {
    box-shadow: ${theme.shadows.outline} !important;
  }
  /* Secondary buttons */
  ${selectors.buttons.addItem}, ${selectors.buttons.previous} {
    background-color: ${theme.colors.bg} !important;
    color: ${theme.colors.text} !important;
    border-width: 1px !important;
    border-color: ${theme.colors.border} !important;
  }

  ${selectors.buttons.upload} {
    background-color: ${theme.colors.border} !important;
    color: ${theme.colors.text} !important;
    font-size: ${theme.fontSizes.sm} !important;
    padding: ${theme.space[1]};
    height: auto;
    border-width: 1px !important;
    border-color: ${theme.colors.border} !important;
  }

  ${selectors.buttons.addItem}:hover, ${selectors.buttons.previous}:hover {
    background-color: ${theme.colors.border} !important;
  }

  /* Primary buttons */
  ${selectors.buttons.submit}, ${selectors.buttons.next} {
    background-color: ${theme.colors.green[500]} !important;
    border-color: ${theme.colors.green[500]} !important;
    float: right !important;
  }

  ${selectors.buttons.submit}:hover, ${selectors.buttons.next}:hover {
    background-color: ${theme.colors.green[600]} !important;
  }

  ${selectors.action} {
    float: none !important;
  }

  /* Small buttons */
  ${selectors.icons.remove} circle {
    fill: ${theme.colors.bg} !important;
    stroke: ${theme.colors.border} !important;
    paint-order: stroke !important;
  }

  ${selectors.icons.remove}:hover circle {
    fill: ${theme.colors.border} !important;
  }

  ${selectors.icons.remove} line {
    stroke: ${theme.colors.text} !important;
  }

  ${selectors.icons.calendar} {
    color: ${theme.colors.text} !important;
  }

  /* Navigation buttons */
  ${selectors.pages.page} span {
    font-size: ${theme.fontSizes.md} !important;
    font-weight: 400 !important;
    color: ${theme.colors.gray[500]} !important;
  }

  ${selectors.pages.page} a:before {
    font-size: ${theme.fontSizes.sm} !important;
    color: ${theme.colors.gray[500]} !important;
    background-color: ${theme.colors.bg} !important;
    border-color: ${theme.colors.border} !important;
  }

  ${selectors.pages.selectedPage} span {
    color: ${theme.colors.primary} !important;
    font-weight: bold !important;
  }

  ${selectors.pages.selectedPage} a:before {
    color: ${theme.colors.primaryInverse} !important;
    background-color: ${theme.colors.primary} !important;
    border-color: ${theme.colors.primary} !important;
  }
`;
