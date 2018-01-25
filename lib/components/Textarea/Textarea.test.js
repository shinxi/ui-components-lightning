import React from 'react';
import { shallow } from 'enzyme';
import Textarea from './index';

const mockValue = 'mockValue';
const mockEvent = {
  persist: () => ({}),
  target: {
    value: mockValue,
  },
};
const mockChangeHandler = jest.fn();

describe('Textarea', () => {
  it('renders with type successfully', () => {
    const onChangeHandler = jest.fn();
    const component = shallow(<Textarea name="test" onChange={onChangeHandler} />);
    expect(component.length).toBe(1);
    expect(component.find('.validation-error').length).toBe(0);
  });

  it('renders field length successfully', () => {
    const wrapper = shallow(<Textarea name="test" length="huge" />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('.input--huge').length).toBe(1);
  });

  it('renders validation state successfully', () => {
    const wrapper = shallow(<Textarea name="test" state="error" />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('.validation-error').length).toBe(1);
  });

  it('renders with rows successfully', () => {
    const component = shallow(<Textarea name="test" />);
    expect(component.prop('rows')).toEqual(5);

    const componentWithRows = shallow(<Textarea name="test" rows={10} />);
    expect(componentWithRows.prop('rows')).toEqual(10);
  });

  it('renders with textarea readonly', () => {
    const component = shallow(<Textarea name="test" isReadOnly />);
    expect(component.prop('readOnly')).toBe(true);
  });

  it('renders with textarea disabled', () => {
    const component = shallow(<Textarea name="test" isDisabled />);
    expect(component.prop('disabled')).toBe(true);
  });

  it('renders textarea with placeholder', () => {
    const component = shallow(<Textarea placeholder="test placeholder" />);
    expect(component.prop('placeholder')).toEqual('test placeholder');
  });

  it('renders class names with className props', () => {
    const mockClass = 'test-class';
    const component = shallow(<Textarea className={mockClass} />);
    expect(component.hasClass(mockClass)).toEqual(true);
  });

  it('onValueChange handler can be invoked', () => {
    const component = shallow(<Textarea name="test" onValueChange={mockChangeHandler} />);
    component.simulate('change', mockEvent);
    setTimeout(() => {
      expect(mockChangeHandler).toBeCalledWith(event);
    }, 0);
  });

  it('onValueChange handler can be invoked with a state change', () => {
    const component = shallow(<Textarea name="test" onValueChange={mockChangeHandler} />);
    component.setState({ value: mockValue });
    setTimeout(() => {
      expect(mockChangeHandler).toBeCalledWith(event);
    }, 0);
  });

  it('onChange handler not to be called if no change happens.', () => {
    const component = shallow(<Textarea name="test" value={mockValue} onValueChange={mockChangeHandler} />);
    expect(component.prop('value')).toEqual(mockValue);
    component.simulate('change', mockEvent);
    setTimeout(() => {
      expect(mockChangeHandler).not.toBeCalledWith(mockEvent);
    }, 0);
  });

  it('componentDidUpdate gets called with onValueChange', () => {
    const oldValue = 'oldValue';
    const component = shallow(<Textarea name="test" value={oldValue} onValueChange={mockChangeHandler} />);
    expect(component.prop('value')).toEqual(oldValue);
    component.setState({ value: mockValue });
    setTimeout(() => {
      expect(component.prop('value')).toEqual(mockValue);
      expect(mockChangeHandler).toBeCalledWith(mockEvent);
    }, 0);
  });

  it('componentDidUpdate does not get called with onValueChange but no value change', () => {
    const component = shallow(<Textarea name="test" value={mockValue} onValueChange={mockChangeHandler} />);
    expect(component.prop('value')).toEqual(mockValue);
    component.setState({ value: mockValue });
    setTimeout(() => {
      expect(component.prop('value')).toEqual(mockValue);
      expect(mockChangeHandler).not.toBeCalledWith(mockEvent);
    }, 0);
  });

  it('field value matches input value', () => {
    const component = shallow(<Textarea name="test" onValueChange={mockChangeHandler} />);
    expect(component.text()).toEqual('');
    component.simulate('change', mockEvent);
    setTimeout(() => {
      expect(component.prop('value')).toEqual(mockValue);
    }, 100);
  });
});
