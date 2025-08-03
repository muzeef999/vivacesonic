import { connectDB } from "../../../../lib/mongodb";
import Blog from "../../../../models/Blog";
import { generateSlug } from "../../../../utils/generateSlug";
import { NextResponse } from "next/server";

// POST method
export const POST = async (req) => {
  try {
    await connectDB();

    const body = await req.json();

    const {
      title,
      content,
      author = "Anonymous",
      tags = [],
      image = "",
      metaTitle,
      metaDescription,
      keywords = [],
    } = body;

    if (!title || !content) {
      return Response.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const slug = generateSlug(title);

    const existing = await Blog.findOne({ slug });
    if (existing) {
      return Response.json(
        { error: "A blog post with this title already exists" },
        { status: 409 }
      );
    }

    const newPost = await Blog.create({
      title,
      slug,
      content,
      author,
      tags,
      image,
      metaTitle,
      metaDescription,
      keywords,
    });

    return NextResponse.json(
      { success: true, message: "Blog posted successfully.", blog: newPost },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to post the blog." },
      { status: 500 }
    );
  }
};

// GET method
export const GET = async () => {
  try {
    await connectDB();

    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, blogs }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch data." },
      { status: 500 }
    );
  }
};

// PATCH method
export const PATCH = async () => {
  try {
    return NextResponse.json(
      { success: true, message: "Blog updated successfully." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to update the blog." },
      { status: 500 }
    );
  }
};
