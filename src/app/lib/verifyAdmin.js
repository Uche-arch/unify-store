import jwt from "jsonwebtoken";

export function verifyAdmin(req) {
  try {
    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) return false;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") return false;

    return true;
  } catch {
    return false;
  }
}
