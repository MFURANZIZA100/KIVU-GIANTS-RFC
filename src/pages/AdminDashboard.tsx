import  { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Upload, 
  Image, 
  Video, 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut
} from 'lucide-react';
import MediaForm from '../components/MediaForm';
import MediaCard from '../components/MediaCard';
import { useAuth } from '../contexts/AuthContext';

interface Media {
  id: string;
  title: string;
  description?: string;
  type: 'image' | 'video';
  filePath: string;
}

const MediaDashboard = () => {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<Media | null>(null);

  useEffect(() => {
    // In a real app, this would be an API call
    // For demo purpose, we're using dummy data
    const dummyMedia: Media[] = [
      {
        id: '1',
        title: 'Team Huddle Before Championship Match',
        description: 'The Giants preparing for the crucial final against Bukavu Lions',
        type: 'image',
        filePath: 'https://images.unsplash.com/photo-1521830101529-057b1dfd9784?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200'
      },
      {
        id: '2',
        title: 'Victory Celebrations',
        description: 'Celebrating after winning the East Africa Rugby Championship',
        type: 'image',
        filePath: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200'
      },
      {
        id: '3',
        title: 'Training Session',
        description: 'Weekly training at Kivu Stadium',
        type: 'image',
        filePath: 'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200'
      }
    ];
    
    setMedia(dummyMedia);
    setLoading(false);
  }, []);

  const handleEdit = (id: string) => {
    const itemToEdit = media.find(item => item.id === id);
    if (itemToEdit) {
      setEditingItem(itemToEdit);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      // In a real app, you would make an API call
      setMedia(media.filter(item => item.id !== id));
    }
  };

  const handleFormSubmit = async (formData: FormData) => {
    // In a real app, you would make an API call
    const id = formData.get('id') as string;
    
    if (id) {
      // Update existing item
      setMedia(media.map(item => {
        if (item.id === id) {
          return {
            ...item,
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            type: formData.get('mediaType') as 'image' | 'video'
          };
        }
        return item;
      }));
    } else {
      // Add new item
      const newItem: Media = {
        id: Date.now().toString(),
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        type: formData.get('mediaType') as 'image' | 'video',
        filePath: 'https://images.unsplash.com/photo-1492366254240-43affaefc3e3?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200'
      };
      
      setMedia([newItem, ...media]);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <MediaForm 
            onSubmit={handleFormSubmit} 
            editingItem={editingItem} 
            setEditingItem={setEditingItem} 
          />
        </div>
        
        <div className="md:w-2/3">
          <h2 className="text-xl font-bold mb-4">Media Library</h2>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-700"></div>
              <p className="mt-4 text-gray-600">Loading media...</p>
            </div>
          ) : media.length === 0 ? (
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-4">No media items found.</p>
              <p className="text-gray-600">Use the form to add your first item.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {media.map((item) => (
                <MediaCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  src={item.filePath}
                  type={item.type}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  isAdmin={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProfileSettings = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-4">
          This section would allow admins to update their profile information and change their password.
        </p>
        <p className="text-gray-600">
          For the demo, this functionality is not fully implemented.
        </p>
      </div>
    </div>
  );
};

const TeamManagement = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Team Management</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-4">
          This section would allow admins to manage team members, update player information, and assign positions.
        </p>
        <p className="text-gray-600">
          For the demo, this functionality is not fully implemented.
        </p>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  
  useEffect(() => {
    if (location.pathname === '/admin' || location.pathname === '/admin/') {
      navigate('/admin/media');
    }
  }, [location, navigate]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
          {/* Sidebar */}
          <div className="md:w-64 bg-gray-800 text-white p-4">
            <h2 className="text-xl font-bold mb-6 text-center">Admin Dashboard</h2>
            
            <nav className="space-y-2">
              <Link 
                to="/admin/media" 
                className={`flex items-center p-3 rounded-md ${isActive('/admin/media') ? 'bg-red-700' : 'hover:bg-gray-700'}`}
              >
                <LayoutDashboard size={20} className="mr-3" />
                <span>Media Management</span>
              </Link>
              
              <Link 
                to="/admin/team" 
                className={`flex items-center p-3 rounded-md ${isActive('/admin/team') ? 'bg-red-700' : 'hover:bg-gray-700'}`}
              >
                <Users size={20} className="mr-3" />
                <span>Team Management</span>
              </Link>
              
              <Link 
                to="/admin/settings" 
                className={`flex items-center p-3 rounded-md ${isActive('/admin/settings') ? 'bg-red-700' : 'hover:bg-gray-700'}`}
              >
                <Settings size={20} className="mr-3" />
                <span>Settings</span>
              </Link>
              
              <button 
                onClick={logout}
                className="w-full flex items-center p-3 rounded-md text-left hover:bg-gray-700"
              >
                <LogOut size={20} className="mr-3" />
                <span>Logout</span>
              </button>
            </nav>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="text-center">
                <Link to="/" className="text-sm text-gray-400 hover:text-white">
                  Back to Website
                </Link>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="p-4 bg-gray-200 border-b">
              <h1 className="text-2xl font-bold">
                {isActive('/admin/media') && 'Media Management'}
                {isActive('/admin/team') && 'Team Management'}
                {isActive('/admin/settings') && 'Settings'}
              </h1>
            </div>
            
            <div className="p-0">
              <Routes>
                <Route path="/media" element={<MediaDashboard />} />
                <Route path="/team" element={<TeamManagement />} />
                <Route path="/settings" element={<ProfileSettings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
 