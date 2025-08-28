const Search = ({viewData , id , setID , handleSubmitBtn}) => {
    
    return ( 
        <div>
            <form onSubmit={handleSubmitBtn}>
            <input
              type="number"
              className="w-full h-10  text-xl bg-white p-8 border border-black outline-none rounded-lg shadow-lg mb-8"
              placeholder="Enter a user ID"
              required
              value={id}
              onChange={(e) => setID(e.target.value)}
            />
          
              <button
                onClick={viewData}
                class="relative inline-flex items-center justify-center p-2.5 mb-2 me-2 overflow-hidden text-lg font-medium text-white rounded-lg bg-black"
              >
             Search
              </button>
              </form>
          
        </div>
     );
}
 
export default Search;