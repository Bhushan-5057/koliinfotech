import React from 'react';
import dynamic from "next/dynamic";

const BlogsPage = dynamic(() => import('@/PagesComponent/BlogsPage/BlogsPage'));

const Blogs = () => {
    return <BlogsPage />;
};

export default Blogs;
