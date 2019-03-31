import React from 'react';
import  {AppContext} from "../App/AppProvider";

export default function Welcome() {
	// body...
	return	(
		<AppContext.Consumer>
			{({firstVisit}) =>
			 firstVisit ?
			<div>Welcome to Fermacy App,Please select your favourite coins to begin.</div> : null
		}
				</AppContext.Consumer>
		);
	
};