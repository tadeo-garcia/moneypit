import React, {useState, useRef} from 'react';
import '../css/reward.css';
import { sendPledge } from '../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-scroll'
import ConfettiGenerator from 'confetti-js';


export default function Reward(props) {
  const confettiSettings = {
    target: 'confetti-canvas',
    clock: 35,
    max: 350,
    size: 4,

  }


  const setAnimateStyle = props.setAnimateStyle
  const [state, setState] = useState({pledge: props.reward.minimum_donation});
  const user = useSelector((state) => state.auth);
  const project = useSelector((state) => state.projects.project)

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  }

  const style={};
  style[`font-weight`] = '900'
  style[`color`] = '#051a13'
  style[`letter-spacing`] = '5px'
  

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()
    setAnimateStyle(style)
    setTimeout(()=>{
      dispatch(sendPledge(state.pledge, user.id, project.id, props.reward.id))
      setAnimateStyle({ color:'#028858'})
      confetti.clear()
    },3500)
  }


    return (
        <div id="pledge_info">
          <div className="pledge_amount">
            <span id='pledge_amount-title'>
            Pledge ${props.reward.minimum_donation} or more
            </span>
          </div>
          <div className="pledge_title">
              {props.reward.title}
          </div>
          <div className="pledge_reward">
              <p>{props.reward.description}</p>
          </div>
          <div className="delivery-card">
          <span id='reward-gray' className="pledge_title"> ESTIMATED DELIVERY</span>
            <br/>
            {props.reward.delivery_date}
            <br/>
          <span id='reward-gray'> {props.reward.reward_count} backers </span>
          </div>
          <div className="pledge-button">
            <form >
                <label htmlFor='pledge' id='pledge-amount'>Pledge Amount</label>
                <input min={props.reward.minimum_donation} type="number" className='reward-pledge-input' name="pledge" value={state.pledge} onChange={handleChange} required>
                </input>
                <div id='reward-pledge-button'>
                  <Link to='projectpage-top' id='reward-pledge-button' onClick={handleSubmit} smooth={true} duration={500}>
                  Pledge
                  </Link>
                </div>
            </form>
          </div>
        </div>
    )
}
