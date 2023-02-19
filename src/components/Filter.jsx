import React, { useEffect } from "react";

function Filter({ setActiveCat, activeCat, setFiltered, posts }) {
  useEffect(() => {
    if (activeCat === 0) {
      setFiltered(posts);
      return;
    }
    const filtered = posts.filter((post) => post.tags.includes(activeCat));
    setFiltered(filtered);
  }, [activeCat]);

  return (
    <div className="filter-container p-5 lg:max-w-[1000px]">
      <button
        onClick={() => setActiveCat(0)}
        className={"btn " + (activeCat === 0 ? "active" : "")}
      >
        All
      </button>
      <button
        onClick={() => setActiveCat("Design")}
        className={"btn " + (activeCat === "Design" ? "active" : "")}
      >
        Design
      </button>
      <button
        onClick={() => setActiveCat("Development")}
        className={"btn " + (activeCat === "Development" ? "active" : "")}
      >
        Development
      </button>
      <button
        onClick={() => setActiveCat("Logo")}
        className={"btn " + (activeCat === "Logo" ? "active" : "")}
      >
        Logo
      </button>
      <button
        onClick={() => setActiveCat("HTML")}
        className={"btn " + (activeCat === "HTML" ? "active" : "")}
      >
        HTML
      </button>
      <button
        onClick={() => setActiveCat("CSS")}
        className={"btn " + (activeCat === "CSS" ? "active" : "")}
      >
        CSS
      </button>

      <button
        onClick={() => setActiveCat("Javascript")}
        className={"btn " + (activeCat === "Javascript" ? "active" : "")}
      >
        Javascript
      </button>

      <button
        onClick={() => setActiveCat("React")}
        className={"btn " + (activeCat === "React" ? "active" : "")}
      >
        React
      </button>
      <button
        onClick={() => setActiveCat("JSON")}
        className={"btn " + (activeCat === "JSON" ? "active" : "")}
      >
        JSON
      </button>

      <button
        onClick={() => setActiveCat("Bootstrap")}
        className={"btn " + (activeCat === "Bootstrap" ? "active" : "")}
      >
        Bootstrap
      </button>
      <button
        onClick={() => setActiveCat("Tailwind")}
        className={"btn " + (activeCat === "Tailwind" ? "active" : "")}
      >
        Tailwind
      </button>
      <button
        onClick={() => setActiveCat("Wordpress")}
        className={"btn " + (activeCat === "Wordpress" ? "active" : "")}
      >
        Wordpress
      </button>
      <button
        onClick={() => setActiveCat("Elementor")}
        className={"btn " + (activeCat === "Elementor" ? "active" : "")}
      >
        Elementor
      </button>
    </div>
  );
}

export default Filter;
