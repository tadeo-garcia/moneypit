import React from 'react';
import '../css/reward.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useHistory } from 'react-router-dom';

export default function Reward(props) {
    // const history = useHistory();
    // const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
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
         { // <div className="pledge-button" onSubmit={handleSubmit}>
          //   <form>
          //       <input type="text" name="pledge" value={props.reward.minimum_donation}>
          //       </input>
          //       <button type="submit">Continue</button>
          //   </form>
          // </div>
        }
        </div>
    )
}