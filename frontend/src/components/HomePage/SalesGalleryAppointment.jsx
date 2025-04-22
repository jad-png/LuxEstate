import React, { useState, useEffect } from 'react';
import useAgentStore from '../../stores/agentStore';
import api from '../../services/api';

export function SalesGalleryAppointment() {
  const [agentId, setAgentId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const { agents, fetchAgents } = useAgentStore();

  useEffect(() => {
    fetchAgents();
  }, [fetchAgents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!agentId || !date || !time) {
      setError('Please fill in all fields.');
      return;
    }
    const today = new Date().toISOString().split('T')[0];
    if (date < today) {
      setError('Date must be today or in the future.');
      return;
    }
    
    try {

      const response = await api.post('/appointments', {
        agent_id: agentId, date, time
      });

      setAgentId('');
      setDate('');
      setTime('');
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to create appointment.');
    }
  }
  return (
    <div className="w-full py-36 px-4 bg-gradient-to-r from-stone-500 to-amber-600">
      <div className="max-w-2xl mx-auto text-center text-white">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider mb-4">Enquiry</p>
          <h2 className="text-3xl md:text-4xl font-light">
            Sales Gallery Is Now Open For<br />
            Private Appointments
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="flex-1">
              <select
                value={agentId}
                onChange={(e) => setAgentId(e.target.value)}
                className="w-full bg-transparent border-b border-white/50 py-2 px-1 text-white placeholder-white/70 focus:outline-none"
              >
                <option value="" className="text-gray-800">Select an Agent *</option>
                {agents.map((agent) => (
                  <option key={agent.id} value={agent.id} className="text-gray-800">
                    {agent.name}
                  </option>
                ))}
              </select>
          </div>

          <div className="flex-1">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent border-b border-white/50 py-2 px-1 text-white placeholder-white/70 focus:outline-none"
            />
          </div>

          <div className="flex-1">
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-transparent border-b border-white/50 py-2 px-1 text-white placeholder-white/70 focus:outline-none"
            />
          </div>

          <div>
            <button type='submit'
              className="w-full md:w-auto bg-white text-stone-700 py-2 px-6 text-sm uppercase tracking-wider"
            >
              Submit
            </button>
          </div>
        </form>
        {error && <p className="mt-4 text-red-300">{error}</p>}
      </div>
    </div>
  );
}

export default SalesGalleryAppointment;