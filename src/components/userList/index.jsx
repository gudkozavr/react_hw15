import { useCallback, useMemo, useState } from "react";
import UserItem from "../userItem";

export default function UserList() {
  const [filterValue, setFilterValue] = useState("");
  const usersList = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Johnson" },
    { id: 4, name: "Emily Davis" },
    { id: 5, name: "David Wilson" },
    { id: 6, name: "Olivia Brown" },
    { id: 7, name: "James Taylor" },
    { id: 8, name: "Sophia Martinez" },
    { id: 9, name: "Liam Anderson" },
    { id: 10, name: "Emma Thompson" },
  ];
  const filterUser = useCallback((value) => {
    return usersList.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
  }, []);

  const filteredUser = useMemo(
    () => filterUser(filterValue),
    [filterValue, filterUser]
  );

  function handleChange(e) {
    setFilterValue(e.target.value);
  }

  return (
    <div>
      <h1>User List</h1>
      <input
        value={filterValue}
        onChange={handleChange}
        type="text"
        placeholder="enter user name to filter"
      />
      {filteredUser.length > 0 ? (
        filteredUser.map((user) => {
          return <UserItem key={user.id} {...user} />;
        })
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
}
