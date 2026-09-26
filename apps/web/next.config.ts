import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Минимальный образ для Docker: только нужные файлы и зависимости в .next/standalone
  output: "standalone",
  // Локальная проверка идёт через GitHub Codespaces — сайт открывается по адресу
  // вида *.app.github.dev, а не localhost, иначе Next.js блокирует формы/кнопки
  // (Server Actions) как потенциальную CSRF-атаку с чужого домена.
  allowedDevOrigins: ["*.app.github.dev"],
  experimental: {
    serverActions: {
      allowedOrigins: ["*.app.github.dev"],
    },
  },
};

export default nextConfig;
