// src/features/dashboard/components/PostChart.tsx

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useMemo } from 'react';
import { usePosts } from '@/hooks/usePosts';

export default function PostsChart() {
  const { data: posts, isLoading, error } = usePosts();

  const chartData = useMemo(() => {
    if (!posts) return [];

    const counts = posts.reduce((acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    return Object.entries(counts).map(([userId, postCount]) => ({
      userId: Number(userId),
      postCount,
    }));
  }, [posts]);

  if (isLoading) return <div className="text-center">Loading chart...</div>;
  if (error) return <div className="text-center text-red-500">Error loading posts.</div>;

  return (
    <div className="w-full h-96">
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <XAxis dataKey="userId" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="postCount" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}






// // src/features/dashboard/components/PostChart.tsx

// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { useEffect, useState } from 'react';
// import { fetchPosts, PostData } from '@/lib/api';

// export default function PostsChart() {
//   const [data, setData] = useState<{ userId: number; postCount: number }[]>([]);

//   useEffect(() => {
//     fetchPosts()
//       .then((posts: PostData[]) => {
//         const counts = posts.reduce((acc, post) => {
//           acc[post.userId] = (acc[post.userId] || 0) + 1;
//           return acc;
//         }, {} as Record<number, number>);

//         const chartData = Object.entries(counts).map(([userId, postCount]) => ({
//           userId: Number(userId),
//           postCount,
//         }));

//         setData(chartData);
//       })
//       .catch((err) => {
//         console.error("Error loading posts:", err);
//       });
//   }, []);

//   return (
//     <div className="w-full h-96">
//       <ResponsiveContainer>
//         <BarChart data={data}>
//           <XAxis dataKey="userId" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="postCount" fill="#3b82f6" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }