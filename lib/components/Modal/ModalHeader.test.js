import React from 'react';
import { shallow } from 'enzyme';
import { ModalHeader } from './../Modal';

describe('ModalHeader', () => {
  it('should render modal header with default values', () => {
    const wrapper = shallow(<ModalHeader />);
    expect(wrapper.find('.slds-modal__close').exists()).toBe(true);
  });

  it('should render modal header with no children', () => {
    const children = <span>Test</span>;
    const wrapper = shallow(<ModalHeader>{children}</ModalHeader>);
    expect(wrapper.contains(children)).toBe(false);
  });

  it('should render modal header with specific className', () => {
    const className = 'test';
    const wrapper = shallow(<ModalHeader className={className} />);
    expect(wrapper.hasClass(className)).toBe(true);
  });

  it('should render modal header with other props', () => {
    const wrapper = shallow(<ModalHeader otherProp={9} />);
    expect(wrapper.prop('otherProp')).toBe(9);
  });

  it('should render modal header with title', () => {
    const title = 'Header Title';
    const wrapper = shallow(<ModalHeader title={title} />);
    expect(wrapper.find('.slds-text-heading--medium').text()).toBe(title);
  });

  it('should render modal header with title', () => {
    const title = 'Header Title';
    const wrapper = shallow(<ModalHeader title={title} />);
    expect(wrapper.find('.slds-text-heading--medium').text()).toBe(title);
  });

  it('should render modal header with tagline', () => {
    const tagline = 'Header TagLine';
    const wrapper = shallow(<ModalHeader tagline={tagline} />);
    expect(wrapper.find('.slds-m-top--x-small').text()).toBe(tagline);
  });

  it('should render modal header with no close button', () => {
    const wrapper = shallow(<ModalHeader closeButton={false} />);
    expect(wrapper.find('.slds-modal__close').exists()).toBe(false);
  });

  it('simulates click close button', () => {
    const onModalHide = jest.fn();
    const wrapper = shallow(<ModalHeader onClose={onModalHide} />);
    wrapper.find('.slds-modal__close').simulate('click');
    expect(onModalHide).toHaveBeenCalled();
  });
});
