# 🗺️ Authenticated Map App with Google Maps & Firebase

This project is a secure, React-based web application that allows users to log in with Google, interact with a live map, select two points, and draw a route between them using the Google Directions API. key skills in full-stack development, user authentication, and map-based APIs.

## 🔥 Features

- 🔐 Google Sign-In Authentication (via Firebase)
- 📍 Click to place two markers (A & B) on the map
- 🚗 Draw a route between markers using Directions API
- 📏 Displays route distance and estimated travel time
- 🔁 Reset map points
- 🔓 Logout functionality
- 🧭 Responsive and clean UI

## 🛠️ Tech Stack

- **React.js** – Frontend UI framework
- **Firebase Authentication** – Secure Google Sign-In
- **Google Maps JavaScript API** – Interactive map rendering
- **Google Directions API** – Route calculation and distance
- **React Router DOM** – Protected route navigation
- **dotenv** – Environment variable handling
- **@react-google-maps/api** – Google Maps wrapper for React


## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/authenticated-map-app.git
cd authenticated-map-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root of the project with the following:

```
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```


### 4. Start the application
```bash
npm start
```



## 🔑 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable **Google Authentication** under **Authentication > Sign-in method**
4. Add `http://localhost:3000` to **authorized domains**
5. Copy your project config and set it in `.env`

## 🌐 Google Maps Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create/select a project
3. Enable the following APIs:
   - **Maps JavaScript API**
   - **Directions API**
4. Create a new **API key**
5. Restrict the key to:
   - Website: `http://localhost:3000/*`
   - APIs: Maps JavaScript, Directions
6. Paste the key in `.env` as `REACT_APP_GOOGLE_MAPS_API_KEY`

## 🧪 Example Use

- User logs in via Google
- Click on the map to drop point A and B
- Click “Draw Route” to show the path, distance, and duration
- Use “Reset” to clear points, “Logout” to sign out



## 👨‍💻 Developer

**Praveen**  
B.Tech – Artificial Intelligence & Machine Learning  
📍 UVCE, Bangalore  
📫 Email: praveenantenor@gmail.com  
🎯 Developed for: **ProductLabs Company – Internship Assignment (June 2025)**

## 📜 License

This project is licensed for educational and demo purposes.
