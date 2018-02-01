import React from 'react';
import { shallow } from 'enzyme';

import GridItem from './GridItem';

describe('GridItem', () => {
  it('should render griditem with a custom className', () => {
    const wrapper = shallow(<GridItem className="test-class" />);
    expect(wrapper.hasClass('Grid__item')).toBe(true);
    expect(wrapper.hasClass('test-class')).toBe(true);
  });
});
