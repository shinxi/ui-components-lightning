import React from 'react';
import { shallow } from 'enzyme';
import Label from './Label';

describe('Label', () => {
  it('should render label with children', () => {
    const text = 'Email';
    const wrapper = shallow(<Label>{text}</Label>);
    expect(wrapper.find('.Label').hasClass('slds-form-element__label')).toEqual(true);
    expect(wrapper.contains(text)).toEqual(true);
  });

  it('should render label with isRequired star at top-right', () => {
    const wrapper = shallow(<Label isRequired>Email</Label>);
    expect(
      wrapper
        .find('.Label')
        .childAt(1)
        .hasClass('slds-isRequired'),
    ).toEqual(true);
  });

  it('should render label with custom className', () => {
    const className = 'my-label';
    const wrapper = shallow(<Label className={className}>Email</Label>);
    expect(wrapper.find('.Label').hasClass(className)).toEqual(true);
  });
});
