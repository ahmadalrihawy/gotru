import Nav from "@components/navBar/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "GoTru",
  description: "Real Agency With Its Super Digital",
};

function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
          <Nav />
          {children}
      </body>
    </html>
  );
}

export default RootLayout;
