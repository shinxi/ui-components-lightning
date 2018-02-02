import React from 'react';
import { shallow } from 'enzyme';

import Grid from './Grid';

describe('Grid', () => {
  it('should render grid div with className', () => {
    const wrapper = shallow(<Grid />);
    expect(wrapper.hasClass('slds-grid')).toBe(true);
    expect(wrapper.find('div').length).toBe(1);
  });

  it('should render grid span with custom className w/ appropriate props', () => {
    const wrapper = shallow(<Grid tag="span" className="test-class" />);
    expect(wrapper.hasClass('test-class')).toBe(true);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('div').length).toBe(0);
  });

  it('should render grid with custom & vertical classnames', () => {
    const wrapper = shallow(<Grid className="test-class" isVertical />);
    expect(wrapper.hasClass('test-class')).toBe(true);
    expect(wrapper.hasClass('slds-grid--vertical')).toBe(true);
  });

  it('should render grid with a frame', () => {
    const wrapper = shallow(<Grid hasFrame />);
    expect(wrapper.hasClass('slds-grid--frame')).toBe(true);
  });
});
