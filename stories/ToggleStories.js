import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { Toggle } from '../lib';

class ToggleWrapper extends React.Component {
  state = { isChecked: false };

  onChange = () => {
    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
  };

  render() {
    return <Toggle isChecked={this.state.isChecked} onChange={this.onChange} />;
  }
}

storiesOf('Toggle', module)
  .add(
    'Controlled with knobs',
    withInfo('Toggle controlled with knobs')(() => (
      <Toggle
        label={text('label', 'Toggle Label')}
        isRequired={boolean('isRequired')}
        error={text('error')}
        isChecked={boolean('isChecked')}
        isDisabled={boolean('isDisabled')}
        onChange={action('onChange')}
      />
    )),
  )
  .add(
    'Default',
    withInfo(`
      Usage in a class component

      ~~~js
      class ToggleWrapper extends React.Component {
        state = { isChecked: false };
      
        onChange = () => {
          this.setState(prevState => ({ isChecked: !prevState.isChecked }));
        };
      
        render() {
          return <Toggle isChecked={this.state.isChecked} onChange={this.onChange} />;
        }
      }
      ~~~

    `)(() => <ToggleWrapper />),
  )
  .add(
    'Checked',
    withInfo('Toggle control with checked status')(() => (
      <Toggle isChecked onChange={action('change')} />
    )),
  )
  .add(
    'Disabled',
    withInfo('Toggle control with disabled status')(() => (
      <Toggle isDisabled onChange={action('change')} />
    )),
  );
