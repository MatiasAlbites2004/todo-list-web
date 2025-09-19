import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import ToDo from "./pages/ToDo";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const isAuthenticated = false; 

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />

        <Route
          path="/to-do"
          element={isAuthenticated ? <ToDo /> : <Navigate to="/auth/login" />}
        />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
