import { Role } from "./role";

export interface  User {
  id: number; // Corresponds to Long id in Java
  username: string; // Corresponds to String username
  email: string; // Corresponds to String email
  password: string; // Corresponds to String password
  roles: Role[];
  token: string; // Corresponds to Set<Role> roles
}