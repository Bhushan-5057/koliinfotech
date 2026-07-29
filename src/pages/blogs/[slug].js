import React from "react";
import BlogDetailPage from "@/PagesComponent/BlogsPage/BlogDetailPage";
import blogsData from "@/data/blogs.json";
import blogContentData from "@/data/blogContent.json";

const BlogDetail = ({ blog, relatedBlogs }) => {
  return <BlogDetailPage blog={blog} relatedBlogs={relatedBlogs} />;
};

export async function getStaticPaths() {
  const blogs = Array.isArray(blogsData) ? blogsData : [];
  const paths = blogs
    .filter((blog) => blog?.slug)
    .map((blog) => ({
      params: { slug: blog.slug },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogs = Array.isArray(blogsData) ? blogsData : [];
  const blog = blogs.find((item) => item.slug === params.slug) || null;

  if (!blog) {
    return { notFound: true };
  }

  const contentEntry = blogContentData[blog.slug] || {};
  const enrichedBlog = {
    ...blog,
    sections: contentEntry.sections || [],
    conclusion: contentEntry.conclusion || "",
    faqs: contentEntry.faqs || [],
    cta: contentEntry.cta || null,
  };

  const relatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug)
    .sort((a, b) => {
      const aScore = a.category === blog.category ? 1 : 0;
      const bScore = b.category === blog.category ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, 4);

  return {
    props: {
      blog: enrichedBlog,
      relatedBlogs,
    },
  };
}

export default BlogDetail;
