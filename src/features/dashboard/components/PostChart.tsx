import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsChart() {
  const [data, setData] = useState<{ userId: number; postCount: number }[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((posts: PostData[]) => {
        const counts = posts.reduce((acc, post) => {
          acc[post.userId] = (acc[post.userId] || 0) + 1;
          return acc;
        }, {} as Record<number, number>);

        const chartData = Object.entries(counts).map(([userId, postCount]) => ({
          userId: Number(userId),
          postCount,
        }));

        setData(chartData);
      });
  }, []);

  console.log(data,'post data==')

  return (
//     <motion.div
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6 }}
//   className="w-full h-96"
// >
    <div className="w-full h-96">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="userId" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="postCount" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    // </motion.div>

  );
}