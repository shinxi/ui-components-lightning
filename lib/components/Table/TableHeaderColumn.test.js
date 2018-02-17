import React from 'react';
import { shallow } from 'enzyme';
import TableHeaderColumn from './TableHeaderColumn';

describe('TableHeaderColumn', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  it('should render component properly', () => {
    wrapper = shallow(<TableHeaderColumn />);
    expect(wrapper.hasClass('TableHeader__column')).toBe(true);
  });
});
