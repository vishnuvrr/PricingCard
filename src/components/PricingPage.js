import React from "react";
import PriceCard from "./PriceCard";

export default function PricingPage() {
  let priceCardData = [
    {
      title: "FREE",
      price: 0,
      features: [
        {
          name: "Single User",
          enabled: true,
        },
        {
          name: "5GB Storage",
          enabled: true,
        },
        {
          name: "Unlimited Public Projects",
          enabled: true,
        },
        {
          name: "Community Access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: false,
        },
        {
          name: "Dedicated Phone Support",
          enabled: false,
        },
        {
          name: "Free Subdomain ",
          enabled: false,
        },
        {
          name: "Monthly Status Reports",
          enabled: false,
        },
      ],
    },
    {
      title: "PLUS",
      price: 9,
      features: [
        {
          name: "5 Users",
          enabled: true,
          highlighted:true
        },
        {
          name: "50GB Storage",
          enabled: true,
        },
        {
          name: "Unlimited Public Projects",
          enabled: true,
        },
        {
          name: "Community Access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: true,
        },
        {
          name: "Dedicated Phone Support",
          enabled: true,
        },
        {
          name: "Free Subdomain ",
          enabled: false,
        },
        {
          name: "Monthly Status Reports",
          enabled: false,
        },
      ],
    },
    {
      title: "PRO",
      price: 49,
      features: [
        {
          name: "Unlimited User",
          enabled: true,
          highlighted:true
        },
        {
          name: "150GB Storage",
          enabled: true,
        },
        {
          name: "Unlimited Public Projects",
          enabled: true,
        },
        {
          name: "Community Access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: true,
        },
        {
          name: "Dedicated Phone Support",
          enabled: true,
        },
        {
          name: "Free Subdomain ",
          enabled: true,
        },
        {
          name: "Monthly Status Reports",
          enabled: true,
        },
      ],
    },
  ];

  return (
    <section class="pricing py-5">
      <div className="container">
        <div className="row">
          {priceCardData.map((card) => {
            return <PriceCard data={card}></PriceCard>;
          })}
        </div>
      </div>
    </section>
  );
}
