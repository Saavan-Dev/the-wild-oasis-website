// font style related package import
import { Josefin_Sans } from "next/font/google";

//imported style font configuration
const jsosefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

// we can export metadata via its variable, Metadata are those related to the HTML elements which comes under "header" section of the html content
// following "layout.js" related default metadata (title or description) related to the layout will affect to the all path route pages, if not specified their own title or metadata
export const metadata = {
  title: {
    template: "%s / The Wild Oasis", // for individual route pages as '%s' will specify metadata title given on individual pages
    default: "Welcome / The Wild Oasis", // this is the default title..
  },
  // following description is given for Search engine optimization or SEO related
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jsosefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        {/* children prop will render the current page , as if user when navigates to a specific page */}
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
