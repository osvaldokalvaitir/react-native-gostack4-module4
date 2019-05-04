import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Action Creators
 */
const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null,
});

// O código acima substitui esses códigos embaixo:

// Types: { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE }

// Creators:

/**
 * loadRequest: () => ({ type: 'LOAD_REQUEST' })
 * loadSuccess: (data) => ({ type: 'LOAD_SUCCESS', data })
 * loadFailure: () => ({ type: 'LOAD_FAILURE' })
 */

export const PodcastsTypes = Types;
export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = Immutable({
  data: [],
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data }),
});

// O código acima substitui esses códigos embaixo:

/**
 * function reducer(state = INITIAL_STATE, action) {
 *   switch (action.type) {
 *     case 'LOAD_REQUEST':
 *       return { ...state, loading: true };
 *   }
 * }
 */
