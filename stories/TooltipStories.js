import React from 'react';
import propTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';
import { Tooltip, Button } from './../lib';

const TooltipText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Commodi laudantium molestias reprehenderit nostrum quod natus saepe
ea corrupti odit minima?
Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Commodi laudantium molestias reprehenderit nostrum quod natus saepe
ea corrupti odit minima?
`;

const TextCenteredBox = ({ children }) => (
  <div style={{ textAlign: 'center', width: '100%' }}>{children}</div>
);

TextCenteredBox.propTypes = {
  children: propTypes.node,
};

storiesOf('Tooltip', module)
  .add(
    'Controlled with knobs',
    withInfo('Tooltip controlled with knobs')(() => {
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
      const method = select('method', {
        '': '(none)',
        click: 'click',
        hover: 'hover',
      });
      return (
        <TextCenteredBox>
          <Tooltip
            position={position}
            method={method}
            theme={theme}
            body={TooltipText}
          >
            <Button>Trigger</Button>
          </Tooltip>
        </TextCenteredBox>
      );
    }),
  )
  .add(
    'Trigger methods',
    withInfo('Tooltip can be triggered by clicking or hovering')(() => (
      <TextCenteredBox>
        <Tooltip method="click" position="left" body="I'm body.">
          <Button>Click to trigger</Button>
        </Tooltip>
        <br />
        <br />
        <br />
        <Tooltip method="hover" position="left" body="I'm body.">
          <Button>Hover to trigger</Button>
        </Tooltip>
      </TextCenteredBox>
    )),
  )
  .add(
    'Themes',
    withInfo('Use different themes which have different background colors and font colors.')(() => (
      <TextCenteredBox>
        <Tooltip method="hover" body="I'm a demo body">
          <Button>none (default)</Button>
        </Tooltip>
        &nbsp;
        <Tooltip theme="info" method="hover" body="I'm a demo body">
          <Button>info</Button>
        </Tooltip>
        &nbsp;
        <Tooltip theme="success" method="hover" body="I'm a demo body">
          <Button>success</Button>
        </Tooltip>
        &nbsp;
        <Tooltip theme="warning" method="hover" body="I'm a demo body">
          <Button>warning</Button>
        </Tooltip>
        &nbsp;
        <Tooltip theme="error" method="hover" body="I'm a demo body">
          <Button>error</Button>
        </Tooltip>
      </TextCenteredBox>
    )),
  );
