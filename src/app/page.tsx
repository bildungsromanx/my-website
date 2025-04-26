// src/app/page.tsx


export default function Home() {
  return (
    <div style={{ backgroundColor: '#C1D6EC', minHeight: '100vh', padding: '20px' }}>
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#FFFFFF',
          padding: '20px',
          border: '2px solid #000080',
          boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
        }}
      >
        <header style={{ textAlign: 'center' }}>
          <h1
            style={{
              color: 'red',
              fontFamily: "'League Script', cursive",
              fontSize: '3rem',
              marginBottom: '0.5rem',
            }}
          >
            Eileen Zelaya
          </h1>
          <p
            style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: '1.2rem',
              marginTop: 0,
            }}
          >
            i put all my stuff here
          </p>
        </header>

        <div style={{ display: 'grid', gap: '10px', margin: '20px 0' }}>
          {/* <img src="homepage/image1.png" alt="Art 1" style={{ width: '100%' }} />
          <img src="homepage/image2.png" alt="Art 2" style={{ width: '100%' }} /> */}
          {/* <img src="media/image3.png" alt="Art 3" style={{ width: '100%' }} />
          <img src="media/image4.png" alt="Art 4" style={{ width: '100%' }} />
          <img src="media/image5.png" alt="Art 5" style={{ width: '100%' }} /> */}
        </div>

        <video controls width="100%">
          <source src="videos/video18.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
