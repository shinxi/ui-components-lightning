import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Pill } from './../lib';

storiesOf('Pill', module)
  .add('Default', withInfo('Default pill using the children of the component for the label')(() => (
    <Pill onClick={action('click')}>Pill Default</Pill>
  )))
  .add('Label as prop', withInfo('Label as property')(() => (
    <Pill
      onClick={action('click')}
      label="Prop Label"
    />
  )))
  .add('With Icon', withInfo('Pill with an icon')(() => (
    <Pill
      onClick={action('click')}
      label="Pill w/ Icon"
      icon={{ category: 'standard', icon: 'work_order' }}
    />
  )))
  .add('Disabled', withInfo('Disabled pill with remove button disabled')(() => (
    <Pill
      onClick={action('click')}
      label="Disabled Pill"
      isDisabled
    />
  )))
  .add('Disabled with Icon', withInfo('Disabled Pill, with an icon')(() => (
    <Pill
      onClick={action('click')}
      label="Disabled Pill w/ Icon"
      icon={{ category: 'standard', icon: 'work_order' }}
      isDisabled
    />
  )))
  .add('Truncated Text', withInfo('Pill with truncated text')(() => (
    <Pill
      onClick={action('click')}
      label="Truncated long string of text for the label"
      isTruncated
    />
  )))
  .add('Truncated with Icon', withInfo('Pill with truncated text and an Icon')(() => (
    <Pill
      onClick={action('click')}
      label="Truncated long string of text for the label"
      icon={{ category: 'standard', icon: 'work_order' }}
      isTruncated
    />
  )))
;
