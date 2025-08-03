// app/blog/[slug]/page.jsx

import Head from "next/head";

const Page = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blog/${params.slug}`, {
    cache: "force-cache",
    next: { revalidate: 60 },
  });

  const { blog } = await res.json();

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{blog.metaTitle || blog.title}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.keywords.join(", ")} />
        <meta property="og:title" content={blog.metaTitle} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:image" content={blog.image} />
      </Head>

      {/* Blog Content */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            {/* Cover Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="img-fluid rounded shadow mb-4"
              style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
            />

            {/* Title */}
            <h1 className="display-5 fw-bold mb-3">{blog.title}</h1>

            {/* Meta Info */}
            <p className="text-muted">
              ✍️ {blog.author} • 📅{" "}
              {new Date(blog.createdAt).toLocaleDateString()}
            </p>

            {/* Tags */}
            <div className="mb-4">
              {blog.tags.map((tag, idx) => (
                <span key={idx} className="badge bg-primary me-2 mb-2">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="lead" style={{ whiteSpace: "pre-line" }}>
              {blog.content}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
