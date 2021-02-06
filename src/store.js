import { createStore } from 'redux';

var defaultState = { formValue: 'highest' };

function formValueReducer(state = defaultState, action) {
  const toUpper = action.type.toUpperCase();
  switch (toUpper) {
    case 'HIGHEST':
      return { ...state, formValue: 'highest' };
    case 'LOWEST':
      return { ...state, formValue: 'lowest' };
    case 'BEST':
      return { ...state, formValue: 'best' };
    case 'WORST':
      return { ...state, formValue: 'worst' };
    case 'ALPHABETICALA':
      return { ...state, formValue: 'alphabeticalA' };
    case 'ALPHABETICALZ':
      return { ...state, formValue: 'alphabeticalZ' };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(
  formValueReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
