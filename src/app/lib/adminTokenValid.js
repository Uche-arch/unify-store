import { jwtDecode } from "jwt-decode";

export function isAdminTokenValid(token) {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}
