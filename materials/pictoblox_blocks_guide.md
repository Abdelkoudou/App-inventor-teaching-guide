# PictoBlox Blocks Guide for ESP32 Programming
## Complete Reference for ESP32 Block Programming

### Introduction
This guide provides detailed explanations of all the PictoBlox blocks you'll use for ESP32 programming in this course. Understanding these blocks is essential for creating successful ESP32 projects.

---

## 🏗️ Basic ESP32 Blocks

### 1. ESP32 Board Blocks

#### **When ESP32 Starts Up**
- **Purpose**: Code that runs when ESP32 first starts
- **When to use**: Initialization, setup, first-time configuration
- **Example**: Setting up pins, initializing sensors, starting Bluetooth

#### **Forever Loop**
- **Purpose**: Code that runs continuously
- **When to use**: Main program logic, sensor reading, continuous monitoring
- **Example**: Reading sensor data, checking for Bluetooth messages

### 2. Digital Output Blocks

#### **Set Digital Pin**
- **Purpose**: Turn a digital pin HIGH (ON) or LOW (OFF)
- **Parameters**: Pin number (2, 4, 5, 12, 13, 14, 15, 18, 19, 21, 22, 23, 25, 26, 27, 32, 33)
- **Common uses**: LED control, relay control, motor direction
- **Example**: `Set Digital Pin 2 to HIGH` (turn on LED)

#### **Digital Pin Toggle**
- **Purpose**: Switch a pin between HIGH and LOW
- **Parameters**: Pin number
- **Common uses**: LED blinking, button state changes
- **Example**: `Toggle Digital Pin 2` (blink LED)

### 3. Analog Input Blocks

#### **Read Analog Pin**
- **Purpose**: Read analog value from a pin (0-4095)
- **Parameters**: Pin number (32, 33, 34, 35, 36, 39)
- **Common uses**: Sensor reading, potentiometer input
- **Example**: `Read Analog Pin 32` (read temperature sensor)

#### **Map Analog Value**
- **Purpose**: Convert analog reading to useful range
- **Parameters**: Value, from low, from high, to low, to high
- **Common uses**: Convert sensor readings to temperature, distance, etc.
- **Example**: `Map 2048 from 0 to 4095 to 0 to 100` (percentage)

### 4. PWM (Pulse Width Modulation) Blocks

#### **Set PWM Pin**
- **Purpose**: Control pin with variable voltage (0-255)
- **Parameters**: Pin number, value (0-255)
- **Common uses**: LED brightness, motor speed, servo control
- **Example**: `Set PWM Pin 2 to 128` (50% brightness)

#### **Set PWM Pin with Frequency**
- **Purpose**: Control pin with specific frequency
- **Parameters**: Pin number, value, frequency
- **Common uses**: Sound generation, precise motor control
- **Example**: `Set PWM Pin 2 to 128 with frequency 1000` (1kHz tone)

---

## 📡 Bluetooth Communication Blocks

### 1. Bluetooth Setup Blocks

#### **Initialize Bluetooth**
- **Purpose**: Start Bluetooth communication
- **Parameters**: Device name (optional)
- **When to use**: At the beginning of Bluetooth projects
- **Example**: `Initialize Bluetooth as "MyESP32"`

#### **Set Bluetooth Pin**
- **Purpose**: Configure Bluetooth pin code
- **Parameters**: Pin code (usually 1234 or 0000)
- **When to use**: For secure Bluetooth connections
- **Example**: `Set Bluetooth Pin to 1234`

### 2. Bluetooth Communication Blocks

#### **Send Message via Bluetooth**
- **Purpose**: Send text message to connected device
- **Parameters**: Message text
- **Common uses**: Sending sensor data, status updates
- **Example**: `Send "Temperature: 25°C" via Bluetooth`

#### **When Bluetooth Message Received**
- **Purpose**: Handle incoming Bluetooth messages
- **Parameters**: Message variable
- **Common uses**: Receiving commands from mobile app
- **Example**: `When Bluetooth Message Received, do: process command`

#### **Bluetooth Connected**
- **Purpose**: Check if Bluetooth device is connected
- **Returns**: True/False
- **Common uses**: Status checking, connection monitoring
- **Example**: `If Bluetooth Connected, then: send status`

---

## ⏱️ Timing and Control Blocks

### 1. Delay Blocks

