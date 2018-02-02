import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean } from '@storybook/addon-knobs';
import { RadioGroup, Radio } from './../lib';

/**
 * 
 * @param {*} event object
 */
const onChange = (event) => {
  console.log('=========', event.target.value);
};

storiesOf('Radio', module)
  .add(
    'Default',
    withInfo('Default Radio Group (Yes/No))')(() => (
      <RadioGroup label="Radio Group Label" name="yesNo" onChange={onChange}>
        <Radio label="Yes" value="yes" />
        <Radio label="No" value="no" />
      </RadioGroup>
    )),
  )
  .add(
    'Default Set',
    withInfo('Default Radio Group (Yes/Maybe/No)')(() => (
      <RadioGroup label="Radio Group Label" name="yesNoMaybe" onChange={onChange}>
        <Radio label="Yes" value="yes" />
        <Radio label="Maybe" value="maybe" />
        <Radio label="No" value="no" />
      </RadioGroup>
    )),
  )
  .add(
    'Disabled',
    withInfo('Radio Group control with disabled status')(() => (
      <RadioGroup label="Radio Group Label" name="DisabledGroup">
        <Radio label="Radio Label One" value="1" isDisabled />
        <Radio label="Radio Label Two" value="2" isDisabled />
      </RadioGroup>
    )),
  )
  .add(
    'Controlled with knobs',
    withInfo('Radio Group controlled with knobs')(() => (
      <RadioGroup
        label={text('label', 'Radio Group Label')}
        onChange={action('change')}
        name="KnobsControlledGroup"
      >
        <Radio
          label="Radio Label One"
          value="1"
          isDisabled={boolean('disabled #1')}
          isChecked={text('value') === '1'}
        />
        <Radio
          label="Radio Label Two"
          value="2"
          isDisabled={boolean('disabled #2')}
          isChecked={text('value') === '2'}
        />
      </RadioGroup>
    )),
  );
