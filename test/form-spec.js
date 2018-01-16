import React from 'react';
import { shallow } from 'enzyme';

import Form from '../lib/scripts/Form';

describe('Form', () => {
  it('should not render null children', () => {
    const wrapper = shallow(
      <Form>
        <span />
        {null}
      </Form>
    );
    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.children().length).toEqual(1);
  });
});
