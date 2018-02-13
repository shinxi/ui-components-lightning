import React from 'react';
import { shallow } from 'enzyme';
import TreeNode from './TreeNode';

describe('TreeNode', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  it('should render TreeNode correctly', () => {
    wrapper = shallow(<TreeNode />);
    expect(wrapper.find('ul').hasClass('Tree__node')).toEqual(true);
  });
});
