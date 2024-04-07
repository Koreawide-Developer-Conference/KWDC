"use client";

import React from "react";

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const runClarityScript = () => {
  const c = window;
  const l = document;
  const a = "clarity";
  const r = "script";
  const i = "lsszg76m29";
  const t = l.createElement(r);
  t.async = Boolean(1);
  t.src = "https://www.clarity.ms/tag/" + i;
  const y = l.getElementsByTagName(r)[0];
  if (y && y.parentNode) {
    y.parentNode.insertBefore(t, y);
  }
};

export const Analytics = () => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      runClarityScript();
    }
  }, []);
  return <></>;
};
