import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Dropdown, Menu, MenuItem, MenuHeader, Button, Icon } from './../lib';

const stories = storiesOf('Dropdown', module)
  .add(
    'Left/Right icon',
    withInfo(
      'Dropdown button with icon in left/right side of menu items',
    )(() => (
      <Dropdown onMenuItemClick={action('menuItemClick')}>
        <Button>
          Dropdown Button
          <Icon category="utility" icon="down" size="x-small" />
        </Button>
        <Menu>
          <MenuItem>
            <Icon category="utility" icon="check" align="left" size="x-small" />
            Menu Item One
            <Icon
              category="utility"
              icon="table"
              align="right"
              size="x-small"
            />
          </MenuItem>
          <MenuItem>
            Menu Item Two
            <Icon icon="none" align="left" />
            <Icon icon="kanban" align="right" />
          </MenuItem>
        </Menu>
      </Dropdown>
    )),
  )
  .add(
    'Right aligned menu',
    withInfo('Dropdown')(() => (
      <div>
        <Dropdown onMenuItemClick={action('menuItemClick')}>
          <Button type="icon-border" onClick={action('dropdownClick')}>
            <Icon
              icon="down"
              align="medium"
              category="utility"
              size="x-small"
            />
          </Button>
          <Menu>
            <MenuItem>Menu Item One</MenuItem>
            <MenuItem disabled>Menu Item Two</MenuItem>
            <MenuItem>Menu Item Three</MenuItem>
            <MenuItem>Menu Item Four</MenuItem>
          </Menu>
        </Dropdown>
      </div>
    )),
  )
  .add(
    'Hover Popup',
    withInfo('Dropdown is rendered in hover event')(() => (
      <Dropdown onMenuItemClick={action('menuItemClick')}>
        <Button type="neutral" onClick={action('dropdownClick')}>
          Dropdown Button
          <Icon
            icon="settings"
            align="right"
            category="utility"
            size="x-small"
          />
        </Button>
        <Menu shouldShowOnHover>
          <MenuItem>Menu Item One</MenuItem>
          <MenuItem disabled>Menu Item Two</MenuItem>
          <MenuItem>Menu Item Three</MenuItem>
          <MenuItem>Menu Item Four</MenuItem>
        </Menu>
      </Dropdown>
    )),
  )
  .add(
    'Nubbin in top',
    withInfo('Nubbin in top of the menu dropdown')(() => (
      <div style={{ paddingLeft: 100 }}>
        <Dropdown onMenuItemClick={action('menuItemClick')}>
          <Button type="icon-container" onClick={action('dropdownClick')}>
            <Icon
              icon="settings"
              align="right"
              category="utility"
              size="small"
            />
          </Button>
          <Menu nubbin="top-left" align="left" vertAlign="medium">
            <MenuItem>Menu Item One</MenuItem>
            <MenuItem disabled>Menu Item Two</MenuItem>
            <MenuItem>Menu Item Three</MenuItem>
            <MenuItem divider="top">Menu Item Four</MenuItem>
          </Menu>
        </Dropdown>
      </div>
    )),
  )
  .add(
    'Default Dropdown - Basic ',
    withInfo('Basic dropdown with options provided')(() => (
      <div style={{ paddingLeft: 100 }}>
        <Dropdown
          display="Dropdown Button Default"
          items={[
            { id: '1', name: 'Drop down item 1' },
            { id: '2', name: 'Drop down item 2' },
            { id: '3', name: 'Drop down item 3' },
          ]}
          onMenuItemClick={action('menuItemClick')}
        />
      </div>
    )),
  )
  .add(
    'Dropdown - Custom ',
    withInfo('Custom Drop Down')(() => (
      <div style={{ paddingLeft: 100 }}>
        <Dropdown
          display="Dropdown Button Custom"
          onMenuItemClick={action('menuItemClick')}
        >
          <Button type="neutral" onClick={action('dropdownClick')}>
            DropDown Custom
            <Icon icon="down" align="right" category="utility" size="x-small" />
          </Button>
          <Menu>
            <MenuItem>
              Drop down Item 1
              <Button type="icon-border">
                <Icon
                  icon="settings"
                  category="utility"
                  size="x-small"
                  align="medium"
                />
              </Button>
            </MenuItem>
            <MenuItem> Drop down Item 2 </MenuItem>
            <MenuItem> Drop down Item 3 </MenuItem>
          </Menu>
        </Dropdown>
      </div>
    )),
  )
  .add(
    'Menu with Header',
    withInfo('Menu with header')(() => (
      <div style={{ paddingLeft: 100 }}>
        <Dropdown onMenuItemClick={action('menuItemClick')}>
          <Button type="neutral" onClick={action('dropdownClick')}>
            Dropdown
          </Button>
          <Menu nubbin="bottom-left" align="left" vertAlign="bottom">
            <MenuHeader> Heading Item </MenuHeader>
            <MenuItem>Menu Item One</MenuItem>
            <MenuItem disabled>Menu Item Two</MenuItem>
            <MenuItem>Menu Item Three</MenuItem>
            <MenuItem divider="top">Menu Item Four</MenuItem>
          </Menu>
        </Dropdown>
      </div>
    )),
  );

export default stories;
