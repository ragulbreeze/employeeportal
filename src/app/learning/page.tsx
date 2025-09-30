import Card from '@/components/Card';
import { BookOpen, Award, Clock, TrendingUp } from 'lucide-react';

export default function Learning() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Learning & Career Growth</h1>
            <p className="text-gray-600 dark:text-gray-300">Develop your skills and advance your career</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-gray-600 dark:text-gray-400">Learning Progress</div>
            <div className="text-2xl font-bold text-blue-600">67%</div>
          </div>
          <div className="w-16 h-16 relative">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeDasharray="67, 100"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-blue-600">67%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Progress Overview */}
      <Card
        title="Your Learning Progress"
        icon={<TrendingUp className="w-5 h-5 text-blue-600" />}
        variant="gradient"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">67% Complete</span>
          </div>
          <div className="relative">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000" style={{width: '67%'}}></div>
            </div>
            <div className="absolute -top-1 left-[67%] transform -translate-x-1/2">
              <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md animate-pulse"></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">12</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center">
                <Award className="w-4 h-4 mr-1" />
                Courses Completed
              </div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center">
                <Clock className="w-4 h-4 mr-1" />
                In Progress
              </div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200 dark:border-purple-800">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">8</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center">
                <Award className="w-4 h-4 mr-1" />
                Certificates Earned
              </div>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs rounded-full">
              🎯 Goal Crusher
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
              🚀 Fast Learner
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">
              📚 Knowledge Seeker
            </span>
          </div>
        </div>
      </Card>

      {/* Recommended Training */}
      <Card title="Recommended for You">
        <div className="space-y-4">
          <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-blue-800">Advanced Digital Archiving</h3>
                <p className="text-sm text-blue-600 mt-1">Based on your skills profile and career goals</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">4 weeks</span>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Online</span>
                  <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">Intermediate</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Enroll</button>
            </div>
          </div>

          <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-purple-800">Leadership Excellence Workshop</h3>
                <p className="text-sm text-purple-600 mt-1">Develop management and leadership skills</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">2 days</span>
                  <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">In-person</span>
                  <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">Advanced</span>
                </div>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">Register</button>
            </div>
          </div>

          <div className="p-4 border border-green-200 rounded-lg bg-green-50">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-green-800">Mentorship Program</h3>
                <p className="text-sm text-green-600 mt-1">One-on-one guidance from senior curator</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">6 months</span>
                  <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">Hybrid</span>
                  <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">All Levels</span>
                </div>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">Apply</button>
            </div>
          </div>
        </div>
      </Card>

      {/* Current Enrollments */}
      <Card title="Currently Enrolled">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border rounded">
            <div className="flex-1">
              <h4 className="font-medium">Museum Collections Management</h4>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-full bg-gray-200 rounded-full h-2 max-w-xs">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <span className="text-sm text-gray-600">75%</span>
              </div>
            </div>
            <span className="text-sm text-green-600">In Progress</span>
          </div>

          <div className="flex items-center justify-between p-3 border rounded">
            <div className="flex-1">
              <h4 className="font-medium">Digital Preservation Techniques</h4>
              <div className="flex items-center space-x-2 mt-1">
                <div className="w-full bg-gray-200 rounded-full h-2 max-w-xs">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
                <span className="text-sm text-gray-600">45%</span>
              </div>
            </div>
            <span className="text-sm text-blue-600">In Progress</span>
          </div>
        </div>
      </Card>

      {/* Career Development */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Career Path">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <div>
                <p className="font-medium">Curator</p>
                <p className="text-sm text-gray-600">Current Position</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold text-sm">2</span>
              </div>
              <div>
                <p className="font-medium">Senior Curator</p>
                <p className="text-sm text-gray-600">Next: 2-3 years experience</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold text-sm">3</span>
              </div>
              <div>
                <p className="font-medium">Department Head</p>
                <p className="text-sm text-gray-600">Leadership role</p>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Skill Development Plan">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Leadership Skills</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full w-3/4"></div>
                </div>
                <span className="text-xs text-gray-600">75%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Technical Expertise</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                </div>
                <span className="text-xs text-gray-600">80%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Communication</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
                </div>
                <span className="text-xs text-gray-600">65%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Project Management</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-1/2"></div>
                </div>
                <span className="text-xs text-gray-600">50%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Certifications */}
      <Card title="Your Certifications">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-green-200 rounded-lg bg-green-50">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-medium text-green-800">First Aid Certification</h4>
                <p className="text-xs text-green-600">Valid until Nov 2026</p>
              </div>
            </div>
          </div>

          <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-800">Digital Archiving Specialist</h4>
                <p className="text-xs text-blue-600">Earned Dec 2024</p>
              </div>
            </div>
          </div>

          <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-medium text-purple-800">Cultural Heritage Management</h4>
                <p className="text-xs text-purple-600">Earned Sep 2024</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
