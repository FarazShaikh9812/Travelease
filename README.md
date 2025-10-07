# **Live Link** : https://travelease-1-rxxp.onrender.com/listings
## Deployed using Render

# 🏡 Travelease

Travelease is a full-stack web application inspired by **Airbnb**, built using the **MERN stack (MongoDB, Express.js, Node.js)**.  
The website allows users to browse, create, and manage property listings — complete with reviews, images, and location maps.

---

## 🚀 Features

- 🌍 **User Authentication**
  - Signup, Login, and Logout functionality
  - Secure backend routes for authenticated users only using passport

- 🏠 **Property Listings**
  - Users can create, edit, and delete their own listings
  - Each listing includes images, location, and description
  - CRUD operations implemented for both listings and users

- 🗺️ **Map Integration**
  - Integrated **Mapbox** to display property locations dynamically

- 🖼️ **Image Storage**
  - Used **Cloudinary** to store and manage uploaded listing images

- ⭐ **Reviews**
  - Users can post reviews and rate their experience
  - Each user can only delete or modify their own reviews

- 🧾 **Validation**
  - Frontend form validation using **Bootstrap**
  - Secure backend validation for protected routes and data integrity

---

## 🛠️ Tech Stack

**Frontend:**
- EJS template
- Bootstrap  
- CSS3

**Backend:**
- Node.js  
- Express.js  

**Database & Storage:**
- MongoDB Atlas (Cloud Database)  
- Cloudinary (Image Storage)

**Other Tools & Libraries:**
- Mapbox (for interactive maps)
- Mongoose (for MongoDB schema modeling)
- Multer (for file uploads)
- passport

---

## ⚙️ Installation & Setup

1. **Clone the repository**
    https://github.com/FarazShaikh9812/Travelease.git

2. **Installation**
    npm install

3. **Add environmental variables**
    Create a .env file in the root directory and add your credentials:
   
    CLOUD_NAME=your_cloud_name
    CLOUD_API_KEY=your_api_key
    CLOUD_API_SECRET=api_secret_key
    MAP_TOKEN=mapbox_map_token
    ATLASDB_URL=mongodb+srv://<username>:<password>@cluster0.1tk833g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    SECRET=secret_code

4. **Run the project**
    node app.js  OR nodemon app.js (install nodemon first)

🤝 **Contribution**
If you’d like to improve this project, feel free to fork the repo and submit a pull request.

✨ **Author**
Faraz shaikh
Github : https://github.com/FarazShaikh9812
LinkedIn : https://www.linkedin.com/in/farazshaikh9812/

    
