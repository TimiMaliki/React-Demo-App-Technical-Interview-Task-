const Header = () => {
    return ( 
        <div className="py-4 bg-black text-white flex justify-between p-10">
            <div className="name">
                <a href="https://github.com/TimiMaliki/React-Demo-App-Technical-Interview-Task-">Timi Maliki</a>
            </div>
            <div className="company text-center">
               <a href="https://youbloom.com/">YouBloom</a>
            </div>
            <div className="test hidden md:block">
                <h3 className="cursor-pointer">React Demo App – Technical Interview Task</h3>
            </div>
        </div>
     );
}
 
export default Header;