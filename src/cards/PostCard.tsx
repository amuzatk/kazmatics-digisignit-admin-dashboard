'use client';

import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { PostData } from '@/types';

interface PostCardProps {
  post: PostData;
  editable?: boolean;
  onEdit: (post: PostData) => void;
  onDelete: (id: number) => Promise<void> | void;
}

const PostCard: React.FC<PostCardProps> = ({ post, editable = false, onEdit, onDelete }) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await onDelete(post.id); // Await if onDelete is async
    } finally {
      setIsDeleting(false);
      setIsConfirming(false);
    }
  };

  return (
    <Card title={post.title}>
      <p>{post.body}</p>
      {editable && (
        <div className="mt-2 flex gap-2">
          <Button type="primary" size="small" onClick={() => onEdit(post)}>
            Edit
          </Button>

          {isConfirming ? (
            <>
              <span>Are you sure?</span>
              <Button
                size="small"
                danger
                loading={isDeleting}
                onClick={handleDelete}
              >
                Yes
              </Button>
              <Button
                size="small"
                disabled={isDeleting}
                onClick={() => setIsConfirming(false)}
              >
                No
              </Button>
            </>
          ) : (
            <Button danger size="small" onClick={() => setIsConfirming(true)}>
              Delete
            </Button>
          )}
        </div>
      )}
    </Card>
  );
};

export default PostCard;





// //antd builds with version 2 PostList
// 'use client';

// import React from 'react';
// import dynamic from 'next/dynamic';
// import { PostData } from '@/types';

// const Card = dynamic(() => import('antd').then(mod => mod.Card), { ssr: false });
// const Button = dynamic(() => import('antd').then(mod => mod.Button), { ssr: false });

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
//           <Button danger size="small" onClick={() => onDelete(post.id)}>
//             Delete
//           </Button>
//         </div>
//       )}
//     </Card>
//   );
// };

// export default PostCard;




// //DEFAULT
// import React, { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   Typography,
//   Modal,
//   Box,
// } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';
// import { PostData } from '@/types';
// import { Popconfirm } from 'antd';

// interface PostCardProps {
//   post: PostData;
//   onEdit?: (post: PostData) => void;
//   onDelete?: (id: number) => void;
//   editable?: boolean;
// }

// const truncateText = (text: string, maxLength: number) => {
//   if (text.length <= maxLength) return text;
//   return text.substring(0, maxLength) + '...';
// };

// const PostCard: React.FC<PostCardProps> = ({
//   post,
//   onEdit,
//   onDelete,
//   editable = false,
// }) => {
//   const [open, setOpen] = useState(false);
//   const handleOpenModal = () => setOpen(true);
//   const handleCloseModal = () => setOpen(false);

//   const isTruncated = post.body.length > 100;

//   return (
//     <>
//       <Card
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//           height: '100%',
//           backgroundColor: 'background.paper',
//         }}
//       >
//         <CardContent sx={{ flexGrow: 1 }}>
//           <Typography variant="h6" component="div" gutterBottom>
//             {post.title}
//           </Typography>

//           <Typography
//             variant="body2"
//             color="text.secondary"
//             sx={{ minHeight: '60px' }}
//           >
//             {truncateText(post.body, 100)}
//             {isTruncated && (
//               <Button size="small" onClick={handleOpenModal}>
//                 Read more
//               </Button>
//             )}
//           </Typography>
//         </CardContent>

//         {editable && (
//           <CardActions sx={{ justifyContent: 'flex-start', mt: 'auto' }}>
//             <Button
//               size="small"
//               color="primary"
//               startIcon={<Edit />}
//               onClick={() => onEdit?.(post)}
//             >
//               Edit
//             </Button>

//             {/* ✅ Delete with Popconfirm */}
//             <Popconfirm
//               title="Are you sure you want to delete this post?"
//               onConfirm={() => onDelete?.(post.id)}
//               okText="Yes"
//               cancelText="No"
//             >
//               <Button
//                 size="small"
//                 color="error"
//                 startIcon={<Delete />}
//               >
//                 Delete
//               </Button>
//             </Popconfirm>
//           </CardActions>
//         )}
//       </Card>

//       {/* Read More Modal */}
//       <Modal open={open} onClose={handleCloseModal}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'background.paper',
//             borderRadius: 2,
//             boxShadow: 24,
//             p: 4,
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             {post.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {post.body}
//           </Typography>
//           <Box mt={2} textAlign="right">
//             <Button onClick={handleCloseModal}>Close</Button>
//           </Box>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default PostCard;