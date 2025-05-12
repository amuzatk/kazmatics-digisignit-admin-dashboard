'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { PostData } from '@/types';
import { usePostStore } from '@/store/usePostStore';
import PostCard from '@/cards/PostCard';
import toast from 'react-hot-toast';

const Spin = dynamic(() => import('antd').then(mod => mod.Spin), { ssr: false });
const Modal = dynamic(() => import('antd').then(mod => mod.Modal), { ssr: false });
const Input = dynamic(() => import('antd').then(mod => mod.Input), { ssr: false });
const InputTextArea = dynamic(() =>
  import('antd').then(mod => mod.Input.TextArea),
  { ssr: false }
);

interface PostListProps {
  editable?: boolean;
}

export default function PostList({ editable = false }: PostListProps) {
  const posts = usePostStore((s) => s.posts);
  const updatePost = usePostStore((s) => s.updatePost);
  const deletePost = usePostStore((s) => s.deletePost);
  const isLoading = usePostStore((s) => s.isLoading);

  const [editingPost, setEditingPost] = useState<PostData | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedBody, setEditedBody] = useState('');

  const handleEdit = (post: PostData) => {
    setEditingPost(post);
    setEditedTitle(post.title);
    setEditedBody(post.body);
  };

  const handleSaveEdit = async () => {
    if (!editingPost) return;
    const updatedPost = {
      ...editingPost,
      title: editedTitle,
      body: editedBody,
    };

    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${editingPost.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost),
      });
      updatePost(updatedPost);
      toast.success('Post updated (mock)');
      setEditingPost(null);
    } catch {
      toast.error('Failed to update');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
      deletePost(id);
      toast.success('Post deleted (mock)');
    } catch {
      toast.error('Failed to delete');
    }
  };

  if (isLoading) return <Spin data-testid="spinner" />;

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts?.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          editable={editable}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}

      <Modal
        open={!!editingPost}
        title={<span className="">Edit Post</span>}
        onCancel={() => setEditingPost(null)}
        onOk={handleSaveEdit}
        className=""
      >
        <Input
          className="mb-2"
          placeholder="Title"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <InputTextArea
          rows={4}
          className=""
          placeholder="Body"
          value={editedBody}
          onChange={(e) => setEditedBody(e.target.value)}
        />
      </Modal>
    </div>
  );
}









// 'use client';

// import { useState } from 'react';
// import dynamic from 'next/dynamic';
// import { PostData } from '@/types';
// import { usePostStore } from '@/store/usePostStore';
// import PostCard from '@/cards/PostCard';
// import toast from 'react-hot-toast';

// const Spin = dynamic(() => import('antd').then(mod => mod.Spin), { ssr: false });
// const Modal = dynamic(() => import('antd').then(mod => mod.Modal), { ssr: false });
// const Input = dynamic(() => import('antd').then(mod => mod.Input), { ssr: false });
// const InputTextArea = dynamic(() =>
//   import('antd').then(mod => mod.Input.TextArea),
//   { ssr: false }
// );

// interface PostListProps {
//   editable?: boolean;
// }

// export default function PostList({ editable = false }: PostListProps) {
//   const posts = usePostStore((s) => s.posts);
//   const updatePost = usePostStore((s) => s.updatePost);
//   const deletePost = usePostStore((s) => s.deletePost);
//   const isLoading = usePostStore((s) => s.isLoading);

//   const [editingPost, setEditingPost] = useState<PostData | null>(null);
//   const [editedTitle, setEditedTitle] = useState('');
//   const [editedBody, setEditedBody] = useState('');

//   const handleEdit = (post: PostData) => {
//     setEditingPost(post);
//     setEditedTitle(post.title);
//     setEditedBody(post.body);
//   };

//   const handleSaveEdit = async () => {
//     if (!editingPost) return;
//     const updatedPost = {
//       ...editingPost,
//       title: editedTitle,
//       body: editedBody,
//     };

//     try {
//       await fetch(`https://jsonplaceholder.typicode.com/posts/${editingPost.id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(updatedPost),
//       });
//       updatePost(updatedPost);
//       toast.success('Post updated (mock)');
//       setEditingPost(null);
//     } catch {
//       toast.error('Failed to update');
//     }
//   };

//   const handleDelete = async (id: number) => {
//     try {
//       await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'DELETE',
//       });
//       deletePost(id);
//       toast.success('Post deleted (mock)');
//     } catch {
//       toast.error('Failed to delete');
//     }
//   };

//   if (isLoading) return <Spin data-testid="spinner" />;

//   return (
//     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {posts?.map((post) => (
//         <PostCard
//           key={post.id}
//           post={post}
//           editable={editable}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//         />
//       ))}

//       <Modal
//         open={!!editingPost}
//         title={<span className="dark:text-white">Edit Post</span>}
//         onCancel={() => setEditingPost(null)}
//         onOk={handleSaveEdit}
//         className="dark:bg-gray-900 dark:text-white"
//       >
//         <Input
//           className="mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-700"
//           placeholder="Title"
//           value={editedTitle}
//           onChange={(e) => setEditedTitle(e.target.value)}
//         />
//         <InputTextArea
//           rows={4}
//           className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
//           placeholder="Body"
//           value={editedBody}
//           onChange={(e) => setEditedBody(e.target.value)}
//         />
//       </Modal>
//     </div>
//   );
// }

