import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  count: 0,
  currentCard: null,
  errorMessage: "Systems running OK",
  user: {
    username: '',
    password: '',
  },
  pack: []
});

export const countUp = () => {
  setGlobalState('count', (v) => v + 1);
};

export const countDown = () => {
  setGlobalState('count', (v) => v - 1);
};

export const setCurrentCard = card => {
  setGlobalState('currentCard', card);
};

export const setUsername = (username) => {
    setGlobalState('user', (v) => ({ ...v, username }));
};

export const setPassword = (password) => {
    setGlobalState('user', (v) => ({ ...v, password }));
};

export const setPack = (pack) => {
    setGlobalState('pack', () => ([ ...pack ]));
};


export { useGlobalState };
