'use client';

import { useState } from 'react';
import Card from '@/components/Card';

interface Policy {
  id: number;
  title: string;
  category: string;
  version: string;
  effectiveDate: string;
  lastUpdated: string;
  status: string;
  summary: string;
  tags: string[];
  content: {
    overview: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
}

export default function Policies() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Policies', count: 12 },
    { id: 'employment', name: 'Employment', count: 3 },
    { id: 'benefits', name: 'Benefits & Compensation', count: 4 },
    { id: 'conduct', name: 'Code of Conduct', count: 2 },
    { id: 'safety', name: 'Health & Safety', count: 2 },
    { id: 'leave', name: 'Leave Policies', count: 1 }
  ];

  const policies = [
    {
      id: 1,
      title: 'Code of Conduct & Ethics',
      category: 'conduct',
      version: '3.2',
      effectiveDate: 'January 1, 2025',
      lastUpdated: 'December 15, 2024',
      status: 'Active',
      summary: 'Guidelines for professional conduct, ethical behavior, and workplace standards.',
      tags: ['Ethics', 'Conduct', 'Professionalism'],
      content: {
        overview: 'This Code of Conduct establishes the standards of behavior expected from all employees. It serves as a guide for making ethical decisions and maintaining professional relationships in the workplace.',
        sections: [
          {
            title: 'Professional Conduct',
            content: `• Treat colleagues, clients, and stakeholders with respect and dignity
• Maintain professional communication in all interactions
• Avoid conflicts of interest and disclose any potential conflicts
• Protect company confidential information and assets
• Use company resources responsibly and ethically`
          },
          {
            title: 'Ethical Decision Making',
            content: `• Make decisions based on honesty, integrity, and fairness
• Report suspected violations of laws or company policies
• Seek guidance when uncertain about ethical implications
• Maintain confidentiality when appropriate
• Act in the best interests of the organization and its stakeholders`
          },
          {
            title: 'Workplace Harassment',
            content: `• Zero tolerance for harassment of any kind
• Respect personal boundaries and diversity
• Report incidents promptly through appropriate channels
• Support a safe and inclusive work environment
• Participate in diversity and inclusion initiatives`
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Anti-Harassment Policy',
      category: 'conduct',
      version: '2.1',
      effectiveDate: 'March 1, 2024',
      lastUpdated: 'February 15, 2024',
      status: 'Active',
      summary: 'Policy prohibiting harassment and discrimination in the workplace.',
      tags: ['Harassment', 'Discrimination', 'Diversity'],
      content: {
        overview: 'This policy outlines the company\'s commitment to maintaining a workplace free from harassment, discrimination, and retaliation.',
        sections: [
          {
            title: 'Prohibited Conduct',
            content: `Harassment includes but is not limited to:
• Verbal abuse or threats
• Unwanted physical contact
• Offensive jokes or comments
• Display of offensive materials
• Retaliation against those who report harassment`
          },
          {
            title: 'Reporting Procedures',
            content: `• Report incidents to HR immediately
• Multiple reporting channels available (HR, supervisor, anonymous hotline)
• Investigations conducted confidentially
• Protection from retaliation guaranteed
• Support services available for affected employees`
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Annual Leave Policy',
      category: 'leave',
      version: '4.0',
      effectiveDate: 'January 1, 2025',
      lastUpdated: 'November 30, 2024',
      status: 'Active',
      summary: 'Guidelines for requesting and using annual vacation time.',
      tags: ['Vacation', 'Leave', 'Time Off'],
      content: {
        overview: 'This policy outlines the company\'s annual leave entitlement, booking procedures, and guidelines for maintaining work-life balance.',
        sections: [
          {
            title: 'Leave Entitlement',
            content: `• Full-time employees: 25 days per year
• Accrual rate: 2.08 days per month
• Maximum carryover: 10 days to next year
• Years of service bonuses apply after 5 years`
          },
          {
            title: 'Booking Procedures',
            content: `• Submit requests at least 2 weeks in advance
• Use the employee portal for all leave requests
• Obtain supervisor approval before booking
• Consider team coverage and project deadlines
• Emergency situations handled on case-by-case basis`
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Remote Work Policy',
      category: 'employment',
      version: '2.3',
      effectiveDate: 'June 1, 2024',
      lastUpdated: 'May 15, 2024',
      status: 'Active',
      summary: 'Guidelines for remote work arrangements and hybrid schedules.',
      tags: ['Remote Work', 'Flexible', 'Hybrid'],
      content: {
        overview: 'This policy establishes guidelines for remote work arrangements to ensure productivity, collaboration, and work-life balance.',
        sections: [
          {
            title: 'Eligibility & Setup',
            content: `• Available to eligible full-time employees
• Requires manager approval and trial period
• Company provides necessary equipment
• Home office setup guidelines provided
• Security requirements must be met`
          },
          {
            title: 'Schedule & Availability',
            content: `• Core hours: 10 AM - 3 PM daily
• Flexible start/end times within reason
• Regular team meetings and check-ins required
• Response time expectations during work hours
• Time zone considerations for distributed teams`
          }
        ]
      }
    },
    {
      id: 5,
      title: 'Health Insurance Benefits',
      category: 'benefits',
      version: '3.1',
      effectiveDate: 'January 1, 2025',
      lastUpdated: 'December 1, 2024',
      status: 'Active',
      summary: 'Comprehensive health insurance coverage and wellness programs.',
      tags: ['Health', 'Insurance', 'Wellness'],
      content: {
        overview: 'The company provides comprehensive health insurance coverage designed to meet the diverse needs of our employees and their families.',
        sections: [
          {
            title: 'Medical Coverage',
            content: `• PPO and HMO plan options
• Preventive care covered at 100%
• Prescription drug coverage included
• Mental health and counseling services
• Telemedicine services available 24/7`
          },
          {
            title: 'Dental & Vision',
            content: `• Comprehensive dental coverage
• Vision exams and corrective lenses
• Orthodontic treatment for dependents
• Annual maximums and deductibles apply
• Network providers preferred`
          }
        ]
      }
    },
    {
      id: 6,
      title: 'Performance Management',
      category: 'employment',
      version: '2.8',
      effectiveDate: 'April 1, 2024',
      lastUpdated: 'March 15, 2024',
      status: 'Active',
      summary: 'Framework for performance evaluations, development planning, and career growth.',
      tags: ['Performance', 'Reviews', 'Development'],
      content: {
        overview: 'This policy establishes the framework for ongoing performance management, feedback, and professional development.',
        sections: [
          {
            title: 'Performance Reviews',
            content: `• Annual comprehensive reviews
• Mid-year check-in discussions
• 360-degree feedback process
• Goal setting and progress tracking
• Development planning and training recommendations`
          },
          {
            title: 'Performance Standards',
            content: `• Clear expectations communicated
• Regular feedback provided
• Performance improvement plans when needed
• Recognition programs for high performers
• Career development opportunities`
          }
        ]
      }
    }
  ];

  const filteredPolicies = policies.filter(policy => {
    const matchesCategory = selectedCategory === 'all' || policy.category === selectedCategory;
    const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         policy.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         policy.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      conduct: 'bg-blue-100 text-blue-800',
      leave: 'bg-green-100 text-green-800',
      employment: 'bg-purple-100 text-purple-800',
      benefits: 'bg-orange-100 text-orange-800',
      safety: 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">HR Policies & Procedures</h1>
        <div className="text-sm text-gray-600">Official company policies</div>
      </div>

      {/* Search and Filters */}
      <Card title="Search & Filter Policies">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search policies by title, content, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.filter(cat => cat.id !== 'all').map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Policy List */}
      {!selectedPolicy ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPolicies.map(policy => (
            <Card
              key={policy.id}
              title={policy.title}
              className="cursor-pointer hover:shadow-lg transition-all duration-200"
              expandable={false}
            >
              <div className="space-y-3">
                <p className="text-sm text-gray-600">{policy.summary}</p>

                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(policy.status)}`}>
                    {policy.status}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(policy.category)}`}>
                    {categories.find(cat => cat.id === policy.category)?.name}
                  </span>
                </div>

                <div className="text-xs text-gray-500 space-y-1">
                  <div>Version {policy.version}</div>
                  <div>Effective: {policy.effectiveDate}</div>
                  <div>Updated: {policy.lastUpdated}</div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {policy.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedPolicy(policy)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium"
                >
                  Read Full Policy
                </button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        /* Detailed Policy View */
        <div className="space-y-6">
          <Card title="Policy Details">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedPolicy.title}</h2>
                  <p className="text-gray-600 mb-4">{selectedPolicy.summary}</p>

                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`px-3 py-1 rounded-full ${getStatusColor(selectedPolicy.status)}`}>
                      {selectedPolicy.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full ${getCategoryColor(selectedPolicy.category)}`}>
                      {categories.find(cat => cat.id === selectedPolicy.category)?.name}
                    </span>
                    <span className="text-gray-500">Version {selectedPolicy.version}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                    📥 Download PDF
                  </button>
                  <button
                    onClick={() => setSelectedPolicy(null)}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
                  >
                    ← Back to Policies
                  </button>
                </div>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-sm font-medium text-gray-500">Effective Date</div>
                  <div className="text-gray-800">{selectedPolicy.effectiveDate}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Last Updated</div>
                  <div className="text-gray-800">{selectedPolicy.lastUpdated}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Version</div>
                  <div className="text-gray-800">{selectedPolicy.version}</div>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed">{selectedPolicy.content.overview}</p>
              </div>

              {/* Policy Sections */}
              <div className="space-y-6">
                {selectedPolicy.content.sections.map((section: { title: string; content: string }, index: number) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">{section.title}</h4>
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Related Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPolicy.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between pt-6 border-t">
                <div className="text-sm text-gray-500">
                  For questions about this policy, contact HR at hr@company.com
                </div>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors">
                    ✅ Acknowledge Policy
                  </button>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                    📧 Share Policy
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Policy Statistics */}
      <Card title="Policy Compliance Overview">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{policies.filter(p => p.status === 'Active').length}</div>
            <div className="text-sm text-gray-600">Active Policies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{categories.length - 1}</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">
              {new Set(policies.flatMap(p => p.tags)).size}
            </div>
            <div className="text-sm text-gray-600">Unique Tags</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">
              {Math.round(policies.reduce((sum, p) => sum + (new Date().getTime() - new Date(p.lastUpdated).getTime()) / (1000 * 60 * 60 * 24), 0) / policies.length)}
            </div>
            <div className="text-sm text-gray-600">Avg Days Since Update</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
