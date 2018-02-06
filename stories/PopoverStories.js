import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select, boolean } from '@storybook/addon-knobs';
import { Popover, PopoverHeader, PopoverBody, Button } from './../lib';

const popoverText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Commodi laudantium molestias reprehenderit nostrum quod natus saepe
ea corrupti odit minima?
Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Commodi laudantium molestias reprehenderit nostrum quod natus saepe
ea corrupti odit minima?
`;

storiesOf('Popover', module)
  .add(
    'Controlled with knobs',
    withInfo('Popover controlled with knobs')(() => {
      const positionOptions = {
        '': '(none)',
        bottom: 'bottom',
        'bottom-left': 'bottom-left',
        'bottom-right': 'bottom-right',
        left: 'left',
        'left-bottom': 'left-bottom',
        'left-top': 'left-top',
        right: 'right',
        'right-bottom': 'right-bottom',
        'right-top': 'right-top',
        top: 'top',
        'top-left': 'top-left',
        'top-right': 'top-right',
      };
      const position = select('position', positionOptions);
      const themeOptions = {
        '': '(none)',
        error: 'error',
        info: 'info',
        success: 'success',
        warning: 'warning',

      };
      const theme = select('theme', themeOptions);
      return (
        <div style={{ textAlign: 'center', width: '100%' }}>
          <Popover position={position} theme={theme} content={<PopoverBody>{popoverText}</PopoverBody>}>
            <Button>I'm trigger</Button>
          </Popover>
        </div>
      );
    }),
  )
  .add(
    'Default',
    withInfo('Default Popover')(() => (
      <Popover position="top" content="popover ontent">
        <Button>I'm trigger</Button>
      </Popover>
    )),
  )
  .add(
    'Theme - Info',
    withInfo('Popover with info theme')(() => (
      <Popover hidden={false} theme="info" position="left">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Theme - Error',
    withInfo('Popover with error theme')(() => (
      <Popover hidden={false} theme="error" position="left">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Theme - Warning',
    withInfo('Popover with warning theme')(() => (
      <Popover hidden={false} theme="warning" position="left">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Theme - Success',
    withInfo('Popover with success theme')(() => (
      <Popover hidden={false} theme="success" position="left">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Position - Left',
    withInfo('Popover with nubbin in left position')(() => (
      <Popover hidden={false} position="left">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Position - Left (top)',
    withInfo('Popover with nubbin in left-top position')(() => (
      <Popover hidden={false} position="left-top">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Position - Left (bottom)',
    withInfo('Popover with nubbin in left-bottom position')(() => (
      <Popover hidden={false} position="left-bottom">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Position - Top',
    withInfo('Popover with nubbin in top position')(() => (
      <Popover hidden={false} position="top">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Position - Top (left)',
    withInfo('Popover with nubbin in top-left position')(() => (
      <Popover hidden={false} position="top-left">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Position - Top (right)',
    withInfo('Popover with nubbin in top-right position')(() => (
      <Popover hidden={false} position="top-right">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Position - Right',
    withInfo('Popover with nubbin in right position')(() => (
      <Popover hidden={false} position="right">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Position - Right (top)',
    withInfo('Popover with nubbin in right-top position')(() => (
      <Popover hidden={false} position="right-top">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Position - Right (bottom)',
    withInfo('Popover with nubbin in right-bottom position')(() => (
      <Popover hidden={false} position="right-bottom">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Position - Bottom',
    withInfo('Popover with nubbin in bottom position')(() => (
      <Popover hidden={false} position="bottom">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Position - Bottom (left)',
    withInfo('Popover with nubbin in bottom-left position')(() => (
      <Popover hidden={false} position="bottom-left">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Position - Bottom (right)',
    withInfo('Popover with nubbin in bottom-right position')(() => (
      <Popover hidden={false} position="bottom-right">
        <p>{popoverText}</p>
      </Popover>
    )),
  )
  .add(
    'Tooltip',
    withInfo('Popover with tooltip styling')(() => (
      <Popover hidden={false} position="bottom-left" tooltip>
        <p>{popoverText}</p>
      </Popover>
    )),
  );
