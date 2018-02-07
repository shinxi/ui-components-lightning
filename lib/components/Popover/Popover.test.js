import React from 'react';
import { shallow } from 'enzyme';

import Popover from './Popover';

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

  it('should render Popover with string content', () => {
    const content = 'demo content';
    const wrapper = shallow(<Popover content={content}>Trigger</Popover>);
    expect(wrapper.instance().contentEl.innerHTML).toBe(
      `<div class="PopoverBody slds-popover__body">${content}</div>`,
    );
  });

  it('should render Popover with React element content', () => {
    const Content = () => <p>content</p>;
    const wrapper = shallow(<Popover content={<Content />}>Trigger</Popover>);
    expect(wrapper.instance().contentEl.innerHTML).toBe(shallow(<Content />).html());
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
