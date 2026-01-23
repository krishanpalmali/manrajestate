import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess, signInFailure } from "../redux/user/userSlice";

export const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const user = {
        username: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (!res.ok) {
        dispatch(signInFailure(data.message || "Google Sign In failed"));
        return;
      }

      dispatch(signInSuccess(data.user));
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(signInFailure("Could not sign in with Google"));
      alert("Google Sign In Failed");
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
    >
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        alt="Google"
        className="w-5 h-5"
      />
      <span className="text-sm font-medium text-gray-700">
        Continue with Google
      </span>
    </button>
  );
};
