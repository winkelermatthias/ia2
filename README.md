# Industrial Asset Mapping (Local)

A fully local industrial asset mapping tool built with React, Tailwind CSS, and Dexie.js. This web application allows users to create, view, update, and delete asset records entirely on their device by leveraging IndexedDB for local storage.

![Asset Mapping Demo](./public/assets/demo-screenshot.png)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Database Logic](#database-logic)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Overview

The Industrial Asset Mapping (Local) project is designed to help you manage industrial asset records with ease. This standalone web application operates entirely in your browser using IndexedDB for data persistence, allowing offline functionality and local data management. It features a modern, responsive design with an industrial aesthetic to suit the needs of industrial environments.

## Features

- **Local Data Persistence:**  
  Utilizes IndexedDB (via Dexie.js) to store asset data offline without the need for a remote server.
- **Asset Management:**  
  Create, view, update, and delete asset records, including asset details, images, IP address, geolocation, and custom extraction fields.
- **Responsive Design:**  
  Built with Tailwind CSS to ensure the application looks great on all devices.
- **Image Upload & Preview:**  
  Drag-and-drop functionality for uploading images, with a preview of the selected image.
- **Automatic Metrics Logging:**  
  Automatically captures and displays the device’s simulated IP address and geolocation information.
- **Clean UI/UX:**  
  Intuitive and user-friendly interface with smooth transitions and a modern industrial theme.

## Demo

To see the project in action, check out the [Demo Video](#) (link to demo if available) or view the screenshots in the `/public/assets/` folder.

## Getting Started

Follow these instructions to get the project running on your local machine.

### Prerequisites

- **Node.js:** Version 14 or later
- **npm:** Version 6 or later (comes with Node.js)  
  *(Alternatively, you can use yarn if preferred.)*

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/industrial-asset-mapping-local.git
   cd industrial-asset-mapping-local
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm start
```

This command starts the application in development mode and opens it in your default browser at [http://localhost:3000](http://localhost:3000).

To create a production build, run:

```bash
npm run build
```

## Project Structure

```
industrial-asset-mapping-local/
├── .gitignore
├── README.md
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── assets/              # Static assets (images, demo screenshots, etc.)
└── src/
    ├── App.js               # Main application component with routing
    ├── index.css            # Global Tailwind CSS styles
    ├── index.js             # React entry point
    ├── components/          # Reusable UI components
    │   ├── AssetCard.jsx
    │   ├── AssetForm.jsx
    │   ├── MetricsLogger.jsx
    │   └── TopologyView.jsx
    ├── pages/               # Page-level components
    │   ├── Home.jsx
    │   ├── CreateAsset.jsx
    │   └── AssetDetails.jsx
    └── services/            # Business logic and data handling
        ├── db.js            # Dexie.js database configuration and CRUD functions
        ├── geolocation.js   # Utility functions for geolocation
        └── ipLogger.js      # Utility functions for IP address simulation
```

## Database Logic

The project leverages Dexie.js for local data storage. The database is initialized in `src/services/db.js` and supports full CRUD operations. This allows asset records to be managed entirely on the client side, ensuring offline functionality.

For example, to fetch all assets:

```js
export const fetchAssets = async () => {
  try {
    return await db.assets.toArray();
  } catch (error) {
    console.error('Error fetching assets:', error);
    return [];
  }
};
```

## Technologies Used

- **React:** For building a dynamic and responsive single-page application.
- **Tailwind CSS:** For a modern, utility-first CSS framework that ensures a responsive design.
- **Dexie.js:** For managing local IndexedDB storage with a simple API.
- **React Router DOM:** For client-side routing.
- **React Dropzone:** For drag-and-drop file uploads.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

Please ensure your code adheres to the existing style and passes all tests before submitting a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, please contact:

- **Name:** Matthias Winkeler
- **Email:** 
- **GitHub:** [@winkelermatthias](https://github.com/winkelermatthias)

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Dexie.js](https://dexie.org/)
- [React Router DOM](https://reactrouter.com/)
- [React Dropzone](https://react-dropzone.js.org/)
```

