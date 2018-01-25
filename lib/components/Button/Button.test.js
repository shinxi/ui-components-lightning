import React from 'react';
import { shallow } from 'enzyme';

import { Button } from './../Button';
import Icon from './../Icon';

describe('Button', () => {
  it('should render button with className', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').hasClass('slds-button')).toBe(true);
  });

  it('should render button with children', () => {
    const children = <span>Test</span>;
    const wrapper = shallow(<Button>{children}</Button>);
    expect(wrapper.contains(children)).toBe(true);
  });

  it('should render button with specific className', () => {
    const className = 'test';
    const wrapper = shallow(<Button className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
  });

  it('should render button with label', () => {
    const label = 'Label';
    const wrapper = shallow(<Button label={label} />);
    expect(wrapper.text()).toEqual(label);
  });

  it('should render button with alt', () => {
    const alt = 'alt';
    const wrapper = shallow(<Button alt={alt} />);
    expect(wrapper.find('.slds-assistive-text').text()).toEqual(alt);
  });

  it('should render button based on a type', () => {
    const type = 'brand';
    const wrapper = shallow(<Button type={type} />);
    expect(wrapper.hasClass(`slds-button--${type}`)).toBe(true);
  });

  it('should render button based on a size', () => {
    const size = 'small';
    const wrapper = shallow(<Button size={size} />);
    expect(wrapper.hasClass(`slds-button--${size}`)).toBe(true);
  });

  it('should render button based on htmlType', () => {
    const htmlType = 'button';
    const wrapper = shallow(<Button htmlType={htmlType} />);
    expect(wrapper.prop('type')).toEqual(htmlType);
  });

  it('should render disabled button', () => {
    const wrapper = shallow(<Button disabled />);
    expect(wrapper.prop('disabled')).toBe(true);
  });

  it('should render selected button', () => {
    const wrapper = shallow(<Button selected />);
    expect(wrapper.hasClass('slds-is-selected')).toBe(true);
  });

  it('should render button with icon based on size and align', () => {
    const wrapper = shallow(
      <Button >
        <Icon icon="download" align="left" />
        Test Button
      </Button>,
    );
    expect(wrapper.find('button').children()).toBeTruthy();
  });
  it('should render button with props', () => {
    const wrapper = shallow(<Button onClick={() => {}} />);
    expect(wrapper.prop('onClick')).toBeInstanceOf(Function);
  });
});

