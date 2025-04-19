import React from 'react';
import { PostTable } from '../components/Admin/PostTable';
import { PostModal } from '../components/Admin/PostModal';

const AdminBlog = () => {
    return (
        <div>
            <PostTable />
            <div>
                <PostModal />
            </div>
        </div>
    );
};

export default AdminBlog;