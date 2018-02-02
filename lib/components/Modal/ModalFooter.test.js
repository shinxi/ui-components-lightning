import React from 'react';
import { shallow } from 'enzyme';
import ModalFooter from './ModalFooter';

describe('ModalFooter', () => {
  it('should render modal footer with default values', () => {
    const wrapper = shallow(<ModalFooter />);
    expect(wrapper.hasClass('slds-modal__footer--directional')).toBe(false);
  });

  it('should render modal footer with children', () => {
    const children = <span>Test</span>;
    const wrapper = shallow(<ModalFooter>{children}</ModalFooter>);
    expect(wrapper.contains(children)).toBe(true);
  });

  it('should render modal footer with specific className', () => {
    const className = 'test';
    const wrapper = shallow(<ModalFooter className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
  });

  it('should render modal footer with other props', () => {
    const wrapper = shallow(<ModalFooter otherProp={9} />);
    expect(wrapper.prop('otherProp')).toBe(9);
  });

  it('should render modal footer with directional alignment', () => {
    const wrapper = shallow(<ModalFooter directional />);
    expect(wrapper.hasClass('slds-modal__footer--directional')).toBe(true);
  });
});
