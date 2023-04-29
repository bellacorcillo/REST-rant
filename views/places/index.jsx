const React = require('react');
const Def = require('../default');

function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <a href={`/places/${place.id}`}>
          <img src={place.pic} alt={place.name} />
          <h2>{place.name}</h2>
          <p>{place.description}</p>
        </a>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>Hot spot places</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index
