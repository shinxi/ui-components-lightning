import React from 'react';
import { shallow } from 'enzyme';
import FieldSetRow from './FieldSetRow';

describe('Form', () => {
  it('should render Row', () => {
    const wrapper = shallow(<FieldSetRow />);
    expect(wrapper.hasClass('slds-form-element__row')).toEqual(true);
  });

  it('should render Row with custom className', () => {
    const className = 'my-row';
    const wrapper = shallow(<FieldSetRow className={className} />);
    expect(wrapper.hasClass(className)).toEqual(true);
  });
});