#### **Wait**
- **Purpose**: Pause program execution
- **Parameters**: Time in seconds
- **Common uses**: Creating delays, timing events
- **Example**: `Wait 1 second` (1 second delay)

#### **Wait Until**
- **Purpose**: Wait until condition is true
- **Parameters**: Condition (sensor reading, button press, etc.)
- **Common uses**: Waiting for specific events
- **Example**: `Wait until Digital Pin 4 is HIGH`

### 2. Timer Blocks

#### **Reset Timer**
- **Purpose**: Start counting time from zero
- **Common uses**: Measuring elapsed time
- **Example**: `Reset Timer` (start timing)

#### **Timer**
- **Purpose**: Get elapsed time since last reset
- **Returns**: Time in seconds
- **Common uses**: Timing events, duration measurement
- **Example**: `If Timer > 10, then: send alert`

---

## 🔢 Variable and Data Blocks

### 1. Variable Blocks

#### **Set Variable**
- **Purpose**: Store a value in a variable
- **Parameters**: Variable name, value
- **Common uses**: Storing sensor readings, calculations
- **Example**: `Set temperature to Read Analog Pin 32`

#### **Change Variable**
- **Purpose**: Add to or subtract from a variable
- **Parameters**: Variable name, amount
- **Common uses**: Counting, accumulating values
- **Example**: `Change counter by 1`

### 2. Mathematical Blocks

#### **Basic Math**
- **Purpose**: Perform mathematical operations
- **Operations**: Add, subtract, multiply, divide
- **Common uses**: Calculations, data processing
- **Example**: `Add 5 to temperature`

#### **Random Number**
- **Purpose**: Generate random number
- **Parameters**: Minimum and maximum values
- **Common uses**: Games, random events
- **Example**: `Random number from 1 to 100`

---

## 🔄 Control Flow Blocks

### 1. Conditional Blocks

#### **If-Then**
- **Purpose**: Execute code only if condition is true
- **Parameters**: Condition to check
- **Common uses**: Decision making, sensor thresholds
- **Example**: `If temperature > 30, then: turn on fan`

#### **If-Then-Else**
- **Purpose**: Execute different code based on condition
- **Parameters**: Condition to check
- **Common uses**: Multiple outcomes, error handling
- **Example**: `If button pressed, then: turn on LED, else: turn off LED`

### 2. Loop Blocks

#### **Repeat**
- **Purpose**: Execute code multiple times
- **Parameters**: Number of repetitions
- **Common uses**: Patterns, sequences
- **Example**: `Repeat 5 times: blink LED`

#### **Repeat Until**
- **Purpose**: Execute code until condition is met
- **Parameters**: Condition to check
- **Common uses**: Waiting for events, continuous monitoring
- **Example**: `Repeat until button pressed: read sensor`

---

## 📊 Sensor and Input Blocks

### 1. Button Blocks

#### **When Button Pressed**
- **Purpose**: Detect button press on specific pin
- **Parameters**: Pin number
- **Common uses**: User input, control buttons
- **Example**: `When Button on Pin 4 Pressed, do: toggle LED`

#### **Button State**
- **Purpose**: Check if button is currently pressed
- **Parameters**: Pin number
- **Returns**: True/False
- **Common uses**: Continuous button monitoring
- **Example**: `If Button on Pin 4 is Pressed, then: action`

### 2. Sensor Blocks

#### **Read DHT Sensor**
- **Purpose**: Read temperature and humidity from DHT sensor
- **Parameters**: Pin number, sensor type (DHT11/DHT22)
- **Returns**: Temperature and humidity values
- **Common uses**: Environmental monitoring
- **Example**: `Read DHT Sensor on Pin 4, type DHT11`

#### **Read Ultrasonic Sensor**
- **Purpose**: Measure distance using ultrasonic sensor
- **Parameters**: Trigger pin, echo pin
- **Returns**: Distance in centimeters
- **Common uses**: Distance measurement, obstacle detection
- **Example**: `Read Ultrasonic Sensor, trigger: 5, echo: 18`

---

## 🎵 Sound and Music Blocks

### 1. Buzzer Blocks

#### **Play Tone**
- **Purpose**: Generate sound at specific frequency
- **Parameters**: Pin number, frequency, duration
- **Common uses**: Alerts, music, feedback
- **Example**: `Play Tone on Pin 2, frequency 440, duration 1 second`

