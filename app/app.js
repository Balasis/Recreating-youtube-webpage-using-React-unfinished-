import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route ,Switch } from 'react-router-dom'
import Header from './components/header.js';

import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Landing from './components/landing';

class Main extends React.Component{

	render(){
		return (
			< >
			<BrowserRouter>
		<Header />
					
				<Switch>
		         
                <Route exactly component={Landing} pattern="/" />
                <Route exactly component={Page1} pattern="/Page1" />
                <Route exactly component={Page2} pattern="index" />
                <Route exactly component={Page3} pattern="index" />                
           </Switch>
          	 </BrowserRouter>
              

		

		</>
		)

	}
}

ReactDOM.render(<Main />,document.getElementById('app'))