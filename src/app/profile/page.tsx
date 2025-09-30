import Card from '@/components/Card';

export default function Profile() {
  const skills = [
    { name: 'Artifact Preservation', level: 'Expert', progress: 95, category: 'Technical' },
    { name: 'Digital Archiving', level: 'Advanced', progress: 85, category: 'Technical' },
    { name: 'Collection Management', level: 'Advanced', progress: 80, category: 'Management' },
    { name: 'Research Methodology', level: 'Intermediate', progress: 70, category: 'Research' },
    { name: 'Public Speaking', level: 'Intermediate', progress: 65, category: 'Communication' },
    { name: 'Project Management', level: 'Beginner', progress: 45, category: 'Management' }
  ];

  const certifications = [
    { name: 'First Aid Certification', issuer: 'Red Cross', expiry: 'Nov 2026', status: 'Active' },
    { name: 'Museum Studies Certificate', issuer: 'Smithsonian', expiry: 'Lifetime', status: 'Active' },
    { name: 'Digital Preservation Specialist', issuer: 'NEDCC', expiry: 'Dec 2025', status: 'Active' },
    { name: 'Leadership in Cultural Heritage', issuer: 'ICOM', expiry: 'Expired', status: 'Renewal Due' }
  ];

  const projects = [
    {
      name: 'Ancient Egypt Exhibit',
      role: 'Lead Curator',
      status: 'Completed',
      duration: 'Jan 2024 - Aug 2024',
      description: 'Curated and designed a comprehensive exhibit featuring 200+ artifacts from the Ptolemaic period.',
      achievements: ['Increased visitor engagement by 35%', 'Featured in National Geographic', 'Won Museum Excellence Award']
    },
    {
      name: 'Modern Art Installation',
      role: 'Co-Curator',
      status: 'In Progress',
      duration: 'Sep 2024 - Feb 2025',
      description: 'Collaborative project with contemporary artists to create an immersive digital-physical installation.',
      achievements: ['Preliminary designs approved', 'Artist collaborations secured']
    },
    {
      name: 'Digital Archive Migration',
      role: 'Project Manager',
      status: 'Planning',
      duration: 'Jan 2025 - Jun 2025',
      description: 'Leading the migration of 50,000+ digital assets to a new preservation system.',
      achievements: ['Requirements gathering completed', 'Vendor selection in progress']
    }
  ];

  const performanceReviews = [
    {
      period: '2024 Q1',
      rating: 'Exceeds Expectations',
      reviewer: 'Dr. Sarah Mitchell',
      highlights: ['Exceptional curation skills', 'Strong team leadership', 'Innovative exhibit design'],
      goals: ['Mentor junior curators', 'Expand digital outreach']
    },
    {
      period: '2023 Q4',
      rating: 'Meets Expectations',
      reviewer: 'Dr. Michael Chen',
      highlights: ['Consistent performance', 'Good collaboration skills', 'Reliable project delivery'],
      goals: ['Improve public speaking skills', 'Take on more leadership roles']
    }
  ];

  const careerTimeline = [
    { year: '2022', title: 'Associate Curator', company: 'Museum of Cultural History', description: 'Started in collections management' },
    { year: '2023', title: 'Curator', company: 'Museum of Cultural History', description: 'Promoted to full curator role' },
    { year: '2024', title: 'Senior Curator', company: 'Museum of Cultural History', description: 'Current position with expanded responsibilities' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-800">My Profile & Skills</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            ✏️ Edit Profile
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">
            📄 Export CV
          </button>
        </div>
      </div>

      {/* Profile Header */}
      <Card
        title="Profile Overview"
        variant="glass"
        icon={<div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>}
      >
        <div className="flex items-start space-x-6">
          <div className="relative">
            <div className="w-28 h-28 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl animate-float">
              JD
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Johnathan Doe
              </h2>
              <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm rounded-full shadow-md">
                🟢 Active
              </span>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-1">Senior Curator</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Department of Artifacts & Collections</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">3</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Years Tenure</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="text-lg font-bold text-green-600 dark:text-green-400">12</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Projects Led</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400">4.8</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Avg Rating</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">15</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Personal Information */}
      <Card title="Personal Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-600">Full Name</label>
              <p className="text-gray-800">Johnathan Robert Doe</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Employee ID</label>
              <p className="text-gray-800">EMP-2022-045</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Date of Hire</label>
              <p className="text-gray-800">March 15, 2022</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Work Location</label>
              <p className="text-gray-800">Main Campus - Building A, Floor 3</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-600">Manager</label>
              <p className="text-gray-800">Dr. Sarah Mitchell (Chief Curator)</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Department</label>
              <p className="text-gray-800">Artifacts & Collections</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Work Schedule</label>
              <p className="text-gray-800">Monday - Friday, 9:00 AM - 5:00 PM</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Contact</label>
              <p className="text-gray-800">john.doe@company.com | Ext. 2345</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Skills Assessment */}
      <Card title="Skills & Competencies">
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-3">
                  <h3 className="font-medium text-gray-800">{skill.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    skill.category === 'Technical' ? 'bg-blue-100 text-blue-800' :
                    skill.category === 'Management' ? 'bg-green-100 text-green-800' :
                    skill.category === 'Research' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {skill.category}
                  </span>
                </div>
                <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                  skill.level === 'Expert' ? 'bg-green-100 text-green-800' :
                  skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                  skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {skill.level}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        skill.level === 'Expert' ? 'bg-green-500' :
                        skill.level === 'Advanced' ? 'bg-blue-500' :
                        skill.level === 'Intermediate' ? 'bg-yellow-500' :
                        'bg-gray-500'
                      }`}
                      style={{width: `${skill.progress}%`}}
                    ></div>
                  </div>
                </div>
                <span className="text-sm text-gray-600 min-w-[3rem]">{skill.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Certifications */}
      <Card title="Certifications & Licenses">
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{cert.name}</h3>
                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                  <span>📜 {cert.issuer}</span>
                  <span>📅 Expires: {cert.expiry}</span>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                cert.status === 'Active' ? 'bg-green-100 text-green-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {cert.status}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Projects */}
      <Card title="Project History" expandable={true}>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.role} • {project.duration}</p>
                </div>
                <span className={`px-3 py-1 text-sm rounded-full ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-gray-700 mb-3">{project.description}</p>

              <div>
                <h4 className="font-medium text-gray-800 mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
        </ul>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Performance Reviews */}
      <Card title="Performance Reviews" expandable={true}>
        <div className="space-y-4">
          {performanceReviews.map((review, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-gray-800">{review.period} Review</h3>
                  <p className="text-sm text-gray-600">Reviewed by {review.reviewer}</p>
                </div>
                <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                  review.rating === 'Exceeds Expectations' ? 'bg-green-100 text-green-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {review.rating}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Highlights:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    {review.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Development Goals:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    {review.goals.map((goal, i) => (
                      <li key={i}>{goal}</li>
                    ))}
        </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Career Timeline */}
      <Card title="Career Timeline">
        <div className="space-y-4">
          {careerTimeline.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                {index < careerTimeline.length - 1 && <div className="w-0.5 h-12 bg-gray-300 mt-2"></div>}
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded font-medium">
                    {item.year}
                  </span>
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-1">{item.company}</p>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card title="Years of Service" className="text-center">
          <div className="text-3xl font-bold text-blue-600">3</div>
          <p className="text-sm text-gray-600">Years with company</p>
        </Card>
        <Card title="Projects Led" className="text-center">
          <div className="text-3xl font-bold text-green-600">12</div>
          <p className="text-sm text-gray-600">Completed projects</p>
        </Card>
        <Card title="Certifications" className="text-center">
          <div className="text-3xl font-bold text-purple-600">4</div>
          <p className="text-sm text-gray-600">Active certifications</p>
        </Card>
        <Card title="Team Size" className="text-center">
          <div className="text-3xl font-bold text-orange-600">8</div>
          <p className="text-sm text-gray-600">Direct reports</p>
        </Card>
      </div>
    </div>
  );
}
