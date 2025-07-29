const page = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch(`http://localhost:3000/api/v1/blog/${slug}`, {
    cache: "force-cache", 
    next: { revalidate: 60 }, 
  });

  const data = await res.json();

  return (
    <div>
      <h1>Blog Post: {slug}</h1>

      {/* Optional: Render blog data */}
      <h2>{data.title}</h2>
      <p>{data.content}</p>

      {/* Debug */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default page;
