import Link from 'next/link'
import React from 'react'



const page  = async () => {

      const res = await fetch("https://jsonplaceholder.typicode.com/users" , {method: "GET"})

      interface IUser {
          "id": number,
          "name": string,
           "email": string,
           "phone" : number,
          "website" : string,
      }

      const users : IUser[] = await res.json()

      console.log(users)

  return (
    <div>
      {
         users.map((user)=>{
          return <div key={user.id}>
                <Link href={`/users/${user.id}`}><h1>{user.name}</h1></Link>
          </div>
         })
      }

        
    
    
    </div>
  )
}

export default page


