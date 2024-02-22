export type MenuProps = {
  id: string;
  label: string;
  to: string;
  children?: MenuProps[];
};

export type MenuListProps = {
  list: MenuProps[];
};

export type MenuItemProps = {
  menuItem: MenuProps;
};
