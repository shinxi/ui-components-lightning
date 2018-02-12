import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean } from '@storybook/addon-knobs';
import { Input, Label, FormElement } from '../lib';

storiesOf('Label', module)
  .add(
    'Controlled with knobs',
    withInfo('Label with knobs')(() => <Label isRequired={boolean('isRequired')}>Email </Label>),
  )
  .add('Required', withInfo('Label with "Required" style')(() => <Label isRequired>Email </Label>))
  .add(
    'FormElement',
    withInfo('Label inside FormElement')(() => (
      <FormElement cols={1} totalCols={2}>
        <Label isRequired>Email </Label>
        <Input placeholder="Enter your email please" />
      </FormElement>
    )),
  );
