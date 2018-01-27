import React from 'react';
import { PropTypes } from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Grid, Row, Col } from './../lib';

const Box = ({ children }) => {
  const styles = {
    padding: '12px',
    backgroundColor: '#33f',
    color: '#fff',
    border: '1px solid #aaf',
  };
  return <div style={ styles }>{ children }</div>;
};

Box.propTypes = {
  children: PropTypes.node,
};

storiesOf('Grid', module)
  .add('Equal Columns', withInfo('equal columns flex to the sides')(() => (
    <Grid>
      <Row>
        <Col><Box>A</Box></Col>
        <Col><Box>B</Box></Col>
        <Col><Box>C</Box></Col>
      </Row>
    </Grid>
  )))
  .add('Multiple Columns', withInfo('multiple columns, each column specified width, can specify any number of columns 1-6')(() => (
    <Grid>
      <Row cols={6}>
        <Col cols={1}><Box>1/6</Box></Col>
        <Col cols={2}><Box>2/6</Box></Col>
        <Col cols={3}><Box>3/6</Box></Col>
      </Row>
    </Grid>
  )))
  .add('Weighted, no-flex', withInfo('columns with weighted, flex is disabled')(() => (
    <Grid>
      <Row cols={6}>
        <Col cols={1} noFlex><Box>1/6 no flex</Box></Col>
        <Col cols={1} noFlex><Box>1/6 no flex</Box></Col>
        <Col cols={2} noFlex><Box>2/6 no flex</Box></Col>
        <Col cols={3} noFlex><Box>3/6 no flex</Box></Col>
        <Col cols={3} noFlex><Box>3/6 no flex</Box></Col>
      </Row>
    </Grid>
  )))
;
