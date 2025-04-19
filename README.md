
# Himalayan Flavor Fusion - Nepali Restaurant Website

A modern, responsive website for a Nepali restaurant with a dynamic menu system and admin interface.

## Features

- Modern, responsive design with Tailwind CSS
- Dynamic menu with categories and detailed food items
- Admin interface for menu management
- Express backend API for serving menu data
- Mobile-friendly design with hamburger menu

## Stack

- **Frontend**: React.js, Tailwind CSS, shadcn/ui components
- **Backend**: Node.js, Express
- **Data Storage**: JSON file (easily replaceable with MongoDB)

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd himalayan-flavor-fusion
```

2. Install frontend dependencies:

```bash
npm install
```

3. Install backend dependencies:

```bash
cd src/server
npm install
cd ../..
```

### Running the Application

1. Start the backend server:

```bash
cd src/server
npm run dev
```

This will start the server on port 5000.

2. In a new terminal, start the frontend development server:

```bash
npm run dev
```

This will start the React application on port 8080.

3. Access the application:
   - Frontend: [http://localhost:8080](http://localhost:8080)
   - Admin interface: [http://localhost:8080/admin](http://localhost:8080/admin)
   - API: [http://localhost:5000/api/categories](http://localhost:5000/api/categories)

## Project Structure

- `src/` - Frontend React application
  - `components/` - Reusable UI components
  - `pages/` - Main page components
  - `services/` - API service functions
  - `types/` - TypeScript type definitions
- `src/server/` - Backend Express API
  - `data/` - JSON data storage (created on first run)
  - `index.js` - Express server setup

## Frontend Routes

- `/` - Homepage with featured menu items
- `/menu` - Full menu with category filtering
- `/catering` - Catering information
- `/locations` - Restaurant locations
- `/contact` - Contact form and information
- `/admin` - Admin interface for menu management

## API Endpoints

- `GET /api/categories` - Get all menu categories
- `GET /api/items` - Get all menu items
- `GET /api/categories/:categoryId/items` - Get items by category
- `POST /api/items` - Add a new menu item
- `PUT /api/items/:itemId` - Update a menu item
- `DELETE /api/items/:itemId` - Delete a menu item

## Future Enhancements

- User authentication for admin access
- Image upload functionality
- Online ordering system
- Reservation system
- Customer reviews
- Integration with MongoDB or other database
