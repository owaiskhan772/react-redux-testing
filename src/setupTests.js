// setupTests.js with same exact name is necessary as JEST looks for setupTests.js 
// to run code inside it before start executing other test code
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })