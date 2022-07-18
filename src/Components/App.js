import Dashboard from "./Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Articles from "./Articles";
import People from "./People";
import Books from "./Books";
import Help from "./Help";
import Article from "./Article";
import NotFound from "./NotFound";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="flex">
    <Dashboard />
    <div className="p-5">
    <Routes>
        <Route exact="true" path="/" element={<Home />}/>
        <Route exact="true" path="/articles" element={<Articles />} />
        <Route path="/people" element={<People />} />
        <Route path="/books" element={<Books />} />
        <Route path="/help" element={<Help />} />
        <Route path="/articles/:slug" element={<Article />} />
        <Route path="*" element={<NotFound />}/>

    </Routes> 
    </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
