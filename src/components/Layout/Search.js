import React from "react";
import { appContext } from "../../context/context";

function Search() {
  // getting Req data from appContext
  const { request, error, searchUser } = React.useContext(appContext);

  // Use State
  const [user, setUser] = React.useState("");
  // Get valuse from global context

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchUser(user);
      // throw err
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
              placeholder="Enter User Name"
            />
            <input className="searchIcon" value="Search" type="submit" />
          </form>
        </div>
        <h4>Requests {request || 0}/60</h4>
      </div>
      <p className="throwError"> {error.condition ? error.msg : ""} </p>
    </section>
  );
}

export default Search;
