import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import { ThemeProvider } from "./components/theme-provider";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

// Lazy load pages for code splitting
const HomePage = lazy(() => import("./pages/Home"));
const ContactPage = lazy(() => import("./pages/Contact"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudy"));
const CostEstimatePage = lazy(() => import("./pages/CostEstimate"));

// Minimal loading fallback
const PageLoader = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "case-study/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            <CaseStudyPage />
          </Suspense>
        ),
      },
      {
        path: "cost-estimate",
        element: (
          <Suspense fallback={<PageLoader />}>
            <CostEstimatePage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="mastrovia-theme">
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
