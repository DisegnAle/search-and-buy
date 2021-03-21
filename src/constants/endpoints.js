import { firebaseConfig } from "@/firebase";
export const endpoints = {
  LOGIN: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`,
};
