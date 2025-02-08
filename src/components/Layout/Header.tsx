import React from 'react';
import { Bell, Globe } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white shadow-sm z-10">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="text-lg font-semibold text-text">
          Welcome back, {user?.name}
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Globe size={20} />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell size={20} />
          </button>

          <div className="flex items-center space-x-3">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
              alt={user?.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-text">{user?.name}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;