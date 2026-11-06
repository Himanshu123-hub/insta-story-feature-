# 📸 Instagram Story Feature

## 📌 About The Project

Instagram Story Feature is a mini web development project built using **HTML, CSS, and JavaScript DOM Manipulation**.

This project replicates the basic Instagram Stories functionality, where users can view different stories by clicking on profile pictures. Stories are displayed in a fullscreen view and automatically disappear after 3 seconds.

The main purpose of this project is to practice JavaScript DOM manipulation, event handling, arrays of objects, and timer functions.

## ✨ Features

- 👤 Dynamic Story Creation using JavaScript.
- 🖼️ Displays user profile pictures (DP).
- 📱 Click on any profile to view their story.
- ⏱️ Stories automatically close after 3 seconds.
- ❌ Close button to exit the story.
- ⏮️ Previous button to view the previous story.
- ⏭️ Next button to view the next story.
- 🔄 Dynamic story image changing based on the selected user.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (DOM Manipulation)

## 🧠 JavaScript Concepts Used

This project helped me practice the following JavaScript concepts:

- **Array of Objects:** Storing user information such as name, profile picture, and story image.
- **forEach():** Iterating through the users array.
- **Template Literals:** Dynamically creating HTML elements.
- **innerHTML:** Displaying dynamically generated story elements.
- **querySelector() & querySelectorAll():** Selecting HTML elements.
- **addEventListener():** Handling click events.
- **Functions:** Creating reusable `showstory()` functionality.
- **setTimeout():** Automatically closing stories after 3 seconds.
- **clearTimeout():** Clearing the previous timer when switching stories.
- **Conditional Statements:** Preventing navigation beyond the first and last stories.

## ⚙️ How It Works

1. User data is stored in an array of objects.
2. JavaScript dynamically creates story cards using `forEach()`.
3. When a user clicks on a story card, the `showstory()` function is called.
4. The selected user's story image appears in fullscreen mode.
5. A timer starts using `setTimeout()` and closes the story after 3 seconds.
6. The Next and Previous buttons allow users to navigate between stories.
7. The Close button immediately closes the fullscreen story and clears the timer.

## 📂 Project Structure

```text
Instagram-Story-Feature/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run This Project

1. Clone this repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Open the project folder in VS Code.

3. Open `index.html` in your browser.

4. Click on any profile picture to view the story.

## 🎯 Learning Outcome

Through this project, I improved my understanding of JavaScript DOM manipulation and learned how to dynamically create HTML elements, handle multiple click events, manage timers, and build interactive web features.

## 🔮 Future Improvements

- Add story progress bars.
- Add swipe navigation between stories.
- Add automatic navigation to the next story.
- Add a like button for stories.
- Add a responsive mobile-friendly design.
- Add a story upload feature.

## 👨‍💻 Author

**Himanshu gope**

Learning JavaScript | Frontend Development | Building Projects

---

⭐ If you like this project, don't forget to give it a star!
