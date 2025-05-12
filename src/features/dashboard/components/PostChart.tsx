import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { useMemo, useState, useEffect } from 'react';
import { usePosts } from '@/hooks/usePosts';
import { usePostStore } from '@/store/usePostStore';

export default function PostsChart() {
  const posts = usePostStore((s) => s.posts);
  const { isLoading, error } = usePosts();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
  if (error) return <div className="text-center text-red-500 dark:text-red-400">Error loading posts.</div>;

  return (
    <div className="w-full h-96 p-4 rounded-lg shadow">
      <ResponsiveContainer>
        {isMobile ? (
          <LineChart data={chartData}>
            <XAxis dataKey="userId" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1f2937', color: '#fff' }} // Tailwind's gray-800
              cursor={{ fill: '#4b5563' }}
            />
            <Line type="monotone" dataKey="postCount" stroke="#3b82f6" />
          </LineChart>
        ) : (
          <BarChart data={chartData}>
            <XAxis dataKey="userId" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1f2937', color: '#fff' }}
              cursor={{ fill: '#4b5563' }}
            />
            <Bar dataKey="postCount" fill="#3b82f6" />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}







// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   LineChart,
//   Line,
//   ResponsiveContainer,
// } from 'recharts';
// import { useMemo, useState, useEffect } from 'react';
// import { usePosts } from '@/hooks/usePosts';
// import { usePostStore } from '@/store/usePostStore';

// export default function PostsChart() {
//   const posts = usePostStore((s) => s.posts);
//   const { isLoading, error } = usePosts();

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener('resize', handleResize);
//     handleResize();
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const chartData = useMemo(() => {
//     if (!posts) return [];

//     const counts = posts.reduce((acc, post) => {
//       acc[post.userId] = (acc[post.userId] || 0) + 1;
//       return acc;
//     }, {} as Record<number, number>);

//     return Object.entries(counts).map(([userId, postCount]) => ({
//       userId: Number(userId),
//       postCount,
//     }));
//   }, [posts]);

//   if (isLoading) return <div className="text-center text-gray-800 dark:text-gray-200">Loading chart...</div>;
//   if (error) return <div className="text-center text-red-500 dark:text-red-400">Error loading posts.</div>;

//   return (
//     <div className="w-full h-96 bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
//       <ResponsiveContainer>
//         {isMobile ? (
//           <LineChart data={chartData}>
//             <XAxis dataKey="userId" stroke="#8884d8" />
//             <YAxis stroke="#8884d8" />
//             <Tooltip
//               contentStyle={{ backgroundColor: '#1f2937', color: '#fff' }} // Tailwind's gray-800
//               cursor={{ fill: '#4b5563' }}
//             />
//             <Line type="monotone" dataKey="postCount" stroke="#3b82f6" />
//           </LineChart>
//         ) : (
//           <BarChart data={chartData}>
//             <XAxis dataKey="userId" stroke="#8884d8" />
//             <YAxis stroke="#8884d8" />
//             <Tooltip
//               contentStyle={{ backgroundColor: '#1f2937', color: '#fff' }}
//               cursor={{ fill: '#4b5563' }}
//             />
//             <Bar dataKey="postCount" fill="#3b82f6" />
//           </BarChart>
//         )}
//       </ResponsiveContainer>
//     </div>
//   );
// }
