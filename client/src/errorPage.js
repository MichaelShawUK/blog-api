import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>An unexpected error has occurred</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/">Return to homepage</a>
    </div>
  );
};

export default ErrorPage;
