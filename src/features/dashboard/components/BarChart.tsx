import { BarChart as BC, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', posts: 10 },
  { name: 'Feb', posts: 20 },
  { name: 'Mar', posts: 15 },
];

export default function BarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BC data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="posts" fill="#8884d8" />
      </BC>
    </ResponsiveContainer>
  );
}