import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ adminOnly = false }) {
  const { currentUser } = useSelector((state) => state.user);

  console.log("PrivateRoute currentUser:", currentUser);

  if (adminOnly) {
    // Admin login hi nahi hai
    if (!currentUser) {
      return <Navigate to="/admin/login" replace />;
    }

    // Login hai par admin nahi hai
    if (currentUser.role !== "admin") {
      return <Navigate to="/admin/login" replace />;
    }
  } 
  else {
    // Normal protected route
    if (!currentUser) {
      return <Navigate to="/sign-in" replace />;
    }
  }

  return <Outlet />;
}
