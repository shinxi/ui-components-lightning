import React from 'react';
import { shallow } from 'enzyme';

import PopoverHeader from './PopoverHeader';

describe('PopoverHeader', () => {
  it('should render PopoverHeader with default values', () => {
    const wrapper = shallow(<PopoverHeader />);
    expect(wrapper.prop('className')).toContain('PopoverHeader', 'slds-popover__header');
  });

  it('should render PopoverHeader with children', () => {
    const children = <span>Test</span>;
    const wrapper = shallow(<PopoverHeader>{children}</PopoverHeader>);
    expect(wrapper.contains(children)).toBe(true);
  });
});
