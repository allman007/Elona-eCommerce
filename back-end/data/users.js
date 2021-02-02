import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Uche User",
    email: "uche@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Faith User",
    email: "faith@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
