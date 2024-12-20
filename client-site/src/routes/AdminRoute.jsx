// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import { Navigate, useLocation } from "react-router";

// const AdminRoute = ({ children }) => {
//   const { user, loading, setIsModalOpen } = useContext(AuthContext);
//   const [singleUser, setSingleUser] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const fetchUser = async () => {
//       if (user?._id) {
//         try {
//           const res = await fetch(
//             `${import.meta.env.VITE_BASE_API_URL}/api/users/${user._id}`
//           );
//           const data = await res.json();
//           setSingleUser(data);
//         } catch (error) {
//           console.error("Error fetching user:", error);
//         }
//       }
//     };

//     fetchUser();
//   }, [user]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (user && singleUser && singleUser?.role === "admin") {
//     return children;
//   }
//   setIsModalOpen(true);
//   return <Navigate to="/" state={{ from: location }} />;
// };

// export default AdminRoute;
