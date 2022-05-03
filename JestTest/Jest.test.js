import React from "react";
// import { Button } from "../components";
// import CommentForm from "../testComponent/CommentForm";
// import ErrorDisplay from "../testComponent/ErrorDisplay";
import { LoginScreen, WelcomeScreen } from "../screens";
import { render, cleanup, fireEvent } from "react-native-testing-library";
import { render as renderLibrary } from "@testing-library/react-native";
import { Home } from "./Home";
import Enzyme, { shallow } from "enzyme";
import { AuthContext, UserTokenStateContext } from "../consts";
import { Button } from "../components";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("render  text", () => {
  const { debug, getByText } = renderLibrary(<Home />);
  const text = getByText("click");
  expect(text.props.style).toMatchObject([{ color: "black", fontSize: 20 }]);
  debug();
});

test("render button", () => {
  const { debug, getByTestId, getByText } = renderLibrary(<Home />);
  const button = getByTestId("button-button");
  expect(button.props.style).toMatchObject({
    backgroundColor: "red",
    opacity: 1,
    width: 200,
  });
  debug();
});

afterEach(cleanup);

// Login Screen
describe("<LoginScreen />", () => {
  it("should match snapshot", () => {
    const rendered = render(<LoginScreen />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it("Login button style", () => {
    const rendered = render(<LoginScreen />);
    const buttonComponent = rendered.getByTestId("login-button");

    expect(buttonComponent.props.style).toMatchObject({
      backgroundColor: "#38ae6f",
      borderRadius: 5,
      opacity: 1,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: 340,
    });
  });

  //
  it("Login button style", () => {
    const rendered = render(<LoginScreen />);
    const buttonText = rendered.getByTestId("login-text");

    expect(buttonText.props.style).toMatchObject([
      {
        color: "#e6e6e6",
        fontSize: 16,
        textAlign: "center",
      },
    ]);
  });

  it("Login button title", () => {
    const login_screen = shallow(<LoginScreen />).dive();
    expect(login_screen.find(Button).render().text()).toBe("Continue");
  });

  it("onPress of Login button", () => {
    const onPress = jest.fn();

    const TestComponent = () => (
      <UserTokenStateContext.Provider value={"1234"}>
        <AuthContext.Provider value="+40747429129">
          <LoginScreen handlePress={onPress} />
        </AuthContext.Provider>
      </UserTokenStateContext.Provider>
    );
    const login_screen = shallow(<LoginScreen handlePress={onPress} />);

    const buttonComponent = login_screen.find('[testID="login-button"]');

    expect(onPress);
  });
});

describe("<WelcomeScreen>", () => {
  it("", () => {
    const rendered = render(<WelcomeScreen />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
  it("Welcome button style", () => {
    const rendered = render(<WelcomeScreen />);
    const buttonComponent = rendered.getByTestId("started-button");

    expect(buttonComponent.props.style).toMatchObject({});
  });
});

afterEach(cleanup);

// describe("<ErrorDisplay />", () => {
//   it("should match snapshot", () => {
//     const rendered = render(<ErrorDisplay value={"abacaba"} />).toJSON();

//     expect(rendered).toMatchSnapshot();
//   });

//   it("should properly render the text", () => {
//     const rendered = render(<ErrorDisplay value={"abacaba"} />);
//     const textComponent = rendered.getByTestId("text");

//     expect(textComponent.props.children).toEqual("abacaba");
//   });

//   it("should render red text", () => {
//     const rendered = render(<ErrorDisplay value={"abacaba"} />);
//     const textComponent = rendered.getByTestId("text");

//     expect(textComponent.props.style).toMatchObject({ color: "red" });
//   });

//   it("should wrap text with a flexible wrapper", () => {
//     const rendered = render(<ErrorDisplay value={"abacaba"} />);
//     const wrapperComponent = rendered.getByTestId("wrapper");

//     expect(wrapperComponent.props.style).toMatchObject({ flex: 1 });
//   });
// });

// afterEach(cleanup);

// describe("<CommentForm />", () => {
//   it("should match the snapshot", () => {
//     const rendered = render(<CommentForm value={"abacaba"} />).toJSON();

//     expect(rendered).toMatchSnapshot();
//   });

//   it("should fire onChange events", () => {
//     const onChange = jest.fn();
//     const rendered = render(<CommentForm onChange={onChange} />);
//     const inputComponent = rendered.getByTestId("input");

//     fireEvent(inputComponent, "onChangeText", "new text");

//     expect(onChange).toHaveBeenCalledWith("new text");
//   });

//   it("should fire onSubmit events", () => {
//     const onSubmit = jest.fn();
//     const rendered = render(<CommentForm onSubmit={onSubmit} />);
//     const buttonComponent = rendered.getByTestId("submit");

//     fireEvent(buttonComponent, "press");

//     expect(onSubmit).toHaveBeenCalled();
//   });
// });
