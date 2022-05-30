import React from "react";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export default function RQSuperHeroesPage() {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching: ", data);
  };

  const onError = (err) => {
    console.log("Perform side effect after encountering error: ", err);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroesPage</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {/* refetch của useQuery sẽ giúp call api 1 cách thủ công */}
      {data?.data.map((hero) => {
        return (
          <div key={hero?.id}>
            <Link to={`/rq-super-heroes/${hero?.id}`}>{hero?.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
}
