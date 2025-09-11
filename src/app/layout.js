import { Poppins } from "next/font/google";

import "./globals.css";
import Script from "next/script";
import RootComponent from "./RootComponents";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// export const metadata = {
//   title: {
//     default: "iX Booking - One Click, Endless Adventures",
//     template: "%s | iX Booking"
//   },
//   description: "Unleash unforgettable experiences with iX Booking! Explore exclusive events, snag premium venues, and secure tickets in a flash.",
//   keywords: ["event booking", "venue booking", "ticket management", "event planning"],
//   authors: [{ name: "iX Booking Team" }],
//   robots: "index, follow",
  
//   openGraph: {
//     title: "iX Booking - One Click, Endless Adventures",
//     description: "Discover and book events, venues, and more with iX Booking",
//     url: "https://ixbooking.in/",
//     siteName: "iX Booking",
//     images: [
//       {
//         url: "https://ixbooking.in/og-image.jpg",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "iX Booking - One Click, Endless Adventures",
//     description: "Book events and venues effortlessly with iX Booking",
//     images: ["https://ixbooking.in/twitter-image.jpg"],
//   },

//   icons: {
//     icon: [
//       { url: "/favicon-32x32.png", sizes: "32x32" },
//       { url: "/favicon-16x16.png", sizes: "16x16" },
//       { url: "/favicon-96x96.png", sizes: "96x96" },
//     ],
//     apple: [
//       { url: "/apple-touch-icon.png", sizes: "180x180" },
//     ],
//   },
  


//   alternates: {
//     canonical: "https://ixbooking.in/",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className="antialiased bg-white text-gray-700 dark:bg-gray-900 dark:text-white scroll-smooth font-uni ">
  
          <RootComponent>{children}</RootComponent>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-ZY4WYE56D6"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZY4WYE56D6');
            `}
          </Script>
  
      </body>
    </html>
  );
}