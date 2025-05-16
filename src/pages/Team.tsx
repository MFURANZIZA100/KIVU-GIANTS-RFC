import  { Shield, Award, Flag } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Emmanuel Rugamba',
      position: 'Captain & Flanker',
      bio: 'Leading the Giants since 2018, Emmanuel brings international experience and tactical knowledge to the team.',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax'
    },
    {
      id: 2,
      name: 'Jean-Pierre Hakizimana',
      position: 'Fly-Half',
      bio: "The team's playmaker with exceptional vision and kicking accuracy. National team player since 2019.",
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax'
    },
    {
      id: 3,
      name: 'Claude Mutabazi',
      position: 'Prop',
      bio: "The cornerstone of our scrum. Claude's strength and technique have made him one of the most feared props in the league.",
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax'
    },
    {
      id: 4,
      name: 'David Niyonzima',
      position: 'Centre',
      bio: "Known for his explosive speed and powerful tackles, David has been a key offensive weapon for the Giants.",
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax'
    },
    {
      id: 5,
      name: 'Robert Mugisha',
      position: 'Scrum-Half',
      bio: "The link between forwards and backs, Robert's quick thinking and accurate passes keep the team moving forward.",
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax'
    },
    {
      id: 6,
      name: 'Patrick Uwimana',
      position: 'Lock',
      bio: "A towering presence in the lineout and a powerful runner with ball in hand. Patrick's work rate is second to none.",
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated athletes who represent the KIVU GIANTS on and off the field.
          </p>
        </div>
      </section>
      
      {/* Team Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg text-center">
              <Shield size={48} className="text-red-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards both on and off the field, constantly pushing boundaries and challenging ourselves.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg text-center">
              <Award size={48} className="text-red-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Respect</h3>
              <p className="text-gray-600">
                We respect our teammates, opponents, officials, and the traditions of rugby that make our sport unique.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg text-center">
              <Flag size={48} className="text-red-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We're committed to making a positive impact in our community, using rugby as a force for good.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Members */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet The Giants</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-red-700 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Coaching Staff */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Coaching Staff</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1492366254240-43affaefc3e3?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax&h=200&w=200" 
                alt="Head Coach" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Michael Kagame</h3>
              <p className="text-red-700 font-medium mb-2">Head Coach</p>
              <p className="text-gray-600 max-w-sm mx-auto">
                Former national team player with over 15 years of coaching experience.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1492366254240-43affaefc3e3?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax&h=200&w=200" 
                alt="Assistant Coach" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">James Ndayisaba</h3>
              <p className="text-red-700 font-medium mb-2">Assistant Coach</p>
              <p className="text-gray-600 max-w-sm mx-auto">
                Specializes in forward play and set-piece strategies.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1492366254240-43affaefc3e3?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax&h=200&w=200" 
                alt="Fitness Coach" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Sarah Mukamana</h3>
              <p className="text-red-700 font-medium mb-2">Fitness & Conditioning</p>
              <p className="text-gray-600 max-w-sm mx-auto">
                Sports science specialist ensuring our players are in peak physical condition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
 