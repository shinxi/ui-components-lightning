import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import { Textarea } from './../lib';

const onValueChange = (event) => {
  /**
   * use the callback return val
   */
  console.log(event.target.value); // eslint-disable-line
};

storiesOf('Textarea', module)
  .add(
    'Default Textarea',
    withInfo('The default textarea will render with 5 rows')(() => (
      <Textarea
        placeholder="default textarea"
        onValueChange={onValueChange}
        name="comments"
      />
    )),
  )
  .add(
    'Disabled / ReadOnly',
    withInfo(
      'Textarea can be disabled (*isDisabled*) or marked as readOnly (*isReadOnly*).',
    )(() => (
      <div>
        <Textarea
          value="disabled"
          isDisabled
          onValueChange={action('textarea-disabled-onchange')}
        />
        <br />
        <br />
        <Textarea
          value="readonly"
          isReadOnly
          onValueChange={action('textarea-readonly-onchange')}
        />
      </div>
    )),
  )
  .add(
    'w/ Custom Rows',
    withInfo(
      'Textarea can have as many rows as you want by passing *rows* .',
    )(() => (
      <Textarea
        placeholder="this textarea should have 10 rows"
        rows={10}
        onValueChange={action('textarea-rows-onchange')}
      />
    )),
  )
  .add(
    'w/ large text',
    withInfo('Textarea can be rendered with huge text')(() => (
      <Textarea
        placeholder="this textarea should have HUGE text"
        className="input--huge"
        onChange={action('textarea-rows-onchange')}
      />
    )),
  )
  .add(
    'Controlled with knobs',
    withInfo('Textarea controlled with knobs')(() => (
      <Textarea
        value={text('value')}
        placeholder={text('placeholder')}
        disabled={boolean('disabled')}
        readOnly={boolean('readOnly')}
        onChange={action('change')}
        onBlur={action('blur')}
      />
    )),
  );
