import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import Login from './Loign';



// Configure the Enzyme for the React Adapter
Enzyme.configure({ adapter: new Adapter() });


// 1. Testing component loading
it('should render component without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toBe(3);
});


// 2. Testing input elements :  getting data from input 
it('should user id textbox should be empty', () => {
    const wrapper = shallow(<Login />);
    let str = wrapper.find("#t1").props().value;    // get textbox value 
    expect(str).toBe("");
});


// 3. Testing input elements :  setting data to  input 
it('should set the correct value to input element', () => {
    const wrapper = shallow(<Login />);
    //  wrapper.find("#t1").props().value = "Scott";     // Not allowed as value is read-only
    wrapper.find("#t1").simulate("change", { target: { value: "Scott" } });

    let str = wrapper.find("#t1").props().value;
    expect(str).toBe("Scott");
});


// 4. Testing button click
it('should render valid message after login button click [VALID USER]', () => {
    const wrapper = shallow(<Login />);

    wrapper.find("#t1").simulate("change", { target: { value: "admin" } });
    wrapper.find("#t2").simulate("change", { target: { value: "admin123" } });
    wrapper.find("#b1").simulate("click");

    let str = wrapper.find("#result").text();
    
    expect(str).toBe("Welcome to Admin");
});



// 5. Testing button click
it('should render invalid message after login button click [INVALID USER]', () => {
    const wrapper = shallow(<Login />);

    wrapper.find("#t1").simulate("change", { target: { value: "hello" } });
    wrapper.find("#t2").simulate("change", { target: { value: "123" } });
    wrapper.find("#b1").simulate("click");

    let str = wrapper.find("#result").text();
    
    expect(str).toBe("Invalid User Id or Password");
});
