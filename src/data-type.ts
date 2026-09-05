type img = {
  id: number;
  path: string;
};

type Feature = {
  id: number;
  icon: { text: string; bg: string };
  heading: string;
  paragraph: string;
  images: img[];
};

const features: Feature[] = [
  {
    id: 1,
    icon: { text: "✋", bg: "bg-icon1-bg" },
    heading: "Collect Feedback at Multiple Touchpoints",
    paragraph:
      "Provide a comprehensive understanding of the customer experience.",
    images: [
      {
        id: 1,
        path: "/photo_1.png",
      },
      {
        id: 2,
        path: "/photo_1@2x.png",
      },
    ],
  },
  {
    id: 2,
    icon: { text: "🥅", bg: "bg-icon2-bg" },
    heading: "Ask Targeted and Specific Questions",
    paragraph:
      "Avoid vague or open-ended questions that may not yield actionable insights.",
    images: [
      {
        id: 1,
        path: "/photo_2.png",
      },
      {
        id: 2,
        path: "/photo_2@2x.png",
      },
    ],
  },
  {
    id: 3,
    icon: { text: "💬", bg: "bg-icon3-bg" },
    heading: "Prioritize and Respond to Feedback",
    paragraph:
      "Communicate the changes or improvements you've made in response to their feedback.",
    images: [
      {
        id: 1,
        path: "./photo_3.png",
      },
      {
        id: 2,
        path: "/photo_3@2x.png",
      },
    ],
  },
];

export { type Feature };
export { features };
