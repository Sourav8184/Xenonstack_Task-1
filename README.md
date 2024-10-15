# RentEase 🏠💼

Welcome to **RentEase** – a property rental system that allows users to **rent** or **sell** properties with ease! Whether you are looking for a cozy apartment to rent or a house to sell, RentEase has you covered! 🎉

## 🌟 Features

- **User Authentication 🔐**:  
  Sign in / Sign out securely using **JWT tokens** built from scratch!  
  Users can **register, log in, and log out** effortlessly.

- **Home Page 🏘️**:  
  View all available properties **for rent or sale** with a clean, user-friendly interface.

- **Add Property 📝**:  
  Post your own listings! Add all essential details about the property and **upload images** using **Cloudinary** integration.

- **Manage Listings 🛠️**:  
  Users can **edit** or **delete** the listings they have created.

- **Categories 🏡💲**:  
  Properties are **classified** into two main categories:  
  - **For Rent** 🏢  
  - **For Sale** 🏠

- **Text Editor 🖋️**:  
  Create captivating property descriptions using an integrated **rich text editor** that helps grab customers' attention.

- **Detailed View 📄**:  
  Users can click on a listing to view a **detailed property page** with complete information.

- **Dark Mode 🌙 / Light Mode ☀️**:  
  Switch between **light and dark themes** for a better user experience!

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS, Tailwind CSS, Redux Toolkit  
- **Backend**: NodeJS, ExpressJS  
- **Database**: MongoDB Atlas  
- **Authentication**: JWT Tokens  
- **File Uploads**: Cloudinary  
- **State Management**: Redux Toolkit  

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Sourav8184/Xenonstack_Task-1.git
cd Xenonstack_Task-1
```

### 2️⃣ Install Dependencies
```bash
# Install frontend dependencies
cd Client
npm install

# Install backend dependencies
cd Server
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the **server** folder with the following:

```
MONGODB_URI=your_mongodb_uri
```

### 4️⃣ Start the Application

**Start Backend:**
```bash
cd Server
npm run dev
```

**Start Frontend:**
```bash
cd Client
npm run dev
```

The app should now be running at `http://localhost:5173`.

---

## 🔧 API Endpoints

Here are the key API endpoints:

- **POST /api/auth/signup** – Register a new user  
- **POST /api/auth/login** – Log in a user  
- **GET /api/properties** – Fetch all properties  
- **POST /api/properties** – Add a new property listing  
- **PUT /api/properties/:id** – Edit a property  
- **DELETE /api/properties/:id** – Delete a property  

---

## 📸 Screenshots

1. **Signup/Signin** – Signin or Signup in property rental app

<img width="1440" alt="Screenshot 2024-10-15 at 7 16 40 PM" src="https://github.com/user-attachments/assets/6b9f3c79-a7a0-4f2f-82a2-65d2b8a92fc2">
<img width="1440" alt="Screenshot 2024-10-15 at 7 17 06 PM" src="https://github.com/user-attachments/assets/5fb599d8-df43-4a6f-8046-4085344d1e78">
<img width="1440" alt="Screenshot 2024-10-15 at 7 16 50 PM" src="https://github.com/user-attachments/assets/f04e2fae-6fd8-4ed3-a8af-3c45e4fff7a0">
<img width="1440" alt="Screenshot 2024-10-15 at 7 16 59 PM" src="https://github.com/user-attachments/assets/71e202f5-9ee5-4c61-8784-93bcc596c637">

2. **Home Page** – Explore all available properties  

<img width="1440" alt="Screenshot 2024-10-15 at 7 15 44 PM" src="https://github.com/user-attachments/assets/20118407-7601-4dd9-9d25-57d946cbebcc">
<img width="1440" alt="Screenshot 2024-10-15 at 7 15 58 PM" src="https://github.com/user-attachments/assets/a3ceec7a-75a0-4306-899f-e72f4eeee7e8">

3. **Add Property** – Create a new listing  

<img width="1440" alt="Screenshot 2024-10-15 at 7 16 25 PM" src="https://github.com/user-attachments/assets/225c4bbf-98d2-449b-8779-3ae16984dd2e">

---

## 🤝 Contributing

Feel free to contribute to **RentEase** by creating a **pull request** or reporting issues. Let’s make property renting easier together! 🎉

---

## 💬 Contact

If you have any questions or suggestions, feel free to reach out!  

📧 **Email**: ksourav662@gmail.com  
📱 **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/sourav-42553124a/)  

---

Enjoy using **RentEase**! 🎊🚀
