import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { FormElement, Select, Option, Label } from '../lib';

const optionsArrayObj = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

storiesOf('Select', module)
  .add('Controlled with knobs', withInfo('Select controlled with knobs')(() => (
    <FormElement>
      <Label> Select label </Label>
      <Select
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
      <Label> Select label </Label>
      <Select
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
      <Label isRequired> Select label </Label>
      <Select
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
    <FormElement error="This field is required">
      <Label isRequired> Select label </Label>
      <Select
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
      <Label isRequired> Select label </Label>
      <Select
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
  .add('Default - with array Object', withInfo('Select with Array objects')(() => (
    <FormElement>
      <Label isRequired> Select label </Label>
      <Select
        onChange={action('change')}
        onBlur={action('blur')}
        optionsArray={optionsArrayObj}
      />
    </FormElement>
  )))
;
