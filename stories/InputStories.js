import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, select } from '@storybook/addon-knobs';
import { Input } from './../lib';

storiesOf('Input', module)
  .add('Controlled with knobs', withInfo('Input controlled with knobs')(() => {
    const iconOptions = {
      '': '(none)',
      search: 'search',
      clear: 'clear',
      warning: 'warning',
    };
    return (
      <Input
        label={text('label', 'Input Label')}
        value={text('value')}
        bare={boolean('bare')}
        placeholder={text('placeholder')}
        addonLeft={text('addonLeft')}
        addonRight={text('addonRight')}
        iconLeft={select('iconLeft', iconOptions)}
        iconRight={select('iconRight', iconOptions)}
        disabled={boolean('disabled')}
        readOnly={boolean('readOnly')}
        onValueChange={action('change')}
        onBlur={action('blur')}
        onFocus={action('focus')}
      />
    );
  }))
  .add('Default', withInfo('Default Input control')(() => (
    <Input label="Input Label" placeholder="Placeholder Text" />
  )))
  .add('With icon to the left', withInfo('Input control with icon to the left')(() => (
    <Input label="Input Label" placeholder="Placeholder Text" iconLeft="search" />
  )))
  .add('With icon to the right', withInfo('Input control with icon to the right')(() => (
    <Input label="Input Label" placeholder="Placeholder Text" iconRight="search" />
  )))
  .add('With icon to the left & right', withInfo('Input control with icon to the left and right')(() => (
    <Input label="Input Label" placeholder="Placeholder Text" iconLeft="search" iconRight="clear" />
  )))
  .add('Required', withInfo('Input control with required attribute')(() => (
    <Input label="Input Label" placeholder="Placeholder Text" required />
  )))
  .add('Error', withInfo('Input control with error message')(() => (
    <Input label="Input Label" placeholder="Placeholder Text" required error="This field is required" />
  )))
  .add('Error with icon', withInfo('Input control with error message and icon')(() => (
    <Input
      label="Input Label"
      placeholder="Placeholder Text"
      required
      error="This field is required"
      iconLeft="warning"
    />
  )))
  .add('Disabled', withInfo('Input control with disabled status')(() => (
    <Input label="Input Label" placeholder="Placeholder Text" disabled />
  )))
  .add('Read only', withInfo('Input control with readOnly status')(() => (
    <Input label="Input Label" value="Read Only" readOnly />
  )))
  .add('With add-on text', withInfo('Input control with add-on text to the left and right')(() => (
    <Input label="Input Label" placeholder="Placeholder Text" addonLeft="$" addonRight="%" />
  )))
  .add('Read only with add-on text', withInfo('Input control with add-on text to the left and right and readOnly status')(() => (
    <Input label="Input Label" value="Read Only" addonLeft="$" addonRight="%" readOnly />
  )))
;
