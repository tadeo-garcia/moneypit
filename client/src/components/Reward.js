import React, {useState} from 'react';
import '../css/reward.css';
import { sendPledge } from '../store/project';
import { useDispatch, useSelector } from 'react-redux';
// import { Link, useHistory } from 'react-router-dom';

export default function Reward(props) {
  const [state, setState] = useState({pledge: props.reward.minimum_donation});
  const user = useSelector((state) => state.auth);
  const project = useSelector((state) => state.projects.project)

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));


  }

  const dispatch = useDispatch();
  const handleSubmit = e => {
      e.preventDefault();
      dispatch(sendPledge(state.pledge, user.id, project.id, props.reward.id))
      alert('Thank you so much for your pledge!')
    }



    return (
        <div className="pledge_info">
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
          <div className="pledge-button" onSubmit={handleSubmit}>
            <form >
                <label htmlFor='pledge' id='pledge-amount'>Pledge Amount</label>
                <input min={props.reward.minimum_donation} type="number" className='reward-pledge-input' name="pledge" value={state.pledge} onChange={handleChange} required>
                </input>
                <button type="submit" id='reward-pledge-button'>Continue</button>
            </form>
          </div>
        </div>
    )
}