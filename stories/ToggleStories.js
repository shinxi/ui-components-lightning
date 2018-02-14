import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { Toggle, FormElement, Label } from '../lib';

storiesOf('Toggle', module)
  .add(
    'Controlled with knobs',
    withInfo('Toggle controlled with knobs')(() => (
      <Toggle
        isDisabled={boolean('isDisabled')}
        enabledText={text('enabledText', 'Enabled')}
        disabledText={text('disabledText', 'Disabled')}
        onChange={action('onChange')}
      />
    )),
  )
  .add('Default', withInfo('Default Toggle Element')(() => <Toggle onChange={action('change')} />))
  .add(
    'Default Checked',
    withInfo('Toggle control with checked status')(() => (
      <Toggle defaultChecked onChange={action('change')} />
    )),
  )
  .add(
    'Disabled',
    withInfo('Toggle control with disabled status')(() => (
      <Toggle isDisabled onChange={action('change')} />
    )),
  )
  .add(
    'FormElement',
    withInfo('Toggle control with FormElement')(() => (
      <FormElement>
        <Label>Subscribe Newsletter</Label>
        <Toggle onChange={action('change')} />
      </FormElement>
    )),
  );
