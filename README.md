# Budgeting Web Application

This is a comprehensive budgeting web application built using Next.js, React, Tailwind CSS, Supabase for the database and authentication, Formik for form handling, and Shadcn for the UI components. The application helps users manage their finances by allowing them to allocate their salary into different budget categories, track expenses, set savings goals, and visualize their spending patterns.

## Features

- **Budget Allocation**: Users can input their salary and allocate it into three main budget categories: savings, expense-wants, and expense-needs.
- **Expense Tracking**: Users can view the amount spent over the allocated budget and see a detailed list of purchase history.
- **Savings Goals**: Users can set savings goals for future purchases and track their progress.
- **Data Visualization**: Visualizes monthly spending and provides a pie chart detailing spending per budget type.
- **Export to Excel**: Users can export their expense data to an Excel sheet.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and generating static websites.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Supabase**: An open-source Firebase alternative for the database and authentication.
- **Formik**: A library for building and managing forms in React.
- **Yup**: A JavaScript schema builder for value parsing and validation.
- **Shadcn**: A component library for building UI components.
- **SheetJS**: A library for reading and writing Excel files.

## Project Structure

The project has the following main components and pages:

- **components/BudgetForm.tsx**: Form for allocating the budget.
- **components/SalaryForm.tsx**: Form for entering the salary.
- **components/Dashboard.tsx**: The main dashboard page that includes the BudgetForm and SalaryForm.
- **components/Layout.tsx**: Layout component for consistent styling and structure across pages.
- **pages/index.tsx**: The home page that displays the dashboard if the user is authenticated, otherwise shows the authentication page.
- **pages/savings-goals.tsx**: Page for managing savings goals.
- **pages/data-viz.tsx**: Page for data visualization of spending patterns.
- **lib/exportToExcel.ts**: Utility for exporting data to Excel using SheetJS.

Other NPM Commands:

- npm run dev
- npm run build

## Project Notes

- [How to use sessionStorage in React](https://contactmentor.com/session-storage-react-js/)
- [sessionStorage Methods](https://www.w3schools.com/jsref/prop_win_sessionstorage.asp)
