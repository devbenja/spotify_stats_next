import "./globals.css";
import { NavBar } from "../components/NavBar";

export const metadata = {
  title: "Spotify Stats",
  description: "by devbenja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
