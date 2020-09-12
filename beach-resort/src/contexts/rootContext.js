import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from 'react';
import items from '../data';

import RoomReducer from '../Reducer/RootReducer';

const RoomContext = createContext();

const RootContext = ({ children }) => {
  const [data, dispatch] = useReducer(RoomReducer, {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  });

  const formatData = useCallback((items) => {
    let rooms = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((img) => img.fields.file.url);
      return { ...item.fields, id: id, images: images };
    });
    return rooms;
  }, []);

  const getRoom = useCallback(
    (slug) => {
      let tempRooms = [...data.rooms];
      const room = tempRooms.find((room) => room.slug === slug);
      return room;
    },
    [data.rooms]
  );

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((room) => room.featured === true);

    dispatch({ type: 'INIT', rooms });
    dispatch({ type: 'FEATURE_ROOM', featuredRooms });
    dispatch({ type: 'LOADING', loading: false });
  }, [formatData]);

  return (
    <RoomContext.Provider value={{ ...data, getRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export { RootContext, RoomContext };
