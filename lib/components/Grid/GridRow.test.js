import React from 'react';
import { shallow } from 'enzyme';

import GridRow from './GridRow';

describe('GridRow', () => {
  it('should render GridRow with a custom className', () => {
    const wrapper = shallow(<GridRow className="test-class" />);
    expect(wrapper.hasClass('Grid__row')).toBe(true);
    expect(wrapper.hasClass('test-class')).toBe(true);
  });
});
