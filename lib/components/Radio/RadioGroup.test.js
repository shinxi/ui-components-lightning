import React from 'react';
import { shallow } from 'enzyme';
import RadioGroup from './RadioGroup';
import Radio from './Radio';

describe('RadioGroup', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  it('should render radio-group component', () => {
    wrapper = shallow(<RadioGroup />);
    expect(wrapper.find('.slds-form-element').length).toBe(1);
    expect(wrapper.hasClass('slds-form-element')).toEqual(true);
  });

  it('should have name property', () => {
    wrapper = shallow(<RadioGroup name="YesNo" />);
    expect(wrapper.props().name).toBeDefined();
  });

  it('should contain valid React elements', () => {
    const children = [
      <Radio label="Yes" value="yes" />,
      <Radio label="No" value="no" disabled />,
    ];
    wrapper = shallow(
      <RadioGroup label="Radio Group Label" name="YesNo">
        {children}
      </RadioGroup>,
    );
    expect(React.isValidElement(wrapper.children().at(0)));
    expect(React.isValidElement(wrapper.children().at(1)));
  });

  it('should have at least one child', () => {
    wrapper = shallow(
      <RadioGroup label="Radio Group Label" name="YesNo">
        <Radio label="Yes" value="yes" />
        <Radio label="No" value="no" disabled />
      </RadioGroup>,
    );
    expect(React.Children.count(wrapper.children())).toBeGreaterThanOrEqual(1);
  });
});
