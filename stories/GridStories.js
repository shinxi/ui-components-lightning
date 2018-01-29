import React from 'react';
import { PropTypes } from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Grid, GridRow, GridItem } from './../lib';

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
.add('Equal width columns', withInfo('equal columns flex to the sides')(() => (
    <Grid>
      <GridRow>
        <GridItem><Box>A</Box></GridItem>
        <GridItem><Box>B</Box></GridItem>
        <GridItem><Box>C</Box></GridItem>
      </GridRow>
    </Grid>
  )))
  .add('Single flex column', withInfo('single column with flex pushing non flex column to the side')(() => (
    <Grid>
      <GridRow>
        <GridItem><Box>Flex</Box></GridItem>
        <GridItem noFlex><Box>B</Box></GridItem>
      </GridRow>
    </Grid>
  )))
  .add('Multiple columns with specified width', withInfo('multiple columns, each column specified width, can specify any number of columns 1-6')(() => (
    <Grid>
      <GridRow cols={6}>
        <GridItem cols={1}><Box>1/6</Box></GridItem>
        <GridItem cols={2}><Box>2/6</Box></GridItem>
        <GridItem cols={3}><Box>3/6</Box></GridItem>
      </GridRow>
    </Grid>
  )))
  .add('Multiple cols, no-flex', withInfo('multiple columns with flex disabled')(() => (
    <Grid>
      <GridRow>
        <GridItem noFlex><Box>A no flex</Box></GridItem>
        <GridItem noFlex><Box>B no flex</Box></GridItem>
        <GridItem noFlex><Box>C no flex</Box></GridItem>
      </GridRow>
    </Grid>
  )))
  .add('Multiple cols, fixed width mixed w/ no-flex', withInfo('mixture of fixed width columns and columns where flex is disabled')(() => (
    <Grid>
      <GridRow cols={3}>
        <GridItem noFlex><Box>A no flex</Box></GridItem>
        <GridItem noFlex><Box>B no flex</Box></GridItem>
        <GridItem cols={2} noFlex><Box>2/3</Box></GridItem>
      </GridRow>
    </Grid>
  )))
;
