import { types } from "../types/types";

export const startLogin = (email, passowrd) => {
  return async (dispatch) => {
    // se autentica con el backend, y si todo va bien...

    dispatch( login({ uid: 'fakeUid', name: 'mauro' }) );
  }
}

export const login = ( user) => {
  return {
    type: types.authLogin,
    payload: user
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    // renueva tokens y demas...
    
    dispatch( login({ uid: 'fakeUid', name: 'mauro' }) )
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    // limpiar todos los estados y despues hacer el logout...
    
    dispatch( logout() );
  }
}

const logout = () => ({
  type: types.authLogout
})