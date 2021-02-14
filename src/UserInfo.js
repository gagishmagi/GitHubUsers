import React, { useReducer } from 'react';

class UserInfo extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.setState({loading: true, error:null, data:null})
    }

    componentDidMount(){
        this.props.promise.then( response => response.json() ).then(
            value => this.setState({loading:false,data:value}),
            error => this.setState({loading:false,error:error})
        )
    }


    render(){
        console.log(this.state)
        if(this.state.loading){ return <span>loading...</span>}
        else if(this.state.error !== null){
        return <span>Error: {this.state.error.message}</span>
        }
        else{
            var userInfo = this.state.data;
            return (
                <ul>
                    <img src={userInfo.avatar_url} width="100px"></img>
                    <li>Username: {userInfo.login}</li>
                    <li>Followers: {userInfo.followers}</li>
                    <li>Following: {userInfo.following}</li>
                    <li>Created at: {userInfo.created_at.toLocaleString()}</li>
                </ul>
            )
        }
    }

}

export default UserInfo;
