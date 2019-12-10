import React, { Component } from 'react';
import './index.css';
class login extends Component {
  constructor(props){
       super(props);
       this.state={
        name:[],
        password:[]}
    }
render() {
  return (
     <form action="http://127.0.0.1:8081/login" method='post'>
        用户名：<input type='text' name='name' />
        密  码：<input type='password' name='password' />
        <input type="submit" value='登陆'/> 
     </form>
)}}
export default login;
