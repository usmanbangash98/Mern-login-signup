import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">My Website</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to My Website
          </h2>
          <p className="text-gray-700 mb-8">
            This is a simple home page built with React and TailwindCSS.
          </p>
          <p>
            You can visit the{" "}
            <Link to="/Signup">
              <span className="text-blue-700">Registeration Page</span>
            </Link>{" "}
            Or
            <Link to="/Login">
              {" "}
              <span className="text-blue-700">Login Page</span>
            </Link>
          </p>
        </section>
      </main>
      <footer className="bg-white shadow mt-8">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-700">
            © 2024 My Website. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
