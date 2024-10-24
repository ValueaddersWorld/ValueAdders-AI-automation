import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 49,
    features: [
      'Basic AI automation',
      '5 automated workflows',
      'Email support',
      '1 user',
      'Access to basic AI tasks',
      'Limited marketplace templates',
    ],
  },
  {
    name: 'Pro',
    price: 99,
    features: [
      'Advanced AI automation',
      'Unlimited workflows',
      'Priority support',
      '5 users',
      'Custom integrations',
      'Full range of AI tasks',
      'Team collaboration features',
      'Full marketplace access',
      'Basic analytics and reporting',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Full-suite AI automation',
      'Unlimited everything',
      '24/7 premium support',
      'Unlimited users',
      'Dedicated account manager',
      'On-premise deployment option',
      'Advanced AI task customization',
      'Advanced team collaboration tools',
      'Custom marketplace solutions',
      'Advanced analytics and reporting',
    ],
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose the plan that's right for your business
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-sm text-gray-500">Comprehensive AI automation for your business needs.</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-base font-medium text-gray-500">/mo</span>}
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700"
                >
                  Get started
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">What's included</h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;