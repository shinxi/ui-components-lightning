import React from 'react';
import { mount } from 'enzyme';

import Dropdown from './../Dropdown';

const itemsObject = [
  { id: '1', name: 'Drop down item 1' },
  { id: '2', name: 'Drop down item 2' },
  { id: '3', name: 'Drop down item 3' },
];

describe('Dropdown', () => {
  it('List should render without crashing with Array of Objects Data', () => {
    const wrapper = mount(<Dropdown items={itemsObject} fieldValue="id" fieldLabel="name" />);
    expect(wrapper.find('.List').length).toEqual(1);
  });
});
