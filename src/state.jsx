import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  count: 0,
  currentCard: null,
  message: "",
  status: "Systems OK",
  user: {
    username: '',
    password: '',
  },
  pack: null,
  navigation: [
    { link: "/", name: "Home" },
    { link: "/dashboard", name: "Dashboard" },
    { link: "/collection", name: "Collection" },
    { link: "/random-pack", name: "RPCD" },
  ]
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

export const setMessage = (message) => {
    setGlobalState('message', message);
};

export const setStatus = (status) => {
    setGlobalState('status', status);
};

export const setPack = (pack) => {
    setGlobalState('pack', () => ([ ...pack ]));
};


export { useGlobalState };
