import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Dropdown, Menu, MenuItem, MenuHeader, Button, Icon } from './../lib';

const stories = storiesOf('Dropdown', module)
  .add('Left/Right icon', withInfo('Dropdown button with icon in left/right side of menu items')(() => (
    <Dropdown>
      <Button type="icon-border" onClick={action('dropdownClick')} onBlur={action('dropdownClick')}>
        <Icon icon="down" align="right" />
      </Button>
      <Menu>
        <MenuItem icon="check" iconRight="table">
          Menu Item One
          <Icon icon="check" align="left" />
          <Icon icon="table" align="right" />
        </MenuItem>
        <MenuItem icon="none" iconRight="kanban">
          Menu Item Two
          <Icon icon="none" align="left" />
          <Icon icon="kanban" align="right" />
        </MenuItem>
      </Menu>
    </Dropdown>
  )))
  .add('Right aligned menu', withInfo('Dropdown')(() => (
    <div>
      <Dropdown
        menuAlign="right"
      >
        <Button type="icon-border" onClick={action('dropdownClick')} onBlur={action('dropdownClick')}>
          <Icon icon="down" align="right" />
        </Button>
        <Menu>
          <MenuItem>Menu Item One</MenuItem>
          <MenuItem disabled>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <MenuItem>Menu Item Four</MenuItem>
        </Menu>
      </Dropdown>
    </div>
  )))
  .add('Hover Popup', withInfo('Dropdown is rendered in hover event')(() => (
    <Dropdown>
      <Button type="neutral" onClick={action('dropdownClick')} onBlur={action('dropdownClick')}>
        Dropdown Button
        <Icon icon="settings" align="right" />
      </Button>
      <Menu>
        <MenuItem>Menu Item One</MenuItem>
        <MenuItem disabled>Menu Item Two</MenuItem>
        <MenuItem>Menu Item Three</MenuItem>
        <MenuItem>Menu Item Four</MenuItem>
      </Menu>
    </Dropdown>
  )))
  .add('Nubbin in top', withInfo('Nubbin in top of the menu dropdown')(() => (
    <div style={{ paddingLeft: 100 }}>
      <Dropdown>
        <Button type="icon-container" onClick={action('dropdownClick')} onBlur={action('dropdownClick')}>
          <Icon icon="settings" align="right" />
        </Button>
        <Menu>
          <MenuHeader> List </MenuHeader>
          <MenuItem>Menu Item One</MenuItem>
          <MenuItem disabled>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <MenuItem divider="top">Menu Item Four</MenuItem>
        </Menu>
      </Dropdown>
    </div>
  )))

  .add('Default Dropdown - Basic ', withInfo('Basic dropdown with options provided')(() => (
    <div style={{ paddingLeft: 100 }}>
      <Dropdown
        display="Dropdown Button Default"
        items={[
          { id: '1', name: 'Drop down item 1' },
          { id: '2', name: 'Drop down item 2' },
          { id: '3', name: 'Drop down item 3' },
        ]}
        onClick={action('dropdownClick')}
      />
    </div>
  )))
  .add('Dropdown - Custom ', withInfo('Custom Drop Down')(() => (
    <div style={{ paddingLeft: 100 }}>
      <Dropdown
        display="Dropdown Button Custom"
        onClick={action('dropdownClick')}
      >
        <Button type="neutral" onClick={action('dropdownClick')} onBlur={action('dropdownClick')}>
          DropDown Custom
          <Icon icon="down" align="right" />
        </Button>
        <Menu>
          <MenuItem>
            Drop down Item 1
            <Button><Icon icon="setting" /></Button>
          </MenuItem>
          <MenuItem> Drop down Item 2 </MenuItem>
          <MenuItem> Drop down Item 3 </MenuItem>
        </Menu>
      </Dropdown>

    </div>
  )))
;

export default stories;
