import { Link, useLocation } from "react-router-dom";

export default function UserDetails() {
  const location = useLocation();
  const user = location.state.user;
  // console.log(user);

  return (
    <div className="py-8">
      <h1 className="pb-6 px-8 mb-4 md:px-16 font-extrabold text-3xl ">
        User Details
      </h1>
      <Link className="mx-8 md:mx-16 text-[#849FFF]" to="/">
        &lt; Go Back
      </Link>
      <div className="max-w-md mx-auto p-8 bg-white border border-[#BFC8E5] sm:shadow-md rounded-md overflow-hidden">
        <img
          className="w-32 h-32 rounded-full mx-auto mb-4"
          src={user.image}
          alt="Avatar"
        />
        <div className="text-center text-xl font-bold mb-4">
          {user.firstName} {user.lastName}
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <div className="font-bold">First Name:</div>
            <div>{user.firstName}</div>
          </div>
          <div>
            <div className="font-bold">Last Name:</div>
            <div>{user.lastName}</div>
          </div>
          <div>
            <div className="font-bold">Email:</div>
            <div>{user.email}</div>
          </div>
          <div>
            <div className="font-bold">Address:</div>
            <div>
              {user.address.address}, {user.address.city}
            </div>
          </div>
          <div>
            <div className="font-bold">Company Name:</div>
            <div>{user.company.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
