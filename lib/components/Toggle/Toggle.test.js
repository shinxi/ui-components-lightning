import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './Toggle';

describe('Toggle', () => {
  it('should render form element with default values', () => {
    const wrapper = shallow(<Toggle />);
    expect(
      wrapper
        .find('.Toggle')
        .first()
        .hasClass('slds-checkbox--toggle'),
    ).toBe(true);
  });

  it('should render form element with children', () => {
    const children = <span>Test</span>;
    const wrapper = shallow(<Toggle>{children}</Toggle>);
    expect(wrapper.contains(children)).toBe(true);
  });

  it('simulates onChange hook', () => {
    const onToggleChange = jest.fn();
    const wrapper = shallow(<Toggle onChange={onToggleChange} />);
    wrapper
      .find('.Toggle')
      .childAt(0)
      .simulate('change');
    expect(onToggleChange).toHaveBeenCalled();
  });
});
