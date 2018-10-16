import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from '@firebase/app'
import '@firebase/auth'
import LoginForm from './components/LoginForm';
import {Header, Button,Spinner,CardSection} from './components/common';

class App extends Component {

    state={
        loggedIn: null
    }

   
    
    componentWillMount(){

        firebase.initializeApp({
            apiKey: 'AIzaSyCu0uaVsRTCWbBmJpL4QFLUJJBf7fRlfss',
            authDomain: 'authentication-fdd2e.firebaseapp.com',
            databaseURL: 'https://authentication-fdd2e.firebaseio.com',
            projectId: 'authentication-fdd2e',
            storageBucket: 'authentication-fdd2e.appspot.com',
            messagingSenderId: '27362444604'
        });

        firebase.auth().onAuthStateChanged((user)=>{
            if (user){
                this.setState({loggedIn:true})
            }else{
                this.setState({loggedIn:false})
            }

        });

    }
    renderContent(){
        switch (this.state.loggedIn){
            case true:
                return (
                 
                    <CardSection>
                        <Button onPress={()=>firebase.auth().signOut()}>Log Out</Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />
            default:
            
                return(
                    <CardSection>
                        <Spinner size="large"/>
                    </CardSection>
                ) 


        }

    }

    render(){
        return(
            
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
            
            
            
            
            
            
        );
    }

}
export default App;