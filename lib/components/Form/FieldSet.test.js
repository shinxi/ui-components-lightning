import React from 'react';
import { shallow } from 'enzyme';
import FieldSet from './FieldSet';

describe('Form', () => {
  it('should render FieldSet with children', () => {
    const text = 'Content';
    const wrapper = shallow(<FieldSet>{text}</FieldSet>);
    expect(wrapper.hasClass('slds-form--compound')).toEqual(true);
    expect(wrapper.contains(text)).toEqual(true);
  });

  it('should render FieldSet with label at top', () => {
    const wrapper = shallow(<FieldSet label="Full Name" />);
    expect(wrapper.childAt(0).hasClass('slds-form-element__label')).toEqual(true);
  });

  it('should render FieldSet with custom className', () => {
    const className = 'my-FieldSet';
    const wrapper = shallow(<FieldSet className={className} />);
    expect(wrapper.hasClass(className)).toEqual(true);
  });
});
