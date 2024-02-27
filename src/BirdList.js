import React from "react";
import { Link } from "react-router-dom";

export default function BirdList({ birds }) {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {birds.map((bird) => (
          <div className="col" key={bird.Id}>
            <div className="card h-100">
              <img
                src={bird.ImagePath}
                alt="Bird Image"
                className="card-img-top img-fluid"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h2 className="card-title text-warning">
                  {bird.BirdMyanmarName}
                </h2>
                <h3 className="card-subtitle mb-2 text-muted">
                  {bird.BirdEnglishName}
                </h3>
              </div>
              <div className="card-footer">
                <Link to={`/bird/${bird.id}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
