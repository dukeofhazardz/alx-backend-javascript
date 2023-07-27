import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const numbers = [19, 20, 34];
  const initRooms = [];

  numbers.forEach((number) => {
    initRooms.push(new ClassRoom(number));
  });
  return initRooms;
}
