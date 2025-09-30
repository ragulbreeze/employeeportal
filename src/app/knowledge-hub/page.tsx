import Link from 'next/link';
import Card from '@/components/Card';

export default function KnowledgeHub() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Knowledge Hub</h1>
        <Link href="/policies" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors text-sm font-medium">
          📋 View All Policies
        </Link>
      </div>

      <Card
        title="Search Knowledge Base"
        icon={<div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>}
        variant="gradient"
      >
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search policies, procedures, FAQs..."
              className="w-full p-4 pr-12 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-white text-lg shadow-md"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-lg hover:shadow-lg transition-all duration-200">
              🔍
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-800 dark:text-blue-300 text-sm rounded-full cursor-pointer hover:shadow-md transition-all duration-200 border border-blue-300 dark:border-blue-700 hover:scale-105">
              🔥 Leave Policy
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 text-green-800 dark:text-green-300 text-sm rounded-full cursor-pointer hover:shadow-md transition-all duration-200 border border-green-300 dark:border-green-700 hover:scale-105">
              💰 Benefits
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-800 dark:text-purple-300 text-sm rounded-full cursor-pointer hover:shadow-md transition-all duration-200 border border-purple-300 dark:border-purple-700 hover:scale-105">
              📋 Code of Conduct
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 text-yellow-800 dark:text-yellow-300 text-sm rounded-full cursor-pointer hover:shadow-md transition-all duration-200 border border-yellow-300 dark:border-yellow-700 hover:scale-105">
              🏥 Health & Safety
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all cursor-pointer">
              <div className="text-2xl mb-1">📊</div>
              <div className="text-xs font-medium text-blue-800 dark:text-blue-300">Analytics</div>
              <div className="text-xs text-blue-600 dark:text-blue-400">Data Reports</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-md transition-all cursor-pointer">
              <div className="text-2xl mb-1">📝</div>
              <div className="text-xs font-medium text-green-800 dark:text-green-300">Templates</div>
              <div className="text-xs text-green-600 dark:text-green-400">Forms & Docs</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-md transition-all cursor-pointer">
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-xs font-medium text-purple-800 dark:text-purple-300">Guides</div>
              <div className="text-xs text-purple-600 dark:text-purple-400">How-to Guides</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl border border-orange-200 dark:border-orange-800 hover:shadow-md transition-all cursor-pointer">
              <div className="text-2xl mb-1">📞</div>
              <div className="text-xs font-medium text-orange-800 dark:text-orange-300">Support</div>
              <div className="text-xs text-orange-600 dark:text-orange-400">Get Help</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Leave Policies" className="border-blue-200">
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer transition-colors flex justify-between">
              <span>Annual Leave</span>
              <span className="text-xs text-gray-500">Updated 2025</span>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors flex justify-between">
              <span>Sick Leave</span>
              <span className="text-xs text-gray-500">Updated 2025</span>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors flex justify-between">
              <span>Research Leave</span>
              <span className="text-xs text-gray-500">Updated 2024</span>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors flex justify-between">
              <span>Parental Leave</span>
              <span className="text-xs text-gray-500">Updated 2025</span>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors flex justify-between">
              <span>Compassionate Leave</span>
              <span className="text-xs text-gray-500">Updated 2024</span>
            </li>
          </ul>
        </Card>

        <Card title="Benefits" className="border-green-200">
          <ul className="space-y-2">
            <li className="hover:text-green-600 cursor-pointer transition-colors flex justify-between">
              <span>Health Insurance</span>
              <span className="text-xs text-gray-500">Updated 2025</span>
            </li>
            <li className="hover:text-green-600 cursor-pointer transition-colors flex justify-between">
              <span>Retirement Plans</span>
              <span className="text-xs text-gray-500">Updated 2025</span>
            </li>
            <li className="hover:text-green-600 cursor-pointer transition-colors flex justify-between">
              <span>Employee Discounts</span>
              <span className="text-xs text-gray-500">Updated 2025</span>
            </li>
            <li className="hover:text-green-600 cursor-pointer transition-colors flex justify-between">
              <span>Wellness Programs</span>
              <span className="text-xs text-gray-500">Updated 2025</span>
            </li>
            <li className="hover:text-green-600 cursor-pointer transition-colors flex justify-between">
              <span>Professional Development</span>
              <span className="text-xs text-gray-500">Updated 2025</span>
            </li>
          </ul>
        </Card>

        <Card title="Training & Development" className="border-purple-200">
          <ul className="space-y-2">
            <li className="hover:text-purple-600 cursor-pointer transition-colors flex justify-between">
              <span>Online Courses</span>
              <span className="text-xs text-gray-500">Available</span>
            </li>
            <li className="hover:text-purple-600 cursor-pointer transition-colors flex justify-between">
              <span>Workshops</span>
              <span className="text-xs text-gray-500">Scheduled</span>
            </li>
            <li className="hover:text-purple-600 cursor-pointer transition-colors flex justify-between">
              <span>Certifications</span>
              <span className="text-xs text-gray-500">Available</span>
            </li>
            <li className="hover:text-purple-600 cursor-pointer transition-colors flex justify-between">
              <span>Mentorship Program</span>
              <span className="text-xs text-gray-500">Active</span>
            </li>
            <li className="hover:text-purple-600 cursor-pointer transition-colors flex justify-between">
              <span>Leadership Development</span>
              <span className="text-xs text-gray-500">Available</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Frequently Asked Questions">
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h4 className="font-medium text-gray-800">How do I apply for leave?</h4>
              <p className="text-sm text-gray-600 mt-1">Submit your leave request through the employee portal at least 2 weeks in advance.</p>
            </div>
            <div className="border-b pb-3">
              <h4 className="font-medium text-gray-800">What benefits am I eligible for?</h4>
              <p className="text-sm text-gray-600 mt-1">Eligibility depends on your employment status and length of service. Check your benefits package.</p>
            </div>
            <div className="border-b pb-3">
              <h4 className="font-medium text-gray-800">How to update my personal information?</h4>
              <p className="text-sm text-gray-600 mt-1">Go to My Profile section and update your details. Changes require HR approval.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">What is the dress code policy?</h4>
              <p className="text-sm text-gray-600 mt-1">Business casual is standard. Special attire may be required for client meetings.</p>
            </div>
          </div>
        </Card>

        <Card title="Recent Updates & Documents">
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">N</div>
              <div className="flex-1">
                <p className="font-medium">New Remote Work Policy</p>
                <p className="text-sm text-gray-600">Updated guidelines for hybrid work arrangements</p>
                <p className="text-xs text-gray-500">Published 2 days ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold">U</div>
              <div className="flex-1">
                <p className="font-medium">Updated Health Insurance Coverage</p>
                <p className="text-sm text-gray-600">Expanded mental health benefits effective immediately</p>
                <p className="text-xs text-gray-500">Published 1 week ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm font-bold">C</div>
              <div className="flex-1">
                <p className="font-medium">Code of Conduct Revision</p>
                <p className="text-sm text-gray-600">Updated social media and AI usage guidelines</p>
                <p className="text-xs text-gray-500">Published 2 weeks ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Links */}
      <Card title="Quick Links">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">📋</div>
            <p className="text-sm font-medium">Forms</p>
            <p className="text-xs text-gray-600">HR Forms & Templates</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">📚</div>
            <p className="text-sm font-medium">Handbooks</p>
            <p className="text-xs text-gray-600">Employee Handbooks</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">🔒</div>
            <p className="text-sm font-medium">Compliance</p>
            <p className="text-xs text-gray-600">Legal & Compliance</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">📞</div>
            <p className="text-sm font-medium">Contact HR</p>
            <p className="text-xs text-gray-600">Get Help</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
