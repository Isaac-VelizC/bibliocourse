import React, { useRef, useEffect } from "react";

const Search = ({ isVisible, onClose }) => {
  const searchBoxRef = useRef(null);

  useEffect(() => {
    const { current } = searchBoxRef;
    if (isVisible) {
      current.style.display = "block";
      requestAnimationFrame(() => {
        current.style.opacity = "1";
      });
    } else {
      current.style.opacity = "0";
      current.addEventListener(
        "transitionend",
        () => {
          if (current.style.opacity === "0") {
            current.style.display = "none";
          }
        },
        { once: true }
      );
    }
  }, [isVisible]);

  return (
    <div ref={searchBoxRef} className="search-box">
      <div className="serach-form">
        <div className="closebtn" onClick={onClose}>
          <span></span>
          <span></span>
        </div>
        <form action="#">
          <input type="text" placeholder="Search by keyword" />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
