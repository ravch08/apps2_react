import { useEffect, useState } from "react";
import { string, z } from "zod";
import BackHome from "../features/BackHome";

const userSchema = z.object({
  name: string().min(4, {
    message: "Name should beatleast 4 characters long!",
  }),
});

export type UserProps = z.infer<typeof userSchema>;

const SearchAutocomplete = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);

  function handleSearchTerm(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.length) {
      const searchUsers =
        users && users.length
          ? users.filter(
              (item) => item.toLowerCase().indexOf(query.toLowerCase()) > -1,
            )
          : [];

      setFilteredUsers(searchUsers);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function getUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    const userList = data.map((item: UserProps) => item.name);

    setUsers(userList);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <BackHome />
      <section aria-labelledby="Search Autocomplete" className="mt-24">
        <div className="container">
          <div className="flex flex-col items-start">
            <input
              autoFocus
              type="text"
              value={searchTerm}
              className="form-input mb-2"
              onChange={handleSearchTerm}
              placeholder="Search Users..."
            />
            <ul className="w-[50%] rounded-md bg-slate-600 shadow-md">
              {showDropdown
                ? filteredUsers?.map((user) => (
                    <li
                      key={user}
                      className="px-4 py-2 text-sm tracking-wider text-white"
                    >
                      {user}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchAutocomplete;
