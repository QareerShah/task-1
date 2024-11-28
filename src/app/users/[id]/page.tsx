import React from 'react';

interface Params {
  params: {
    id: string;
  };
}

interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string; 
  website: string;
}

const page = async ({ params }: Params) => {
  const { id } = params; 

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); 

  if (!res.ok) {
   
    return <div>Error fetching data</div>;
  }

  const data: IUser = await res.json();
  console.log(data);

  return (
    <div>
      <h1>User ID: {id}</h1>
      <h1>Name: {data.name}</h1>
      <h1>Email: {data.email}</h1>
      <h1>Phone: {data.phone}</h1>
      <h1>Website: {data.website}</h1>
    </div>
  );
};

export default page;
