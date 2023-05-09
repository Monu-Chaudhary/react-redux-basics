import { useFetch } from "./useFetch";

export default function FetchData({ username }) {
  const uri = `https://api.github.com/users/${username}`;
  console.log(uri);
  const { loading, data, error } = useFetch(uri);

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{JSON.stringify(error)}</h1>;
  return (
    <>
      <img src={data.avatar_url} alt="profile" />
      <p>{data.name}</p>
      {/* <p>{JSON.stringify(data)}</p> */}
    </>
  );
}
