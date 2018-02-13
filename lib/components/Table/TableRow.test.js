import React from 'react';
import { shallow } from 'enzyme';
import TableRow from './TableRow';

describe('TableRow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  it('should render component properly', () => {
    wrapper = shallow(<TableRow />);
    expect(wrapper.hasClass('Table__row')).toBe(true);
  });
});
