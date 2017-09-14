import React, { Component } from 'react';
import axios from 'axios';
import Header from './../Header/Header';
import './Edit.css';

export default class Edit extends Component {
    constructor(){
        super();
        this.state = {
            username: "", 
            email: "", 
            name: "", 
            img : ""
        }

        this.changeUsername = this.changeUsername.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.editProfile = this.editProfile.bind(this);
    }

    componentDidMount(){
        axios.get('/api/user').then(resp =>{
            this.setState({
                email: resp.data.email,
                username: resp.data.username,
                name: resp.data.name,
                img: resp.data.img
            })
        })
    }

    changeUsername(val){
        this.setState({
            username: val
        });
    }

    changeName(val){
        this.setState({
            name: val
        });
    }

    changeEmail(val){
        this.setState({
            email: val
        });
    }

    editProfile(){
        let body = {
            username: this.state.username, 
            email: this.state.email, 
            name: this.state.name
        }
        axios.put('/api/user', body).then(resp=>{
            this.setState({
                email: resp.data.email,
                username: resp.data.username,
                name: resp.data.name
            })
        })

    }

    render () {
        return (
            <div className='edit_container'>
                <Header/>
                <div className='edit_body_container'>
                    <img className='profile_img' src={this.state.img} alt='profile_image' />
                    <div className='profile_settings'>
                        <span>username: 
                            <input 
                                value={this.state.username} 
                                onChange={e=>this.changeUsername(e.target.value)}/>
                        </span>
                        <span>name: 
                            <input 
                                value={this.state.name}
                                onChange={e=>this.changeName(e.target.value)}/>
                        </span>
                        <span>email: 
                            <input 
                                value={this.state.email}
                                onChange={e=>this.changeEmail(e.target.value)}/>
                        </span>
                        <button className='edit_button' onClick={this.editProfile}>Edit</button>
                    </div>
                </div>
            </div>
        );
    }
}