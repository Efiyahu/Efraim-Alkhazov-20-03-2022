const initialState = {
  location: [],
  favorites: [],
  loading: false,
  currentCity: [],
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_CITY_PENDING':
      return {
        ...state,
        location: [],
        loading: true,
        error: null,
      };
    case 'SEARCH_CITY_SUCCESS':
      return {
        ...state,
        location: action.payload,
        loading: false,
        error: null,
      };
    case 'SEARCH_CITY_ERROR':
      return {
        ...state,
        location: [],
        loading: false,
        error: action.payload,
      };
    case 'SELECT_CITY_PENDING':
      return {
        ...state,
        loading: true,
        currentCity: [],
        error: null,
      };
    case 'SELECT_CITY_SUCCESS':
      return {
        ...state,
        loading: false,
        currentCity: action.payload,
      };
    case 'SELECT_CITY_ERROR':
      return {
        ...state,
        loading: false,
        currentCity: [],
        error: action.payload,
      };

    case 'DISPLAY_FIVE_DAY_PENDING':
      return {
        ...state,
        loading: true,
        fiveDayInfo: [],
        error: null,
      };
    case 'DISPLAY_FIVE_DAY_SUCCESS':
      return {
        ...state,
        loading: false,
        fiveDayInfo: action.payload,
        error: null,
      };
    case 'DISPLAY_FIVE_DAY_ERROR':
      return {
        ...state,
        loading: false,
        fiveDayInfo: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default weatherReducer;
