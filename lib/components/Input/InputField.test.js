import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import InputField from './InputField';

describe('InputField', () => {
  const requiredProps = {
    id: 'test-input',
    ...Input.defaultProps,
  };

  it('should render input field without crashing with className', () => {
    const wrapper = shallow(<InputField {...requiredProps} />);
    expect(wrapper.find('.Input__field').length).toEqual(1);
  });
});
