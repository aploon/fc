// HeartConsultants LLC - Mega Menu Data Structure

export interface MenuItem {
  title: string;
  description?: string;
  href: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface MegaMenuData {
  label: string;
  categories: MenuCategory[];
  featured?: {
    title: string;
    items: MenuItem[];
  };
}

export const megaMenuData: MegaMenuData[] = [
  {
    label: 'Services',
    featured: {
      title: 'Featured',
      items: [
        {
          title: 'Cath Lab Optimization',
          description: 'Process reengineering and workflow optimization',
          href: '/services/cath-lab'
        },
        {
          title: 'CMS Compliance',
          description: 'Ensure regulatory compliance and quality standards',
          href: '/services/cms-compliance'
        },
        {
          title: 'Strategic Planning',
          description: 'Long-term cardiology program development',
          href: '/services/strategic-planning'
        }
      ]
    },
    categories: [
      {
        title: 'Clinical Excellence',
        items: [
          { title: 'Cath Lab Reengineering', href: '/services/cath-lab' },
          { title: 'EP Lab Optimization', href: '/services/ep-lab' },
          { title: 'Heart Failure Programs', href: '/services/heart-failure' },
          { title: 'Structural Heart Services', href: '/services/structural-heart' },
          { title: 'Cardiac Imaging', href: '/services/cardiac-imaging' }
        ]
      },
      {
        title: 'Operational Efficiency',
        items: [
          { title: 'Patient Flow Optimization', href: '/services/patient-flow' },
          { title: 'Resource Management', href: '/services/resource-management' },
          { title: 'Supply Chain', href: '/services/supply-chain' },
          { title: 'Staffing Models', href: '/services/staffing' }
        ]
      },
      {
        title: 'Compliance & Quality',
        items: [
          { title: 'CMS Compliance', href: '/services/cms-compliance' },
          { title: 'Quality Metrics', href: '/services/quality-metrics' },
          { title: 'Accreditation Support', href: '/services/accreditation' },
          { title: 'Risk Management', href: '/services/risk-management' }
        ]
      },
      {
        title: 'Financial Performance',
        items: [
          { title: 'Revenue Optimization', href: '/services/revenue' },
          { title: 'Cost Reduction', href: '/services/cost-reduction' },
          { title: 'Contract Negotiation', href: '/services/contracts' },
          { title: 'Financial Analytics', href: '/services/analytics' }
        ]
      }
    ]
  },
  {
    label: 'Expertise',
    featured: {
      title: 'Featured',
      items: [
        {
          title: 'C-Suite Advisory',
          description: 'Strategic guidance for hospital leadership',
          href: '/expertise/c-suite'
        },
        {
          title: 'Physician Leadership',
          description: 'Clinical leadership development and support',
          href: '/expertise/physician-leadership'
        }
      ]
    },
    categories: [
      {
        title: 'Leadership',
        items: [
          { title: 'Executive Coaching', href: '/expertise/executive-coaching' },
          { title: 'Board Advisory', href: '/expertise/board-advisory' },
          { title: 'Physician Leadership', href: '/expertise/physician-leadership' },
          { title: 'Change Management', href: '/expertise/change-management' }
        ]
      },
      {
        title: 'Clinical Programs',
        items: [
          { title: 'Program Development', href: '/expertise/program-development' },
          { title: 'Service Line Growth', href: '/expertise/service-line' },
          { title: 'Clinical Integration', href: '/expertise/clinical-integration' },
          { title: 'Innovation Strategy', href: '/expertise/innovation' }
        ]
      },
      {
        title: 'Data & Analytics',
        items: [
          { title: 'Predictive Analytics', href: '/expertise/predictive-analytics' },
          { title: 'Performance Dashboards', href: '/expertise/dashboards' },
          { title: 'Benchmarking', href: '/expertise/benchmarking' },
          { title: 'ROI Analysis', href: '/expertise/roi-analysis' }
        ]
      }
    ]
  },
  {
    label: 'Insights',
    featured: {
      title: 'Featured',
      items: [
        {
          title: 'Industry Trends 2025',
          description: 'Key trends shaping cardiology services',
          href: '/insights/trends-2025'
        },
        {
          title: 'Whitepaper: Value-Based Care',
          description: 'Strategies for success in value-based models',
          href: '/insights/value-based-care'
        }
      ]
    },
    categories: [
      {
        title: 'Research & Analysis',
        items: [
          { title: 'Industry Reports', href: '/insights/reports' },
          { title: 'Case Studies', href: '/insights/case-studies' },
          { title: 'Whitepapers', href: '/insights/whitepapers' },
          { title: 'Webinars', href: '/insights/webinars' }
        ]
      },
      {
        title: 'Thought Leadership',
        items: [
          { title: 'Blog', href: '/insights/blog' },
          { title: 'Expert Perspectives', href: '/insights/perspectives' },
          { title: 'Podcasts', href: '/insights/podcasts' },
          { title: 'Events', href: '/insights/events' }
        ]
      },
      {
        title: 'Resources',
        items: [
          { title: 'Toolkits', href: '/insights/toolkits' },
          { title: 'Templates', href: '/insights/templates' },
          { title: 'Best Practices', href: '/insights/best-practices' },
          { title: 'FAQs', href: '/insights/faqs' }
        ]
      }
    ]
  }
];

export const simpleMenuItems = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
