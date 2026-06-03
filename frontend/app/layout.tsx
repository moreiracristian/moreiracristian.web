import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Cristian Moreira | Analista de Datos para PyMEs",
  description:
    "Ayudo a PyMEs a tomar mejores decisiones con sus propios datos. Precios, KPIs, dashboards y automatización en lenguaje de negocio.",
  keywords: "analista de datos, business intelligence, PyME, Power BI, Excel avanzado, Argentina",
  icons: {
    icon: [
      { url: "/icon-blue.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-light.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
  openGraph: {
    title: "Cristian Moreira | Analista de Datos para PyMEs",
    description: "Tus datos ya existen. Solo necesitás que alguien los lea.",
    url: "https://moreiracristian.com.ar",
    siteName: "Cristian Moreira",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col w-full">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
