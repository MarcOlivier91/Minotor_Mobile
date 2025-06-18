const API_CONFIG = {
    BASE_URL: "http://localhost:8000/",

      // Endpoints spécifiques
ENDPOINTS: {
    LOGIN: 'api/client/connexion ',
    REGISTER: 'api/client/inscription',  
    USERS: 'api/users',
    },

    DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    },
}

export default API_CONFIG;