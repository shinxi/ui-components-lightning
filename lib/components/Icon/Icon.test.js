import assert from 'power-assert';
import React from 'react';
import { shallow } from 'enzyme';

import { Icon } from './../Icon';

describe('Icon', () => {
  it('should render icon', () => {
    const icon = 'check';
    const wrapper = shallow(<Icon icon={icon} category="custom" />);
    expect(wrapper.find('svg').hasClass('slds-icon')).toEqual(true);
  });

  it('should render icon with size', () => {
    const size = 'small';
    const wrapper = shallow(<Icon icon="icon" size={size} />);
    expect(wrapper.find('svg').hasClass(`slds-icon--${size}`)).toEqual(true);
  });

  it('should render icon with category', () => {
    const category = 'standard';
    const icon = 'custom7';
    const wrapper = shallow(<Icon category={category} icon={icon} />);
    assert(
      wrapper
        .html()
        .indexOf(`/assets/icons/${category}-sprite/svg/symbols.svg#${icon}`) >
        0,
    );
  });
});
