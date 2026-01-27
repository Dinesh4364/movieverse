# 🎬 MovieVerse

MovieVerse is a modern **React-based movie discovery application** that fetches real-time movie data from the **TMDB API** and presents it with a clean, responsive UI. Users can search for movies, view popular titles, and explore trending searches tracked using **Appwrite (Backend as a Service)**.

---

## 🚀 Features

- 🔍 **Movie Search** – Search movies in real time using TMDB API  
- 🔄 **Auto-scrolling Popular Movies** – Displays top 10 popular movies dynamically  
- 📈 **Trending Searches** – Tracks and shows top 5 trending movie searches using Appwrite  
- 🎨 **Modern UI/UX** – Movie cards displaying:
  - Poster  
  - Rating  
  - Movie name  
  - Language  
- ⏳ **Debounced Search** – Optimized and smooth search experience  
- 🌍 **Fast & Responsive** – Built with modern React practices  

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)  
- **Backend as a Service:** Appwrite  
- **API:** The Movie Database (TMDB)  
- **Styling:** CSS / Tailwind CSS  
- **Deployment:** Vercel / Netlify / GitHub Pages  

---

## 📸 Screenshots

_Add screenshots or GIFs here to make your repository stand out._

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Dinesh4364/movieverse.git
cd movieverse
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

⚠️ **Never commit your `.env` file to GitHub.**

### 4️⃣ Run the Project

```bash
npm run dev
```

The app will run on:

👉 **http://localhost:5173**

---

## 🧠 How Trending Searches Work

When a user searches for a movie:

1. The search term is stored in Appwrite
2. Search count is updated
3. The top 5 most searched movies are fetched and displayed in **Trending Searches**

---

## 📦 Folder Structure

```
src/
│── components/
│   ├── Search.jsx
│   ├── MovieCard.jsx
│   ├── Spinner.jsx
│   ├── AutoScrollMovies.jsx
│── appwrite.js
│── App.jsx
│── main.jsx
```

---

## 🧪 Future Improvements

- 🎭 Movie details page
- ❤️ Favorites / Watchlist
- 🌙 Dark mode
- 🔐 Authentication
- 📱 Mobile-first UI improvements

---

## 🙌 Acknowledgements

- [TMDB API](https://www.themoviedb.org/documentation/api)
- [Appwrite](https://appwrite.io/)
- React & Vite Community

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Dinesh Chinimilli**

- GitHub: [https://github.com/Dinesh4364](https://github.com/Dinesh4364)
- LinkedIn: [https://www.linkedin.com/in/dinesh4364/](https://www.linkedin.com/in/dinesh4364/)