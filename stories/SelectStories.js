import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { FormElement, Select, Option } from '../lib';

storiesOf('Select', module)
  .add('Controlled with knobs', withInfo('Select controlled with knobs')(() => (
    <FormElement>
      <Select
        label={text('label', 'Select Label')}
        value={text('value')}
        disabled={boolean('disabled')}
        onChange={action('change')}
        onBlur={action('blur')}
      >
        <Option label="Option One" value="1" />
        <Option label="Option Two" value="2" />
        <Option label="Option Three" value="3" />
      </Select>
    </FormElement>
  )))
  .add('Default', withInfo('Default Select control')(() => (
    <FormElement>
      <Select
        label="Select Label"
        onChange={action('change')}
        onBlur={action('blur')}
      >
        <Option label="Option One" value="1" />
        <Option label="Option Two" value="2" />
        <Option label="Option Three" value="3" />
      </Select>
    </FormElement>
  )))
  .add('Required', withInfo('Select control with required attribute')(() => (
    <FormElement>
      <Select
        label="Select Label"
        onChange={action('change')}
        onBlur={action('blur')}
      >
        <Option label="Option One" value="1" />
        <Option label="Option Two" value="2" />
        <Option label="Option Three" value="3" />
      </Select>
    </FormElement>
  )))
  .add('Error', withInfo('Select control with error message')(() => (
    <FormElement>
      <Select
        label="Select Label"
        onChange={action('change')}
        onBlur={action('blur')}
      >
        <Option label="Option One" value="1" />
        <Option label="Option Two" value="2" />
        <Option label="Option Three" value="3" />
      </Select>
    </FormElement>
  )))
  .add('Disabled', withInfo('Select control with disabled status')(() => (
    <FormElement>
      <Select
        label="Select Label"
        disabled
        onChange={action('change')}
        onBlur={action('blur')}
      >
        <Option label="Option One" value="1" />
        <Option label="Option Two" value="2" />
        <Option label="Option Three" value="3" />
      </Select>
    </FormElement>
  )))
;
