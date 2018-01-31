import React from 'react';
import { PropTypes } from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Container } from './../lib';

const Box = ({ children }) => {
  const styles = {
    padding: '12px',
    backgroundColor: '#33f',
    color: '#fff',
    border: '1px solid #aaf',
  };
  return <div style={styles}>{children}</div>;
};

Box.propTypes = {
  children: PropTypes.node,
};

storiesOf('Container', module)
  .add(
    'Size',
    withInfo(
      "Container with different sizes. When the container is fluid, there's no need to set alignment.",
    )(() => (
      <div>
        <Container>
          <Box>Fluid (Default)</Box>
        </Container>
        <Container size="small">
          <Box>Small</Box>
        </Container>
        <Container size="medium">
          <Box>Medium</Box>
        </Container>
        <Container size="large">
          <Box>Large</Box>
        </Container>
      </div>
    )),
  )
  .add(
    'Alignment',
    withInfo(
      'Container with different alignment options. Alignment only takes effect when container width is less than parent element width.',
    )(() => (
      <div>
        <Container size="small">
          <Box>Left aligned (Default)</Box>
        </Container>
        <Container size="small" align="center">
          <Box>Center aligned</Box>
        </Container>
        <Container size="small" align="right">
          <Box>Right aligned</Box>
        </Container>
      </div>
    )),
  );
