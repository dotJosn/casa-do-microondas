import React from 'react';

export const BusinessHours = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Horário de Atendimento</h2>
    
    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-gray-700">Segunda a Sexta</span>
        <span className="font-medium text-gray-900">08:30 - 17:30</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-700">Sábado</span>
        <span className="font-medium text-gray-900">09:00 - 13:00</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-700">Domingo e Feriados</span>
        <span className="font-medium text-[#FF5926]">Fechado</span>
      </div>
    </div>

    <div className="mt-6 p-4 bg-[#FFF0E5] rounded-lg">
      <p className="text-sm text-gray-700">
        <span className="font-bold text-[#FF5926]">ATENÇÃO:</span> Para atendimentos emergenciais fora do horário comercial, entre em contato por telefone.
      </p>
    </div>
  </div>
);