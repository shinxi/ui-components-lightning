import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.find('.slds-checkbox').length).toEqual(1);
    expect(wrapper.hasClass('slds-checkbox')).toEqual(true);
  });
});
