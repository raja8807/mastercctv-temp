import React, { useEffect, useState } from "react";
import styles from "./products.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";
import { PRODUCTS_LIST } from "@/constants/products";
import FilterBox from "./filter_box/filter_box";
import FilterButton from "./filter_button/filter_button";
import { Cart, Cart2, Cart3, CartCheckFill } from "react-bootstrap-icons";

export const getFile = (prod) => {
  if (prod.prodType === "camera") {
    return `/images/products/camera/${prod.spec}/${prod.resolution}mp_${prod.type}.png`;
  }

  if (prod.prodType === "dvr") {
    return `/images/products/dvr/${prod.resolution}mp${prod.channels}ch.png`;
  }
  if (prod.prodType === "nvr") {
    return `/images/products/nvr/${prod.channels}ch.png`;
  }
  if (prod.prodType === "hdd") {
    return `/images/products/hdd/${prod.size}.png`;
  }
};

const ProductCard = ({ prod, type, addToCart }) => {
  return (
    <div className={styles.ProductCard}>
      <div
        className={styles.inner}
        style={{
          backgroundImage: `url("${getFile(prod)}")`,
        }}
      >
        <div
          className={styles.cartBtn}
          onClick={() => {
            addToCart(prod);
          }}
        >
          <div>
            <CartCheckFill /> Add To Cart
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <p>{prod.name}</p>
        <b>Rs.{prod.price}</b>
      </div>
    </div>
  );
};

const ProductsScreen = ({ cartItems, addToCart }) => {
  const [currentCategory, setCurrentCategory] = useState("All Products");
  const [showFilterBtn, setShowFilterBtn] = useState(false);

  useEffect(() => {
    const sectionTop = document.getElementById("product_section").offsetTop;

    window.addEventListener("scroll", (e) => {
      setShowFilterBtn(window.scrollY > sectionTop);
    });
  }, []);

  return (
    <div className={styles.ProductsScreen}>
      <section className={styles.banner}>
        <CustomContainer>
          <div className={styles.cont}>
            <h1>Browsr Products</h1>
            {/* <p>
              Not only will this reduce the probability of crime happening on
              your property, it will reduce or eliminate any liability that
              falls on you if you can show you have solid, well-designed
              commercial building security systems in place.
            </p> */}
            {/* <CustomButton>Know More</CustomButton> */}
          </div>
        </CustomContainer>
      </section>
      {showFilterBtn && (
        <FilterButton
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
      )}

      <section className={styles.products} id="product_section">
        <CustomContainer>
          {currentCategory?.name || currentCategory}
          <Row>
            <Col xs={12} lg={9}>
              {(currentCategory === "All Products" ||
                currentCategory?.key === "CAMERAS") && (
                <Row>
                  {PRODUCTS_LIST.CAMERAS.map((prod, idx) => (
                    <Col xs={12} md={6} lg={4} key={`cam_${idx}`}>
                      <ProductCard
                        prod={prod}
                        type="camera"
                        addToCart={addToCart}
                      />
                    </Col>
                  ))}
                </Row>
              )}

              {(currentCategory === "All Products" ||
                currentCategory?.key === "DVRS") && (
                <Row>
                  {PRODUCTS_LIST.DVRS.map((prod, idx) => (
                    <Col xs={12} md={6} lg={4} key={`dvr_${idx}`}>
                      <ProductCard
                        prod={prod}
                        type="dvr"
                        addToCart={addToCart}
                      />
                    </Col>
                  ))}
                </Row>
              )}

              {(currentCategory === "All Products" ||
                currentCategory?.key === "NVRS") && (
                <Row>
                  {PRODUCTS_LIST.NVRS.map((prod, idx) => (
                    <Col xs={12} md={6} lg={4} key={`nvr_${idx}`}>
                      <ProductCard
                        prod={prod}
                        type="nvr"
                        addToCart={addToCart}
                      />
                    </Col>
                  ))}
                </Row>
              )}

              {(currentCategory === "All Products" ||
                currentCategory?.key === "HDDS") && (
                <Row>
                  {PRODUCTS_LIST.HDDS.map((prod, idx) => (
                    <Col xs={12} md={6} lg={4} key={`hdd_${idx}`}>
                      <ProductCard
                        prod={prod}
                        type="hdd"
                        addToCart={addToCart}
                      />
                    </Col>
                  ))}
                </Row>
              )}
            </Col>

            <Col lg={3}>
              <FilterBox
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
              />
            </Col>
          </Row>
        </CustomContainer>
      </section>
    </div>
  );
};

export default ProductsScreen;
