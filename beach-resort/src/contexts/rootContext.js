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
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    psts: false,
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

  const handleChange = (e) => {
    const target = e.target;
    const value = e.type === 'checkbox' ? target.checked : target.value;
    dispatch({ type: 'TYPE_CHANGE', changeType: value });
  };

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));

    dispatch({ type: 'INIT', rooms });
    dispatch({ type: 'SORTED_ROOM', sortedRooms: rooms });
    dispatch({ type: 'FEATURE_ROOM', featuredRooms });
    dispatch({ type: 'LOADING', loading: false });
    dispatch({ type: 'FILTERING', maxPrice, maxSize });
  }, [formatData]);

  return (
    <RoomContext.Provider value={{ ...data, getRoom, handleChange }}>
      {children}
    </RoomContext.Provider>
  );
};

export { RootContext, RoomContext };
