import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import { useGetUserByEmailQuery } from "../redux/features/allApis/usersApi/usersApi";

const AdminRoute = ({ children }) => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const { data: singleUser, isLoading: userLoading } = useGetUserByEmailQuery(
    user?.email,
    {
      skip: !user?.email,
    }
  );
  const location = useLocation();

  if (authLoading || userLoading) {
    return <div>Loading...</div>;
  }

  if (user && singleUser?.role === "admin") {
    return children;
  }

  if (!authLoading && !userLoading) {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return null;
};

export default AdminRoute;
