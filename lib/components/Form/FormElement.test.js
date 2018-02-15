import React from 'react';
import { shallow } from 'enzyme';
import FormElement from './FormElement';

describe('FormElement', () => {
  it('should render form element with default values', () => {
    const wrapper = shallow(<FormElement />);
    expect(wrapper.hasClass('FormElement slds-form-element')).toBe(true);
    expect(wrapper.childAt(0).hasClass('FormElement__control slds-form-element__control')).toBe(
      true,
    );
  });

  it('should render form element with children', () => {
    const children = <span>Test</span>;
    const wrapper = shallow(<FormElement>{children}</FormElement>);
    expect(wrapper.contains(children)).toBe(true);
  });

  it('should render form element with specific className', () => {
    const className = 'test';
    const wrapper = shallow(<FormElement className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
  });

  it('should render form element with 2 out of 3 columns', () => {
    const wrapper = shallow(<FormElement cols={2} totalCols={3} />);
    expect(wrapper.hasClass('slds-size--2-of-3')).toBe(true);
  });

  it('should render form element with error message', () => {
    const error = 'not found';
    const wrapper = shallow(<FormElement error={error} />);
    expect(
      wrapper
        .find('.FormElement__help')
        .first()
        .html(),
    ).toBe(`<span class="FormElement__help slds-form-element__help">${error}</span>`);
  });
});
