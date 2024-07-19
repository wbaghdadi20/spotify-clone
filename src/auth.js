import queryString from "query-string";

const generateRandomString = (length) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = new Uint8Array(length);
  window.crypto.getRandomValues(values);
  return Array.from(values)
    .map((x) => possible.charAt(x % possible.length))
    .join("");
};

const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  const hash = await window.crypto.subtle.digest("SHA-256", data);
  return hash;
};

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

export const generateCodeVerifier = () => {
  return generateRandomString(64);
};

export const generateCodeChallenge = async (codeVerifier) => {
  const hashed = await sha256(codeVerifier);
  return base64encode(hashed);
};

export const getAuthUrl = async () => {
  const clientId = "43413a706896435bb9668fce57dfcada";
  const redirectUri = "http://localhost:3000";
  const scope = "user-read-private user-read-email";

  const codeVerifier = generateCodeVerifier();
  localStorage.setItem("code_verifier", codeVerifier);

  const codeChallenge = await generateCodeChallenge(codeVerifier);

  // Generate a random state string
  const state = generateRandomString(16);
  localStorage.setItem("oauth_state", state);

  const authUrl = queryString.stringifyUrl({
    url: "https://accounts.spotify.com/authorize",
    query: {
      response_type: "code",
      client_id: clientId,
      scope,
      redirect_uri: redirectUri,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
      state, // Include state in the request
    },
  });

  return authUrl;
};
