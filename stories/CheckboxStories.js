import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean } from '@storybook/addon-knobs';
import { CheckboxGroup, Checkbox } from './../lib';

/**
 * 
 * @param {*} event object
 */
const onChange = (event) => {
  console.log(event.target.value);
};

/**
 * 
 * @param {*} event object
 * @param {*} values array
 */
const onChanges = (event, values) => {
  console.log(event.target.value, values);
};

storiesOf('Checkbox', module)
  .add(
    'Single Checkbox',
    withInfo('Single Checkbox control')(() => (
      <Checkbox
        label="Click here to agree to terms and conditions."
        value="1"
        onChange={onChange}
      />
    )),
  )
  .add(
    'Multi Checkbox',
    withInfo('Checkbox control with different state')(() => (
      <CheckboxGroup label="Radio Group Label" onChange={onChanges}>
        <Checkbox label="Checkbox Label One" value="1" checked />
        <Checkbox label="Checkbox Label Two" value="2" checked={false} />
      </CheckboxGroup>
    )),
  )
  .add(
    'Disabled Checkbox',
    withInfo('Checkbox control with disabled status')(() => (
      <CheckboxGroup label="Checkbox Group Label">
        <Checkbox label="Checkbox Label One" value="1" disabled />
        <Checkbox label="Checkbox Label Two" value="2" disabled />
      </CheckboxGroup>
    )),
  )
  .add(
    'Controlled with knobs',
    withInfo('Checkbox controlled with knobs')(() => (
      <CheckboxGroup
        label={text('label', 'Checkbox Group Label')}
        onChange={action('change')}
      >
        <Checkbox
          label="Checkbox Label One"
          value="1"
          disabled={boolean('disabled #1', false)}
          checked={boolean('checked #1', false)}
        />
        <Checkbox
          label="Checkbox Label Two"
          value="2"
          disabled={boolean('disabled #2', false)}
          checked={boolean('checked #2', false)}
        />
      </CheckboxGroup>
    )),
  );
