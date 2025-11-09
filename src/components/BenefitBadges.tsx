
import React from 'react';
const BenefitBadge: React.FC<{
  icon: string;
  text: string;
}> = ({
  icon,
  text
}) => {
  return <div className="flex items-center">
      <div className="w-8 h-8 bg-gray-700 mr-2 rounded-md flex items-center justify-center">
        {icon}
      </div>
      <p className="text-xs font-bold text-white">{text}</p>
    </div>;
};

const BenefitBadges: React.FC = () => {
  return null;
};
export default BenefitBadges;
