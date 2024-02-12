import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function UserCard({ user }) {
  return (
    <div className="max-w-sm bg-[#FBFCFF] shadow-sm rounded-2xl border border-[#BFC8E5] overflow-hidden">
      <div className="flex items-center">
        <img
          className="m-3 w-[70px] rounded-full shadow-sm"
          src={user?.image}
          alt="Avatar"
        />
        <div className="ml-3">
          <Link to="/user-details" state={{ user: user }}>
            <h1 className="text-xl font-bold">
              {user?.firstName} {user?.lastName}
            </h1>
          </Link>
          <p className="text-sm text-gray-600 mb-2">{user?.email}</p>
        </div>
      </div>
      <div className="p-4">
        <p>
          {user?.address?.address}, {user?.address?.city}
        </p>
        <p className="text-sm text-gray-600">Company: {user?.company?.name}</p>
      </div>
    </div>
  );
}
