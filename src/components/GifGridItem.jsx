import PropTypes from "prop-types";

const GifGridItem = ({ title, url }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={url} alt="" />
    </div>
  );
};

export default GifGridItem;

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
