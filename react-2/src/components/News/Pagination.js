import React, { useState, useEffect } from "react";
import "./Pagination.css";
const Pagination = ({ showperpage, onpaginationchange, total }) => {
  const [counter, setcounter] = useState(1);
  const [numberofbutton, setnumberofbutton] = useState(
    Math.ceil(total / showperpage)
  );

  useEffect(() => {
    const value = showperpage * counter;
    onpaginationchange(value - showperpage, value);
  }, [counter]);
  const onbuttonclick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setcounter(1);
      } else {
        setcounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberofbutton === counter) {
        setcounter(counter);
      } else {
        setcounter(counter + 1);
      }
    }
  };
  return (
    <div className="pagination2">
      <div class="pagination flex-row">
        <button className="arrow-btn" onClick={() => onbuttonclick("prev")}>
          <i className="fas fa-chevron-left"></i>
        </button>

        {new Array(numberofbutton).fill("").map((el, index) => (
          <div class={`page-item ${index+1===counter ?"active":null}` }>
          <a href="#" className="pages" onClick={()=>setcounter(index+1)}>
            {index + 1}
          </a>
          </div>
        ))}
        <button className="arrow-btn" onClick={() => onbuttonclick("next")}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
