import React from 'react';
import { Shield, Users, Building, UserCog, Globe, Bell, Palette } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-text">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/5 rounded-lg">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold">Roles & Permissions</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Manage user roles and access levels for different features
          </p>
          <button className="text-primary hover:text-primary/80">Configure permissions →</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/5 rounded-lg">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold">Team Management</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Add or remove team members and manage their roles
          </p>
          <button className="text-primary hover:text-primary/80">Manage team →</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/5 rounded-lg">
              <Building className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold">Property Settings</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Configure property types, status options, and fields
          </p>
          <button className="text-primary hover:text-primary/80">Customize properties →</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/5 rounded-lg">
              <UserCog className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold">Agent Settings</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Manage agent profiles, commissions, and territories
          </p>
          <button className="text-primary hover:text-primary/80">Configure agents →</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/5 rounded-lg">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold">Language & Region</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Set language preferences and regional settings
          </p>
          <button className="text-primary hover:text-primary/80">Change settings →</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/5 rounded-lg">
              <Bell className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Configure email and system notification preferences
          </p>
          <button className="text-primary hover:text-primary/80">Manage notifications →</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/5 rounded-lg">
            <Palette className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-lg font-semibold">Appearance</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Theme Color
            </label>
            <div className="grid grid-cols-6 gap-4">
              {['#2C3E50', '#27AE60', '#2980B9', '#8E44AD', '#C0392B', '#F39C12'].map((color) => (
                <button
                  key={color}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Font Size
            </label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md">
              <option>Small</option>
              <option selected>Medium</option>
              <option>Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Navigation Style
            </label>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="navigation"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  defaultChecked
                />
                <span className="ml-3 text-sm text-gray-700">Sidebar Navigation</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="navigation"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                />
                <span className="ml-3 text-sm text-gray-700">Top Navigation</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;