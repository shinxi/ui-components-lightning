import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

const itemsObject = [
  { id: '1', name: 'Drop down item 1' },
  { id: '2', name: 'Drop down item 2' },
  { id: '3', name: 'Drop down item 3' },
];

describe('Dropdown', () => {
  it('List should render without crashing with Array of Objects Data', () => {
    const wrapper = shallow(<Dropdown items={itemsObject} />);
    expect(wrapper.find('.Dropdown').length).toEqual(1);
  });
});
