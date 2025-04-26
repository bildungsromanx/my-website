'use client';

import { useState, useEffect } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Check if we're on mobile AFTER component mounts
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // run on load

    window.addEventListener('resize', checkScreenSize); // update on resize
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* League Script Font for Homepage h1 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=League+Script&display=swap" rel="stylesheet" />

        {/* Courier Prime for nav links */}
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet" />

        {/* Cobol Medium — assuming hosted locally */}
        <style>{`
          @font-face {
            font-family: 'Cobol Medium';
            src: url('/fonts/Cobol-Medium.woff2') format('woff2'),
                 url('/fonts/Cobol-Medium.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
        `}</style>
      </head>

      <body
        style={{
          margin: 0,
          fontFamily: "'Times New Roman', serif",
          backgroundColor: "#fff9c4",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          minHeight: "100vh",
        }}
      >
        {/* Hamburger button for mobile */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              alignSelf: "flex-end",
              margin: "1rem",
              padding: "0.5rem 1rem",
              background: "linear-gradient(to bottom, #b2fab4, #66bb6a)",
              border: "1px solid black",
              borderRadius: "50px",
              fontFamily: "'League Script', cursive",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {menuOpen ? "close" : "menu"}
          </button>
        )}

        {/* Nav */}
        {(!isMobile || menuOpen) && (
          <nav
            style={{
              alignSelf: isMobile ? "flex-start" : "stretch",
              width: isMobile ? "100%" : "200px",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              height: "fit-content",
              background: "linear-gradient(to bottom, #b2fab4, #66bb6a)",
              borderRadius: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "'Times New Roman', serif",
              border: "1px solid black",
              margin: "1rem",
              overflow: "hidden",
            }}
          >
            <a href="/" style={{ textDecoration: "none" }}>
              <h1
                style={{
                  color: "red",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  fontSize: "20px",
                  textAlign: "center",
                  fontFamily: "'League Script', cursive",
                }}
              >
                Home<br />page
              </h1>
            </a>

            {[
              ["video", "/video"],
              ["paintings", "/paintings"],
              ["journal", "/journal"],
              ["writings", "/writings"],
            ].map(([label, href], index) => (
              <a
                key={index}
                href={href}
                style={{
                  width: "100%",
                  padding: "0.5rem 0",
                  textAlign: "center",
                  textDecoration: "none",
                  color: "black",
                  borderTop: "1px solid black",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  fontFamily: "'Times New Roman', serif",
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        )}

        <main style={{ padding: "2rem", flexGrow: 1 }}>{children}</main>
      </body>
    </html>
  );
}
