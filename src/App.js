import React, { useEffect, useRef } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import { useAuth } from "./AuthProvider"; // Import useAuth

function App() {
  const [, dispatch] = useAuth(); // Get dispatch function from useAuth
  const effectRunCount = useRef(-1); // useRef to keep track of the number of times useEffect is called

  useEffect(() => {
    effectRunCount.current += 1; // Increment the counter
    console.log(`useEffect run count: ${effectRunCount.current}`);

    const handleRedirect = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const state = urlParams.get("state");
      const error = urlParams.get("error");
      const storedState = localStorage.getItem("oauth_state");

      console.log("Outside: Authorization code >>> ", code);
      console.log("Outside: State parameter >>> ", state);
      console.log("Outside: Stored State >>> ", storedState);
      console.log("Outside: Authorization error >>> ", error);

      if (error) {
        console.log("Authorization error >>> ", error);
        console.log("State parameter >>> ", state);
        return;
      }

      if (code && state) {
        console.log("Authorization code >>> ", code);
        console.log("State parameter >>> ", state);

        const codeVerifier = localStorage.getItem("code_verifier");

        try {
          const response = await fetch(
            "https://accounts.spotify.com/api/token",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams({
                client_id: "43413a706896435bb9668fce57dfcada",
                grant_type: "authorization_code",
                code,
                redirect_uri: "http://localhost:3000",
                code_verifier: codeVerifier,
              }),
            }
          );

          const data = await response.json();

          if (data.error) {
            console.error("Error fetching access token >>> ", data.error);
            return;
          }

          localStorage.setItem("access_token", data.access_token);
          // Dispatch to set the access token
          dispatch({ type: "SET_ACCESS_TOKEN", payload: data.access_token });

          // Clean up URL to remove the parameters
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
        } catch (error) {
          console.error("Error fetching access token >>> ", error);
        }
      } else {
        if (effectRunCount.current === 0) {
          console.log("Initial load");
        } else {
          console.log("Unexpected URL parameters");
        }
      }
    };

    handleRedirect();
  }, [dispatch]); // Add dispatch to dependency array

  return (
    <div className="main-container">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
