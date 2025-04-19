import React from "react";

const features = [
  {
    icon: "📋",
    title: "An Easy",
    subtitle: "Study Approach",
    color: "bg-yellow-300",
  },
  {
    icon: "👨‍🏫",
    title: "Free",
    subtitle: "Teaching Materials",
    color: "bg-white",
  },
  {
    icon: "📱",
    title: "A Free",
    subtitle: "Mobile Application",
    color: "bg-yellow-300",
  },
  {
    icon: "🎒",
    title: "An",
    subtitle: "Accredited School",
    color: "bg-yellow-300",
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl font-extrabold  text-yellow-500 mb-2 ">Start Now</h2>
      <p className="text-2xl font-extrabold mb-10 ">Learn a new language</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-md p-6 ${feature.color} shadow-md flex flex-col items-center justify-between`}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-base">{feature.subtitle}</p>
            <a href="#" className="mt-4 text-sm font-medium text-black underline underline-offset-4 hover:text-yellow-600">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
