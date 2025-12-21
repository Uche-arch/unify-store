import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { password } = await req.json();

    // Real admin password from env
    const realPassword = process.env.ADMIN_PASSWORD;
    const secret = process.env.JWT_SECRET;

    if (!password) {
      return Response.json({ error: "Password required" }, { status: 400 });
    }

    // Compare plain text password
    if (password !== realPassword) {
      return Response.json({ error: "Invalid password" }, { status: 401 });
    }

    // Create admin token
    const token = jwt.sign({ role: "admin" }, secret, { expiresIn: "7d" });

    return Response.json({ token }, { status: 200 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
