import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Skeleton } from "@material-ui/lab";

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <div
            style={{
              maxWidth: 700,
              margin: "auto",
              marginTop: 100,
            }}
            className="col"
          >
            <Skeleton variant="rect" height={200} />
            <Skeleton animation="wave" />
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return <>{children}</>;
}
export default AuthWrapper;
