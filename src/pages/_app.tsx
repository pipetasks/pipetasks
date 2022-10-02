// Types
import type { AppProps } from 'next/app';

// Global
import GlobalStyle from '../assets/styles/global';

// COntext
import AuthenticationProvider from "../context/AuthContext"
import { ThemeContextProvider } from '../context/themeContext';

// Redux
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthenticationProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </AuthenticationProvider>
      </ThemeContextProvider>
    </Provider>
  );
}

export default MyApp;
