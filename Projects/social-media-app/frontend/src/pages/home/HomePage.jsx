import './home.css'
import LeftSidebar from '../../components/leftsidebar/LeftSidebar'
import RightSidebar from '../../components/rightsidebar/RightSidebar'
import Timeline from '../../components/timeline/Timeline'
import { TopBar } from '../../components/topbar/TopBar'

function HomePage() {
  return <>
      <TopBar/>
      <div className='mainContent'>
        <LeftSidebar/>
        <Timeline/>
        <RightSidebar/>
      </div>
    </>
}

export default HomePage
