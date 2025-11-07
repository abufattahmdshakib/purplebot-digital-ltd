"use client";
import React from "react";
import { Layers } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$750",
    per: "/month",
    contents: {
      "Content Revision": "Upto 2",
      "Account Manager": "Shared",
      "Monthly Reporting": "🌸",
      "Content Size Adaptations": "10",
      "Motion or Carousel Content": "2",
      "Image Based Content": "8",
      "Scheduling and Posting": "🌸",
      "Total Content Count": "10",
      "Monthly Content Plan": "🌸",
      "Story Publication": "In 2 Day Intervals",
      "Copywriting": "🌸",
      "Standing Meetings": "Monthly",
    },
  },
  {
    name: "Business",
    price: "$1000",
    per: "/month",
    contents: {
      "Content Revision": "Upto 3",
      "Account Manager": "Shared",
      "Monthly Reporting": "🌸",
      "Content Size Adaptations": "15",
      "Motion or Carousel Content": "3",
      "Image Based Content": "12",
      "Scheduling and Posting": "🌸",
      "Total Content Count": "15",
      "Monthly Content Plan": "🌸",
      "Story Publication": "In 1 Day Intervals",
      "Copywriting": "🌸",
      "Standing Meetings": "Bi-Monthly",
    },
  },
  {
    name: "Enterprise",
    price: "$1250",
    per: "/month",
    contents: {
      "Content Revision": "Upto 4",
      "Account Manager": "Shared",
      "Monthly Reporting": "🌸",
      "Content Size Adaptations": "20",
      "Motion or Carousel Content": "4",
      "Image Based Content": "16",
      "Scheduling and Posting": "🌸",
      "Total Content Count": "20",
      "Monthly Content Plan": "🌸",
      "Story Publication": "Everyday",
      "Copywriting": "🌸",
      "Standing Meetings": "Weekly",
    },
  },
];

const features = [
  "Content Revision",
  "Account Manager",
  "Monthly Reporting",
  "Content Size Adaptations",
  "Motion or Carousel Content",
  "Image Based Content",
  "Scheduling and Posting",
  "Total Content Count",
  "Monthly Content Plan",
  "Story Publication",
  "Copywriting",
  "Standing Meetings",
];

export default function PlansPricingBanner() {
  const rowHeight = "h-14";    // feature/content rows
  const headerHeight = "h-36"; // plan header section

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="grid grid-cols-4 gap-4">
          {/* Feature Column */}
          <div className="flex flex-col bg-white border-gray-200">
            {/* Spacer to match plan header height */}
            <div className={`${headerHeight}`}></div>

            {/* Feature Rows */}
            <div className="flex flex-col">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`text-left font-medium text-gray-800 flex items-center px-4 ${rowHeight} ${
                    i === 0 ? "" : "border-t border-gray-200"
                  }`}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Plan Columns */}
          {plans.map((plan, i) => (
            <div
              key={i}
              className="flex flex-col bg-white hover:border-2 hover:border-[#b17af0] transition-all duration-200"
            >
              {/* Plan Header */}
              <div
                className={`text-center flex flex-col items-center justify-center ${headerHeight}`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-[#b17af0]/10 rounded-full flex items-center justify-center">
                    <Layers className="text-[#b17af0] w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#6a359c]">
                    {plan.name}
                  </h3>
                  <p className="text-3xl font-bold text-gray-900">
                    {plan.price}
                    <span className="text-base font-normal text-gray-500">
                      {plan.per}
                    </span>
                  </p>
                </div>
              </div>

              {/* Feature Rows */}
              <div className="flex flex-col">
                {features.map((feature, j) => (
                  <div
                    key={j}
                    className={`flex justify-center items-center px-4 ${rowHeight} ${
                      j === 0 ? "" : "border-t border-gray-200"
                    }`}
                  >
                    <span
                      className={`${
                        plan.contents[feature] === "🌸"
                          ? "text-pink-500 text-lg"
                          : plan.contents[feature].includes("Upto") ||
                            plan.contents[feature].includes("Intervals") ||
                            plan.contents[feature].includes("Shared") ||
                            plan.contents[feature].includes("Monthly") ||
                            plan.contents[feature].includes("Everyday")
                          ? "font-semibold text-gray-900"
                          : "text-gray-800"
                      }`}
                    >
                      {plan.contents[feature]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
