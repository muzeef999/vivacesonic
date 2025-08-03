// lib/getBlogs.js
export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blog`, {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}
