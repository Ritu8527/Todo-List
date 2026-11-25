# 📝 To-Do List Web Application

A simple, interactive, and user-friendly **To-Do List Web Application** built using HTML, CSS, and JavaScript. This application helps users organize their daily activities by adding, editing, completing, and deleting tasks.

The application also uses the browser's Local Storage to save tasks, allowing users to access their saved tasks even after refreshing or reopening the browser.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Project Objective](#-project-objective)
- [Project Goals](#-project-goals)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Folder Structure](#-project-folder-structure)
- [How to Run the Project](#-how-to-run-the-project)
- [Application Workflow](#-application-workflow)
- [Storage Mechanism](#-storage-mechanism)
- [Learning Outcomes](#-learning-outcomes)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)

---

## 📖 Project Overview

The **To-Do List Web Application** is a frontend-based task management application designed to make everyday task organization easier and more efficient.

It provides a simple interface where users can enter their tasks, manage existing tasks, mark completed activities, and remove tasks that are no longer required.

The application is developed using fundamental web technologies:

- HTML5 for structuring the application.
- CSS3 for designing and styling the interface.
- JavaScript for implementing interactive functionality.
- Browser Local Storage for maintaining task data.

The project focuses on creating a lightweight application without requiring a backend server or database.

## 🎯 Project Objective

The primary objective of this project is to develop a simple and efficient task management application that helps users organize their daily activities in a structured manner.

The application aims to provide an easy way to maintain a list of tasks, track completed activities, and manage pending work through an interactive and responsive user interface.

It also demonstrates the practical implementation of HTML, CSS, JavaScript, DOM manipulation, event handling, and browser storage.

## 🚀 Project Goals

The major goals of this project are:

1. **Task Management:** Allow users to create and maintain a list of daily tasks.
2. **Easy Task Editing:** Provide the ability to modify previously added tasks.
3. **Task Completion Tracking:** Allow users to mark tasks as completed using checkboxes.
4. **Task Deletion:** Enable users to remove unnecessary tasks.
5. **Data Persistence:** Store task information in Local Storage so that tasks remain available after refreshing the page.
6. **User-Friendly Interface:** Create a clean and simple interface that is easy to understand and operate.
7. **Interactive Experience:** Use JavaScript to update the task list dynamically without reloading the webpage.
8. **Validation:** Prevent users from adding empty tasks.

## ✨ Key Features

### 1. Add New Tasks
- Users can enter a task in the input field.
- Add tasks using the Add button.
- Press the Enter key to add a task.
- Empty tasks are not accepted.

### 2. Edit Existing Tasks
- Users can modify previously created tasks.
- An editing prompt displays the existing task.
- Updated task information is saved automatically.

### 3. Delete Tasks
- Users can delete individual tasks.
- Deleted tasks are immediately removed from the displayed list and Local Storage.

### 4. Mark Tasks as Completed
- Each task has a checkbox.
- Users can mark tasks as completed or pending.
- Completed tasks appear with a strikethrough effect.

### 5. Local Storage Integration
- Task information is saved in browser Local Storage.
- Previously saved tasks automatically appear when the application is reopened.
- Task information remains available after a page refresh.

### 6. Input Validation
- Prevents users from adding blank tasks.
- Displays an alert when an invalid task is entered.

### 7. Attractive User Interface
- Gradient background design.
- Clean white task container.
- Interactive buttons.
- Hover effects and simple styling.

## 💻 Technology Stack

The following technologies and tools are used in this project:

| Technology | Purpose |
|---|---|
| HTML5 | Creates the structure of the application. |
| CSS3 | Provides styling, layout, colors, and visual effects. |
| JavaScript | Implements task management and interactive functionality. |
| DOM Manipulation | Dynamically creates, updates, and removes task elements. |
| Local Storage | Stores task information in the browser. |
| SweetAlert2 CDN | External alert library included in the HTML document. |

### Technologies Explained

**HTML5:** Used to create the input field, buttons, heading, and task list.

**CSS3:** Used for the gradient background, task container, buttons, hover effects, and completed-task appearance.

**JavaScript:** Handles adding, editing, deleting, and completing tasks. It also manages input validation and event handling.

**Local Storage:** Maintains task information in the browser using `localStorage` and JSON conversion.

## 📂 Project Folder Structure

The repository has a simple and organized structure:

```text
Todo-List/
│
├── todo.html       # Main HTML file
│
├── todo.css        # CSS styling file
│
├── todo.js         # JavaScript functionality
│
└── README.md       # Project documentation
```

### File Description

| File Name | Description |
|---|---|
| `todo.html` | Contains the basic structure and elements of the To-Do List application. |
| `todo.css` | Contains the styling and visual design of the application. |
| `todo.js` | Contains the logic for adding, editing, deleting, completing, and saving tasks. |
| `README.md` | Provides project information and setup instructions. |

## ⚙️ How to Run the Project

Follow these steps to run the application on your local computer.

### Prerequisites

You need:

- A computer or laptop.
- A modern web browser such as Google Chrome, Microsoft Edge, or Firefox.
- A code editor such as Visual Studio Code (optional).
- Git installed on your computer (optional, for cloning).

**Note:** No Node.js installation, database, or backend server is required.

### Step 1: Clone the Repository

Open your terminal or command prompt and execute:

```bash
git clone https://github.com/Ritu8527/Todo-List.git
```

### Step 2: Navigate to the Project Folder

```bash
cd Todo-List
```

### Step 3: Open the Project

Open the project folder in Visual Studio Code:

```bash
code .
```

Alternatively, you can open the downloaded project folder manually.

### Step 4: Run the Application

Locate the `todo.html` file inside the project folder.

Double-click the file to open it in your default web browser.

Alternatively, right-click `todo.html` and select:

**Open with → Google Chrome**

You can also use the Live Server extension in Visual Studio Code:

1. Open the project in Visual Studio Code.
2. Install the Live Server extension if it is not already installed.
3. Right-click `todo.html`.
4. Select **Open with Live Server**.

### Step 5: Start Managing Your Tasks

Once the application opens:

1. Enter your task in the input field.
2. Click the Add button.
3. Use the checkbox to mark a task as completed.
4. Click Edit to modify a task.
5. Click Delete to remove a task.

Your tasks will be saved automatically in browser Local Storage.

## 🔄 Application Workflow

The application follows a simple workflow:

1. The user opens the application.
2. JavaScript retrieves previously saved tasks from Local Storage.
3. Existing tasks are displayed on the screen.
4. The user enters a new task.
5. JavaScript validates the input.
6. The task is added to the task array and displayed on the webpage.
7. Updated task information is saved in Local Storage.
8. The user can edit, complete, or delete tasks whenever required.

## 💾 Storage Mechanism

This project uses the browser's **Local Storage** to maintain task information.

The application stores tasks in JSON format.

Example task structure:

```javascript
{
    id: 1732531200000,
    text: "Complete Java Assignment",
    completed: false
}
```

The application uses the following JavaScript methods:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

This saves the task array in Local Storage.

```javascript
JSON.parse(localStorage.getItem("tasks")) || [];
```

This retrieves previously saved tasks when the application loads.

**Advantages of Local Storage:**

- Data remains available after refreshing the webpage.
- No database connection is required.
- Data can be accessed directly through JavaScript.
- It provides a simple way to store small amounts of browser-side information.

## 📚 Learning Outcomes

Through this project, the following concepts and skills are demonstrated:

- Understanding HTML document structure.
- Applying CSS properties for webpage styling.
- Implementing JavaScript functions.
- Understanding DOM manipulation.
- Handling user events and button clicks.
- Working with JavaScript arrays and objects.
- Using browser Local Storage.
- Converting data using JSON.
- Implementing input validation.
- Developing an interactive frontend application.

## 🔮 Future Enhancements

The application can be improved further by introducing the following features:

- **Task Categories:** Organize tasks into different categories.
- **Due Dates:** Allow users to assign deadlines to tasks.
- **Priority Levels:** Set high, medium, and low priorities.
- **Search Functionality:** Search for specific tasks.
- **Filter Tasks:** Display completed and pending tasks separately.
- **Dark Mode:** Provide a dark theme option.
- **Responsive Improvements:** Further optimize the interface for mobile and tablet devices.
- **Task Statistics:** Display total, completed, and pending task counts.

These features can make the application more advanced and useful for everyday task management.

## 👩‍💻 Author

**Ritu**

GitHub Profile: [@Ritu8527](https://github.com/Ritu8527)

Project Repository: [Todo-List](https://github.com/Ritu8527/Todo-List)

---

## 📄 License

This project is created for educational and learning purposes.

---

⭐ If you find this project useful, consider giving the repository a star!

**Thank you for visiting this project!**
