import React from 'react';
import { shallow } from 'enzyme';
import TableRowColumnActions from './TableRowColumnActions';

describe('TableRowColumnActions', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  it('should render component properly', () => {
    wrapper = shallow(<TableRowColumnActions />);
    expect(wrapper.hasClass('Table__row-column-actions')).toBe(true);
  });
});
