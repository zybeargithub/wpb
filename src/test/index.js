import 'babel-polyfill';
import 'babel-register';
import 'ignore-styles';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export default configure({ adapter: new Adapter() });
