# ESP32 LED Controller Project Template
## Session 13 Project: App Inventor + ESP32 Bluetooth Communication

### Project Overview
Create a mobile app that can control an LED connected to an ESP32 microcontroller via Bluetooth. This project demonstrates the integration between mobile apps and IoT hardware using wireless communication.

### Learning Objectives
- Program ESP32 to create a Bluetooth server
- Connect mobile app to ESP32 via Bluetooth
- Control hardware from a mobile app
- Understand wireless communication

### Materials Needed
- ESP32 development board with Bluetooth
- USB cable
- LED and 220Ω resistor
- Breadboard and jumper wires
- Computer with PictoBlox
- Android device for testing
- Bluetooth-enabled device

### Hardware Setup

#### Step 1: Connect the LED
1. Connect the LED to GPIO pin 2 on the ESP32
2. Add a 220Ω resistor in series with the LED
3. Connect the LED cathode (short leg) to GND
4. Connect the LED anode (long leg) to the resistor
5. Connect the resistor to GPIO pin 2

#### Step 2: Verify Connections
- LED anode → 220Ω resistor → GPIO pin 2
- LED cathode → GND
- Double-check all connections before powering on

### ESP32 Programming

#### Step 1: PictoBlox Setup
1. Open PictoBlox
2. Go to Settings → Board → ESP32
3. Select your ESP32 board type
4. Connect ESP32 via USB cable
5. Verify connection in PictoBlox
6. Test basic communication

#### Step 2: ESP32 Code (PictoBlox Blocks)
```
When ESP32 Starts Up:
  Initialize Bluetooth as "LEDController"
  Set Digital Pin 2 as OUTPUT

Forever:
  If Bluetooth Message Received:
    If message = "ON":
      Set Digital Pin 2 to HIGH
      Send "LED turned ON" via Bluetooth
    If message = "OFF":
      Set Digital Pin 2 to LOW
      Send "LED turned OFF" via Bluetooth
    If message = "STATUS":
      If Digital Pin 2 is HIGH:
        Send "LED is ON" via Bluetooth
      Else:
        Send "LED is OFF" via Bluetooth
```

#### Step 3: Upload Code
1. Connect ESP32 to computer via USB
2. Select the correct port in PictoBlox
3. Click Upload button
4. Open Serial Monitor to see Bluetooth status
5. Note the Bluetooth device name for the mobile app

### Mobile App Development

#### Step 1: Create App Inventor Project
1. Go to MIT App Inventor
2. Create new project named "LEDController"
3. Add these components to the screen:
   - Label (for title)
   - Button (for ON)
   - Button (for OFF)
   - Button (for Status)
   - Label (for status display)
   - BluetoothClient (for Bluetooth communication)

#### Step 2: Design the Interface
1. Set the title label to "ESP32 LED Controller"
2. Set button texts to "Turn ON", "Turn OFF", "Check Status"
3. Configure BluetoothClient for ESP32 connection
4. Add a label to display status messages

#### Step 3: Add Logic (Blocks)
```javascript
// When Turn ON button is clicked
when ButtonON.Click
  call BluetoothClient1.SendText with "ON"

// When Turn OFF button is clicked
when ButtonOFF.Click
  call BluetoothClient1.SendText with "OFF"

// When Check Status button is clicked
when ButtonStatus.Click
  call BluetoothClient1.SendText with "STATUS"

// When Bluetooth message received
when BluetoothClient1.TextReceived
  set LabelStatus.Text to BluetoothClient1.TextReceived
```

### Testing and Troubleshooting

#### Step 1: Test ESP32
1. Open Serial Monitor in PictoBlox
2. Note the Bluetooth device name displayed
3. Check that Bluetooth is initialized properly
4. Test the LED control via Serial Monitor

#### Step 2: Test Mobile App
1. Connect to ESP32 via Bluetooth in the app
2. Test each button in the app
3. Verify the LED responds correctly
4. Check status messages

#### Common Issues and Solutions
- **Can't connect to ESP32**: Check Bluetooth device name and pairing
- **LED doesn't respond**: Check wiring and GPIO pin number
- **App shows error**: Verify ESP32 Bluetooth is initialized
- **Wrong device name**: Check Serial Monitor for correct Bluetooth name

### Enhancement Ideas
- Add multiple LEDs with different colors
- Create a slider to control LED brightness
- Add a timer to automatically turn LED on/off
- Create a pattern of LED blinking
- Add sensor data display (temperature, humidity)

### Success Criteria
- [ ] ESP32 Bluetooth initializes successfully
- [ ] LED responds to Bluetooth controls
- [ ] Mobile app can control the LED
- [ ] Status messages display correctly
- [ ] You can explain how the Bluetooth communication works

### Next Steps
- Try controlling multiple LEDs
- Add more sensors to the ESP32
- Create more complex control interfaces
- Experiment with different Bluetooth commands

### Tips for Success
- Double-check all wiring before powering on
- Use the Serial Monitor to debug ESP32 issues
- Test the Bluetooth connection before building the mobile app
- Keep the ESP32 Bluetooth device name handy
- Make sure your phone and ESP32 are paired via Bluetooth

---

*This template demonstrates the power of combining mobile apps with IoT hardware using wireless Bluetooth communication. The possibilities are endless!* 