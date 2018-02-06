import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, select } from '@storybook/addon-knobs';
import { Dropdown, DropdownMenuItem } from './../lib';

const darkBgStyle = { backgroundColor: '#16325c', padding: 4 };
const lightBgStyle = { backgroundColor: '#cccccc', padding: 4 };

const stories = storiesOf('Dropdown', module)
  // .add('Controlled with knobs', withInfo('Dropdown button controlled with knobs')(() => {
  //   const typeOptions = {
  //     '': '(none)',
  //     neutral: 'neutral',
  //     brand: 'brand',
  //     destructive: 'destructive',
  //     'icon-bare': 'icon-bare',
  //     'icon-more': 'icon-more',
  //     'icon-container': 'icon-container',
  //     'icon-border': 'icon-border',
  //     'icon-border-filled': 'icon-border-filled',
  //     inverse: 'inverse',
  //     'icon-inverse': 'icon-inverse',
  //   };
  //   const type = select('type', typeOptions);
  //   const sizeOptions = {
  //     '': '(none)',
  //     'x-small': 'x-small',
  //     small: 'small',
  //     medium: 'medium',
  //     large: 'large',
  //   };
  //   const size = select('size', sizeOptions);
  //   const label = text('label', 'Dropdown Button');
  //   const iconOptions = {
  //     '': '(none)',
  //     download: 'download',
  //     down: 'down',
  //     task: 'task',
  //     settings: 'settings',
  //     close: 'close',
  //     check: 'check',
  //     none: 'none',
  //   };
  //   const icon = select('icon', iconOptions);
  //   const iconAlignOptions = { '': '(none)', left: 'left', right: 'right' };
  //   const iconAlign = select('iconAlign', iconAlignOptions, 'left');
  //   const iconSizeOptions = {
  //     '': '(none)',
  //     'x-small': 'x-small',
  //     small: 'small',
  //     medium: 'medium',
  //     large: 'large',
  //   };
  //   const iconSize = select('iconSize', iconSizeOptions);
  //   const menuSizeOptions = {
  //     '': '(none)',
  //     small: 'small',
  //     medium: 'medium',
  //     large: 'large',
  //   };
  //   const menuSize = select('menuSize', menuSizeOptions);
  //   const menuAlignOptions = {
  //     '': '(none)',
  //     left: 'left',
  //     center: 'center',
  //     right: 'right',
  //   };
  //   const menuAlign = select('menuAlign', menuAlignOptions);
  //   const disabled = boolean('disabled', false);
  //   const hoverPopup = boolean('hoverPopup', false);
  //   const nubbinTop = boolean('nubbinTop', false);
  //   const cntStyles =
  //     type === 'inverse' || type === 'icon-inverse' ? darkBgStyle :
  //       type === 'icon-border-filled' ? lightBgStyle :
  //         {};
  //   return (
  //     <div style={cntStyles}>
  //       <Dropdown
  //         type={type}
  //         size={size}
  //         label={label}
  //         icon={icon}
  //         iconAlign={iconAlign}
  //         iconSize={iconSize}
  //         menuSize={menuSize}
  //         menuAlign={menuAlign}
  //         disabled={disabled}
  //         hoverPopup={hoverPopup}
  //         nubbinTop={nubbinTop}
  //         onClick={action('click')}
  //         onMenuItemClick={action('menuItemClick')}
  //       >
  //         <DropdownMenuItem
  //           icon={select('menuitem icon', iconOptions)}
  //           iconRight={select('menuitem iconRight', iconOptions)}
  //           disabled={boolean('menuitem disabled')}
  //         >
  //           Menu Item One
  //         </DropdownMenuItem>
  //         <DropdownMenuItem
  //           icon={select('menuitem icon', iconOptions)}
  //           iconRight={select('menuitem iconRight', iconOptions)}
  //           disabled={boolean('menuitem disabled')}
  //         >
  //           Menu Item Two
  //         </DropdownMenuItem>
  //         <DropdownMenuItem
  //           icon={select('menuitem icon', iconOptions)}
  //           iconRight={select('menuitem iconRight', iconOptions)}
  //           disabled={boolean('menuitem disabled')}
  //         >
  //           Menu Item Three
  //         </DropdownMenuItem>
  //       </Dropdown>
  //     </div>
  //   );
  // }))
  // .add('Default', withInfo('Dropdown button with menu items')(() => (
  //   <Dropdown
  //     label="Dropdown Button"
  //     onMenuItemClick={action('menuItemClick')}
  //   >
  //     <DropdownMenuItem>Menu Item One</DropdownMenuItem>
  //     <DropdownMenuItem disabled>Menu Item Two</DropdownMenuItem>
  //     <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
  //     <DropdownMenuItem divider="top">Menu Item Four</DropdownMenuItem>
  //   </Dropdown>
  // )))
  // .add('Icon Bare', withInfo('Icon bare dropdown button')(() => (
  //   <Dropdown
  //     type="icon-bare"
  //     icon="settings"
  //     onMenuItemClick={action('menuItemClick')}
  //   >
  //     <DropdownMenuItem>Menu Item One</DropdownMenuItem>
  //     <DropdownMenuItem disabled>Menu Item Two</DropdownMenuItem>
  //     <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
  //     <DropdownMenuItem divider="top">Menu Item Four</DropdownMenuItem>
  //   </Dropdown>
  // )))
  // .add('Icon More', withInfo('Icon and more dropdown button')(() => (
  //   <Dropdown
  //     type="icon-more"
  //     icon="settings"
  //     onMenuItemClick={action('menuItemClick')}
  //   >
  //     <DropdownMenuItem>Menu Item One</DropdownMenuItem>
  //     <DropdownMenuItem disabled>Menu Item Two</DropdownMenuItem>
  //     <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
  //     <DropdownMenuItem divider="top">Menu Item Four</DropdownMenuItem>
  //   </Dropdown>
  // )))
  // .add('Left icon', withInfo('Dropdown button with icon in left side of menu items')(() => (
  //   <Dropdown
  //     type="icon-border"
  //     icon="down"
  //     onMenuItemClick={action('menuItemClick')}
  //   >
  //     <DropdownMenuItem icon="check">Menu Item One</DropdownMenuItem>
  //     <DropdownMenuItem icon="none">Menu Item Two</DropdownMenuItem>
  //     <DropdownMenuItem icon="none">Menu Item Three</DropdownMenuItem>
  //   </Dropdown>
  // )))
  // .add('Right icon', withInfo('Dropdown button with icon in right side of menu items')(() => (
  //   <Dropdown
  //     type="icon-border"
  //     icon="down"
  //     onMenuItemClick={action('menuItemClick')}
  //   >
  //     <DropdownMenuItem iconRight="table">Menu Item One</DropdownMenuItem>
  //     <DropdownMenuItem iconRight="kanban">Menu Item Two</DropdownMenuItem>
  //     <DropdownMenuItem iconRight="side_list">Menu Item Three</DropdownMenuItem>
  //   </Dropdown>
  // )))
  // .add('Left/Right icon', withInfo('Dropdown button with icon in left/right side of menu items')(() => (
  //   <Dropdown
  //     type="icon-border"
  //     icon="down"
  //     onMenuItemClick={action('menuItemClick')}
  //   >
  //     <DropdownMenuItem icon="check" iconRight="table">Menu Item One</DropdownMenuItem>
  //     <DropdownMenuItem icon="none" iconRight="kanban">Menu Item Two</DropdownMenuItem>
  //     <DropdownMenuItem icon="none" iconRight="side_list">Menu Item Three</DropdownMenuItem>
  //   </Dropdown>
  // )))
  // .add('Right aligned menu', withInfo('Dropdown')(() => (
  //   <div style={{ paddingLeft: 200 }}>
  //     <Dropdown
  //       type="icon-border"
  //       icon="down"
  //       menuAlign="right"
  //       onMenuItemClick={action('menuItemClick')}
  //     >
  //       <DropdownMenuItem>Menu Item One</DropdownMenuItem>
  //       <DropdownMenuItem disabled>Menu Item Two</DropdownMenuItem>
  //       <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
  //       <DropdownMenuItem divider="top">Menu Item Four</DropdownMenuItem>
  //     </Dropdown>
  //   </div>
  // )))
  // .add('Hover Popup', withInfo('Dropdown is rendered in hover event')(() => (
  //   <Dropdown
  //     type="neutral"
  //     label="Dropdown Button"
  //     hoverPopup
  //     onMenuItemClick={action('menuItemClick')}
  //   >
  //     <DropdownMenuItem>Menu Item One</DropdownMenuItem>
  //     <DropdownMenuItem disabled>Menu Item Two</DropdownMenuItem>
  //     <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
  //     <DropdownMenuItem divider="top">Menu Item Four</DropdownMenuItem>
  //   </Dropdown>
  // )))
  // .add('Nubbin in top', withInfo('Nubbin in top of the menu dropdown')(() => (
  //   <div style={{ paddingLeft: 100 }}>
  //     <Dropdown
  //       type="icon-container"
  //       icon="settings"
  //       nubbinTop
  //       onMenuItemClick={action('menuItemClick')}
  //     >
  //       <DropdownMenuItem>Menu Item One</DropdownMenuItem>
  //       <DropdownMenuItem disabled>Menu Item Two</DropdownMenuItem>
  //       <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
  //       <DropdownMenuItem divider="top">Menu Item Four</DropdownMenuItem>
  //     </Dropdown>
  //   </div>
  // )))

  .add('Default Dropdown- Basic ', withInfo('Basic dropdown with options provided')(() => (
    <div style={{ paddingLeft: 100 }}>
      <Dropdown
        type="icon-container"
        icon="settings"
        nubbinTop
        onMenuItemClick={action('menuItemClick')}
      >
        <DropdownMenuItem>Menu Item One</DropdownMenuItem>
        <DropdownMenuItem disabled>Menu Item Two</DropdownMenuItem>
        <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
        <DropdownMenuItem divider="top">Menu Item Four</DropdownMenuItem>
      </Dropdown>
    </div>
  )))
;

export default stories;
