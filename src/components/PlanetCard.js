import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div
        data-testid="planet-card"
        className={ `planet-card ${planetName
          .toLowerCase()
          .replace('ú', 'u')
          .replace('ê', 'e')

        }` }
      >
        <img src={ planetImage } alt={ `Planeta ${planetName}` } width="100px" />
        <p data-testid="planet-name" className="planet-name">{planetName}</p>
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
