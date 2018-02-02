import React from 'react';
import { shallow } from 'enzyme';
import Radio from './Radio';

describe('Radio', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  it('should render radio component', () => {
    wrapper = shallow(<Radio />);
    expect(wrapper.find('.slds-radio').length).toEqual(1);
    expect(wrapper.hasClass('slds-radio')).toEqual(true);
  });

  it('should call handleChange', () => {
    const handleChange = jest.fn();
    wrapper = shallow(<Radio onChange={handleChange} />);
    wrapper.find('.slds-radio').simulate('change');
  });
});
