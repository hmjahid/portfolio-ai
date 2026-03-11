// Re-export from services.ts for single source of truth
export { SERVICE_PACKAGES as PRICING_PLANS } from './services';

export const MAINTENANCE_PLANS = [
  {
    id: 'package-1',
    name: 'Package 1',
    subtitle: 'Essential Maintenance',
    price: '$150',
    period: '/month',
    description: 'Core maintenance for your WordPress site',
    idealFor: 'Small businesses needing reliable upkeep',
    features: [
      'Routine maintenance',
      'Security updates',
      'Hosting monitoring',
      'Domain support',
      'Uptime monitoring',
      'Limited content updates (hourly available)',
    ],
    hourlyRates: [
      { label: 'Design, Development & Content updates', rate: '$15/hour' },
      { label: 'Bug fixing, Optimization & improvements', rate: '$20/hour' },
    ],
    popular: false,
  },
  {
    id: 'package-2',
    name: 'Package 2',
    subtitle: 'Enhanced Care',
    price: '$350',
    period: '/month',
    description: 'For marketing-critical websites',
    idealFor: 'Companies that rely heavily on their website for marketing and cannot afford downtime',
    features: [
      'Everything in Package 1',
      'Moderate content updates',
      'High-priority support',
      'Prometheus + Grafana monitoring',
      'Performance dashboards & alerts',
    ],
    hourlyRates: [
      { label: 'Design, Development & Content updates', rate: '$15/hour' },
      { label: 'Bug fixing, Optimization & improvements', rate: '$20/hour' },
    ],
    popular: true,
  },
  {
    id: 'package-3',
    name: 'Package 3',
    subtitle: 'Full Management & Priority Support',
    price: '$500',
    period: '/month',
    description: 'Complete website responsibility',
    idealFor: 'Businesses that want a dedicated website manager handling everything without internal stress',
    features: [
      'Everything in Package 1 + Package 2',
      'Full website management responsibility',
      'Up to 40 hours/month on-demand support',
      'Priority content updates',
      'Landing page improvements',
      'UX enhancements',
      'Security monitoring',
      'Performance optimization',
      'Technical troubleshooting',
      'Strategic improvements when needed',
    ],
    hourlyRates: [
      { label: 'Design, Development & Content updates', rate: '$15/hour' },
      { label: 'Bug fixing, Optimization & improvements', rate: '$20/hour' },
    ],
    popular: false,
  },
] as const;
