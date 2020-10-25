import React, { useState } from "react";
import "./ProductRows.css";
// import ItemsCarousel from "react-items-carousel";

function ProductRows({
  productList: { id, title, price, description, category, image, rating },
  i,
}) {
  //   const [activeItemIndex, setActiveItemIndex] = useState(0);
  //   const chevronWidth = 40;
  return (
    <div className="productRow">
      <a href={image}>
        <img key={id} src={image} alt={title} />
      </a>
      {/* Title
      <h2>{title}</h2>
      <div className="row__posters">
        {/* Several row posters */}
      {/* <img key={id} className="row__poster" src={image} alt={title} /> 
      </div> */}
      {/* <div
        style={{
          padding: `0 ${chevronWidth}px`,
          height: "100px",
          width: "1000px",
        }}
      >
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={5}
          gutter={20}
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {productLists?.map((productList, i) => (
            <div style={{ height: 200, background: "#EEE" }}>
              <img
                key={productList.id}
                src={productList.image}
                alt={productList.title}
              />
            </div>
          ))}
          <div style={{ height: 200, background: "#EEE" }}>Second card</div>
          <div style={{ height: 200, background: "#EEE" }}>Third card</div>
          <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
          <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
          <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
          <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
          <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
        </ItemsCarousel>
      </div> */}
    </div>
  );
}

export default ProductRows;
