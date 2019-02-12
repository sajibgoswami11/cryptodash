import React from 'react';
import styled ,{css} from 'styled-components';
import {AppContext} from './AppProvider';

const Bar = styled.div`
			display:grid;
			grid-template-columns:180px auto 100px 100px;
` 
const ControlButtonElem = styled.div`
			cursor:pointer;
			${props => props.active && css`
				text-sahdow:  0px 0px 60pc #03ff03;
			`} 
`
	function toProperCase({lower}){
		return lower.charAt(0).toUpper() + lower.substr(1);
	}

	function ControlButton({name,active})
	{
		return(
			<AppContext.Consumer> 
			{({page}) => (	
				<ControlButtonElem active={page === name}>
					{toProperCase(name)}
				</ControlButtonElem>
				)}
			</AppContext.Consumer>	
		)
	}

export default function(){
	return(	
		<Bar>
		  <div>Cryptodash</div>
		  <div></div>
		  <div>Dashboard</div>
		  <div>Shared</div>
		</Bar>
	);

}
