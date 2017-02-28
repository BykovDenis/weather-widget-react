/**
 * Created by bykovdenis on 28.02.17.
 */
const initialState = [
  'clouds',
  'sun clear'
];

export default function weather(state = initialState, action = {}) {
  return {...state, action};
}
