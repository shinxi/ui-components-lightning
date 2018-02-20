import React from 'react';
import { shallow } from 'enzyme';
import Tree from './Tree';
import TreeNode from './TreeNode';

describe('Tree', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  it('should render Tree component with classNames', () => {
    wrapper = shallow(<Tree />);
    expect(wrapper.hasClass('Tree')).toBe(true);
  });

  it('should have children elements', () => {
    wrapper = shallow(
      <Tree>
        <TreeNode
          label="label item #1"
          opened
          selected
          isLoading={false}
          isLeaf={false}
        />
      </Tree>,
    );
    expect(wrapper.props().children.length).toBeGreaterThan(1);
  });
});
