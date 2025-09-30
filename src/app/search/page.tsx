'use client';

import { useState } from 'react';
import Card from '@/components/Card';

export default function Search() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [searchHistory, setSearchHistory] = useState([
    { query: 'How do I apply for research leave?', timestamp: '2 hours ago' },
    { query: 'What are my benefits?', timestamp: '1 day ago' },
    { query: 'Training schedule for next month', timestamp: '3 days ago' }
  ]);

  const suggestedQueries = [
    'How do I apply for research leave?',
    'What benefits am I eligible for?',
    'How to request time off?',
    'What is the dress code policy?',
    'How do I update my personal information?',
    'What training programs are available?',
    'How to file an expense report?',
    'What are the company holidays?',
    'How do I access my pay stubs?',
    'What is the performance review process?'
  ];

  const popularTopics = [
    { topic: 'Leave & Time Off', searches: 245, trend: 'up' },
    { topic: 'Benefits & Compensation', searches: 189, trend: 'up' },
    { topic: 'Training & Development', searches: 156, trend: 'stable' },
    { topic: 'Policies & Procedures', searches: 134, trend: 'down' },
    { topic: 'IT Support', searches: 98, trend: 'up' }
  ];

  const handleAsk = () => {
    if (!query.trim()) return;

    // Add to search history
    setSearchHistory(prev => [{
      query: query,
      timestamp: 'Just now'
    }, ...prev.slice(0, 4)]);

    // Generate response based on query
    let aiResponse = '';

    if (query.toLowerCase().includes('research leave') || query.toLowerCase().includes('leave')) {
      aiResponse = `To apply for research leave, follow these steps:
1. Log into the employee portal at portal.company.com
2. Navigate to "Time Off" → "Leave Requests"
3. Select "Research Leave" from the leave type dropdown
4. Fill out the required fields including research purpose, duration, and supervisor approval
5. Attach any supporting documentation (research proposal, etc.)
6. Submit for approval - you'll receive a confirmation email

**Important Notes:**
- Research leave requires minimum 2 weeks advance notice
- Maximum duration is 6 months per calendar year
- May impact benefits eligibility during extended leave
- Requires department head and HR approval

For more details, visit the Leave Policy section in the Knowledge Hub.`;
    } else if (query.toLowerCase().includes('benefits') || query.toLowerCase().includes('compensation')) {
      aiResponse = `Based on your role as Senior Curator (3 years tenure), you're eligible for:

**Health Benefits:**
- Premium medical, dental, and vision coverage
- Flexible spending accounts (FSA/HSA)
- Employee assistance program (EAP)

**Financial Benefits:**
- Competitive salary + 15% annual bonus potential
- 401(k) with 6% company match
- Paid time off: 25 days vacation + 12 holidays
- Professional development stipend: $2,500/year

**Additional Perks:**
- Gym membership reimbursement
- Remote work flexibility (2 days/week)
- Professional conference attendance
- Advanced degree tuition assistance

Your total compensation package value exceeds $150,000 annually. Check your personalized benefits statement for complete details.`;
    } else if (query.toLowerCase().includes('training') || query.toLowerCase().includes('development')) {
      aiResponse = `As a Senior Curator, you have access to several development opportunities:

**Recommended Programs:**
1. **Leadership Excellence Workshop** - Oct 15-16 (2 days)
2. **Digital Preservation Advanced Certification** - Nov 5-9 (1 week)
3. **Project Management Fundamentals** - Dec 2-6 (online)

**Your Learning Progress:**
- Current enrollment: Museum Collections Management (75% complete)
- Completed: 12 courses, 8 certifications
- Next recommended: Cultural Heritage Leadership

**Available Resources:**
- LinkedIn Learning: Unlimited access
- Internal mentorship program
- Conference attendance budget: $3,000/year
- Professional certification reimbursement

Visit the Learning section to enroll in courses or schedule a development discussion with your manager.`;
    } else if (query.toLowerCase().includes('policy') || query.toLowerCase().includes('procedure')) {
      aiResponse = `I can help you find specific policies. Here are the most frequently accessed ones:

**Popular Policies:**
- Code of Conduct & Ethics
- Anti-Harassment Policy
- Data Security & Privacy
- Remote Work Guidelines
- Expense Reimbursement Policy

**Quick Access:**
- Visit Knowledge Hub → Policies section
- Search for specific terms in the search bar
- Contact HR directly for policy interpretations

For urgent policy questions, reach out to HR at hr@company.com or ext. 234.`;
    } else {
      aiResponse = `I'm here to help with HR-related questions! I can assist with:

**Topics I Cover:**
- Leave policies and time off requests
- Benefits, compensation, and payroll
- Training programs and professional development
- Company policies and procedures
- IT support and technical questions
- Career development and performance reviews

Try asking about:
- "How do I apply for research leave?"
- "What benefits am I eligible for?"
- "What training programs are available?"
- "How do I update my personal information?"

For questions outside these areas, please contact the appropriate department directly.`;
    }

    setResponse(aiResponse);
  };

  const handleSuggestedQuery = (suggestedQuery: string) => {
    setQuery(suggestedQuery);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Smart Search & AI Assistant</h1>
        <div className="text-sm text-gray-600">AI-powered HR support</div>
      </div>

      {/* Search Interface */}
      <Card title="Ask the AI Assistant">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask any HR-related question..."
              className="w-full p-4 pr-24 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg"
            />
            <button
              onClick={handleAsk}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
            >
              🤖 Ask AI
            </button>
          </div>

          {/* Suggested Queries */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Questions:</h3>
            <div className="flex flex-wrap gap-2">
              {suggestedQueries.slice(0, 6).map((suggestedQuery, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuery(suggestedQuery)}
                  className="px-3 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-800 text-sm rounded-full transition-colors"
                >
                  {suggestedQuery}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* AI Response */}
      {response && (
        <Card title="AI Response" expandable={true}>
          <div className="prose prose-sm max-w-none">
            {response.split('\n').map((line, i) => {
              if (line.trim() === '') return null;

              // Handle bold text
              if (line.includes('**') && line.includes('**')) {
                const parts = line.split('**');
                return (
                  <p key={i} className="mb-2">
                    {parts.map((part, j) =>
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                    )}
                  </p>
                );
              }

              // Handle numbered lists
              if (/^\d+\./.test(line.trim())) {
                return (
                  <div key={i} className="flex items-start space-x-2 mb-2">
                    <span className="text-blue-600 font-medium min-w-[1.5rem]">{line.split('.')[0]}.</span>
                    <span>{line.split('.').slice(1).join('.').trim()}</span>
                  </div>
                );
              }

              return <p key={i} className="mb-2">{line}</p>;
            })}
          </div>
        </Card>
      )}

      {/* Popular Topics */}
      <Card title="Popular Topics">
        <div className="space-y-3">
          {popularTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  topic.trend === 'up' ? 'bg-green-500' :
                  topic.trend === 'down' ? 'bg-red-500' :
                  'bg-gray-500'
                }`}></div>
                <span className="font-medium text-gray-800">{topic.topic}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{topic.searches} searches</span>
                <span className={`text-sm ${
                  topic.trend === 'up' ? 'text-green-600' :
                  topic.trend === 'down' ? 'text-red-600' :
                  'text-gray-600'
                }`}>
                  {topic.trend === 'up' ? '↗' : topic.trend === 'down' ? '↘' : '→'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Search History */}
      <Card title="Recent Searches" expandable={true}>
        <div className="space-y-3">
          {searchHistory.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="text-gray-800">{item.query}</span>
              <span className="text-sm text-gray-500">{item.timestamp}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Help Categories */}
      <Card title="Browse by Category">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">🏖️</div>
            <h3 className="font-medium text-blue-800">Leave & Time Off</h3>
            <p className="text-sm text-blue-600">Vacation, sick leave, holidays</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-medium text-green-800">Benefits</h3>
            <p className="text-sm text-green-600">Health, retirement, perks</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">🎓</div>
            <h3 className="font-medium text-purple-800">Training</h3>
            <p className="text-sm text-purple-600">Courses, certifications</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-medium text-orange-800">Policies</h3>
            <p className="text-sm text-orange-600">Company rules & procedures</p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">💻</div>
            <h3 className="font-medium text-red-800">IT Support</h3>
            <p className="text-sm text-red-600">Technical assistance</p>
          </div>
          <div className="text-center p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-medium text-indigo-800">Career</h3>
            <p className="text-sm text-indigo-600">Growth & development</p>
          </div>
          <div className="text-center p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">👥</div>
            <h3 className="font-medium text-pink-800">People</h3>
            <p className="text-sm text-pink-600">Directory & org chart</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="text-2xl mb-2">📞</div>
            <h3 className="font-medium text-gray-800">Contact HR</h3>
            <p className="text-sm text-gray-600">Get direct help</p>
          </div>
        </div>
      </Card>

      {/* AI Capabilities */}
      <Card title="AI Assistant Capabilities">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-800 mb-3">What I Can Help With:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✅ Answer HR policy questions</li>
              <li>✅ Explain benefits and compensation</li>
              <li>✅ Guide through common procedures</li>
              <li>✅ Provide training recommendations</li>
              <li>✅ Help with leave requests</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-3">Response Features:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>📋 Step-by-step instructions</li>
              <li>🔗 Direct links to resources</li>
              <li>📊 Personalized recommendations</li>
              <li>⏰ Real-time policy updates</li>
              <li>🎯 Context-aware suggestions</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
