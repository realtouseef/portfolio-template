interface NavProps {
  id: number;
  name: string;
  path: string;
}

export const NavItems: NavProps[] = [
  { id: 1, name: "about", path: "/about" },
  { id: 2, name: "works.", path: "/work" },
  { id: 3, name: "contact.", path: "/contact" },
];
