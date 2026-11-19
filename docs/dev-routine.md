# Daily dev routine

How to run the app on a physical Android phone and iPhone during everyday development.

## Changed TS code only

No rebuild and no cable. The same steps work for Android and iOS.

1. Start the dev server:
   - At home: `npm run start:mcp:lan`
   - At Qwench: `npm run start:mcp`
2. Open Easy Interval Timer on the phone. Tap the server in the launcher list, or scan the QR code in the terminal.
3. Edit your code. The phone hot reloads on save.

Plug in the Pixel only when you want Claude to read Android logs, take screenshots or tap. Plugging in the iPhone does nothing here. For Claude to read logs on either phone, ask Claude to start the dev server itself.

## Changed native code

Native changes include adding a package with native code and editing native settings in `app.json` (permissions, icon, plugins, app ID). Plug the phone in with the cable and rebuild:

| Phone   | Command                     |
| ------- | --------------------------- |
| Android | `npx expo run:android`      |
| iOS     | `npx expo run:ios --device` |

If you changed the app ID or a native setting doesn't take effect, run `npx expo prebuild --clean` first. After an app ID change, delete the old app from the phone.

## iOS app stopped opening (every 7 days)

A free Apple account signs the app for 7 days only. To re-sign it, plug in the iPhone and run `npx expo run:ios --device`.

If the iPhone then shows "Untrusted Developer", go to Settings → General → VPN & Device Management, tap your Apple Development entry, and tap Trust.

## Quick fixes

| Problem                                              | Fix                                                                                                |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| App shows old code or can't reach the dev server     | Shake the phone and tap Reconnect, or press `r` in the dev server terminal                         |
| iPhone can't find the dev server at home             | Allow Local Network when iOS asks. If you missed it: Settings → Privacy & Security → Local Network |
| Mac asks for a keychain password during an iOS build | Enter your Mac login password and click Always Allow                                               |
