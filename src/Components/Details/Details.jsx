import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, [id]);
  console.log(show)

  return <div>
    <h3>{show?.name}</h3>
    <div>
    <div>
      <img src={show?.image.medium} alt="" />
    </div>
    <div>
      <h3></h3>
    </div>
    </div>
  </div>;
};

export default Details;
