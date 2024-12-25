import React from 'react';
import AllProductsContent from './AllProductsContent';
import JumpStartSolutionsContent from './JumpStartSolutionsContent';
import SolutionDeploymentsContent from './SolutionDeploymentsContent';

const MainContent = ({ activeSection }) => {
  const sectionComponents = {
    'All Products': <AllProductsContent />,
    'Jump Start Solutions': <JumpStartSolutionsContent />,
    'Solution deployments': <SolutionDeploymentsContent />
  };

  return (
    <div className="flex-grow bg-white overflow-auto">
      {sectionComponents[activeSection]}
    </div>
  );
};

export default MainContent;



// const navigations = {
//   overview: {
//       name: "Cloud Overview",
//       subMenu: {
//           dashboard: {
//               name: "Dashboard",
//               icon: 'icon-2',
//               category: {}
//           },
//           recommendations: {
//               name: "Recommendations",
//               icon: 'icon-2',
//               category: {}
//           }
//       }
//   },
//   solution: {
//       name: "Solution",
//       subMenu: {
//           allProducts: {
//               name: "All Product",
//                   icon: 'icon-2',
//               category: {}
//           },
//           jumpStart: {
//               name: "Jump Start Solutions",
//               icon: 'icon-2',
//               category: {}
//           },
//           solutionDeployments: {
//               name: "Solution Deployments",
//                   icon: 'icon-2',
//               category: {
//                   shipping: {
//                       name: 'Shipping Solutions',
//                       icon: 'icon-2',
//                   }
//               }
//           }
//       }
//   }
// }