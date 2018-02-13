import React from 'react';
import { shallow } from 'enzyme';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

describe('Table', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  it('should contain children elements', () => {
    wrapper = shallow(
      <TableHeader>
        <TableRow />
      </TableHeader>,
    );
    expect(wrapper.hasClass('Table__header')).toBe(true);
  });
});
