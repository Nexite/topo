import React from 'react';
import Box from 'topo/Atom/Box';
import {
  makePureBox, childrenOfType, wrapHtml, setChildProps, pureRef,
} from 'topo/_utils';

export const HeaderIcon = makePureBox('HeaderIcon');
export const HeaderText = makePureBox('HeaderText');
export const Body = makePureBox('Body');

const IconBox = pureRef(({ children, ...props }, ref) => {
  const headerIcon = childrenOfType(children, HeaderIcon);
  const headerText = childrenOfType(children, HeaderText);
  const body = childrenOfType(children, Body);
  return (
    <Box borderWidth={1} borderRadius={3} padding={4} ref={ref} {...props}>
      {React.Children.map(wrapHtml(headerIcon), setChildProps(null, {
        fontSize: '5xl',
        marginBottom: 1,
        color: 'current.primary',
        lineHeight: 0,
      }))}
      {React.Children.map(wrapHtml(headerText), setChildProps(null, {
        fontFamily: 'accent',
        fontSize: '3xl',
        marginBottom: 2,
      }))}
      {React.Children.map(wrapHtml(body), setChildProps(null, { color: 'current.textLight' }))}
    </Box>
  );
});
export default IconBox;
