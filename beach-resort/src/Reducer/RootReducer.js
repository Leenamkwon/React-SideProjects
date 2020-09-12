const RoomReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return { ...state, rooms: action.rooms };
    case 'FEATURE_ROOM':
      return { ...state, featuredRooms: action.featuredRooms };
    case 'LOADING':
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export default RoomReducer;
