import React from 'react';
import { shallow } from 'enzyme';
import TableBody from './TableBody';
import TableRow from './TableRow';

describe('Table', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  it('should render component properly', () => {
    wrapper = shallow(
      <TableBody>
        <TableRow />
      </TableBody>,
    );
    expect(wrapper.hasClass('Table__body')).toBe(true);
  });
});
