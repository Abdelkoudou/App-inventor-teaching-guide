# ESP32 LED Controller Project Template
## Session 13 Project: App Inventor + ESP32 Communication

### Project Overview
Create a mobile app that can control an LED connected to an ESP32 microcontroller via WiFi. This project demonstrates the integration between mobile apps and IoT hardware.

### Learning Objectives
- Program ESP32 to create a web server
- Connect mobile app to ESP32 via HTTP requests
- Control hardware from a mobile app
- Understand client-server communication

### Materials Needed
- ESP32 development board
- USB cable
- LED and 220Ω resistor
- Breadboard and jumper wires
- Computer with Arduino IDE
- Android device for testing
- WiFi network access

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

#### Step 2: ESP32 Code
```cpp
#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";

const int ledPin = 2;
WebServer server(80);

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  
  // Connect to WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  Serial.println("Connected to WiFi");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
  
  // Set up web server routes
  server.on("/", handleRoot);
  server.on("/led/on", handleLedOn);
  server.on("/led/off", handleLedOff);
  server.on("/led/status", handleLedStatus);
  
  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  server.handleClient();
}

void handleRoot() {
  String html = "<html><body>";
  html += "<h1>ESP32 LED Controller</h1>";
  html += "<p><a href='/led/on'><button>Turn LED ON</button></a></p>";
  html += "<p><a href='/led/off'><button>Turn LED OFF</button></a></p>";
  html += "<p><a href='/led/status'><button>Check Status</button></a></p>";
  html += "</body></html>";
  server.send(200, "text/html", html);
}

void handleLedOn() {
  digitalWrite(ledPin, HIGH);
  server.send(200, "text/plain", "LED ON");
}

void handleLedOff() {
  digitalWrite(ledPin, LOW);
  server.send(200, "text/plain", "LED OFF");
}

void handleLedStatus() {
  String status = digitalRead(ledPin) ? "ON" : "OFF";
  server.send(200, "text/plain", "LED is " + status);
}
```

#### Step 3: Upload Code
1. Connect ESP32 to computer via USB
2. Select the correct port in PictoBlox
3. Click Upload button
4. Open Serial Monitor to see the IP address
5. Note the IP address for the mobile app

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
   - TextBox (for IP address)

#### Step 2: Design the Interface
1. Set the title label to "ESP32 LED Controller"
2. Set button texts to "Turn ON", "Turn OFF", "Check Status"
3. Add a TextBox for the ESP32 IP address
4. Add a label to display status messages

#### Step 3: Add Logic (Blocks)
```javascript
// When Turn ON button is clicked
when ButtonON.Click
  set Web1.Url to "http://" + TextBoxIP.Text + "/led/on"
  call Web1.Get

// When Turn OFF button is clicked
when ButtonOFF.Click
  set Web1.Url to "http://" + TextBoxIP.Text + "/led/off"
  call Web1.Get

// When Check Status button is clicked
when ButtonStatus.Click
  set Web1.Url to "http://" + TextBoxIP.Text + "/led/status"
  call Web1.Get

// When web request completes
when Web1.GotText
  set LabelStatus.Text to Web1.ResponseText
```

### Testing and Troubleshooting

#### Step 1: Test ESP32
1. Open Serial Monitor in Arduino IDE
2. Note the IP address displayed
3. Open a web browser and go to the IP address
4. Test the buttons on the web page

#### Step 2: Test Mobile App
1. Enter the ESP32 IP address in the app
2. Test each button in the app
3. Verify the LED responds correctly
4. Check status messages

#### Common Issues and Solutions
- **Can't connect to ESP32**: Check WiFi credentials and IP address
- **LED doesn't respond**: Check wiring and GPIO pin number
- **App shows error**: Verify ESP32 is running and accessible
- **Wrong IP address**: Check Serial Monitor for correct IP

### Enhancement Ideas
- Add multiple LEDs with different colors
- Create a slider to control LED brightness
- Add a timer to automatically turn LED on/off
- Create a pattern of LED blinking
- Add sensor data display (temperature, humidity)

### Success Criteria
- [ ] ESP32 connects to WiFi successfully
- [ ] LED responds to web browser controls
- [ ] Mobile app can control the LED
- [ ] Status messages display correctly
- [ ] You can explain how the communication works

### Next Steps
- Try controlling multiple LEDs
- Add more sensors to the ESP32
- Create more complex control interfaces
- Experiment with different communication protocols

### Tips for Success
- Double-check all wiring before powering on
- Use the Serial Monitor to debug ESP32 issues
- Test the web interface before building the mobile app
- Keep the ESP32 IP address handy
- Make sure your phone and ESP32 are on the same WiFi network

---

*This template demonstrates the power of combining mobile apps with IoT hardware. The possibilities are endless!* 