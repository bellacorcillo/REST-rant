import React, { Component } from "react";

class Show extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const response = await fetch(`/api/places/${this.props.match.params.id}`);
    const data = await response.json();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <main>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img src={data.place.pic} alt={data.place.name} />
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>{data.place.name}</h2>
            <h3>{data.place.category}</h3>
            <h4>{data.place.price}</h4>
            <p>{data.place.description}</p>
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
          </div>
        </div>
      </main>
    );
  }
}

export default Show

