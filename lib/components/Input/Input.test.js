import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from './Input';

describe('Input', () => {
  it('should render input without crashing with className', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('.Input').length).toEqual(1);
  });

});
