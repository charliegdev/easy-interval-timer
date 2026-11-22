import RootLayout from "@/app/_layout";
import { renderRouter, screen, testRouter } from "expo-router/testing-library";
import { Text } from "react-native";

// * Fake screens: these specs check the layout, not real screens.
// * If we use real ones, the content of the real ones might make this test fail.
const routes = {
  _layout: RootLayout,
  index: () => <Text>Home route</Text>,
  details: () => <Text>Details route</Text>,
};

describe("<RootLayout />", () => {
  it("shows the index route first", async () => {
    await renderRouter(routes);

    expect(screen).toHavePathname("/");
    expect(screen.getByText("Home route")).toBeOnTheScreen();
  });

  it("stacks pushed routes on top of the previous one", async () => {
    await renderRouter(routes);

    await testRouter.push("/details");
    expect(screen.getByText("Details route")).toBeOnTheScreen();
    // A stack keeps the previous screen mounted underneath (hidden),
    // so going back restores it as it was.
    expect(
      screen.getByText("Home route", { includeHiddenElements: true }),
    ).toBeOnTheScreen();

    await testRouter.back("/");
    expect(screen.getByText("Home route")).toBeOnTheScreen();
  });
});
