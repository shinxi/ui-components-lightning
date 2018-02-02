import React from 'react';
import { shallow } from 'enzyme';
import ModalContent from './ModalContent';

describe('ModalContent', () => {
  it('should render modal content with children', () => {
    const children = <span>Test</span>;
    const wrapper = shallow(<ModalContent>{children}</ModalContent>);
    expect(wrapper.contains(children)).toBe(true);
  });

  it('should render modal content with specific className', () => {
    const className = 'test';
    const wrapper = shallow(<ModalContent className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
  });

  it('should render modal content with other props', () => {
    const wrapper = shallow(<ModalContent otherProp={9} />);
    expect(wrapper.prop('otherProp')).toBe(9);
  });
});
