import { useState } from "react";


function ToTop() {
    const [hidden, setHidden] = useState(true);

  window.onscroll = function () {
    if (
    window.scrollY > 200
    ) {
        setHidden(false)
    } else {
        setHidden(true)
    }
  };
  return (
    <button
      className={`${hidden ? "hidden" : ""} z-50 fixed bottom-8 bg-lightred right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold`}
      
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      &uarr;
    </button>
  );
}

export default ToTop;
