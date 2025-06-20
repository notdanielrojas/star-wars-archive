# Star Wars Archive

A responsive React application showcasing the vast universe of Star Wars. Explore films, species, characters, planets, starships, and vehicles from the iconic saga — all in one place.

---

## Features

- Responsive design optimized for desktop and mobile devices
- Explore detailed lists of:
  - Films (canonical saga)
  - Species
  - People
  - Planets
  - Starships
  - Vehicles
- Pagination for easy navigation through large datasets
- Clean and modern UI with Star Wars-themed colors and styling
- Smooth loading spinner while fetching data

---

## Technologies

- React with TypeScript
- React Router for client-side routing
- Tailwind CSS for styling and responsiveness
- Custom API service fetching data from [SWAPI](https://swapi.dev/) or your own API
- Modern ES6+ JavaScript features

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn package manager

### Installation

1. Clone the repo

   ```bash
   git clone https://github.com/yourusername/star-wars-archive.git
   cd star-wars-archive

   ```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm start
# or
yarn start
```
4. Open http://localhost:3000 in your browser.

## Project Structure

```bash
src/
├── components/      # Reusable UI components (Card, Spinner, Nav, etc.)
├── pages/           # Page components (Films, Species, People, etc.)
├── services/        # API fetching functions
├── app.css          # Global styles (Tailwind base and custom styles)
├── index.tsx        # React app entry point
└── ...
```

May the Force be with you! ✨