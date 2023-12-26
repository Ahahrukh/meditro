import React, { Component } from 'react';

// Import Images
import bg1 from '../../images/main-banner/2.jpg';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<div className="main-banner" style={{backgroundImage: "url("+bg1+")"}}>
					
				</div>
				
			</>
		);
	}
}

export default aboutSection;