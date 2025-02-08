import React, { useState } from 'react';
import { Search, Filter, Edit2, UserPlus, Eye } from 'lucide-react';
import clsx from 'clsx';

const mockProperties = [
  {
    id: 'P001',
    title: 'Modern Villa with Pool',
    type: 'Villa',
    location: 'Casablanca',
    price: 2500000,
    status: 'available',
    images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80'],
  },
  {
    id: 'P002',
    title: 'Downtown Apartment',
    type: 'Apartment',
    location: 'Rabat',
    price: 850000,
    status: 'pending',
    images: ['https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&q=80'],
  },
  {
    id: 'P003',
    title: 'Beachfront Condo',
    type: 'Condo',
    location: 'Tangier',
    price: 1750000,
    status: 'sold',
    images: ['https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&q=80'],
  },
];

const PropertiesPage = () => {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    status: '',
    priceRange: '',
  });

  const [searchQuery, setSearchQuery] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-accent/10 text-accent';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'sold':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-text">Properties</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Add Property
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            >
              <option value="">All Locations</option>
              <option value="casablanca">Casablanca</option>
              <option value="rabat">Rabat</option>
              <option value="tangier">Tangier</option>
            </select>
            <select
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">All Types</option>
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
            <select
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            >
              <option value="">All Status</option>
              <option value="available">Available</option>
              <option value="pending">Pending</option>
              <option value="sold">Sold</option>
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
                <th className="text-left py-4 px-4 font-semibold text-gray-600">Property</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-600">Location</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-600">Type</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-600">Price</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-600">Status</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockProperties.map((property) => (
                <tr key={property.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={property.images[0]}
                        alt={property.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-text">{property.title}</p>
                        <p className="text-sm text-gray-500">ID: {property.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{property.location}</td>
                  <td className="py-4 px-4 text-gray-600">{property.type}</td>
                  <td className="py-4 px-4 text-gray-600">
                    ${property.price.toLocaleString()}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={clsx(
                        'px-3 py-1 rounded-full text-sm capitalize',
                        getStatusColor(property.status)
                      )}
                    >
                      {property.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="View">
                        <Eye size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Edit">
                        <Edit2 size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Assign Agent">
                        <UserPlus size={18} className="text-gray-600" />
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

export default PropertiesPage;