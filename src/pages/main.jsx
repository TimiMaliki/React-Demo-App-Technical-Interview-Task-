import { useEffect, useState } from "react";

const Main = () => {
    const [data , setData] = useState([])
    useEffect(() =>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) =>res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err.message))

    },[data])
    return ( 
        <section className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-pink-100 py-10 px-4 lg:px-24">
              <div className="cards-container mt-4 w-full h-full md:grid lg:grid grid md:grid-cols-2 lg:grid-cols-3  gap-4">

{data.map((user)=> (
    <div
    className="card w-full h-full border border-red-300 rounded shadow-lg cursor-pointer hover:border-white hover:bg-black hover:text-white transition-all  duration-200 "
    key={user.id}
  >
      <div className="w-full h-full mt-4 text-center">
        <div className="content text-center">
            <h4 className="text-sm font-semibold mb-4"> <span className="text-xl font-semibold"> User Id : </span> {user.id}</h4>
          <h3 className="text-sm font-semibold mb-6">
          <span className="text-xl font-semibold">Title : </span>{user.title}
          </h3>
          <p className="text-lg p-2">
          <span className="text-xl font-semibold">Body : </span> {user.body}
          </p>
        </div>
      </div>
    </div>
))}
              </div>

            </section>
     );
}
 
export default Main;