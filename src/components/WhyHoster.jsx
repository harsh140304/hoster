import React from "react";

const WhyHoster = () => {
  return (
    <section id="why-hoster" className="my-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Hoster?</h2>
      <div className="grid md:grid-cols-3 gap-6 text-gray-600 max-w-6xl mx-auto">
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Lightning-Fast Setup</h3>
          <p>Get your website online in under 5 minutes. No technical skills needed.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
          <p>Only pay for what you need — scalable plans with no hidden fees.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p>Need help? Our friendly team is available around the clock via chat and email.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyHoster;
