import React from 'react';
import { shallow } from 'enzyme';
import Row from './Row';

describe('Form', () => {
  it('should render Row', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper.hasClass('slds-form-element__row')).toEqual(true);
  });

  it('should render Row with custom className', () => {
    const className = 'my-row';
    const wrapper = shallow(<Row className={className} />);
    expect(wrapper.hasClass(className)).toEqual(true);
  });
});
