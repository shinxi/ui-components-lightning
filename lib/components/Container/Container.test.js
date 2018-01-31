import React from 'react';
import { shallow } from 'enzyme';

import Container from './../Container';

describe('Container', () => {
  it('should render container with default values', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.prop('className')).toContain('slds-container--fluid', 'slds-container--left');
  });

  it('should render container with children', () => {
    const children = <span>Test</span>;
    const wrapper = shallow(<Container>{children}</Container>);
    expect(wrapper.prop('className')).toContain('slds-container--fluid', 'slds-container--left');
    expect(wrapper.contains(children)).toBe(true);
  });

  it('should render container with specific className', () => {
    const className = 'test';
    const wrapper = shallow(<Container className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
  });

  it('should render container with medium size', () => {
    const size = 'medium';
    const wrapper = shallow(<Container size={size} />);
    expect(wrapper.prop('className')).toContain(`slds-container--${size}`, 'slds-container--left');
  });

  it('should render container with default size and center aligned', () => {
    const align = 'center';
    const wrapper = shallow(<Container align={align} />);
    expect(wrapper.prop('className')).toContain(
      'slds-container--fluid',
      `slds-text-align--${align}`,
    );
  });

  it('should render container with large size and right align', () => {
    const size = 'large';
    const align = 'right';
    const wrapper = shallow(<Container size={size} align={align} />);
    expect(wrapper.prop('className')).toContain(
      `slds-container--${size}`,
      `slds-text-align--${align}`,
    );
  });

  it('should render container with other props', () => {
    const wrapper = shallow(<Container onClick={() => {}} />);
    expect(wrapper.prop('onClick')).toBeInstanceOf(Function);
  });
});
