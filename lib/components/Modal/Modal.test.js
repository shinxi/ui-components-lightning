import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Modal } from './../Modal';

describe('Modal', () => {
  it('should render modal with default values', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.childAt(0).hasClass('slds-modal--large')).toBe(false);
    expect(wrapper.childAt(0).hasClass('slds-fade-in-open')).toBe(false);
  });

  it('should render modal with children', () => {
    const children = <span>Test</span>;
    const wrapper = shallow(<Modal>{children}</Modal>);
    expect(wrapper.contains(children)).toBe(true);
  });

  it('should render modal with specific className', () => {
    const className = 'test';
    const wrapper = shallow(<Modal className={className} />);
    expect(wrapper.childAt(0).hasClass(className)).toBe(true);
  });

  it('should render modal with other props', () => {
    const wrapper = shallow(<Modal otherProp={9} />);
    expect(wrapper.childAt(0).prop('otherProp')).toBe(9);
  });

  it('should render large size', () => {
    const wrapper = shallow(<Modal size="large" />);
    expect(wrapper.childAt(0).hasClass('slds-modal--large')).toBe(true);
  });

  it('should render opened modal', () => {
    const wrapper = shallow(<Modal opened />);
    expect(wrapper.childAt(0).hasClass('slds-fade-in-open')).toBe(true);
  });

  it('should render container style', () => {
    const style = { backgroundColor: 'grey' };
    const wrapper = shallow(<Modal containerStyle={style} />);
    expect(wrapper.find('.slds-modal__container').prop('style')).toEqual(style);
  });

  it('simulates onHide hook', () => {
    const onModalHide = sinon.spy();
    const wrapper = shallow(<Modal onHide={onModalHide} />);
    wrapper.instance().hide();
    expect(onModalHide.calledOnce).toBe(true);
  });
});
