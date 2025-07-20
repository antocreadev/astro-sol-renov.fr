"use client";

import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import ManagePostsSection from "./ManagePostsSection";

export default function ManagePostsApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Vérifier si l'utilisateur était déjà connecté (sessionStorage)
    const authStatus = sessionStorage.getItem("managePostsAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem("managePostsAuth", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("managePostsAuth");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-green-100">
      <ManagePostsSection onLogout={handleLogout} />
    </main>
  );
}
