import { HomeScreen } from "./HomeScreen";
import { render } from "react-native-testing-library";

describe("HomePage component to not have changes", () => {
  it("should match snapshot", () => {
    const rendered = render(<HomeScreen />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
