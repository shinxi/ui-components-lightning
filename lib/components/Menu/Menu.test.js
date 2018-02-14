import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

const itemsObject = [
  { id: '1', name: 'Drop down item 1' },
  { id: '2', name: 'Drop down item 2' },
  { id: '3', name: 'Drop down item 3' },
];

describe('Menu', () => {
  it('Menu should render without crashing with Array of Objects Data', () => {
    const wrapper = shallow(<Menu items={itemsObject} />);
    expect(wrapper.find('.Menu').length).toEqual(1);
  });
});
