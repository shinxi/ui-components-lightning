import React from 'react';
import { shallow } from 'enzyme';

import PopoverBody from './PopoverBody';

describe('PopoverBody', () => {
  it('should render PopoverBody with default values', () => {
    const wrapper = shallow(<PopoverBody />);
    expect(wrapper.prop('className')).toContain('PopoverBody', 'slds-popover__body');
  });

  it('should render PopoverBody with children', () => {
    const children = <span>Test</span>;
    const wrapper = shallow(<PopoverBody>{children}</PopoverBody>);
    expect(wrapper.contains(children)).toBe(true);
  });
});
