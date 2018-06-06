import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { fetchAllPokemon } from './util/api_util';
import { fetchOnePokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon, requestOnePokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.fetchOnePokemon = fetchOnePokemon;
  window.requestOnePokemon = requestOnePokemon;
  ReactDOM.render(<Root store={store} />, root);
});
