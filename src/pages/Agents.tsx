import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Phone, Mail, Building } from 'lucide-react';

const mockAgents = [
  {
    id: 'A001',
    name: 'John Smith',
    email: 'john.s@timmo.com',
    phone: '+212 6XX-XXXXXX',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    performance: {
      closed: 15,
      active: 8,
      revenue: 450000,
    },
  },
  {
    id: 'A002',
    name: 'Sarah Wilson',
    email: 'sarah.w@timmo.com',
    phone: '+212 6XX-XXXXXX',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    performance: {
      closed: 12,
      active: 5,
      revenue: 380000,
    },
  },
  {
    id: 'A003',
    name: 'Ahmed Hassan',
    email: 'ahmed.h@timmo.com',
    phone: '+212 6XX-XXXXXX',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    performance: {
      closed: 18,
      active: 10,
      revenue: 520000,
    },
  },
];

const performanceData = mockAgents.map(agent => ({
  name: agent.name,
  closed: agent.performance.closed,
  active: agent.performance.active,
  revenue: agent.performance.revenue,
}));

const AgentsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-text">Agents</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Add Agent
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {mockAgents.map((agent) => (
          <div key={agent.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{agent.name}</h3>
                  <p className="text-sm text-gray-500">ID: {agent.id}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={18} />
                <span className="text-sm">{agent.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={18} />
                <span className="text-sm">{agent.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Building size={18} />
                <span className="text-sm">{agent.performance.active} active listings</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Closed</p>
                  <p className="text-lg font-semibold">{agent.performance.closed}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Active</p>
                  <p className="text-lg font-semibold">{agent.performance.active}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Revenue</p>
                  <p className="text-lg font-semibold">${(agent.performance.revenue / 1000).toFixed(1)}k</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Performance Overview</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="closed" fill="#2C3E50" name="Closed Properties" />
              <Bar yAxisId="left" dataKey="active" fill="#27AE60" name="Active Properties" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;