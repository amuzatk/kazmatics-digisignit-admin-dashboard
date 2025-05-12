'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { PostData } from '@/types';
import ConfirmDelete from '@/components/CustomConfirm';

const Card = dynamic(() => import('antd').then(mod => mod.Card), { ssr: false });
const Button = dynamic(() => import('antd').then(mod => mod.Button), { ssr: false });
const Modal = dynamic(() => import('antd').then(mod => mod.Modal), { ssr: false });

interface PostCardProps {
  post: PostData;
  editable?: boolean;
  onEdit: (post: PostData) => void;
  onDelete: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, editable = false, onEdit, onDelete }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleReadMore = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
    <Card title={post.title} bordered>
      <p>{post.body.slice(0, 100)}...</p>
      <Button type="link" size="small" onClick={handleReadMore}>
        READ MORE
      </Button>
      
      {editable && (
        <div className="mt-[35px] flex justify-between">
          <Button type="primary" size="small" onClick={() => onEdit(post)}>
            Edit
          </Button>
          <Button danger size="small" onClick={() => ConfirmDelete(() => onDelete(post.id))}>
            Delete
          </Button>
        </div>
      )}

     
    </Card>
     {/* Modal to show full post */}
     <Modal
     title={post.title}
     open ={isModalVisible}
     onCancel={handleModalClose}
     footer={null}
     width={600}
   >
     <p>{post.body}</p>
   </Modal>
   </>
  );
};

export default PostCard;






// 'use client';

// import React from 'react';
// import dynamic from 'next/dynamic';
// import { PostData } from '@/types';
// import ConfirmDelete from '@/components/CustomConfirm';

// const Card = dynamic(() => import('antd').then(mod => mod.Card), { ssr: false });
// const Button = dynamic(() => import('antd').then(mod => mod.Button), { ssr: false });
// // const Popconfirm = dynamic(() => import('antd').then(mod => mod.Popconfirm), { ssr: false });

// interface PostCardProps {
//   post: PostData;
//   editable?: boolean;
//   onEdit: (post: PostData) => void;
//   onDelete: (id: number) => void;
// }

// const PostCard: React.FC<PostCardProps> = ({ post, editable = false, onEdit, onDelete }) => {
//   return (
//     <Card title={post.title} bordered>
//       <p>{post.body}</p>
//       {editable && (
//         <div className="mt-2 flex gap-2">
//           <Button type="primary" size="small" onClick={() => onEdit(post)}>
//             Edit
//           </Button>
//           <Button danger size="small" onClick={() => ConfirmDelete(() => onDelete(post.id))}>
//   Delete
// </Button>
//         </div>
//       )}
//     </Card>
//   );
// };

// export default PostCard;