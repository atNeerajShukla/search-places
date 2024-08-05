# React + Vite

# Search Places

This project allows users to search for places and view details such as place name and country.

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation

1. Clone the repository
    ```bash
    git clone <repository_url>
    cd search-places
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Create a `.env` file and add your API URL and key
    ```env
    REACT_APP_API_URL=https://wft-geo-db.p.rapidapi.com
    REACT_APP_API_KEY=your_api_key_here
    ```

4. Start the application
    ```bash
    npm start
    ```

### Usage
- Enter a place name in the search box and press Enter to search.
- Use the pagination controls to navigate through results.
- Use the input box to set the limit of results per request.