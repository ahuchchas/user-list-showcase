import { useEffect, useState } from "react";
import AddUserModal from "../components/AddUserModal";
import SearchBox from "../components/SearchBox";
import UserCard from "../components/UserCard";

export default function AllUser() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const result = await fetch("https://dummyjson.com/users");
      const data = await result.json();
      // console.log(data.users[0]);
      setUsers(data.users);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  function handleAddUser(newUser) {
    setUsers([newUser, ...users]);
    setShowModal(false);
  }

  function handleSearch(searchValue) {
    setSearchTerm(searchValue);
  }

  function handleSort(users) {
    if (sortTerm === "") {
      return users;
    } else {
      return users.sort((a, b) => {
        if (sortTerm === "name") {
          const aName = a.firstName + a.lastName;
          const bName = b.firstName + b.lastName;
          return aName.toLowerCase() < bName.toLowerCase() ? -1 : 1;
        } else if (sortTerm === "email") {
          return a.email.toLowerCase() < b.email.toLowerCase() ? -1 : 1;
        } else if (sortTerm === "company") {
          return a.company.name.toLowerCase() < b.company.name.toLowerCase()
            ? -1
            : 1;
        }
      });
    }
  }

  const filteredUsers = users.filter((user) => {
    const fullname = user?.firstName + user?.lastName;
    return fullname.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const sortedUsers = handleSort([...filteredUsers]);

  return (
    <div className="p-8 md:px-16">
      {/*page heading */}
      <h1 className="pb-6 font-extrabold text-3xl">All Users</h1>

      {/* action area */}
      <div className="flex flex-col-reverse items-stretch sm:flex-row sm:justify-between sm:items-start mb-4">
        <div className="flex flex-col gap-3">
          <SearchBox value={searchTerm} onSearch={handleSearch} />
          {/* sort option */}
          <select onChange={(e) => setSortTerm(e.target.value)}>
            <option value="">Sort by</option>
            <option value="name">Sorted by Name</option>
            <option value="email">Sorted by Email</option>
            <option value="company">Sorted by Company Name</option>
          </select>
        </div>

        {/* add user button */}
        <button
          className="bg-[#849FFF] text-white rounded-lg px-4 py-2 mb-2"
          onClick={() => setShowModal(true)}
        >
          Add User
        </button>
      </div>

      {showModal && (
        <AddUserModal
          onAdd={handleAddUser}
          onCancel={() => setShowModal(false)}
        />
      )}

      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="rounded-full border-4 border-gray-600 h-6 w-6 mr-2"></div>
          <span>Loding...</span>
        </div>
      )}

      {filteredUsers.length < 1 && (
        <div className="flex justify-center mt-20 h-screen">
          <span>No user matched your search!</span>
        </div>
      )}

      {/* user list */}
      <div className="my-10 grid gap-x-1 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {sortedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
