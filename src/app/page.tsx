import Link from 'next/link'
import React from 'react'

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" });

  interface IUser {
    id: number,
    name: string,
    email: string,
    phone: number,
    website: string,
  }

  const users: IUser[] = await res.json();
  console.log(users);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        users.map((user) => {
          return (
            <div key={user.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Link href={`/users/${user.id}`}>
                <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-500">{user.name}</h2>
              </Link>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Phone: {user.phone}</p>
              <p className="text-gray-600">Website: {user.website}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default page;
