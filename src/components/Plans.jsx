import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: '$5/mo',
    features: ['1 Website', '50 GB Storage', 'Basic Support'],
  },
  {
    name: 'Pro',
    price: '$15/mo',
    features: ['10 Websites', '200 GB Storage', 'Priority Support'],
  },
  {
    name: 'Enterprise',
    price: '$30/mo',
    features: ['Unlimited Websites', '1 TB Storage', '24/7 Dedicated Support'],
  },
];

const Plans = () => {
  return (
    <section id="plans" className="py-12 bg-white" >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Choose Your Plan</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border rounded-lg p-6 flex-1 flex flex-col items-center shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2 text-gray-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="list-disc list-inside">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white rounded-md px-6 py-3">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
