import React, { useState } from "react";
import ProductList from "./ProductList";
import { Grid, Grow, Typography } from "@material-ui/core";
import "./ProductLists.css";
import ProductRows from "./ProductRows";
import ItemsCarousel from "react-items-carousel";
import { useStateValue } from "./StateProvider";

function ProductLists({ productLists }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;

  return (
    <div className="productLists">
      <div className="home__container">
        <img
          className="home__image"
          //   src="https://images-na.ssl-images-amazon.com/images/G/01/sm/Evergreen_Shared/RebrandAssets/Sept2020/GW_Banner_1500x600_US_1x._CB404913951_.jpg"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Grow in>
            <Grid container alignItems="stretch" spacing={3}>
              {productLists?.map((productList, i) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  style={{ display: "flex" }}
                >
                  <ProductList productList={productList} i={i} />
                </Grid>
              ))}
            </Grid>
          </Grow>
        </div>

        <div
          className="productLists__row"
          style={{
            padding: `0 ${chevronWidth}px`,
            width: "1300px",
            overflow: "hidden",
          }}
        >
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            alwaysShowChevrons="true"
            activePosition="left"
            numberOfCards={5}
            gutter={20}
            leftChevron={
              <button className="productLists__button">{"<"}</button>
            }
            rightChevron={
              <button className="productLists__button">{">"}</button>
            }
            outsideChevron
            chevronWidth={chevronWidth}
            style={{ overflow: "hidden" }}
          >
            {productLists?.map((productList, i) => (
              <div>
                <ProductRows productList={productList} />
              </div>
            ))}
          </ItemsCarousel>
          {/* <ProductRows /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductLists;
