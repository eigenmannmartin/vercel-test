// Following rules because vuex has self referencing params
/* eslint no-shadow: ["error", { "allow": ["state", "getters"] }] */
/* eslint-disable no-param-reassign */

// We get the typed-vuex package from nuxt-typed-vuex
// eslint-disable-next-line import/no-extraneous-dependencies
import { getAccessorType } from 'typed-vuex';
import { actionTree, getterTree, mutationTree } from 'nuxt-typed-vuex';


export const state = () => ({
});

export const getters = getterTree(state, {
});


export const mutations = mutationTree(state, {
});

export const actions = actionTree(
  { state, getters, mutations },
  { }
);

// eslint-disable-next-line import/prefer-default-export
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
});
