'use client';

import { useState } from 'react';
import Card from '@/components/Card';

export default function Collaboration() {
  const [comment, setComment] = useState('');
  const [selectedDiscussion, setSelectedDiscussion] = useState(0);
  const [comments, setComments] = useState({
    0: [{ id: 1, text: 'Great policy! The new flexible scheduling is really helpful.', author: 'Jane Smith', timestamp: '2 hours ago', likes: 3 }],
    1: [{ id: 2, text: 'Anyone know the deadline for the next certification renewal?', author: 'Mike Johnson', timestamp: '1 day ago', likes: 1 }],
    2: [{ id: 3, text: 'The mentorship program has been incredible for my career growth!', author: 'Sarah Wilson', timestamp: '3 days ago', likes: 5 }]
  });

  const discussions = [
    { id: 0, title: 'Annual Leave Policy Updates', category: 'Policies', participants: 12, lastActivity: '2 hours ago' },
    { id: 1, title: 'Certification Requirements', category: 'Training', participants: 8, lastActivity: '1 day ago' },
    { id: 2, title: 'Mentorship Program Success Stories', category: 'Development', participants: 15, lastActivity: '3 days ago' }
  ];

  const handlePost = () => {
    if (comment.trim()) {
      setComments(prev => ({
        ...prev,
        [selectedDiscussion]: [...(prev[selectedDiscussion as keyof typeof prev] || []), {
          id: Date.now(),
          text: comment,
          author: 'You',
          timestamp: 'Just now',
          likes: 0
        }]
      }));
      setComment('');
    }
  };

  const sharedResources = [
    {
      title: 'Successful Research Leave Application Template',
      type: 'Document',
      author: 'Dr. Emily Chen',
      downloads: 45,
      rating: 4.8,
      tags: ['Research', 'Leave', 'Template']
    },
    {
      title: 'Benefits Enrollment Quick Guide',
      type: 'Guide',
      author: 'HR Team',
      downloads: 128,
      rating: 4.6,
      tags: ['Benefits', 'Enrollment', 'Guide']
    },
    {
      title: 'Career Development Roadmap',
      type: 'Presentation',
      author: 'Lisa Rodriguez',
      downloads: 89,
      rating: 4.9,
      tags: ['Career', 'Development', 'Planning']
    },
    {
      title: 'Team Building Activities Collection',
      type: 'Resource Pack',
      author: 'Events Committee',
      downloads: 67,
      rating: 4.4,
      tags: ['Team Building', 'Activities', 'Engagement']
    }
  ];

  const teamProjects = [
    {
      name: 'Digital Archives Modernization',
      status: 'In Progress',
      progress: 75,
      team: ['John Doe', 'Sarah Wilson', 'Mike Johnson'],
      deadline: 'Dec 2025',
      description: 'Upgrading our digital preservation systems'
    },
    {
      name: 'Employee Wellness Initiative',
      status: 'Planning',
      progress: 30,
      team: ['Jane Smith', 'Dr. Emily Chen'],
      deadline: 'Jan 2026',
      description: 'Comprehensive wellness program development'
    },
    {
      name: 'Diversity & Inclusion Training',
      status: 'Completed',
      progress: 100,
      team: ['Lisa Rodriguez', 'HR Team'],
      deadline: 'Completed',
      description: 'Organization-wide DEI training program'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Collaboration & Sharing</h1>
        <div className="text-sm text-gray-600">Active discussions: {discussions.length}</div>
      </div>

      {/* Active Discussions */}
      <Card title="Active Discussions">
        <div className="space-y-3">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                selectedDiscussion === discussion.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedDiscussion(discussion.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{discussion.title}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      discussion.category === 'Policies' ? 'bg-blue-100 text-blue-800' :
                      discussion.category === 'Training' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {discussion.category}
                    </span>
                    <span className="text-sm text-gray-600">{discussion.participants} participants</span>
                    <span className="text-sm text-gray-600">{discussion.lastActivity}</span>
                  </div>
                </div>
                <div className="text-2xl">
                  {selectedDiscussion === discussion.id ? '📖' : '📝'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Discussion Thread */}
      <Card title={`Discussion: ${discussions[selectedDiscussion].title}`} expandable={true}>
        <div className="space-y-4">
          {/* Comments */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {(comments[selectedDiscussion as keyof typeof comments] || [])?.map(c => (
              <div key={c.id} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-sm mb-2">{c.text}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>- {c.author}</span>
                      <span>{c.timestamp}</span>
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <span>👍</span>
                        <span>{c.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Comment */}
          <div className="border-t pt-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Add your comment or share your experience..."
              rows={3}
            />
            <div className="flex justify-between items-center mt-3">
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded">📎 Attach</button>
                <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded">🏷️ Tag</button>
              </div>
              <button
                onClick={handlePost}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Shared Resources */}
      <Card title="Shared Resources">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sharedResources.map((resource, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-gray-800">{resource.title}</h4>
                <span className={`px-2 py-1 text-xs rounded ${
                  resource.type === 'Document' ? 'bg-blue-100 text-blue-800' :
                  resource.type === 'Guide' ? 'bg-green-100 text-green-800' :
                  resource.type === 'Presentation' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {resource.type}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">By {resource.author}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>⬇️ {resource.downloads}</span>
                  <span>⭐ {resource.rating}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {resource.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Team Projects */}
      <Card title="Team Projects">
        <div className="space-y-4">
          {teamProjects.map((project, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-gray-800">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
                <span className={`px-3 py-1 text-xs rounded-full ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      project.status === 'Completed' ? 'bg-green-600' :
                      project.status === 'In Progress' ? 'bg-blue-600' :
                      'bg-yellow-600'
                    }`}
                    style={{width: `${project.progress}%`}}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span>👥</span>
                  <span>{project.team.join(', ')}</span>
                </div>
                <span>📅 {project.deadline}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Collaboration Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card title="Active Discussions" className="text-center">
          <div className="text-3xl font-bold text-blue-600">{discussions.length}</div>
          <p className="text-sm text-gray-600">Ongoing conversations</p>
        </Card>
        <Card title="Shared Resources" className="text-center">
          <div className="text-3xl font-bold text-green-600">{sharedResources.length}</div>
          <p className="text-sm text-gray-600">Available documents</p>
        </Card>
        <Card title="Team Projects" className="text-center">
          <div className="text-3xl font-bold text-purple-600">{teamProjects.length}</div>
          <p className="text-sm text-gray-600">Active collaborations</p>
        </Card>
        <Card title="Total Downloads" className="text-center">
          <div className="text-3xl font-bold text-orange-600">
            {sharedResources.reduce((sum, resource) => sum + resource.downloads, 0)}
          </div>
          <p className="text-sm text-gray-600">Resource utilization</p>
        </Card>
      </div>
    </div>
  );
}
