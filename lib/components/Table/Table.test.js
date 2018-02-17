import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

describe('Table', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  it('should render component properly', () => {
    wrapper = shallow(<Table />);
    expect(wrapper.hasClass('TableWrapper')).toBe(true);
    expect(wrapper.find('table').hasClass('Table')).toBe(true);
  });
});
