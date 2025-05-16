import { useState, useEffect } from 'react';
import MediaCard from '../components/MediaCard';

interface Media {
  id: string;
  title: string;
  description?: string;
  type: 'image' | 'video';
  filePath: string;
}

const Gallery = () => {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'all' | 'image' | 'video'>('all');

  useEffect(() => {
    // Assuming Amza.jpg is in your public folder or assets directory
    const dummyMedia: Media[] = [
      {
        id: '1',
        title: 'Amza Profile',
        description: 'Professional portrait of Amza',
        type: 'image',
        filePath: 'Amza.jpg' // Update this path according to your file structure
      },
      {
        id: '2',
        title: 'Team Huddle',
        description: 'The team preparing for an important match',
        type: 'image',
        filePath: 'Amza.jpg' // Update this path according to your file structure
      },
      {
        id: '3',
        title: 'Victory Celebrations',
        description: 'Celebrating after winning the championship',
        type: 'image',
        filePath: 'Amza.jpg' // Update this path according to your file structure
      },
      {
        id: '4',
        title: 'Training Session',
        description: 'Weekly training at the stadium',
        type: 'image',
        filePath: 'Amza.jpg' // Update this path according to your file structure
      },
      {
        id: '5',
        title: 'Team Building',
        description: 'Annual team retreat activities',
        type: 'image',
        filePath: 'Amza.jpg' // Update this path according to your file structure
      }
    ];
    
    setMedia(dummyMedia);
    setLoading(false);
  }, []);

  const filteredMedia = media.filter(item => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Media Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore photos and videos from KIVU GIANTS matches, training sessions, and community events.
          </p>
        </div>
      </section>
      
      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setActiveFilter('all')} 
              className={`px-4 py-2 rounded-md font-medium ${activeFilter === 'all' ? 'bg-red-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              All Media
            </button>
            <button 
              onClick={() => setActiveFilter('image')} 
              className={`px-4 py-2 rounded-md font-medium ${activeFilter === 'image' ? 'bg-red-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Photos
            </button>
            <button 
              onClick={() => setActiveFilter('video')} 
              className={`px-4 py-2 rounded-md font-medium ${activeFilter === 'video' ? 'bg-red-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Videos
            </button>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-700"></div>
              <p className="mt-4 text-gray-600">Loading media...</p>
            </div>
          ) : filteredMedia.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No media items found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedia.map((item) => (
                <MediaCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  src={item.filePath}
                  type={item.type}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;