import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import { useGetUserByEmailQuery } from "../redux/features/allApis/usersApi/usersApi";

const AdminRoute = ({ children }) => {
  const { user, loading, setIsModalOpen } = useContext(AuthContext);
  const { data: singleUser } = useGetUserByEmailQuery(user?.email);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user && singleUser && singleUser?.role === "admin") {
    return children;
  }
  setIsModalOpen(true);
  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
