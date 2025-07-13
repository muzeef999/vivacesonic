import { connectDB } from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = params;

  try {

 await connectDB();
        const blog = await Blog.findOne({ slug });

    return NextResponse.json(
      { success: true, blog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to fetch blog "${slug}".` },
      { status: 500 }
    );
  }
}
