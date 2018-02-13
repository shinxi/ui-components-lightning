import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Text } from './../lib';

storiesOf('Text', module)
  .add(
    'Default Text',
    withInfo('The default text will be redered a paragraph')(() => (
      <Text> Default Text </Text>
    )),
  )
  .add(
    'Div Tag',
    withInfo('Div Tag')(() => (
      <Text tag="div" type="large">
        Used div tag for displaying this text
      </Text>
    )),
  )
  .add(
    'Right Aligned Text',
    withInfo('Align Right')(() => (
      <Text tag="div" type="large" align="right">
        Right aligned text
      </Text>
    )),
  )
  .add(
    'Heading Text',
    withInfo('Heading')(() => (
      <Text category="heading">
        Heading text
      </Text>
    )),
  );
