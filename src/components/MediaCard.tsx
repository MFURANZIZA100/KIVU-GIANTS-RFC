interface  MediaCardProps {
  id: string;
  title: string;
  description?: string;
  src: string;
  type: 'image' | 'video';
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}

const MediaCard = ({ 
  id, 
  title, 
  description, 
  src, 
  type, 
  onEdit, 
  onDelete, 
  isAdmin = false 
}: MediaCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="aspect-w-16 aspect-h-9 w-full h-48 overflow-hidden">
        {type === 'image' ? (
          <img 
            src={src} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <video 
            src={src} 
            controls 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {description && <p className="text-gray-600 text-sm mb-4">{description}</p>}
        
        {isAdmin && (
          <div className="flex justify-end space-x-2 mt-2">
            <button 
              onClick={() => onEdit && onEdit(id)} 
              className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete && onDelete(id)} 
              className="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaCard;
 