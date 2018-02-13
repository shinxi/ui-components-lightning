import React from 'react';
import { shallow } from 'enzyme';
import TableRowColumn from './TableRowColumn';

describe('TableRowColumn', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  it('should render component properly', () => {
    wrapper = shallow(<TableRowColumn />);
    expect(wrapper.hasClass('Table__row-column')).toBe(true);
  });
});
