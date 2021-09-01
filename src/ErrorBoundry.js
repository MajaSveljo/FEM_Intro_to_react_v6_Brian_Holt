import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundry extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // would log this to Sentry or another monitoring services
    console.error("ErrorBoundry caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  // this is a bad place to do it because this method doesn't get called on first render
  //   componentDidUpdate() {
  //     if (this.state.hasError) {
  //       setTimeout(() => this.setState({ redirect: true }), 5000);
  //     }
  //   }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error.
          <Link to="/">Click here to go back to the homepage</Link> or wait 5
          seconds
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
