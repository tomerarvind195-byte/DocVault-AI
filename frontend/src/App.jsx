import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import UploadDocument from "./pages/UploadDocument";
import Opportunities from "./pages/Opportunities";
import Profile from "./pages/Profile";

// Layout for public pages
function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

// Layout for authenticated pages
function DashboardLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}

        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* ================ PROTECTED ROUTES ================ */}

        <Route element={<ProtectedRoute />}>

          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />

          <Route
            path="/documents"
            element={
              <DashboardLayout>
                <Documents />
              </DashboardLayout>
            }
          />

          <Route
            path="/upload"
            element={
              <DashboardLayout>
                <UploadDocument />
              </DashboardLayout>
            }
          />

          <Route
            path="/opportunities"
            element={
              <DashboardLayout>
                <Opportunities />
              </DashboardLayout>
            }
          />

          <Route
            path="/profile"
            element={
              <DashboardLayout>
                <Profile />
              </DashboardLayout>
            }
          />

        </Route>


        {/* ================= 404 ROUTE ================= */}

        <Route
          path="*"
          element={
            <PublicLayout>
              <div className="not-found">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                  The page you are looking for does not exist.
                </p>
              </div>
            </PublicLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;