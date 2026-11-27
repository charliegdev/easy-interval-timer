import { PlayStatus, TimerAction } from "./constants";

export function timerStateReducer(
  currentState: PlayStatus,
  action: { type: TimerAction },
): PlayStatus {
  function reportInvalidAction() {
    /* istanbul ignore else -- __DEV__ is always true under Jest */
    if (__DEV__) {
      console.error(`Ignored ${action.type} while timer is ${currentState}`);
    }
  }

  switch (action.type) {
    case TimerAction.Toggle:
      // * Use switch instead of if/else to get compile time error instead of runtime warning
      switch (currentState) {
        case PlayStatus.Playing:
          return PlayStatus.Paused;
        case PlayStatus.Paused:
        case PlayStatus.Stopped:
          return PlayStatus.Playing;
        /* istanbul ignore next -- unreachable: TypeScript checks exhaustiveness */
        default:
          // * New syntax so no need for an unused variable of type never
          currentState satisfies never;
          return currentState;
      }

    case TimerAction.Stop:
      // * Use switch instead of if/else to get compile time error instead of runtime warning
      switch (currentState) {
        case PlayStatus.Paused:
          return PlayStatus.Stopped;
        case PlayStatus.Playing:
        case PlayStatus.Stopped:
          reportInvalidAction();
          return currentState;
        /* istanbul ignore next -- unreachable: TypeScript checks exhaustiveness */
        default:
          currentState satisfies never;
          return currentState;
      }

    /* istanbul ignore next -- unreachable: TypeScript checks exhaustiveness */
    default: {
      action.type satisfies never;
      return currentState;
    }
  }
}
