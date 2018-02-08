import React from 'react';
import { shallow } from 'enzyme';

import Popover from './Popover';
import PopoverBody from './PopoverBody';

describe('Popover', () => {
  it('should render Popover with default values', () => {
    const wrapper = shallow(<Popover />);
    expect(wrapper.instance().contentEl.getAttribute('class')).toContain(
      'Popover__hide',
      'slds-theme--none',
      'slds-nubbin--bottom',
    );
    expect(wrapper.prop('className')).toContain('Popover');
    expect(wrapper.childAt(0).prop('className')).toContain('Popover__trigger');
  });

  it('should render Popover with children', () => {
    const children = <span>Test</span>;
    const wrapper = shallow(<Popover>{children}</Popover>);
    expect(wrapper.childAt(0).contains(children)).toBe(true);
  });

  it('should render Popover with string header and body', () => {
    const header = 'demo header';
    const body = 'demo body';
    const wrapper = shallow(
      <Popover header={header} body={body}>
        Trigger
      </Popover>,
    );
    expect(wrapper.instance().contentEl.innerHTML).toBe(
      `<div class="PopoverHeader slds-popover__header">${header}</div><div class="PopoverBody slds-popover__body">${body}</div>`,
    );
  });

  it('should render Popover with React element body', () => {
    const Content = () => <p>body</p>;
    const wrapper = shallow(<Popover body={<Content />}>Trigger</Popover>);
    expect(wrapper.instance().contentEl.innerHTML).toBe(
      shallow(
        <PopoverBody>
          <Content />
        </PopoverBody>,
      ).html(),
    );
  });

  it('should render Popover with bottom arrow position', () => {
    const position = 'bottom';
    const wrapper = shallow(<Popover position={position}>Trigger</Popover>);
    expect(wrapper.instance().contentEl.getAttribute('class')).toContain(
      `slds-nubbin--${position}`,
    );
  });

  it('should render Popover with warning theme', () => {
    const theme = 'warning';
    const wrapper = shallow(<Popover theme={theme}>Trigger</Popover>);
    expect(wrapper.instance().contentEl.getAttribute('class')).toContain(`slds-theme--${theme}`);
  });

  it('should render tooltip style', () => {
    const wrapper = shallow(<Popover isTooltip>Trigger</Popover>);
    expect(wrapper.instance().contentEl.getAttribute('class')).toContain('slds-popover--tooltip');
  });

  it('simulates click trigger', () => {
    const wrapper = shallow(<Popover>Trigger</Popover>);
    expect(wrapper.instance().contentEl.getAttribute('class')).toContain('Popover__hide');
    wrapper.find('.Popover__trigger').simulate('click');
    expect(wrapper.instance().contentEl.getAttribute('class')).not.toContain('Popover__hide');
  });

  it('simulates hover trigger', () => {
    const wrapper = shallow(<Popover method="hover">Trigger</Popover>);
    expect(wrapper.instance().contentEl.getAttribute('class')).toContain('Popover__hide');
    wrapper.find('.Popover__trigger').simulate('mouseover');
    expect(wrapper.instance().contentEl.getAttribute('class')).not.toContain('Popover__hide');
  });
});
