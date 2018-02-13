import React from 'react';
import { shallow } from 'enzyme';

import Pill from './Pill';

describe('Pill', () => {
  it('should render Pill with a custom className', () => {
    const wrapper = shallow(<Pill className="test-class" />);
    expect(wrapper.hasClass('Pill')).toBe(true);
    expect(wrapper.hasClass('test-class')).toBe(true);
  });

  it('should render Pill with a label, icon, and remove button', () => {
    const iconObj = {
      category: 'standard',
      icon: 'custom7',
    };
    const wrapper = shallow(<Pill icon={iconObj} label="Apple" />);
    expect(wrapper.hasClass('Pill')).toBe(true);
    expect(wrapper.find('.Pill__icon').length).toBe(1);
    expect(wrapper.find('.Pill__label').length).toBe(1);
    expect(wrapper.find('.Pill__label').text()).toEqual('Apple');
  });

  it('should render Pill, with the remove button disabled.', () => {
    const wrapper = shallow(<Pill label="Apple" isDisabled />);
    expect(wrapper.hasClass('Pill')).toBe(true);
    expect(wrapper.find('.Pill__label').length).toBe(1);
    expect(wrapper.find('.Pill__label').text()).toEqual('Apple');
    expect(wrapper.find('.Pill__remove').prop('disabled')).toBeTruthy();
  });

  it('should render Pill, with the text truncated.', () => {
    const wrapper = shallow(<Pill label="Apple" isTruncated />);
    expect(wrapper.hasClass('Pill')).toBe(true);
    expect(wrapper.hasClass('Pill--truncated')).toBe(true);
  });
});
