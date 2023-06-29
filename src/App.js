import MainBlock from './mainBlock';
import './style.css';
import './fonts/stylesheet.css';
import Bar from './Bar';
import RemoveSkeletonClasses from './Skeleton';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
      <MainBlock/>
      <Bar/>
      <RemoveSkeletonClasses/>
      </div>
    </div>
  );
}

export default App;
