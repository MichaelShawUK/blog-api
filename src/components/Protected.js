import { useLoaderData } from "react-router-dom";

const Protected = () => {
  const res = useLoaderData();
  console.log(res);
  return (
    <div>
      <p>Protected Route</p>
      <p>{res.data.success.toString()}</p>
      <p>{res.data.message}</p>
    </div>
  );
};

export default Protected;
