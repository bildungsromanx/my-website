// type PaintingCardProps = {
//     paintings: { src: string; caption: string; id: string }[];
//   };
  
//   export function PaintingCard({ paintings }: PaintingCardProps) {
//     return (
//       <>
//         {paintings.map(({ id, src, caption }) => (
//           <div key={id} className="w-full max-w-xs mx-auto">
//             <img src={src} alt={caption} className="painting-image" />
//             <p className="text-center mt-2 text-sm">{caption}</p>
//           </div>
//         ))}
//       </>
//     );
//   }
  
// components/PaintingCard.tsx


// type PaintingCardProps = {
//     paintings: {
//       id: string;
//       src: string;
//       caption: string;
//       date: string;
//     }[];
//   };
  
//   export function PaintingCard({ paintings }: PaintingCardProps) {
//     return (
//       <>
//         {paintings.map((painting) => (
//           <div key={painting.id} className="rounded-lg overflow-hidden shadow-md">
//             <img
//               src={painting.src}
//               alt={painting.caption}
//               className="w-full h-auto object-cover"
//             />
//             <p className="mt-2 text-sm text-gray-600">{painting.caption}</p>
//           </div>
//         ))}
//       </>
//     );
//   }
  

// type Painting = {
//     id: string;
//     src: string;
//     caption: string;
//     date: string;
//   };
  
//   export function PaintingCard({ paintings }: { paintings: Painting[] }) {
//     return (
//       <>
//         {paintings.map((painting) => (
//           <div key={painting.id} className="border border-black p-2 bg-white shadow-md rounded-xl">
//             <img
//               src={painting.src}
//               alt={painting.caption}
//               className="w-full h-auto object-cover rounded-md"
//             />
//             <p className="mt-2 text-sm text-center">{painting.caption}</p>
//           </div>
//         ))}
//       </>
//     );
//   }
// src/app/components/PaintingCard.tsx

type PaintingCardProps = {
    src: string;
    caption: string;
  };
  
  export default function PaintingCard({ src, caption }: PaintingCardProps) {
    return (
      <div>
        <img src={src} alt={caption} style={{ width: '100%', objectFit: 'contain' }} />
        <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#555' }}>{caption}</p>
      </div>
    );
  }
  
