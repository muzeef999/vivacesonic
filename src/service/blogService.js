import axiosInstance from "@/lib/axiosInstance"


export const createBlog = async (blogData) => {
  const res = await axiosInstance.post("/blog", blogData);
  return res.data;
};


export const fetchAllBlogs  = async() => {
     const res = await axiosInstance.get('/blog');
     return res.data;
}

export const fetchBlogBySlug = async (slug) => {
  const res = await axiosInstance.get(`/blog/${slug}`);
  return res.data;
};

export const updateBlog = async ({ id, updatedData }) => {
  const res = await axiosInstance.put(`/blog/${id}`, updatedData);
  return res.data;
};


export const deleteBlog = async(id) => {
  const res = await axiosInstance.delete(`/blog/${id}`);
  return res.data;
}

