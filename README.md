# Multi-Step React Application

This is a React application that demonstrates a multi-step form with API integration, React Router navigation, and local storage persistence.

## Features

- Dynamic dropdown populated from an API
- User details display
- Form validation
- Local storage persistence
- Loading indicators
- React Router navigation

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:git clone  https://github.com/msmuhsin/multi-step-user.git
2. cd my-app
3. Install dependencies:npm install
4. Start the development server:npm run dev
5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Page components for each step of the flow
- `App.js` - Main component with routing configuration

## Dependencies

- React
- React Router DOM
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com) for mock data

## Implementation Approach

### Application Flow

The application follows a four-page workflow:

1. **User Selection Page**: 
- Fetches users from the API
- Displays them in a dropdown
- Persists selection to localStorage
- Navigates to details page on submission

2. **User Details Page**:
- Fetches detailed information for the selected user
- Displays user name, email, address, and company
- Provides navigation buttons

3. **Note Entry Page**:
- Displays the selected user's details
- Allows the user to enter a custom note
- Validates form input
- Stores the note in localStorage

4. **Summary Page**:
- Displays all collected information
- Provides options to edit or start over

### State Management

- Used React's `useState` and `useEffect` hooks for managing component state
- Leveraged localStorage for persisting data between page navigations
- Implemented form validation for required fields

### API Integration

- Fetched user data from JSONPlaceholder API
- Implemented loading states during API requests
- Added error handling for failed requests

### Navigation

- Used React Router for handling page navigation
- Maintained state persistence across routes
- Implemented back/forward navigation with state preservation

## Challenges Faced

1. **Data Persistence**: 
- Ensuring data persists between page navigations required careful implementation of localStorage
- Had to handle edge cases like browser refreshes and navigation using browser back/forward buttons

2. **API Error Handling**:
- Implemented robust error handling for API requests
- Added fallback UI for failed requests

3. **Form Validation**:
- Implemented client-side validation for the note input
- Provided clear feedback to users for validation errors

4. **Component Reusability**:
- Designed components to be reusable across different pages
- Balanced between reusability and page-specific functionality

## Live Demo

https://www.youtube.com/watch?v=7tHGn9Ft_FA

## Future Improvements

- Add unit and integration tests
- Implement more robust form validation
- Add animations for page transitions
- Enhance the UI with a more polished design
- Add user authentication
