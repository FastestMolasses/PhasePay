# PhasePay

PhasePay is a hands-free payment system created for a semester project. Be sure to check out the companion apps:

[POS System](https://github.com/FastestMolasses/PhasePayPOS)

[Flask Backend](https://github.com/FastestMolasses/PhasePayBackend)

Those apps are required in order to provide the hands-free payment functionality.

## Installation

1. Make sure you have react native installed properly: https://facebook.github.io/react-native/docs/getting-started
2. Clone the repo to your Desktop
3. Run `npm install` inside the folder in order to install dependencies
4. Setup the POS system and the Flask Backend
5. Run `react-native run-ios` or `react-native run-android`

## Project Details

There are still lots to do on the app as well as the companion apps. For example, it would have been nice to be able to have implemented the validation system, where we check nearby devices with Bluetooth Low Energy (BLE) as well as GPS geofencing.

So far, the app is able to "charge" the user when a purchase is made through the POS system. It also includes an authentication stack so the user can sign up or sign in (*Note, any log in or sign up is accepted, for demonstration purposes*).
