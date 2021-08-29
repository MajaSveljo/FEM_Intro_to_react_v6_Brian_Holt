const Pet = (props) => {
  return (
    <div>
      <img className="image-container" src={props.images} alt="pet" />
      <h2>{props.name}</h2>
      <h4>
        {props.animal} - {props.breed} - {props.location}
      </h4>
    </div>
  );
};

export default Pet;
