import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Importez votre composant Navbar
import Footer from "./components/Footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAP Consulting",
  description: "Je suis Odile Dewas, Expert Basis et Solution Manager, offrant une expertise avancée en gestion des systèmes SAP chez Décathlon Croix. Découvrez mes compétences en maintenance SAP, formation des équipes et gestion des bases de données.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body >
       
          <Navbar /> 
          {children}
          <Footer/>
        
      </body>
    </html>
  );
}