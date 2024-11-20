import React from "react";
import {  Col } from "react-bootstrap";

import { componentTypes } from "../constent";
import "../ProductCard/style.css";

const ProductCard = ({ product, componentType }) => {
  const {
    icon = "",
    title = "",
    description = "",
    actionTitle = "",
    label = "",
  } = product || {};
  return (
    <Col>
      <div class="insurance-card">
        {label && componentType === componentTypes.ins && (
          <div class="discount-label">{label}</div>
        )}
        <div class="card-content">
          <div class="card-info">
            <div class="card-icon card-icon-left">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div class="card-price">
              {actionTitle}
              <span>→</span>
            </div>
          </div>
          <div class="card-icon card-icon-right">{icon}</div>
        </div>
        {label && <button class="mobile-button">{label}</button>}
      </div>
    </Col>
  );
};

export default ProductCard;