#### **Stop Tone**
- **Purpose**: Stop sound generation
- **Parameters**: Pin number
- **Common uses**: Stopping alerts, sound control
- **Example**: `Stop Tone on Pin 2`

### 2. Music Blocks

#### **Play Note**
- **Purpose**: Play musical note
- **Parameters**: Pin number, note (C, D, E, F, G, A, B), octave, duration
- **Common uses**: Music creation, melodies
- **Example**: `Play Note C on Pin 2, octave 4, duration 0.5 seconds`

---

## 🌈 RGB LED Blocks

### 1. RGB LED Control

#### **Set RGB LED Color**
- **Purpose**: Set color of RGB LED
- **Parameters**: Pin number, red (0-255), green (0-255), blue (0-255)
- **Common uses**: Color display, mood lighting
- **Example**: `Set RGB LED on Pin 2 to Red: 255, Green: 0, Blue: 0`

#### **RGB LED Off**
- **Purpose**: Turn off RGB LED
- **Parameters**: Pin number
- **Common uses**: Power saving, reset
- **Example**: `RGB LED on Pin 2 Off`

---

## 🔧 Advanced Blocks

### 1. String Operations

#### **Join Strings**
- **Purpose**: Combine multiple text pieces
- **Parameters**: Text pieces to join
- **Common uses**: Creating messages, data formatting
- **Example**: `Join "Temperature: " and temperature and "°C"`

#### **String Length**
- **Purpose**: Count characters in text
- **Parameters**: Text string
- **Returns**: Number of characters
- **Common uses**: Text validation, data processing
- **Example**: `Length of message`

### 2. List Operations

#### **Add to List**
- **Purpose**: Add item to a list
- **Parameters**: List name, item to add
- **Common uses**: Data logging, history tracking
- **Example**: `Add temperature to readings`

#### **Get Item from List**
- **Purpose**: Retrieve item from list
- **Parameters**: List name, position (1-based)
- **Returns**: Item value
- **Common uses**: Data retrieval, history access
- **Example**: `Get item 1 from readings`

---

## 📝 Best Practices for Block Programming

### 1. Organization
- **Group related blocks** together
- **Use comments** to explain complex logic
- **Name variables clearly** (temperature, buttonState, etc.)
- **Keep blocks readable** with proper spacing

### 2. Efficiency
- **Avoid unnecessary delays** in main loops
- **Use variables** to store repeated values
- **Check conditions efficiently** (don't check the same thing multiple times)
- **Use appropriate data types** (numbers vs text)

### 3. Debugging
- **Add debug messages** to track program flow
- **Test blocks individually** before combining
- **Use simple test cases** first
- **Check pin connections** when blocks don't work

### 4. Common Patterns

#### **Sensor Reading Pattern**
```
Forever:
  Read sensor value
  Process the value
  Send via Bluetooth
  Wait 1 second
```

#### **Button Control Pattern**
```
When Button Pressed:
  Toggle LED state
  Send status message
```

#### **Threshold Monitoring Pattern**
```
Forever:
  Read sensor
  If value > threshold:
    Turn on alert
    Send warning message
  Wait 5 seconds
```

---

## 🚀 Project-Specific Block Combinations

### 1. Smart Home Controller
```
When ESP32 Starts Up:
  Initialize Bluetooth
  Set LED pins as outputs

Forever:
  If Bluetooth Message Received:
    If message = "ON":
      Set Digital Pin 2 to HIGH
      Send "LED turned ON" via Bluetooth
    If message = "OFF":
      Set Digital Pin 2 to LOW
      Send "LED turned OFF" via Bluetooth
```

### 2. Environmental Monitor
```
When ESP32 Starts Up:
  Initialize Bluetooth
  Set sensor pin as input

Forever:
  Read Analog Pin 32
  Map value to temperature (0-4095 to 0-50)
  Send "Temperature: " and temperature via Bluetooth
  Wait 10 seconds
```

### 3. Interactive Game
```
When ESP32 Starts Up:
  Initialize Bluetooth
  Set LED pins as outputs
  Set variable score to 0

When Button on Pin 4 Pressed:
  Change score by 1
  Play Tone on Pin 2, frequency 440, duration 0.5
  Send "Score: " and score via Bluetooth
```

---

*This guide covers all the essential PictoBlox blocks you'll need for ESP32 programming. Practice with these blocks to become comfortable with block-based programming!* 