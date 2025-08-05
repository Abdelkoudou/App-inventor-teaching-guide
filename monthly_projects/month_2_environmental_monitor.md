# Month 2: Environmental Monitor Project
## App of the Month Competition

### Project Theme: Environmental Monitor
**Build an app that monitors environmental conditions using sensors**

### Project Overview
Create an application that uses sensors to monitor environmental conditions and displays the data in a user-friendly way. Your app should help people understand their environment better.

### Learning Objectives
- Read and display sensor data in mobile apps
- Process environmental information
- Create informative data displays
- Understand environmental monitoring concepts

### Required Features
- **Must use at least one sensor** (temperature, humidity, light, air quality, etc.)
- **Real-time data display** showing current readings
- **Data logging** to track changes over time
- **User-friendly interface** with clear data presentation
- **Alert system** for unusual readings

### Project Ideas

#### 1. Weather Station
- Monitor temperature and humidity
- Display weather conditions
- Track daily temperature changes
- Show weather trends

#### 2. Air Quality Monitor
- Measure air quality with gas sensors
- Display air quality levels
- Alert for poor air quality
- Track air quality over time

#### 3. Plant Health Monitor
- Monitor soil moisture and temperature
- Track plant growth conditions
- Alert when plants need attention
- Display plant health status

#### 4. Light Level Monitor
- Measure ambient light levels
- Track light patterns throughout the day
- Alert for unusual lighting conditions
- Help optimize lighting

#### 5. Noise Level Monitor
- Measure sound levels in environment
- Alert for loud noises
- Track noise patterns
- Help create quieter environments

### Technical Requirements

#### ESP32 Setup (PictoBlox Blocks)
```
When ESP32 Starts Up:
  Initialize Bluetooth as "EnvMonitor"
  Set sensor pin as INPUT

Forever:
  Read Analog Pin 32
  Map value to temperature (0-4095 to 0-50)
  Send "Temperature: " and temperature via Bluetooth
  Wait 10 seconds
```

#### App Inventor Components
- **Labels** for displaying sensor data
- **Charts** or **Canvas** for data visualization
- **Buttons** for different views
- **Text Box** for entering sensor commands
- **Images** for visual indicators

### Design Guidelines

#### Data Display
- **Clear readings** with proper units
- **Visual indicators** (colors, icons) for different levels
- **Historical data** showing trends
- **Easy-to-read** fonts and layouts
- **Responsive design** for different screen sizes

#### User Interface
- **Dashboard view** with all sensors
- **Detailed view** for each sensor
- **Settings page** for configuration
- **Help section** explaining readings
- **Export data** functionality

### Project Structure

#### 1. Planning Phase (Week 1)
- Choose your environmental sensors
- Plan your data display layout
- Decide on alert thresholds
- Sketch your app interface

#### 2. Hardware Setup (Week 1-2)
- Connect sensors to ESP32
- Test sensor readings
- Calibrate sensors if needed
- Document your setup

#### 3. App Development (Week 2-3)
- Design data display interface
- Implement sensor data reading
- Add data visualization
- Create alert system

#### 4. Testing and Refinement (Week 3-4)
- Test with real sensors
- Verify data accuracy
- Improve data presentation
- Prepare for demonstration

### Submission Requirements

#### App Files
- **App Inventor project** (.aia file)
- **ESP32 code** (PictoBlox or text file)
- **Sensor setup photos** or diagrams

#### Documentation
- **App description** (200-300 words)
- **Sensor specifications** and readings
- **Screenshots** (3-5 images)
- **Data samples** from your sensors

#### Presentation
- **Live demonstration** with real sensors
- **Explanation** of environmental data
- **Discussion** of sensor accuracy
- **Real-world applications**

### Judging Criteria

#### Technical Excellence (40 points)
- **Sensor Integration**: Are sensors working properly? (15 points)
- **Data Accuracy**: Are readings accurate and consistent? (10 points)
- **Code Quality**: Is the code well-structured? (10 points)
- **Innovation**: Does it use sensors creatively? (5 points)

#### User Experience (30 points)
- **Data Presentation**: Is the data displayed clearly? (15 points)
- **Usability**: Is the app easy to understand? (10 points)
- **Alert System**: Are alerts helpful and timely? (5 points)

#### Creativity (20 points)
- **Originality**: Is the monitoring approach unique? (10 points)
- **Theme Adherence**: Does it fit the environmental theme? (5 points)
- **Problem Solving**: Does it solve a real monitoring need? (5 points)

#### Documentation (10 points)
- **App Description**: Is the description clear and complete? (5 points)
- **Data Documentation**: Are sensor readings well documented? (5 points)

### Tips for Success

#### Technical Tips
- **Calibrate your sensors** for accurate readings
- **Test in different conditions** to ensure reliability
- **Use appropriate units** for your measurements
- **Handle sensor errors** gracefully
- **Log data regularly** for analysis

#### Design Tips
- **Make data easy to read** with clear fonts and colors
- **Use visual indicators** (colors, icons) for different levels
- **Provide context** for what the readings mean
- **Include help text** explaining sensor readings
- **Design for different users** (kids, adults, experts)

#### Competition Tips
- **Choose reliable sensors** that give consistent readings
- **Test in real environments** to validate your app
- **Document your sensor setup** clearly
- **Prepare sample data** for your presentation
- **Practice explaining** environmental concepts

### Example Projects

#### Smart Weather Station
- **Sensors**: Temperature, humidity, pressure
- **Features**: Current weather display, daily trends, weather alerts
- **Interface**: Weather dashboard, detailed readings, trend charts
- **Alerts**: Extreme temperature warnings, humidity alerts

#### Plant Care Monitor
- **Sensors**: Soil moisture, temperature, light
- **Features**: Plant health status, watering reminders, growth tracking
- **Interface**: Plant dashboard, individual plant views, care schedule
- **Alerts**: Low moisture, temperature extremes, light issues

#### Air Quality Tracker
- **Sensors**: Gas sensors, particulate matter
- **Features**: Air quality index, pollutant levels, health recommendations
- **Interface**: Air quality display, pollutant breakdown, health tips
- **Alerts**: Poor air quality warnings, ventilation reminders

### Resources

#### Hardware Resources
- Temperature sensors (DHT11, DHT22)
- Humidity sensors
- Light sensors (LDR)
- Gas sensors (MQ series)
- Soil moisture sensors
- Sound sensors

#### Software Resources
- PictoBlox for ESP32 programming
- MIT App Inventor for app development
- Sensor calibration guides
- Data visualization examples

#### Learning Resources
- Environmental monitoring concepts
- Sensor calibration tutorials
- Data visualization best practices
- Environmental science basics

---

*Remember: The goal is to help people understand and monitor their environment better!* 