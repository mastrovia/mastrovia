import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import ContactPage from "./pages/Contact";
import CaseStudyPage from "./pages/CaseStudy";
import { ThemeProvider } from "./components/theme-provider";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "case-study/:id",
        element: <CaseStudyPage />,
      },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="mastrovia-theme">
        <RouterProvider router={router} />
        <Toaster position="top-center" richColors />
      </ThemeProvider>
    </HelmetProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
