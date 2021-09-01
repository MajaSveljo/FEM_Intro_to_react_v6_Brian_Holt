import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // would log this to Sentry or another monitoring services
    console.error("ErrorBoundry caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          This listing has an error.
          <Link to="/">Click here to go back to the homepage</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
