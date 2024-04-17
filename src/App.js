import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import { Layout } from "./layout/Layout";
import "./styles/App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/news/:id" element={<NewsPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
