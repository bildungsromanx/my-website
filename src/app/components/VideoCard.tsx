
// // /Users/eileenzelaya/my-applesnail-site/src/app/components/VideoCard.tsx



// type VideoCardProps = {
//   src: string;
//   caption: string;
// };

// export default function VideoCard({ src, caption }: VideoCardProps) {
//   return (
//     <div>
//       <video controls style={{ width: '100%', objectFit: 'contain' }}>
//         <source src={src} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#555' }}>{caption}</p>
//     </div>
//   );
// }


// src/app/components/VideoCard.tsx



// import React from "react";

// const VideoCard = ({ src, caption }: { src: string; caption: string }) => {
//   // Extract the YouTube video ID from the URL
//   const extractVideoId = (url: string) => {
//     const match = url.match(
//       /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/[^\s]+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
//     );
//     return match ? match[1] : null;
//   };

//   const videoId = extractVideoId(src);
//   console.log("Video src:", src);
//   console.log("Extracted Video ID:", videoId);

//   return (
//     <div style={{ maxWidth: "100%", margin: "auto" }}>
//       {videoId ? (
//         <div
//           style={{
//             position: "relative",
//             paddingBottom: "56.25%", // 16:9 aspect ratio
//             height: 0,
//             overflow: "hidden",
//             maxWidth: "100%",
//           }}
//         >
//           <iframe
//             src={`https://www.youtube.com/embed/${videoId}`}
//             title={caption}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//             }}
//           />
//         </div>
//       ) : (
//         <p>Invalid video URL</p>
//       )}
//       <p style={{ marginTop: "8px", fontSize: "0.9rem", color: "#555" }}>{caption}</p>
//     </div>
//   );
// };

// export default VideoCard;


import React from "react";

const VideoCard = ({ src, caption }: { src: string; caption: string }) => {
  const extractVideoId = (url: string) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/[^\s]+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(src);
  console.log("Video src:", src);
  console.log("Extracted Video ID:", videoId);

  return (
    <div style={{ maxWidth: "100%", margin: "auto" }}>
      {videoId ? (
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%", // 16:9 aspect ratio
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            backgroundColor: "#000", // <- Black background to hide any gaps
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={caption}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover", // <- Try to cover the iframe space
            }}
          />
        </div>
      ) : (
        <p>Invalid video URL</p>
      )}
      <p style={{ marginTop: "8px", fontSize: "0.9rem", color: "#555" }}>{caption}</p>
    </div>
  );
};

export default VideoCard;
