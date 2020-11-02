import React from "react";
import { BsSearch } from "react-icons/bs";
import { appContext } from "../../context/context";

function Search() {
  // getting Req data from appContext
  const { request } = React.useContext(appContext);

  // Use State
  const [user, setUser] = React.useState("");
  // Get valuse from global context

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
    }
  };

  return (
    <section>
      <div className="searchwrapper">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Search Users Here"
            />
            <BsSearch className="searchIcon" />
          </form>
        </div>
        <h4>Requests {request || 0}/60</h4>
      </div>
    </section>
  );
}

export default Search;
