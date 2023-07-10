import { useEffect } from 'react';

const RemoveSkeletonClasses = () => {
    useEffect(() => {
      const removeSkeletonClasses = () => {
        const skeletonElements = document.querySelectorAll('.skeleton');
        skeletonElements.forEach((element) => {
          element.classList.remove('skeleton');
        });
      };
  
      const timeoutId = setTimeout(removeSkeletonClasses, 5000);
  
      return () => clearTimeout(timeoutId);
    }, []);
  
    return null;
  };
  
  export default RemoveSkeletonClasses;