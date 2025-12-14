const users = [
  {
    user: {
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "👩‍💼",
      role: "Admin",
      status: "Active",
      stats: {
        posts: 145,
        followers: 2834,
        following: 421,
      },
    },
    theme: {
      backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
      textColor: "text-gray-800",
      avatarBg: "bg-purple-300",
      badgeBg: "bg-purple-200",
    },
    actions: {
      primary: {
        label: "View Profile",
        className: "bg-purple-500 text-white hover:bg-purple-600",
      },
      secondary: {
        label: "Message",
        className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      },
    },
  },
  {
    user: {
      name: "Bob Smith",
      email: "bob@example.com",
      avatar: "👨‍💻",
      role: "Developer",
      status: "Online",
      stats: {
        projects: 28,
        commits: 1523,
        reviews: 89,
      },
    },
    theme: {
      backgroundColor: "bg-gradient-to-br from-green-100 to-teal-100",
      textColor: "text-gray-800",
      avatarBg: "bg-green-300",
      badgeBg: "bg-green-200",
    },
    actions: {
      primary: {
        label: "View Profile",
        className: "bg-green-500 text-white hover:bg-green-600",
      },
      secondary: {
        label: "Collaborate",
        className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      },
    },
  },
];

function UserProfile({ user, theme, actions }) {
  return (
    <div
      className={`h-full w-full ${theme.backgroundColor} ${theme.textColor}`}
    >
      <h2 className="text-center text-2xl font-semibold ">User Info</h2>
      <div className="h-full w-full flex flex-col space-x-5 items-start">
        <div className="w-full flex gap-5">
          <h3
            className={`rounded-full flex items-center justify-center h-15 w-15 ${theme.avatarBg}`}
          >
            {user.avatar}
          </h3>
          <div className="flex-col flex gap-1">
            <h1 className="font-semibold text-xl">{user.name}</h1>
            <h3 className="text-xs text-gray-600">{user.email}</h3>
            <div className="flex space-x-5 ">
              <h3
                className={`font-medium rounded-2xl px-2 py-1 text-xs ${theme.avatarBg} ${theme.textColor}`}
              >
                {user.role}
              </h3>
              <h3
                className={`font-medium rounded-2xl px-2 py-1 text-xs ${theme.avatarBg} ${theme.textColor}`}
              >
                {user.status}
              </h3>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center w-full justify-evenly mt-5">
          {Object.entries(user.stats).map(([value, key]) => (
            <div
              key={value}
              className="flex justify-start flex-col items-center"
            >
              <h1 className="font-bold text-xl ">{key}</h1>
              <h1 className="">{value}</h1>
            </div>
          ))}
        </div>
        <div className="flex w-full mt-5">
          {Object.entries(actions).map(([key, value]) => {
            console.log(key);
            console.log(value);
            return (
              <button
                key={key}
                className={`${value.className} w-full py-2 font-medium`}
              >
                {value.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ComplexProps() {
  return (
    <div className="space-y-5 p-5">
      <h1 className="font-semibold text-3xl ">User Profile Cards</h1>
      <div className="h-full w-full flex flex-row justify-center items-center">
        {users.map((users, idx) => (
          <UserProfile {...users} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default ComplexProps;
