import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./search";

const Main = () => {
  const [data, setData] = useState([]);

  const [id , setID] = useState('');

 
   const viewData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .then((data) => setData([data]))
    .catch((err) => console.log(err.message));
   }
      
    
        

 
  const handleSubmitBtn = (e) => {
   e.preventDefault()
   viewData()
   if(!id){
    alert("please , fill in the form")
   }
  }
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-pink-100 py-10 px-4 lg:px-24">
        <Search
        id = {id}
        setID ={setID}
        handleSubmitBtn={handleSubmitBtn}
      
        />
    <div className="cards-container mt-4 w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length > 0 ? (
          data.map((user) => (
            <Link to={`/detail/${user.id}`} key={user.id}>
              <div className="card w-full h-full border border-red-300 rounded shadow-lg cursor-pointer hover:border-white hover:bg-black hover:text-white transition-all duration-200">
                <div className="w-full h-full mt-4 text-center">
                  <div className="content text-center">
                    <h4 className="text-sm font-semibold mb-4">
                      <span className="text-xl font-semibold">User Id : </span>
                      {user.id}
                    </h4>
                    <h3 className="text-sm font-semibold mb-6">
                      <span className="text-xl font-semibold">Title : </span>
                      {user.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No data found , Please Try searching with an ID.
          </p>
        )}
      </div>
    </section>
  );
};

export default Main;
