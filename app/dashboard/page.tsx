/* 
Dashboard page currently handles the following:
- Check if the user is new or returning and update firestore accordingly
- Display a success or error message
- Display a welcome message with the user's first and last name
*/

"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

// Define types for the state variables
interface UserData {
  createdAt?: string;
  message?: string;
}

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const [message, setMessage] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<string | null>(null);

  // Once user from Clerk is loaded and we have a user, then get the user data from Firebase
  useEffect(() => {
    if (isLoaded && user) {
      const checkOrCreateUser = async () => {
        try {
          const response = await fetch("/api/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.primaryEmailAddress?.emailAddress,
            }),
          });

          const data = await response.json();
          if (response.ok) {
            const firstName = user?.firstName || "User";
            const lastName = user?.lastName || "";
            setMessage(
              data.userExists
                ? `User found. Welcome back, ${firstName} ${lastName}!`
                : `New user profile created. Welcome, ${firstName} ${lastName}!`,
            );

            if (data.userExists && data.createdAt) {
              setCreatedAt(new Date(data.createdAt).toLocaleString());
            }
          } else {
            console.error("Error:", data);
            setMessage(`Error: ${data.message}`);
          }

          // Clear message after 5 seconds
          setTimeout(() => setMessage(""), 5000);
        } catch (error) {
          console.error("Error checking or creating user:", error);
          setMessage(
            "An error occurred while finding or creating the user, please try again.",
          );
        }
      };

      checkOrCreateUser();
    }
  }, [isLoaded, user]);

  // Loader state when user is not yet loaded
  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-gray-500">Loading...</div>
      </div>
    );
  }

  // If no user is found
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-red-500">
          No user found. Please log in again.
        </div>
      </div>
    );
  }

  // Extract user name
  const firstName = user?.firstName || "User";
  const lastName = user?.lastName || "";

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-3xl font-semibold text-blue-600">Dashboard</h1>
        <p className="mt-4 text-lg text-gray-700">
          Welcome, {firstName} {lastName}!
        </p>

        {/* Display success or error message */}
        {message && (
          <p
            className={`mt-4 text-lg ${
              message.startsWith("Error") ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* Display account creation date if the user exists */}
        {createdAt && (
          <p className="mt-4 text-lg text-gray-600">
            Account created at: {createdAt}
          </p>
        )}
      </div>
    </div>
  );
}
