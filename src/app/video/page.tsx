// /app/video/page.tsx

import VideoCard from "../components/VideoCard"; // adjust if needed

const videos = [
  {
    id: "1",
    src: "https://youtu.be/LtasLsvlhHk",
    caption: "Birth, video with audio, 2021",
    date: "2021-10-15",
  },
  {
    id: "2",
    src: "https://youtu.be/SH5Zi02KaGU",
    caption: "Invisible Ink, video with audio, 2022",
    date: "2022-07-17",
  },
  {
    id: "3",
    src: "https://youtu.be/PBxSQEpuCoc",
    caption: "Sidewalk Scramble, video with audio, 2021",
    date: "2021-05-21",
  },
  {
    id: "4",
    src: "https://www.youtube.com/watch?v=-zcaMiRzjsY&feature=youtu.be",
    caption: "The Few Things That Will Remain, video, 2022",
    date: "2022-12-16",
  },
  {
    id: "5",
    src: "https://youtu.be/0fzP7M8PPsI",
    caption: "Snail Trail, video, 2023",
    date: "2023-09-25",
  },
  {
    id: "6",
    src: "https://youtu.be/oOk1E5FJY2U",
    caption: "My Super Power, video with audio, 2023",
    date: "2023-09-25",
  },
  {
    id: "7",
    src: "https://youtu.be/m-naV_AR-30",
    caption: "The Idiot, video, 2022",
    date: "2022-08-28",
  },
  {
    id: "8",
    src: "https://youtu.be/iC6_g7otQ0c",
    caption: "The Passion According to Eileen, video and audio made by Sandra Zanetti, 2023",
    date: "2023-08-06",
  },
  {
    id: "9",
    src: "https://youtu.be/wOBNhl0WRgM",
    caption: "I'm Becoming Real, video, 2023",
    date: "2023-06-05",
  },
  {
    id: "10",
    src: "https://youtu.be/B1TjgLRgXvA",
    caption: "Learned to Speak, video, 2023",
    date: "2023-12-02",
  },
  // {
  //   id: "11",
  //   src: "/videos/video11.mp4",
  //   caption: "I See You in Me, video, 2024",
  //   date: "2024-06-16",
  // },
  // {
  //   id: "12",
  //   src: "/videos/video12.mp4",
  //   caption: "untitled, video with audio made by Weston Throckmorton, 2024",
  //   date: "2024-06-12",
  // },
  // {
  //   id: "13",
  //   src: "/videos/video13.mp4",
  //   caption: "Solomon Discovers his Reflection",
  //   date: "2024-06-16",
  // },
  // {
  //   id: "14",
  //   src: "/videos/video14.mp4",
  //   caption: "Solomon Likes His Body, video, 2024",
  //   date: "2024-07-31",
  // },
  // {
  //   id: "15",
  //   src: "/videos/video15.mp4",
  //   caption: "Solomon and Venus, video, 2024",
  //   date: "2024-10-24",
  // },
  // {
  //   id: "16",
  //   src: "/videos/video16.mp4",
  //   caption: "I JUST WANNA GO HOME!, video with audio, 2024",
  //   date: "2024-10-13",
  // },
  // {
  //   id: "17",
  //   src: "/videos/video17.mp4",
  //   caption: "WHAT AM I SUPPOSED TO KNOW?, video with audio, 2025",
  //   date: "2025-03-21",
  // },
  {
    id: "18",
    src: "https://youtu.be/Q22BOCaCIYs",
    caption: "Letting all the things wash away, Escorting myself to another plane One in which our bodies evaporate, video with audio, 2025",
    date: "2025-03-22",
  },
];

const sortedVideos = [...videos].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function VideoPage() {
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
              video archive
            </h1>
            <p
              style={{
                fontFamily: "'Times New Roman', serif",
                fontSize: '1.2rem',
                marginTop: 0,
              }}
            >
              collection of moving image works
            </p>
          </header>
  
          <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
            {sortedVideos.map((video) => (
              <VideoCard key={video.id} src={video.src} caption={video.caption} />
            ))}
          </div>
        </div>
      </div>
    );
  }
