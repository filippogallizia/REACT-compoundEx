import React, { Fragment, useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      label: "Paris",
      icon: "🧀",
      content: <Description city="paris" />,
    },
    {
      label: "Lech",
      icon: "⛷",
      content: <Description city="lech" />,
    },
    {
      label: "Madrid",
      icon: "🍷",
      content: <Description city="madrid" />,
    },
  ];

  return (
    <div className="App">
      <Accordion data={data} position="bottom" />
    </div>
  );
}

function Accordion({ data, position }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div data-accordion>
      {data.map((item, index) => {
        const isActive = index === activeIndex;

        const title = (
          <div data-panel-title onClick={() => setActiveIndex(index)}>
            <span>{isActive ? "-" : "+"}</span>
            <span>{item.label}</span>
            <span>{item.icon}</span>
          </div>
        );

        const description = (
          <div data-panel-content style={{ display: isActive ? "" : "none" }}>
            {item.content}
          </div>
        );

        return (
          <Fragment key={index}>
            {position === "bottom"
              ? [description, title]
              : [title, description]}
          </Fragment>
        );
      })}
    </div>
  );
}

function Description({ city }) {
  const data = {
    paris:
      "Paris is the capital and most populous city of France, with a population of 2,148,271 residents. Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, science and the arts.",
    lech:
      "Lech am Arlberg is a mountain village and an exclusive ski resort in the Bludenz district in the Austrian state of Vorarlberg on the banks of the river Lech.",
    madrid:
      "Madrid is the capital and most populous city of Spain. As the capital city of Spain, seat of government, and residence of the Spanish monarch, Madrid is also the political, economic and cultural centre of the country.",
  };
  return <div>{data[city]}</div>;
}

export default App;
