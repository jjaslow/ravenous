import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render(){
      return(
              <div className="BusinessList">
                {
                  this.props.businesses.map(
                  b => {return <Business key={b.id} business={b} />;}  )   //why no semicolon at end???? step 6-8
                }
                </div>
           );
        }

}

export default BusinessList;
