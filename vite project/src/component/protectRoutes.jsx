import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ adminOnly = false }) => {
  const { currentUser } = useSelector((state) => state.user);

  // Admin routes ke liye
  if (adminOnly) {
    if (!currentUser) {
      return <Navigate to="/admin/login" replace />;
    }

    if (currentUser.role !== "admin") {
      return <Navigate to="/admin/login" replace />;
    }
  } 
  // Normal protected routes ke liye
  else {
    if (!currentUser) {
      return <Navigate to="/sign-in" replace />;
    }
  }

  return <Outlet />;
};

export default PrivateRoute;



