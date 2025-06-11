import React from "react";

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  isPhone?: boolean;
}

export const ContactInfoCard = ({ icon, title, children, isPhone = false }: ContactInfoCardProps) => (
  <div className='mb-6 flex items-start'>
    <div className='mr-4 flex-shrink-0 rounded-full bg-[#FF5926] p-3'>
      {icon}
    </div>
    <div>
      <h3 className='font-semibold text-gray-800 text-lg'>{title}</h3>
      <div className="text-gray-600">
        {isPhone ? (
          React.Children.map(children, child => 
            typeof child === 'string' ? (
              <a href={`tel:${child.replace(/\D/g, '')}`} className="block hover:text-[#FF5926]">
                {child}
              </a>
            ) : child
          )
        ) : children}
      </div>
    </div>
  </div>
);