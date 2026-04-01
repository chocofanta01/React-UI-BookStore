
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Error />
  },
  {
    path: "/books",
    element: <Layout><div>도서목록</div></Layout>
  },
  {
    path: "/signup",
    element: <Layout><Signup /></Layout>
  }
]);


function App() {

  // const [themeName, setThemeName] = useState<ThemeName>("light");
  // themeContext에 설정해 놓은 값 가져옴 light
  // const {themeName, setThemeName} = useContext(ThemeContext);

  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher />
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
