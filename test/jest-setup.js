// Jest & Enzyme setup
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

// Configure the enzyme adapter.
configure({ adapter: new Adapter() });

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};
