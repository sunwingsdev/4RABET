import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";

const GoogleSignIn = ({ closeRegistrationModal }) => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await googleSignIn();
      const user = userCredential.user;

      // Save user data to MongoDB
      const userData = {
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
      };

      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();
      console.log(data);

      // Close modal after successful registration
      closeRegistrationModal();
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
    }
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex items-center gap-20 mt-3 text-sm font-bold bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-3xl duration-300"
    >
      <div className="text-start p-2 bg-white rounded-full">
        <FcGoogle className="text-xl" />
      </div>
      <p className="">Continue with Google</p>
    </button>
  );
};

export default GoogleSignIn;
