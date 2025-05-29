# Assessment: Interactive Data Explorer

Welcome to the Modelical frontend assessment! This challenge is designed to evaluate your skills in building modern web applications, focusing on data management, user interface design, and architectural best practices.

---

## The Challenge

Your primary task is to develop a web application featuring a central component that empowers users to explore and interact with a dataset.

**Specifically, your solution should:**

- **Visually represent structured data** in an intuitive and accessible manner.
- **Respond dynamically to user input** to refine and update the displayed information in real-time.
- **Efficiently interact with a backend system** (or a mock equivalent) to fetch and manage data as needed.

---

## Key Architectural Guidance

**A core requirement is the strategic use of a `WorldDataContext`.** This context should serve as the central intermediary, managing the data flow and state between the chosen data fetching mechanism (Apollo Client) and your primary data display component (CustomDataGrid). This emphasizes a clean separation of concerns and efficient data management.

---

## Technical & Quality Expectations

- **Testing is Paramount:** **Every component and significant piece of logic should be accompanied by robust tests.** Demonstrate your commitment to code quality and reliability through comprehensive unit, integration, or snapshot tests, as appropriate.
- **Styling Freedom:** You have **complete freedom in choosing your styling approach and visual aesthetic.** Whether you prefer CSS Modules, styled-components, Tailwind CSS, or a UI library's built-in styling, we encourage you to showcase your creativity and attention to detail to make the application as appealing and user-friendly as possible.
- **Technology Choice:** You are free to choose your preferred technologies (e.g., React, Vue, Angular for the frontend; a specific state management library; a particular testing framework). We're interested in your ability to make informed decisions and implement solutions effectively.

---

## What We're Looking For

We're not just looking for a working application, but also:

- Your **problem-solving process** and how you approach complex requirements.
- The **elegance and maintainability of your code**.
- Your understanding of **data flow and state management patterns**.
- Your ability to build a **responsive and intuitive user experience**.
- Your dedication to **quality through testing**.

---

Good luck, and we look forward to seeing your solution!

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
