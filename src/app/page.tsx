import Card from '@/components/Card';
import { Bell } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-600">Welcome back, John Doe</div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card title="Total Employees" className="text-center">
          <div className="text-3xl font-bold text-blue-600">1,247</div>
          <p className="text-sm text-gray-600">Active staff members</p>
        </Card>
        <Card title="Open Positions" className="text-center">
          <div className="text-3xl font-bold text-green-600">12</div>
          <p className="text-sm text-gray-600">Available roles</p>
        </Card>
        <Card title="Training Completed" className="text-center">
          <div className="text-3xl font-bold text-purple-600">89%</div>
          <p className="text-sm text-gray-600">This quarter</p>
        </Card>
        <Card title="Avg. Satisfaction" className="text-center">
          <div className="text-3xl font-bold text-yellow-600">4.7/5</div>
          <p className="text-sm text-gray-600">Employee feedback</p>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card
        title="Recent Activities"
        icon={<Bell className="w-5 h-5 text-blue-600" />}
        variant="glass"
      >
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all cursor-pointer">
            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 animate-gentle-pulse"></div>
            <div className="flex-1">
              <p className="font-semibold text-blue-900 dark:text-blue-100">New employee onboarding completed</p>
              <p className="text-sm text-blue-700 dark:text-blue-300">Sarah Johnson joined the Digital Archives team</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">Onboarding</span>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-md transition-all cursor-pointer">
            <div className="w-3 h-3 bg-green-500 rounded-full mt-2 animate-gentle-pulse"></div>
            <div className="flex-1">
              <p className="font-semibold text-green-900 dark:text-green-100">Policy update published</p>
              <p className="text-sm text-green-700 dark:text-green-300">Remote work guidelines updated with new flexibility options</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xs bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">Policy</span>
                <span className="text-xs text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-md transition-all cursor-pointer">
            <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 animate-gentle-pulse"></div>
            <div className="flex-1">
              <p className="font-semibold text-purple-900 dark:text-purple-100">Training milestone achieved</p>
              <p className="text-sm text-purple-700 dark:text-purple-300">95% completion rate for Leadership Development program</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xs bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full">Training</span>
                <span className="text-xs text-gray-500">3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Notifications */}
      <Card
        title="Important Notifications"
        expandable={true}
        icon={<Bell className="w-5 h-5 text-red-600" />}
        badge="3"
        badgeColor="red"
        variant="glass"
      >
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl border border-red-200 dark:border-red-800 hover:shadow-lg transition-all cursor-pointer">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-red-600 text-lg">⚠</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-red-900 dark:text-red-100">Upcoming Training: Digital Archiving Workshop</p>
                <p className="text-sm text-red-700 dark:text-red-300 mb-2">Date: October 15, 2025 | Location: Conference Room A</p>
                <div className="flex items-center space-x-4">
                  <span className="text-xs bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 px-2 py-1 rounded-full">
                    Register by Oct 8
                  </span>
                  <button className="text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl border border-yellow-200 dark:border-yellow-800 hover:shadow-lg transition-all cursor-pointer">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-800 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-lg">📋</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-yellow-900 dark:text-yellow-100">Policy Review: Annual Leave Policy</p>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">Due: September 30, 2025 | Review required for all managers</p>
                <div className="flex items-center space-x-4">
                  <span className="text-xs bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full">
                    Management Required
                  </span>
                  <button className="text-xs bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded transition-colors">
                    Review Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-lg transition-all cursor-pointer">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-lg">🎓</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-green-900 dark:text-green-100">Certification Expiring: First Aid</p>
                <p className="text-sm text-green-700 dark:text-green-300 mb-2">Expires: November 1, 2025 | 45 employees affected</p>
                <div className="flex items-center space-x-4">
                  <span className="text-xs bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                    Renewal Available
                  </span>
                  <button className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition-colors">
                    Renew Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Knowledge Hub" className="bg-blue-50 border-blue-200 hover:bg-blue-100 transition-colors">
          <div className="space-y-2">
            <p className="text-sm text-blue-800">Access HR policies and FAQs</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Leave Policies</span>
              <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Benefits</span>
              <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Code of Conduct</span>
            </div>
          </div>
        </Card>
        <Card title="My Profile" className="bg-green-50 border-green-200 hover:bg-green-100 transition-colors">
          <div className="space-y-2">
            <p className="text-sm text-green-800">View skills and certifications</p>
            <div className="flex items-center space-x-2 mt-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-700">Profile 85% complete</span>
            </div>
          </div>
        </Card>
        <Card title="Learning Recommendations" className="bg-purple-50 border-purple-200 hover:bg-purple-100 transition-colors">
          <div className="space-y-2">
            <p className="text-sm text-purple-800">Personalized training suggestions</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">3 New Courses</span>
              <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">2 Certifications</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card title="Upcoming Events">
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
            <div>
              <p className="font-medium">All-Hands Meeting</p>
              <p className="text-sm text-gray-600">October 10, 2025 | 10:00 AM - 11:00 AM</p>
            </div>
            <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">Virtual</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
            <div>
              <p className="font-medium">Team Building Workshop</p>
              <p className="text-sm text-gray-600">October 18, 2025 | 2:00 PM - 5:00 PM</p>
            </div>
            <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">In-Person</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
            <div>
              <p className="font-medium">Diversity & Inclusion Seminar</p>
              <p className="text-sm text-gray-600">October 25, 2025 | 9:00 AM - 12:00 PM</p>
            </div>
            <span className="px-3 py-1 bg-purple-600 text-white text-xs rounded-full">Hybrid</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
