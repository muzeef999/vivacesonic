import axiosInstance from "@/lib/axiosInstance"


export const fetchAllBlogs  = async() => {
     const res = await axiosInstance.get('/blog');
     return res.data;
}

export const fetchBlogBySlug = async (slug) => {
  const res = await axiosInstance.get(`/blog/${slug}`);
  return res.data;
};
