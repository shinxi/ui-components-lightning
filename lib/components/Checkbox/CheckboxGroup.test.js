import React from 'react';
import { shallow } from 'enzyme';
import CheckboxGroup from './CheckboxGroup';
import Checkbox from './Checkbox';

describe('CheckboxGroup', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  it('should render correctly', () => {
    wrapper = shallow(<CheckboxGroup />);
    expect(wrapper.find('.slds-form-element').length).toBe(1);
    expect(wrapper.hasClass('slds-form-element')).toEqual(true);
  });

  it('should have at least one child', () => {
    wrapper = shallow(
      <CheckboxGroup label="Select One">
        <Checkbox label="one" value="1" checked={false} />
        <Checkbox label="two" value="2" checked={false} disabled />
      </CheckboxGroup>,
    );
    expect(React.Children.count(wrapper.children())).toBeGreaterThanOrEqual(1);
  });
});
