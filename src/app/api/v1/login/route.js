import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";



export const POST = async (req) => {
  try {
    const { mobile, password } = await req.json();

    const validMobile = "9959456647";
    const validPassword = "Muzeef@9985";

    if (mobile === validMobile && password === validPassword) {
      const payload = { mobile };

      // 1. Generate token
      const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });

      // 2. Set cookie headers
      const response = NextResponse.json(
        { success: true, message: "Login successful" },
        { status: 200 }
      );

      // 3. Set cookie (HTTP-only, secure)
      response.cookies.set("token", token, {
        sameSite: "strict",
        maxAge: 60 * 180, // 1 hour
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
};
