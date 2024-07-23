const PrevArrow = ({ className, style, onClick }) => (
  <span className={`prev ${className}`} style={{ ...style }} onClick={onClick}>
    <i className="fa fa-angle-left"></i>
  </span>
);

const NextArrow = ({ className, style, onClick }) => (
  <span className={`next ${className}`} style={{ ...style }} onClick={onClick}>
    <i className="fa fa-angle-right"></i>
  </span>
);

export { PrevArrow, NextArrow };
