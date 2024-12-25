import React from 'react';
import AllProductsContent from './AllProductsContent';
import JumpStartSolutionsContent from './JumpStartSolutionsContent';
import SolutionDeploymentsContent from './SolutionDeploymentsContent';

const MainContent = ({ activeSection }) => {
  const sectionComponents = {
    'All Products': <AllProductsContent />,
    'Jump Start Solutions': <JumpStartSolutionsContent />,
    'Solution Deployments': <SolutionDeploymentsContent />
  };

  return (
    <div className="flex-grow bg-white overflow-auto">
      {sectionComponents[activeSection]}
    </div>
  );
};

export default MainContent;