import axiosInstance from "../lib/axiosInstance"


export const createBlog = async (body) =>  axiosInstance.post("/blog", body).then(res => res.data);


export const fetchAllBlogs = () => axiosInstance.get('/blog').then((res) => res.data)

export const logindata = (data) => axiosInstance.post('/login',data).then(res => res.data);


export const fetchBlogBySlug = async (slug) =>  await axiosInstance.get(`/blog/${slug}`).then(res => res.data);

export const updateBlog = async ({ id, updatedData }) => await axiosInstance.put(`/blog/${id}`, updatedData).then(res => res.data);


export const deleteBlog = async(id) =>  await axiosInstance.delete(`/blog/${id}`).then(res => res.data);

