import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import Depts from './Depts';


// Configure Enzyme for the appropriate React Adapter
Enzyme.configure({ adapter : new Adapter() });

// 1. Testing Component
it('should render component without crashing', () => {    
    const wrapper = shallow(<Depts />);
    expect(wrapper.find("h3").length).toBe(1);   
});
  

// 2. Testing Component
it('should render zero data rows in the table', () => {    
    const wrapper = shallow(<Depts />);
    expect(wrapper.find("tbody tr").length).toBe(0);
});
  

// 3. Button click and and load the table rows
it('should render data rows after button click', () => {    
    const wrapper = shallow(<Depts />);
    wrapper.find("#b2").simulate("click");
    expect(wrapper.find("tbody tr").length).toBe(4);
});