import { PlayStatus, TimerAction } from "./constants";
import { timerStateReducer } from "./timer.reducer";

describe("timerStateReducer", () => {
  describe(`${TimerAction.Toggle}`, () => {
    it.each([
      [PlayStatus.Stopped, PlayStatus.Playing],
      [PlayStatus.Playing, PlayStatus.Paused],
      [PlayStatus.Paused, PlayStatus.Playing],
    ])("moves a %s timer to %s", (from, to) => {
      expect(timerStateReducer(from, { type: TimerAction.Toggle })).toBe(to);
    });
  });

  describe(`${TimerAction.Stop}`, () => {
    it("stops a paused timer", () => {
      expect(
        timerStateReducer(PlayStatus.Paused, { type: TimerAction.Stop }),
      ).toBe(PlayStatus.Stopped);
    });

    describe("when the timer isn't paused", () => {
      let consoleError: jest.SpyInstance;

      beforeEach(() => {
        // * Silence the dev-only report so it doesn't clutter test output,
        // * and so we can assert that it happened.
        consoleError = jest
          .spyOn(console, "error")
          .mockImplementation(() => {});
      });

      afterEach(() => {
        consoleError.mockRestore();
      });

      it.each([PlayStatus.Playing, PlayStatus.Stopped])(
        "leaves a %s timer unchanged and reports the ignored action",
        (from) => {
          expect(timerStateReducer(from, { type: TimerAction.Stop })).toBe(
            from,
          );
          expect(consoleError).toHaveBeenCalledTimes(1);
          expect(consoleError).toHaveBeenCalledWith(
            expect.stringContaining(`Ignored ${TimerAction.Stop}`),
          );
        },
      );
    });
  });
});
