import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";   // ✅ Import Home
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Internships from "./pages/Internships";
import Referrals from "./pages/Referrals";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />  {/* ✅ Now works */}

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute roles={["student", "employee", "admin"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/internships"
            element={
              <ProtectedRoute roles={["student", "employee"]}>
                <Internships />
              </ProtectedRoute>
            }
          />

          <Route
            path="/referrals"
            element={
              <ProtectedRoute roles={["student"]}>
                <Referrals />
              </ProtectedRoute>
            }
          />

          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
