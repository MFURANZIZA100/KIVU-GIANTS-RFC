import  { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface Media {
  id: string;
  title: string;
  description?: string;
  type: 'image' | 'video';
  filePath: string;
}

interface MediaFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
  editingItem: Media | null;
  setEditingItem: (item: Media | null) => void;
}

const MediaForm = ({ onSubmit, editingItem, setEditingItem }: MediaFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingItem) {
      setTitle(editingItem.title);
      setDescription(editingItem.description || '');
      setMediaType(editingItem.type);
    } else {
      resetForm();
    }
  }, [editingItem]);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setMediaType('image');
    setFile(null);
    setError('');
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    
    if (!editingItem && !file) {
      setError('File is required');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('mediaType', mediaType);
    
    if (file) {
      formData.append('file', file);
    }
    
    if (editingItem) {
      formData.append('id', editingItem.id);
    }

    try {
      setIsSubmitting(true);
      await onSubmit(formData);
      resetForm();
      setEditingItem(null);
    } catch (err) {
      setError('Failed to save media');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{editingItem ? 'Edit Media' : 'Add New Media'}</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title*
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input min-h-[100px]"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Media Type
          </label>
          <select
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value as 'image' | 'video')}
            className="input"
          >
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            File {!editingItem && '*'}
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full"
            accept={mediaType === 'image' ? 'image/*' : 'video/*'}
            required={!editingItem}
          />
        </div>
        
        <div className="flex justify-end space-x-2">
          {editingItem && (
            <button
              type="button"
              onClick={() => setEditingItem(null)}
              className="btn btn-secondary"
              disabled={isSubmitting}
            >
              Cancel
            </button>
          )}
          
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : editingItem ? 'Update' : 'Add Media'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MediaForm;
 