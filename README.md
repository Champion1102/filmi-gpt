# FilmiGPT 🎥

**FilmiGPT** is a movie recommendation platform that helps users explore, search, and receive personalized movie suggestions powered by **Gemini-1.5** AI. Integrated with the **TMDB API**, it provides detailed movie information, making it a must-have app for cinephiles and casual movie lovers alike.

🌐 **Live App**: [filmi-gpt.vercel.app](https://filmi-gpt.vercel.app)

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore)
- **State Management**: Redux
- **APIs**: Gemini-1.5, TMDB API

---

## Features

- 🎬 **Gemini-1.5 Powered Movie Suggestions**: Get personalized recommendations using the powerful Gemini-1.5 AI engine.
- 🔍 **TMDB Movie Search**: Search for movies with data fetched from the comprehensive TMDB API.
- 🔒 **User Authentication & Editable Profiles**: Secure Firebase-based login, and users can update their profiles as needed.
- 🌐 **Multi-Language Translation**: Enjoy multi-language support for users from various regions.
- 📱 **Responsive Design**: Fully responsive layout optimized for both mobile and desktop users.
- 🌟 **Favorites & Watchlist**: Save your favorite movies and build a watchlist.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>=14.x)
- NPM or Yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/filmi-gpt.git
   cd filmi-gpt
   ```

2. **Install Dependencies**:
   ```bash
    npm install
   ```

3. **Setup Firebase and GeminiAPI KEY**:
   ```bash
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_GEMINI_KEY =your_gemini_api_key
   ```
4. **Run the Deployment Server**:
    ```bash
    npm start 
    ```

4. **Visit the app in your browser**:
   ```arduino
      http://localhost:3000
      ```


## Deployment

To deploy the app on **Vercel**, follow these steps:

1. **Fork** the repository.
2. **Connect** your forked repository to your Vercel account.
3. **Set up environment variables** on Vercel (API keys, Firebase config).
4. **Deploy** from the Vercel dashboard.

---

## API Keys

Make sure you have valid API keys for:

- **TMDB API**: for fetching movie data.
- **Gemini-1.5 API**: for AI-powered movie recommendations.
- **Firebase**: for user authentication and Firestore integration.
