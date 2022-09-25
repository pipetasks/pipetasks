import { useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { dark, light } from '../assets/styles/theme';
import { DefaultTheme } from 'styled-components';

function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(() => {
    // const cookies = parseCookies();

    // console.log(JSON.parse(cookies.theme));

    // try {
    //   if (cookies.theme) {
    //     return JSON.parse(cookies.theme);
    //   } else {
    //     return initialState;
    //   }
    // } catch (err) {
    //   console.log(err);
    // }

    // if (cookies.theme) {
    //   return JSON.parse(cookies.theme);
    // } else {
    //   return initialState;
    // }

    // if (cookies.theme === initialState.name) {
    //   return initialState;
    // } else {
    //   if (cookies.theme === 'dark') {
    //     return dark;
    //   } else {
    //     return light;
    //   }
    // }

    // if (cookies.theme === 'light') {
    //   return light;
    // } else {
    //   return dark;
    // }

    // if (!cookies.theme) {
    //   return initialState;
    // } else {
    //   if (cookies.theme === 'light') {
    //     return light;
    //   } else {
    //     return dark;
    //   }
    // }

    // if (!cookies.theme) {
    //   return initialState;
    // } else {
    //   if (cookies.theme === 'dark') {
    //     return dark;
    //   }

    //   if (cookies.theme === 'light') {
    //     return light;
    //   }
    // }

    return initialState;
  });

  // useEffect(() => {
  //   setCookie(null, key, JSON.stringify(state), {
  //     maxAge: 30 * 24 * 60 * 60,
  //     path: '/',
  //   });
  // }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
