import React from "react";
import { Container, Row } from "react-bootstrap";

import produtList from "./data";
import ProductCard from "../ProductCard";

import { componentTypes } from "../constent";

const CreditProducts = () => {
  return (
    <Container>
      <div>
        <h5 style={{ color: "#1b1dc7", marginTop: "5%" }}>Credit Products</h5>
      </div>

      <hr style={{ width: "20%" }} />

      <Row xs={4} md={2} lg={3} xxl={4} className="g-4">
        {produtList.map((product, idx) => (
          <ProductCard
            key={idx}
            product={product}
            componentType={componentTypes.cre}
          />
        ))}
      </Row>
    </Container>
  );
};

export default CreditProducts;