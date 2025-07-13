import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = params;

  try {

    return NextResponse.json(
      { success: true, message: `Blog "${slug}" fetched successfully.` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `Failed to fetch blog "${slug}".` },
      { status: 500 }
    );
  }
}
