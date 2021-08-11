import React from "react";

export default function PriceCard(props) {
  let data = props.data;
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            {data.title}
          </h5>
          <h6 class="card-price text-center">
            ${data.price}
            <span class="period">/month</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            {data.features.map((feature) => {
              return feature.enabled ? (
                <li>
                  <span class="fa-li">
                    <i class="fas fa-check"></i>
                  </span>
                  {feature.highlighted?<strong>{feature.name}</strong>:feature.name}
                </li>
              ) : (
                <li class="text-muted">
                  <span class="fa-li">
                    <i class="fas fa-times"></i>
                  </span>
                  {feature.name}
                </li>
              );
            })}
          </ul>
          <div class="d-grid">
            <button class="btn btn-primary text-uppercase">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
