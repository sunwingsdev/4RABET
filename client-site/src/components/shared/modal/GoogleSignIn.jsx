import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";
import { useAddUserMutation } from "../../../redux/features/allApis/usersApi/usersApi";
import { useToasts } from "react-toast-notifications";

const GoogleSignIn = ({ closeRegistrationModal }) => {
  const { googleSignIn } = useContext(AuthContext);
  const [addUser] = useAddUserMutation();
  const { addToast } = useToasts();

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await googleSignIn();
      const user = userCredential.user;

      // Save user data to MongoDB
      const userData = {
        email: user.email,
        name: user.displayName || "Not Set Yet",
        photoURL: user.photoURL,
      };

      const response = await addUser(userData).unwrap();
      console.log(response);

      addToast("Registration successful!", {
        appearance: "success",
        autoDismiss: true,
      });

      closeRegistrationModal();
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      addToast("Registration failed. Please try again.", {
        appearance: "error",
        autoDismiss: true,
      });
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
