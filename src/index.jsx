import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";

// Создаем маршруты
const router = createBrowserRouter([
  {
    path: "/zeitgeist/*", // Используем "/*" для обработки всех путей внутри App
    element: <App />,
  },
], {
  future: {
    v7_startTransition: true, // Включаем новый startTransition
    v7_relativeSplatPath: true, // Включаем новое поведение для Splat-маршрутов
  },
});

// Рендерим приложение
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Измеряем производительность (опционально)
reportWebVitals();