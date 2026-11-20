# Easy Interval Timer

An ad-free interval timer that's easy to use.

You should be able to set up a workout the first time you open the app, in under a minute, without a tutorial. It's a timer, not a workout planner: you already know your workout and just need the clock.

## Status

Early development. The app is an empty Expo project for now. Planning and progress are tracked on the [project roadmap](https://github.com/users/charliegdev/projects/1).

## Planned for v1

- Build interval workouts: warm-up, rounds of work and rest, then cool-down
- Save workouts and start any of them in one tap
- Keeps running with the screen locked, with the timer on the lock screen
- Sound and vibration cues for each phase
- Workout history on a calendar
- Light and dark mode
- No ads and no account. Your data stays on your device.

These features are not planned:

- Guided workouts or exercise libraries
- Lots of different timer modes
- Ads, in any version

## Tech Stack

- [Expo](https://expo.dev) SDK 58 with React Native and TypeScript
- [Expo Router](https://docs.expo.dev/router/introduction/) for navigation. Screens live in `src/app/`.
- [EAS](https://docs.expo.dev/eas/) for builds and over-the-air updates

## Development

You need Node.js and npm.

```bash
npm install          # install dependencies
npx expo start       # start the dev server
npx expo lint        # lint
npx tsc --noEmit     # typecheck
```

Add packages with `npx expo install <package>`, not `npm install`, so the versions match the Expo SDK.

For running the app on a physical phone day to day, see [docs/dev-routine.md](docs/dev-routine.md).

The `ios/` and `android/` folders are generated. Don't edit them by hand; configure native behavior in `app.json` instead.
