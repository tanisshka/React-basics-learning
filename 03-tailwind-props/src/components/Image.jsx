/* eslint-disable @next/next/no-img-element */


export default function Card2(props) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={props.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="decriptions">
            {props.description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
