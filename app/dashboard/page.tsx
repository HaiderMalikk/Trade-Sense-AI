"use client";
import useUserData from "../hooks/GetUserData"; // user data hook
import { useUser } from "@clerk/nextjs"; // Import both useUser for clerk user management
import "./styles/home-page-styles.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for useRouter

export default function Dashboard() {
  const { userData, loading } = useUserData(); // get user data
  const { user } = useUser(); // Use Clerk hook for user management
  const router = useRouter(); // Access the router for navigation

  // If user is not logged in, show a message and redirect after 1 second
  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        router.push("/login");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <h1 className="text-white">
          Please log in to view this page. Redirecting you to the login page...
        </h1>
      </div>
    );
  }
  // Show loading screen while user data is loading
  if (loading || !userData) {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        {/* Spinner */}
        <div className="spinner m-8">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 className="text-white">Loading...</h1>
      </div>
    );
  }
  // Show error screen if an error occurred
  if (userData.message.startsWith("Error")) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-black">
        {/* Error message Error, then error then recommendation */}
        <h1 className="text-4xl font-semibold text-red-600">Error</h1>
        {/* error message */}
        <p className="mt-4 text-lg text-white">{userData.message}</p>
        {/* recommendation */}
        <p className="mt-4 text-lg text-gray-300">
          Please try refreshing the page or trying again later. If the problem
          persists, please contact us using the contact info at the bottom of
          the page.
        </p>
      </div>
    );
  }

  //  * after user is loaded and no error load other apis no need for checks
  console.log("here");

  return (
    <div className="min-h-screen bg-gradient-to-b from-customColor6 to-customColor1 p-6">
      <p className="pb-8 text-center text-7xl font-semibold text-customColor2">
        Welcome
      </p>
      <div className="mx-auto max-w-4xl rounded-lg bg-customColor2 p-12 text-gray-700 shadow-md">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="mt-4 text-lg">
          Welcome, {userData.firstName} {userData.lastName}!
        </p>
      </div>
    </div>
  );
}
