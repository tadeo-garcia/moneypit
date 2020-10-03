import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer'
import Reward from '../components/Reward'
import ProjectCard from '../components/ProjectCard'
import '../css/projectpage.css'

export default function Project() {
    const project = useSelector(state => state.projects.project);
    const recommended = useSelector(state => state.projects.projects);
    let projects_list = [];
    
    if(!project || !recommended) return 'Loading...'
    
    if(!recommended){
      return
    } else {
      let i = 0;
      while (projects_list.length < 4 && i < recommended.length - 1){
        if(recommended[i].id !== project.id){
          projects_list.push(recommended[i])
          console.log(projects_list)
        }
        i++
      }
    }
        
    return (
      <>
        <div id='projectpage-container'>
          <div id='projectpage-top'>
            <div id='projectpage-title'>
              <span id='pp-title'>{project.title}</span>
              <span id='pp-description'>{project.description}</span>
            </div>
            <div id='projectpage-detail'>
              <div id='projectpage-detail-left'>
                <img id='pp-image' src={project.pic} alt='Project Video'/>
                <div id='pp-location'><i class="fa fa-map-marker" aria-hidden="true"></i> {project.location}</div>
              </div>
              <div id='projectpage-detail-right'>
                <div id="projectpage-detail-pledge">
                  <span className='pp-detail-pledge-title green-text'>{project.total_funding}</span>
                  <br/>
                  <span className='pp-detail-text'>pledged of {project.funding_goal} goal</span>
                </div>
                <div id="projectpage-detail-backers">
                  <span className='pp-detail-pledge-title'>{project.total_pledges}</span>
                  <br/>
                  <span className='pp-detail-text'>Backers</span>
                </div>
                <div id="projectpage-detail-days">
                  <span className='pp-detail-pledge-title'>{project.days_remaining}</span>
                  <br/>
                  <span className='pp-detail-text'>days to go</span>
                </div>
                <div id="projectpage-detail-bp">
                  <button id='projectpage-detail-button'>Back this project</button>
                  <div id='projectpage-detail-socialmedia'></div>
                  <div id='projectpage-detail-end-date'> This project will only be funded if it reaches its goal by {project.end_date}</div>
                </div>
              </div>
            </div>
          </div>
          <div id='projectpage-middle'>
            <div id='projectpage-info'>
              <h2>Story</h2>
              <span>
                Officia fashion axe flexitarian non, normcore consequat live-edge offal aliqua taxidermy. Bitters bicycle rights kogi, pabst ut brooklyn skateboard thundercats activated charcoal drinking vinegar. Voluptate pitchfork labore gastropub. Cronut skateboard vaporware, pork belly humblebrag retro duis ipsum chambray vexillologist.
                <br/>
                <br />
                Dolore literally roof party +1 iceland qui quis 90's. Selvage actually next level raclette celiac ugh scenester, whatever knausgaard ut excepteur pug listicle williamsburg. Disrupt artisan kogi, DIY ullamco plaid shaman nostrud leggings mustache trust fund fingerstache. Austin activated charcoal tacos franzen, bitters small batch shaman church-key letterpress lomo fam fanny pack palo santo.
                <br />
                <br />
                Paleo cold-pressed locavore pour-over drinking vinegar cliche succulents sint church-key pop-up kinfolk ethical. Small batch leggings DIY selvage. Roof party meggings chillwave kinfolk +1 vape culpa do. Deep v freegan neutra messenger bag, synth before they sold out skateboard subway tile fam retro gastropub schlitz incididunt aesthetic. La croix jean shorts PBR&B, anim sed yuccie master cleanse tbh whatever.
                <br />
                <br />
                Retro la croix intelligentsia sustainable eiusmod in pitchfork asymmetrical. Pitchfork fugiat small batch jean shorts, organic deserunt shaman intelligentsia aliqua taxidermy cray man braid officia activated charcoal. Copper mug PBR&B mixtape cillum, church-key everyday carry bespoke selfies readymade bushwick ut street art unicorn. Lumbersexual edison bulb cliche art party sustainable. Selfies helvetica everyday carry, incididunt crucifix vice kogi ad authentic poutine swag eiusmod fanny pack. Pour-over stumptown kogi taiyaki bushwick. Bitters freegan proident in, meditation shoreditch put a bird on it kombucha aliquip.
                <br />
                <br />
              </span>
            </div>
            <div id='projectpage-pledges'>
              <div>
                {project.rewards.map((reward) => <Reward reward={reward} key={reward.id} />)}
              </div>
            </div>
          </div>
          <div id='projectpage-bottom'>
            <div id='projectpage-recommended-title'>
              <h4>Recommended for you</h4>
            </div>
            <div id='projectpage-recommended'>
              { projects_list.map((project) => 
                <ProjectCard project={project} key={project.id} id='projectpage-recommendedcard'/>)}
            </div>
          </div>
        </div>
        {/* <Footer> </Footer> */}
      </>
    )
}


// <h1>{project.description}</h1>
//         <h1>{project.location}</h1>
//         <h1>{project.organization}</h1>
//         <h1>{project.id}</h1>
//         <h1>{project.funding_goal}</h1>
//         <h1>{project.total_funding}</h1>
        
//             <div className="reward-container">
//                 {project.rewards.map((reward) => <Reward reward={reward} key={reward.id} />)}
//             </div>