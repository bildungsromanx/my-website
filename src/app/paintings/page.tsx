// src/app/paintings/page.tsx

import PaintingCard from "../components/PaintingCard"; 

const paintings = [
  {
    id: "1",
    src: "/paintings/painting1.png",
    caption: "Pragmatic Strangers, 2023",
    date: "2023-12-09",
  },
  {
    id: "2",
    src: "/paintings/painting2.png",
    caption: "Chosen Caviar, 2023",
    date: "2023-12-09",
  },
  {
    id: "3",
    src: "/paintings/painting3.png",
    caption: "Anatomy of a Roach, 2023",
    date: "2023-04-15",
  },
  {
    id: "4",
    src: "/paintings/painting4.png",
    caption: "Green Smile, 2023",
    date: "2023-02-19",
  },
  {
    id: "5",
    src: "/paintings/painting5.png",
    caption: "Mermaid, 2023",
    date: "2023-02-19",
  },
  {
    id: "6",
    src: "/paintings/painting6.png",
    caption: "Thanksgiving, 2023",
    date: "2023-12-11",
  },
  {
    id: "7",
    src: "/paintings/painting7.jpeg",
    caption: "Fours, 2021",
    date: "2021-03-07",
  },
  {
    id: "8",
    src: "/paintings/painting8.jpg",
    caption: "Childhood Home, 2021",
    date: "2021-04-07",
  },
  {
    id: "9",
    src: "/paintings/painting9.jpg",
    caption: "Bathroom Floor, 2021",
    date: "2021-01-11",
  },
  {
    id: "10",
    src: "/paintings/painting10.jpg",
    caption: "Anatomy of a Roach (2), 2023",
    date: "2023-04-15",
  },
  {
    id: "11",
    src: "/paintings/painting11.png",
    caption: "Kissy, 2023",
    date: "2023-10-29",
  },
  {
    id: "12",
    src: "/paintings/painting12.png",
    caption: "Kissy Kissy, 2023",
    date: "2023-10-29",
  },
  {
    id: "13",
    src: "/paintings/painting13.png",
    caption: "I am Number 1, 2023",
    date: "2023-11-03",
  },
  {
    id: "14",
    src: "/paintings/painting14.png",
    caption: "Crab Hand, 2024",
    date: "2024-01-06",
  },
  {
    id: "15",
    src: "/paintings/painting15.png",
    caption: "Mermaid Ear, 2024",
    date: "2024-01-14",
  },
  {
    id: "16",
    src: "/paintings/painting16.png",
    caption: "Fish (1), 2024",
    date: "2024-12-18",
  },
  {
    id: "17",
    src: "/paintings/painting17.png",
    caption: "Fish (2), 2024",
    date: "2024-12-18",
  },
  {
    id: "18",
    src: "/paintings/painting18.png",
    caption: "Fish (3), 2024",
    date: "2024-12-18",
  },
  {
    id: "19",
    src: "/paintings/painting19.png",
    caption: "Fish (4), 2024",
    date: "2025-01-17",
  },
  {
    id: "20",
    src: "/paintings/painting20.png",
    caption: "Toad In Water, 2025",
    date: "2025-01-18",
  },
  {
    id: "21",
    src: "/paintings/painting21.png",
    caption: "Study of Bivalves, 2025",
    date: "2025-02-19",
  },
  {
    id: "22",
    src: "/paintings/painting22.png",
    caption: "Study of Slugs, 2025",
    date: "2025-02-24",
  },
  {
    id: "23",
    src: "/paintings/painting23.png",
    caption: "Snowflake on Sea Flower, 2025",
    date: "2025-02-25",
  },
  {
    id: "24",
    src: "/paintings/painting24.jpg",
    caption: "Venus Running (1), 2025",
    date: "2025-04-05",
  },
  {
    id: "25",
    src: "/paintings/painting25.jpg",
    caption: "Venus Running (2), 2025",
    date: "2025-04-05",
  },
];

const sortedPaintings = [...paintings].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


export default function PaintingsPage() {

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
              paintings
            </h1>
            <p
              style={{
                fontFamily: "'Times New Roman', serif",
                fontSize: '1.2rem',
                marginTop: 0,
              }}
            >
              a bunch of different mediums
            </p>
          </header>
    <div style={{ display: 'grid', gap: '20px' }}>
       {sortedPaintings.map((painting) => (
        <PaintingCard key={painting.id} src={painting.src} caption={painting.caption} />
      ))}
    </div>
    </div>
      </div>
  );
}

