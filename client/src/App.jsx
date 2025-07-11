import { BrowserRouter, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function Layout({ children }) {
  const location = useLocation();
  const pathname = location.pathname;

  // Define which components to show based on route
  const isLoginOrRegister = pathname === "/login" || pathname === "/register";
  const isTodoPage = pathname.startsWith("/todos");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - only for Todo pages */}
      {isTodoPage && <Sidebar />}

      <div className="flex-1 flex flex-col">
        {/* Header - for Home and Todo pages, not for Login/Register */}
        {!isLoginOrRegister && <Header />}

        <main className="flex-grow p-4">{children}</main>

        {/* Footer - for Home and Todo pages, not for Login/Register */}
        {!isLoginOrRegister && <Footer />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}
