import HomeScreen from "@/app/index";
import { render } from "@testing-library/react-native";

describe("<HomeScreen />", () => {
  it("renders text correctly on HomeScreen", async () => {
    const { getByText } = await render(<HomeScreen />);

    getByText("Welcome!");
  });
});
