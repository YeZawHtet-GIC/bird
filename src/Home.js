import "./App.css";
import BirdList from "./BirdList";
import useFetch from "./useFetch";

function Home() {
  const {
    error,
    isPending,
    data: birds,
  } = useFetch("http://localhost:8000/Tbl_Bird");
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && (
        <div className="text-warning text-center fs-1">Loading...</div>
      )}
      {birds && <BirdList birds={birds} />}
    </>
  );
}

export default Home;
