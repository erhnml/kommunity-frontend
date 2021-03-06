import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const UIImage = (props) => {
  const {
    src, alt, lazy, height, className,
  } = props;
  const Image = () => <img src={src} alt={alt} className={className}/>;
  return (
    lazy
      ? <LazyLoad height={height}><Image/></LazyLoad>
      : <Image/>
  );
};

UIImage.defaultProps = {
};

UIImage.propTypes = {
  src: PropTypes.string,
  lazy: PropTypes.bool,
  height: PropTypes.int,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default UIImage;
