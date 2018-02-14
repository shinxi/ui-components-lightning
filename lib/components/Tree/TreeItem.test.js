import React from 'react';
import { shallow } from 'enzyme';
import TreeItem from './TreeItem';

describe('TreeItem', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  it('should render TreeItem correctly', () => {
    wrapper = shallow(<TreeItem />);
    expect(wrapper.hasClass('Tree__item')).toBe(true);
  });
});
