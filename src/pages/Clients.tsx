import React, { useState } from 'react';
import { Search, Filter, Mail, UserCog, Phone } from 'lucide-react';
import clsx from 'clsx';

const mockClients = [
  {
    id: 'C001',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+212 6XX-XXXXXX',
    type: 'buyer',
    source: 'facebook',
    propertyInterest: ['P001', 'P003'],
  },
  {
    id: 'C002',
    name: 'Mohammed Ali',
    email: 'mali@example.com',
    phone: '+212 6XX-XXXXXX',
    type: 'seller',
    source: 'agent',
    propertyInterest: ['P002'],
  },
  {
    id: 'C003',
    name: 'Fatima Hassan',
    email: 'fatima.h@example.com',
    phone: '+212 6XX-XXXXXX',
    type: 'renter',
    source: 'business_card',
    propertyInterest: [],
  },
];

const ClientsPage = () => {
  const [filters, setFilters] = useState({
    type: '',
    source: '',
  });

  const [searchQuery, setSearchQuery] = useState('');

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'buyer':
        return 'bg-blue-100 text-blue-800';
      case 'seller':
        return 'bg-purple-100 text-purple-800';
      case 'renter':
        return 'bg-green-100 text-green-800';
      case 'landlord':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'facebook':
        return '📱';
      case 'agent':
        return '👤';
      case 'collaborators':
        return '🤝';
      case 'business_card':
        return '📇';
      case 'phone_calls':
        return '📞';
      default:
        return '❓';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-text">Clients</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Add Client
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search clients..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">All Types</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              <option value="renter">Renter</option>
              <option value="landlord">Landlord</option>
            </select>
            <select
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={filters.source}
              onChange={(e) => setFilters({ ...filters, source: e.target.value })}
            >
              <option value="">All Sources</option>
              <option value="facebook">Facebook</option>
              <option value="agent">Agent</option>
              <option value="collaborators">Collaborators</option>
              <option value="business_card">Business Card</option>
              <option value="phone_calls">Phone Calls</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter size={20} />
              More Filters
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-600">Client</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-600">Contact</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-600">Type</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-600">Source</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-600">Properties</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockClients.map((client) => (
                <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-text">{client.name}</p>
                      <p className="text-sm text-gray-500">ID: {client.id}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">{client.email}</p>
                      <p className="text-sm text-gray-600">{client.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={clsx(
                        'px-3 py-1 rounded-full text-sm capitalize',
                        getTypeColor(client.type)
                      )}
                    >
                      {client.type}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{getSourceIcon(client.source)}</span>
                      <span className="text-sm text-gray-600 capitalize">
                        {client.source.replace('_', ' ')}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600">
                      {client.propertyInterest.length} interested
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Send Email">
                        <Mail size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Call">
                        <Phone size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Assign Agent">
                        <UserCog size={18} className="text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;