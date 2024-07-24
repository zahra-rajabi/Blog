import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Layout from "./layout/Layout";
import BlogPage from "./components/blogs/BlogPage";
import AuthorPage from "./components/Authors/AuthorPage";
import OnlyBlogs from "./components/blogs/OnlyBlogs";
import OnlyAuthors from "./components/Authors/OnlyAuthors";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/blogs" element={<OnlyBlogs />} />
        <Route path="/authors" element={<OnlyAuthors />} />
      </Routes>
    </Layout>
  );
}

export default App;
