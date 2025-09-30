'use client';

import { useState } from 'react';
import Card from '@/components/Card';

export default function Onboarding() {
  const [checklist, setChecklist] = useState({
    hrForms: false,
    itSetup: false,
    departmentOrientation: false,
    securityBadge: false,
    emailSetup: false,
    workspaceSetup: false,
    policyReview: false,
    teamIntroduction: false,
    firstWeekGoals: false,
    mentorshipSetup: false
  });
  const [notes, setNotes] = useState('');
  const [selectedResource, setSelectedResource] = useState(0);

  const handleCheckbox = (key: string) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const handleSubmit = () => {
    alert('Knowledge submitted successfully!');
    setNotes('');
  };

  const onboardingSteps = [
    {
      id: 'hrForms' as const,
      title: 'Complete HR Forms',
      description: 'Tax forms, direct deposit, emergency contacts',
      category: 'Administrative',
      completed: checklist.hrForms
    },
    {
      id: 'itSetup' as const,
      title: 'IT Setup & Equipment',
      description: 'Computer setup, software installation, access credentials',
      category: 'Technical',
      completed: checklist.itSetup
    },
    {
      id: 'departmentOrientation' as const,
      title: 'Department Orientation',
      description: 'Team introductions, workspace tour, department overview',
      category: 'Cultural',
      completed: checklist.departmentOrientation
    },
    {
      id: 'securityBadge' as const,
      title: 'Security Badge & Access',
      description: 'Photo ID, building access, parking permissions',
      category: 'Security',
      completed: checklist.securityBadge
    },
    {
      id: 'emailSetup' as const,
      title: 'Email & Communication Setup',
      description: 'Email account, Slack/Teams setup, communication guidelines',
      category: 'Technical',
      completed: checklist.emailSetup
    },
    {
      id: 'workspaceSetup' as const,
      title: 'Workspace Setup',
      description: 'Desk setup, supplies, ergonomic assessment',
      category: 'Administrative',
      completed: checklist.workspaceSetup
    },
    {
      id: 'policyReview' as const,
      title: 'Company Policies Review',
      description: 'Code of conduct, data security, workplace policies',
      category: 'Compliance',
      completed: checklist.policyReview
    },
    {
      id: 'teamIntroduction' as const,
      title: 'Team Introductions',
      description: 'Meet team members, understand roles and responsibilities',
      category: 'Cultural',
      completed: checklist.teamIntroduction
    },
    {
      id: 'firstWeekGoals' as const,
      title: 'Set First Week Goals',
      description: 'Define objectives, training schedule, check-in meetings',
      category: 'Development',
      completed: checklist.firstWeekGoals
    },
    {
      id: 'mentorshipSetup' as const,
      title: 'Mentorship Program Setup',
      description: 'Assign mentor, schedule initial meetings, set expectations',
      category: 'Development',
      completed: checklist.mentorshipSetup
    }
  ];

  const resources = [
    {
      title: 'Welcome Package',
      type: 'Document',
      description: 'Complete guide to your first 30 days',
      content: 'This comprehensive package includes everything you need to know about company culture, policies, benefits, and your role expectations.'
    },
    {
      title: 'IT Quick Start Guide',
      type: 'Guide',
      description: 'Essential software and systems overview',
      content: 'Learn about our technology stack, security protocols, communication tools, and how to access all the systems you\'ll need.'
    },
    {
      title: 'Team Directory',
      type: 'Resource',
      description: 'Contact information for all team members',
      content: 'Find contact details, roles, and responsibilities for everyone in your department and key stakeholders across the organization.'
    },
    {
      title: 'Benefits Overview',
      type: 'Presentation',
      description: 'Health, retirement, and other benefits explained',
      content: 'Detailed information about health insurance, retirement plans, paid time off, professional development opportunities, and more.'
    },
    {
      title: 'Code of Conduct',
      type: 'Policy',
      description: 'Ethical standards and workplace expectations',
      content: 'Our commitment to maintaining a respectful, inclusive, and professional work environment for all employees.'
    }
  ];

  const upcomingSessions = [
    {
      title: 'New Employee Orientation',
      date: 'October 15, 2025',
      time: '9:00 AM - 12:00 PM',
      location: 'Conference Room A',
      type: 'Required'
    },
    {
      title: 'Department Welcome Meeting',
      date: 'October 16, 2025',
      time: '2:00 PM - 3:00 PM',
      location: 'Virtual',
      type: 'Department'
    },
    {
      title: 'IT Security Training',
      date: 'October 18, 2025',
      time: '10:00 AM - 11:00 AM',
      location: 'Training Room B',
      type: 'Required'
    },
    {
      title: 'Benefits Enrollment Session',
      date: 'October 20, 2025',
      time: '1:00 PM - 2:30 PM',
      location: 'HR Conference Room',
      type: 'Optional'
    }
  ];

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / onboardingSteps.length) * 100);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-800">Onboarding & Knowledge Transfer</h1>
        <div className="text-sm text-gray-600">
          Progress: {completedCount}/{onboardingSteps.length} steps completed
        </div>
      </div>

      {/* Progress Overview */}
      <Card
        title="Onboarding Progress"
        variant="gradient"
        icon={<div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse"></div>}
      >
        <div className="space-y-6">
          <div className="text-center">
            <div className="relative inline-block">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="3"
                  strokeDasharray={`${progressPercentage}, 100`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {progressPercentage}%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Complete</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className={`p-3 rounded-lg ${checklist.hrForms ? 'bg-green-50 border-green-200' : 'bg-gray-50'}`}>
              <div className="text-lg font-bold text-green-600">{completedCount}</div>
              <div className="text-xs text-gray-600">Completed</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600">{onboardingSteps.length - completedCount}</div>
              <div className="text-xs text-gray-600">Remaining</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-lg font-bold text-purple-600">5</div>
              <div className="text-xs text-gray-600">Resources</div>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <div className="text-lg font-bold text-orange-600">4</div>
              <div className="text-xs text-gray-600">Sessions</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Onboarding Checklist */}
      <Card title="Onboarding Checklist" expandable={true}>
        <div className="space-y-3">
          {onboardingSteps.map((step) => (
            <div
              key={step.id}
              className={`p-4 border rounded-lg transition-all ${
                step.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={step.completed}
                  onChange={() => handleCheckbox(step.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className={`font-medium ${step.completed ? 'text-green-800 line-through' : 'text-gray-800'}`}>
                      {step.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      step.category === 'Administrative' ? 'bg-blue-100 text-blue-800' :
                      step.category === 'Technical' ? 'bg-green-100 text-green-800' :
                      step.category === 'Cultural' ? 'bg-purple-100 text-purple-800' :
                      step.category === 'Security' ? 'bg-red-100 text-red-800' :
                      step.category === 'Compliance' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {step.category}
                    </span>
                  </div>
                  <p className={`text-sm ${step.completed ? 'text-green-600' : 'text-gray-600'}`}>
                    {step.description}
                  </p>
                </div>
                <div className="text-2xl">
                  {step.completed ? '✅' : '⏳'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Upcoming Sessions */}
      <Card title="Upcoming Sessions">
        <div className="space-y-3">
          {upcomingSessions.map((session, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{session.title}</h3>
                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                  <span>📅 {session.date}</span>
                  <span>🕒 {session.time}</span>
                  <span>📍 {session.location}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 text-xs rounded-full ${
                  session.type === 'Required' ? 'bg-red-100 text-red-800' :
                  session.type === 'Department' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {session.type}
                </span>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                  Add to Calendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Resources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Onboarding Resources">
          <div className="space-y-3">
            {resources.map((resource, index) => (
              <div
                key={index}
                className={`p-3 border rounded-lg cursor-pointer transition-all ${
                  selectedResource === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedResource(index)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{resource.title}</h4>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded ${
                    resource.type === 'Document' ? 'bg-blue-100 text-blue-800' :
                    resource.type === 'Guide' ? 'bg-green-100 text-green-800' :
                    resource.type === 'Resource' ? 'bg-purple-100 text-purple-800' :
                    resource.type === 'Presentation' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {resource.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Resource Details">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">{resources[selectedResource].title}</h3>
              <p className="text-sm text-blue-700 mb-3">{resources[selectedResource].content}</p>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                📖 Read Full Document
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-gray-800">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-2">
                <button className="p-2 text-center bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors">
                  📥 Download
                </button>
                <button className="p-2 text-center bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors">
                  📧 Share
                </button>
                <button className="p-2 text-center bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors">
                  ⭐ Favorite
                </button>
                <button className="p-2 text-center bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors">
                  🖨️ Print
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Knowledge Transfer */}
      <Card title="Knowledge Transfer" expandable={true}>
        <div className="space-y-4">
          <p className="text-gray-700">
            Document key processes, best practices, and important information to help your team members succeed.
            Your contributions will be valuable for future onboarding and team knowledge sharing.
          </p>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What processes or procedures should new team members know?
              </label>
        <textarea 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Share your knowledge about workflows, tools, client interactions, or any other important information..."
                rows={6}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                📝 Save as Draft
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                ✅ Submit Knowledge
              </button>
              <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">
                🎯 Request Review
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Contact Support */}
      <Card title="Need Help?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl mb-2">👨‍💼</div>
            <h3 className="font-medium text-blue-800">HR Contact</h3>
            <p className="text-sm text-blue-600">hr@company.com</p>
            <p className="text-xs text-blue-600">Mon-Fri, 9AM-5PM</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl mb-2">💻</div>
            <h3 className="font-medium text-green-800">IT Support</h3>
            <p className="text-sm text-green-600">it-help@company.com</p>
            <p className="text-xs text-green-600">24/7 Support</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl mb-2">👥</div>
            <h3 className="font-medium text-purple-800">Your Manager</h3>
            <p className="text-sm text-purple-600">jane.smith@company.com</p>
            <p className="text-xs text-purple-600">Direct supervisor</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
