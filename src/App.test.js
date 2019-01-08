import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

it("App should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists('.main-app')).toEqual(true);
});


// TODO: Finish these tests
it.skip("Calendar should render with month view", () => {});
it.skip("Month view should render events", () => {});
it.skip("Prev/Next should work", () => {});



