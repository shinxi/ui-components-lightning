import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, select } from '@storybook/addon-knobs';
import { Dropdown, DropdownItem, Button, Icon } from './../lib';

const darkBgStyle = { backgroundColor: '#16325c', padding: 4 };
const lightBgStyle = { backgroundColor: '#cccccc', padding: 4 };

const stories = storiesOf('Dropdown', module)
  .add('Left/Right icon', withInfo('Dropdown button with icon in left/right side of menu items')(() => (
    <Dropdown
      onMenuItemClick={action('menuItemClick')}
    >
      <Button type="icon-border" handleDropdownClick={action('dropdownClick')} onBlur={action('dropdownClick')}>
        <Icon icon="down" align="right" />
      </Button>
      <DropdownItem icon="check" iconRight="table">
        Menu Item One
        <Icon icon="check" align="left" />
        <Icon icon="table" align="right" />
      </DropdownItem>
      <DropdownItem icon="none" iconRight="kanban">
        Menu Item Two
        <Icon icon="none" align="left" />
        <Icon icon="kanban" align="right" />
      </DropdownItem>
    </Dropdown>
  )))
  .add('Right aligned menu', withInfo('Dropdown')(() => (
    <div>
      <Dropdown
        menuAlign="right"
      >
        <Button type="icon-border" handleDropdownClick={action('dropdownClick')} onBlur={action('dropdownClick')}>
          <Icon icon="down" align="right" />
        </Button>
        <DropdownItem>Menu Item One</DropdownItem>
        <DropdownItem disabled>Menu Item Two</DropdownItem>
        <DropdownItem>Menu Item Three</DropdownItem>
        <DropdownItem>Menu Item Four</DropdownItem>
      </Dropdown>
    </div>
  )))
  .add('Hover Popup', withInfo('Dropdown is rendered in hover event')(() => (
    <Dropdown>
      <Button type="neutral" handleDropdownClick={action('dropdownClick')} onBlur={action('dropdownClick')}>
        Dropdown Button
        <Icon icon="settings" align="right" />
      </Button>
      <DropdownItem>Menu Item One</DropdownItem>
      <DropdownItem disabled>Menu Item Two</DropdownItem>
      <DropdownItem>Menu Item Three</DropdownItem>
      <DropdownItem>Menu Item Four</DropdownItem>
    </Dropdown>
  )))
  .add('Nubbin in top', withInfo('Nubbin in top of the menu dropdown')(() => (
    <div style={{ paddingLeft: 100 }}>
      <Dropdown>
        <Button type="icon-container" handleDropdownClick={action('dropdownClick')} onBlur={action('dropdownClick')}>
          <Icon icon="settings" align="right" />
        </Button>
        <DropdownItem>Menu Item One</DropdownItem>
        <DropdownItem disabled>Menu Item Two</DropdownItem>
        <DropdownItem>Menu Item Three</DropdownItem>
        <DropdownItem divider="top">Menu Item Four</DropdownItem>
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
        handleDropdownClick={action('dropdownClick')}
      />
    </div>
  )))
  .add('Dropdown - Custom ', withInfo('Custom Drop Down')(() => (
    <div style={{ paddingLeft: 100 }}>
      <Dropdown
        display="Dropdown Button Custom"
        handleDropdownClick={action('dropdownClick')}
      >
        <Button type="neutral" onClick={action('dropdownClick')} onBlur={action('dropdownClick')}>
          DropDown Custom
          <Icon icon="down" align="right" />
        </Button>
        <DropdownItem>
          Drop down Item 1
          <Icon icon="setting" />
        </DropdownItem>
        <DropdownItem> Drop down Item 2 </DropdownItem>
        <DropdownItem> Drop down Item 3 </DropdownItem>
      </Dropdown>

    </div>
  )))
;

export default stories;
