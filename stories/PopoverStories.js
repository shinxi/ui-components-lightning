import React from 'react';
import propTypes from 'prop-types';
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

const PopoverContent = () => (
  <div style={{ padding: '15px', fontSize: '18px' }}>I'm an element content.</div>
);

const TextCenteredBox = ({ children }) => (
  <div style={{ textAlign: 'center', width: '100%' }}>{children}</div>
);

TextCenteredBox.propTypes = {
  children: propTypes.node,
};

storiesOf('Popover', module)
  .add(
    'Controlled with knobs',
    withInfo('Popover controlled with knobs')(() => {
      const position = select('position', {
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
      });
      const theme = select('theme', {
        '': '(none)',
        error: 'error',
        info: 'info',
        success: 'success',
        warning: 'warning',

      });
      const isTooltip = boolean('isTooltip', false);
      const method = select('method', {
        '': '(none)',
        click: 'click',
        hover: 'hover',
      });
      return (
        <TextCenteredBox>
          <Popover
            position={position}
            method={method}
            isTooltip={isTooltip}
            theme={theme}
            content={popoverText}
          >
            <Button>Trigger</Button>
          </Popover>
        </TextCenteredBox>
      );
    }),
  )
  .add(
    'Trigger methods',
    withInfo('Popover can be triggered by clicking or hovering')(() => (
      <TextCenteredBox>
        <Popover method="click" position="left" content="I'm content.">
          <Button>Click to trigger</Button>
        </Popover>
        <br />
        <br />
        <br />
        <Popover method="hover" position="left" content="I'm content.">
          <Button>Hover to trigger</Button>
        </Popover>
      </TextCenteredBox>
    )),
  )
  .add(
    'Content',
    withInfo('Popover accepts either string or React element as its content')(() => (
      <TextCenteredBox>
        <Popover method="hover" position="left" content="I'm a string content.">
          <Button>Trigger string content</Button>
        </Popover>
        <br />
        <br />
        <br />
        <Popover method="hover" position="left" content={<PopoverContent />}>
          <Button>Trigger element content</Button>
        </Popover>
      </TextCenteredBox>
    )),
  )
  .add(
    'Tooltip',
    withInfo('A little style difference. Popover has fixed width of 20rem, tooltip has dynamic width, but max-width is also 20rem.')(() => (
      <TextCenteredBox>
        <Popover method="hover" position="left" content="Popover content">
          <Button>Popover trigger</Button>
        </Popover>
        <br />
        <br />
        <br />
        <Popover isTooltip method="hover" position="left" content="Tooltip content">
          <Button>Tooltip Trigger</Button>
        </Popover>
      </TextCenteredBox>
    )),
  )
  .add(
    'Header & Body',
    withInfo(`Use the built-in header and body.

import { Popover, PopoverHeader, PopoverBody } from '../lib/Popover';
    `)(() => (
      <TextCenteredBox>
        <Popover
          method="hover"
          content={[
            <PopoverHeader>My name is Header</PopoverHeader>,
            <PopoverBody>{popoverText}</PopoverBody>,
          ]}
        >
          <Button>Trigger</Button>
        </Popover>
      </TextCenteredBox>
    )),
  )
  .add(
    'Themes',
    withInfo('Use different themes which have different background colors and font colors.')(() => (
      <TextCenteredBox>
        <Popover method="hover" content="I'm a demo content">
          <Button>none (default)</Button>
        </Popover>
        &nbsp;
        <Popover theme="info" method="hover" content="I'm a demo content">
          <Button>info</Button>
        </Popover>
        &nbsp;
        <Popover theme="success" method="hover" content="I'm a demo content">
          <Button>success</Button>
        </Popover>
        &nbsp;
        <Popover theme="warning" method="hover" content="I'm a demo content">
          <Button>warning</Button>
        </Popover>
        &nbsp;
        <Popover theme="error" method="hover" content="I'm a demo content">
          <Button>error</Button>
        </Popover>
      </TextCenteredBox>
    )),
  );
