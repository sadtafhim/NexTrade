# NexTrade Marketplace - Frontend 🚀

NexTrade is a modern, full-stack e-commerce marketplace built with **Next.js 15**. It features a high-performance UI, seamless data fetching from a remote MongoDB database via an Express API, and a fully responsive design.

## 🔗 Live Links

- **Live Demo:** [https://nex-trade-theta.vercel.app](https://nex-trade-theta.vercel.app)
- **Backend API:** [https://nex-trade-backend-ten.vercel.app](https://nex-trade-backend-ten.vercel.app)

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **Deployment:** Netlify (Static Export)

## ✨ Features

- **Dynamic Marketplace:** Fetches real-time product data from MongoDB Atlas.
- **Advanced Item Details:** Dynamic routing using `use(params)` for high-speed product inspection.
- **Product Listing:** A dedicated form to add new products directly to the database.
- **Responsive UI:** Optimized for Mobile, Tablet, and Desktop using Tailwind's grid system.
- **Optimized Images:** Configured to handle remote assets from Unsplash and Wikimedia.

## 🚀 Local Development

1. **Clone the repository:**

```bash
   git clone [your-repo-link]
   cd nextrade-frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure the API URL:**
   Open your component files (or .env.local) and ensure the fetch calls point to: https://nex-trade-backend-ten.vercel.app

4. **Run the development server:**

```bash
npm run dev
```

### Pro-Tips for your Submission:

1. **The "out" Folder:** Remember that when you upload to Netlify, you are uploading the **contents** of the `out` folder.
2. **Backend Readme:** Since your backend is a separate project, you should have a small `README.md` there too, explaining the MongoDB connection and the Express routes.
3. **Screenshots:** If you want to get an **A+**, take a screenshot of your live marketplace and paste it into the "Features" section of the README!

**Is there anything else you need to finalize for your assignment? I can help you write the Backend README or a summary of the project for your submission form!**
