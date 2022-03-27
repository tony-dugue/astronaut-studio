import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Theme";

function App() {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <main className="App">
          App File
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;

