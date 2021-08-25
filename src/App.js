import React, {Component} from 'react';
import {Authenticator} from 'aws-amplify-react';
import {Amplify} from 'aws-amplify';
import '@aws-amplify/ui/dist/style.css';

export default class App extends Component{
  componentDidMount(){
    Amplify.configure({
      mandatorySignIn: true,
      region: 'us-east-1',
      userPoolId: 'us-east-1_uNwGAYI5w',
      identityPoolId: 'us-east-1:514fc840-ddce-4541-928d-0d5d331cf640',
      userPoolWebClientId: '4erqiae5rb4cl36td0nhm2qpio'

    })
  }

  render(){
    return(
      <div>
        <Authenticator/>
      </div>

    )
  }
}
