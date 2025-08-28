import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-pink-100 py-10 px-4 lg:px-24">
      {data ? (
        <div
          key={data.id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-2xl rounded-xl overflow-hidden border border-blue-100"
        >
          {/* Info Section */}
          <div className="p-8 flex flex-col justify-center space-y-5 text-gray-800">
            <h2 className="text-3xl font-extrabold text-blue-800">
              {data.title}
            </h2>

            <div className="text-lg font-medium">
              <span className="text-black text-2xl">Body:</span>
              {data.body || "Not found"}
            </div>

            <div className="pt-6">
              <Link to="/main">
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium  bg-black text-white rounded-lg">
                  <span className="relative w-40 px-5 py-2.5 transition-all ease-in duration-200 bg-white text-black rounded-md group-hover:bg-opacity-0">
                    ← Back Home
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </section>
  );
};

export default Details;
