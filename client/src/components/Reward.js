import React, {useState} from 'react';
import '../css/reward.css';
import { sendPledge } from '../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-scroll'
import ConfettiGenerator from 'confetti-js';


export default function Reward({ reward, setAnimateStyle }) {
  const confettiSettings = {
    target: 'confetti-canvas',
    clock: 35,
    max: 350,
    size: 4,
  }

 let { minimum_donation, 
  title, 
  description, 
  reward_count, 
  delivery_date,
  id : reward_id } = reward

  const [pledge, setPledge] = useState(minimum_donation);
  const user_id = useSelector((state) => state.auth.id);
  const project_id = useSelector((state) => state.projects.project.id)

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setPledge(inputValue);
  }

  const style={};
  style[`fontWeight`] = '900'
  style[`color`] = '#051a13'
  style[`letterSpacing`] = '5px'
  
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()
    setAnimateStyle(style)
    setTimeout(()=>{
      dispatch(sendPledge(pledge, user_id, project_id, reward_id))
      setAnimateStyle({ color:'#028858'})
      confetti.clear()
    },3500)
  }

    return (
        <div id="pledge_info">
          <div className="pledge_amount">
            <span id='pledge_amount-title'>
            Pledge ${minimum_donation} or more
            </span>
          </div>
          <div className="pledge_title">
              {title}
          </div>
          <div className="pledge_reward">
              <p>{description}</p>
          </div>
          <div className="delivery-card">
          <span id='reward-gray' className="pledge_title"> ESTIMATED DELIVERY</span>
            <br/>
            {delivery_date}
            <br/>
          <span id='reward-gray'> {reward_count} backers </span>
          </div>
          <div className="pledge-button">
            <form >
                <label htmlFor='pledge' id='pledge-amount'>Pledge Amount</label>
                <input min={minimum_donation} type="number" className='reward-pledge-input' name="pledge" value={pledge} onChange={handleChange} required>
                </input>
                <div id='reward-pledge-button'>
                  {user_id ? (
                    <Link to='projectpage-top' id='reward-pledge-button' onClick={handleSubmit} smooth={true} duration={500}>
                       Pledge
                    </Link>
                  ):(
                    <a href='/login' id='reward-pledge-button' >
                       Login to Pledge
                    </a>
                  )}
                </div>
            </form>
          </div>
        </div>
    )
}