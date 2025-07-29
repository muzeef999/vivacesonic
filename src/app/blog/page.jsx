import Link from "next/link";

export async function getData() {
  const res = await fetch(`/api/v1/blog`, {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });
  return res.json();
}

const page = async () => {
  const data = await getData();

  console.log(data);

  return (
    <div className="container py-5">
      <div className="row g-4">
        {data?.blogs?.map((blog) => (
          <Link href={`/blog/${blog?.slug}`}
            className="col-12 col-md-6 col-lg-4 cursor-pointer"
            key={blog._id}
          >
            <div className="card h-100 shadow-sm border-0 hover-shadow transition">
              <img
                src={blog.image}
                alt={blog.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between mb-2">
                  <span className="badge bg-primary">
                    {blog.tags?.[0] || "General"}
                  </span>
                  <small className="text-muted">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </small>
                </div>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text text-muted" style={{ flexGrow: 1 }}>
                  {blog.metaDescription?.slice(0, 100)}...
                </p>
                <div className="text-end text-muted mt-auto">
                  <small>👤 {blog.author}</small>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
