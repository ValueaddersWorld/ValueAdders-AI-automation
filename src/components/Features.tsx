import React from 'react';
import { Zap, Briefcase, TrendingUp, Shield, MessageSquare, Globe, Store, BarChart2 } from 'lucide-react';

const features = [
  {
    name: 'Intelligent Automation',
    description: 'Our AI-powered solutions automate complex tasks, freeing up your team to focus on strategic initiatives.',
    icon: Zap,
  },
  {
    name: 'Business Process Optimization',
    description: 'Streamline your operations and eliminate inefficiencies with our smart process optimization tools.',
    icon: Briefcase,
  },
  {
    name: 'Predictive Analytics',
    description: 'Leverage the power of AI to forecast trends and make data-driven decisions for your business.',
    icon: TrendingUp,
  },
  {
    name: 'Secure and Scalable',
    description: 'Our platform is built with enterprise-grade security and scales seamlessly as your business grows.',
    icon: Shield,
  },
  {
    name: 'Advanced AI Tasks',
    description: 'Perform sentiment analysis, language translation, and more with our expanded AI capabilities.',
    icon: MessageSquare,
  },
  {
    name: 'Collaborative Workflows',
    description: 'Enable seamless teamwork with our collaborative features for efficient team workflows.',
    icon: Globe,
  },
  {
    name: 'Automation Marketplace',
    description: 'Access a wide range of pre-built automation templates to kickstart your projects.',
    icon: Store,
  },
  {
    name: 'Advanced Analytics',
    description: 'Gain deeper insights with our advanced analytics and comprehensive reporting features.',
    icon: BarChart2,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A comprehensive AI automation platform
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover how our expanded AI-powered solutions can transform your operations and drive growth.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;