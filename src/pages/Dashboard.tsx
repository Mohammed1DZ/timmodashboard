import React from 'react';
import { Home, Users, TrendingUp, Building } from 'lucide-react';
import KPICard from '../components/Dashboard/KPICard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const agentPerformanceData = [
  { name: 'John Doe', properties: 12 },
  { name: 'Jane Smith', properties: 8 },
  { name: 'Mike Johnson', properties: 15 },
  { name: 'Sarah Wilson', properties: 10 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Active Properties"
          value={45}
          icon={Building}
          trend={{ value: 12, isPositive: true }}
        />
        <KPICard
          title="Total Agents"
          value={24}
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <KPICard
          title="Properties Sold"
          value={156}
          icon={Home}
          trend={{ value: 23, isPositive: true }}
        />
        <KPICard
          title="Revenue Growth"
          value="$1.2M"
          icon={TrendingUp}
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Agent Performance</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={agentPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="properties" fill="#2C3E50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;