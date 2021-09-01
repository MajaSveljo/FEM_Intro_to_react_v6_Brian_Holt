import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundry from "./ErrorBoundry";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading ...</h2>;
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;

    // throw new Error("brokeeen");
    // because of how JS works, if the error happened above the return
    // we would never get to the error boundry. That's why
    // we'll put the boundry above (or literaly below in code)

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundry() {
  return (
    <ErrorBoundry>
      <DetailsWithRouter />
    </ErrorBoundry>
  );
}
