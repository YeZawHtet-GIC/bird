import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React from "react";

export default function BirdDetails() {
  const { id } = useParams();
  const {
    data: bird,
    error,
    isPending,
  } = useFetch("http://localhost:8000/Tbl_Bird" + id);
  const navigate = useNavigate();
  const handleClick = () => {
    fetch("http://localhost:8000/Tbl_Bird" + bird.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="col-md-6 offset-md-3 text-center bg-dark p-5 rounded text-warning">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {bird && (
        <article>
          <h2>{bird.BirdMyanmarName}</h2>
          <h2>{bird.BirdEnglishName}</h2>
          <hr />
          <p>{bird.Description}</p>
          <img src={bird.ImagePath} alt={bird.BirdEnglishName} />
          <button onClick={handleClick} className="btn btn-outline-danger mt-3">
            Delete
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="btn btn-outline-primary mt-3 mx-3"
          >
            Back
          </button>
        </article>
      )}
    </div>
  );
}
