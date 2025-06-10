# ReactJS
This is my daily work on REACTJS
# 🧮 Simple Calculator with History (HTML, CSS, JavaScript)

This is a beginner-friendly calculator web application built using **HTML**, **CSS**, and **JavaScript (ES6+)**. It allows users to perform basic arithmetic operations and keeps a history of all calculations along with the total sum of all numerical results.

---

## 📌 Features

- ✅ Add, subtract, multiply, divide two numbers
- ✅ Real-time result display
- ✅ Maintains a history of all calculations
- ✅ Automatically updates the sum of all numeric results
- ✅ User-friendly interface with responsive design

---

## 🛠️ Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling
- **JavaScript ES6** – Logic & DOM Manipulation

## 💻 How to Run the Project

1. Clone or download the repository
2. Place all files (`index.html`, `style.css`, `script.js`) in the same directory
3. Open `index.html` in your web browser


## 📷 Screenshot


![Screenshot from 2025-05-10 16-30-51](https://github.com/user-attachments/assets/60d855e4-2c6f-4307-9735-fcf4f1ddd703)
![Screenshot from 2025-05-10 16-31-14](https://github.com/user-attachments/assets/65276f10-64be-4740-92d6-194399e95a1f)

---


# 🌤️ Weather App - ReactJS

A simple and beautiful weather forecasting app built using **ReactJS**. It fetches real-time weather data from the **OpenWeatherMap API** and displays the current weather conditions of any searched city.

---

## 🚀 Features

- 🌍 Search weather by city name
- 🌡️ Displays:
  - Temperature in Celsius
  - Wind speed
  - Humidity percentage
  - Date and weekday
  - Dynamic weather icons
- 🏙️ Default city is shown on initial load
- ⚠️ Error handling for invalid or empty inputs

---

## 📦 Technologies Used

- **ReactJS**
- **CSS** (for styling)
- **OpenWeatherMap API**
- **Vite** (as the development build tool)

---

## 🧠 React Concepts Used

### ✅ Functional Component
- The entire UI is built using a single functional component called `Card`.

### ✅ `useState` Hook
- Used to manage local state like:
  - Weather details (temperature, wind speed, humidity)
  - Location name
  - Weather icon
  - Date
- Example:
  ```js
  const [weatherData, setWeather] = useState(false);
### ✅ useRef Hook
- Used to access the input field value without making it a controlled component.
- Helps in grabbing the city name directly on search.
-Example:
    ```js
      const inputRef = useRef();
### ✅ useEffect Hook
- Automatically fetches weather data for a default city when the component is mounted.
- Example:
    ```js
        useEffect(() => {
  search("Medak,Telangana");
  }, []);
### ✅ Conditional Rendering
- Renders the weather UI only when valid data is available.
- Prevents UI errors or crashes when no data is present.
### ✅ Event Handling
- Clicking the search icon triggers a call to the weather API using:
  ```js
      onClick={() => search(inputRef.current.value)}
### ✅ Environment Variables
- The API key is stored securely using a Vite environment variable
### ✅ Dynamic Image Mapping
- Weather icons are dynamically selected based on the icon code returned from the API
### ✅ Date Formatting
- The toLocaleDateString() method is used to convert the date object into a readable format:

# 🛠️ How to Run
- Clone the repository:
  ```
    git clone https://github.com/TruCoder25/ReactJS.git
    cd ReactJS
# Folder Structure
  src/
│
├── assets/              # Images and icons <br>
├── Card.jsx             # Main functional component <br>
├── card.css             # Component-specific styles <br>
└── main.jsx             # Entry point <br>


📌 Note

- Make sure to generate your own API key from https://openweathermap.org/api

-  This app only supports current weather; for forecast, further API endpoints are needed.

#ScreenShots
### 1.
![Screenshot from 2025-06-10 19-56-48](https://github.com/user-attachments/assets/1d64ea83-6a63-4f47-b781-e9f09728896a)

### 2.

![Screenshot from 2025-06-10 19-56-36](https://github.com/user-attachments/assets/1856d67a-6ab2-470c-9c8e-8c32dcd5eb8e)
