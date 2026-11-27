import HomeScreen from "@/app/index";
import { render, screen } from "@testing-library/react-native";

describe("<HomeScreen />", () => {
  it("shows the timer, ready to start", async () => {
    await render(<HomeScreen />);

    expect(screen.getByText("Ready")).toBeOnTheScreen();
    expect(screen.getByRole("button", { name: "Start" })).toBeOnTheScreen();
  });
});
