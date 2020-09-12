const RoomReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return { ...state, rooms: action.rooms };
    case 'FEATURE_ROOM':
      return { ...state, featuredRooms: action.featuredRooms };
    case 'SORTED_ROOM':
      return { ...state, sortedRooms: action.sortedRooms };
    case 'LOADING':
      return { ...state, loading: action.loading };
    case 'FILTERING':
      return { ...state, maxPrice: action.maxPrice, maxSize: action.maxSize };
    case 'TYPE_CHANGE':
      return { ...state, type: action.changeType };
    default:
      return state;
  }
};

export default RoomReducer;
