import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './LoginForm.css'

export default class LoginForm extends Component {
    render() {
        return (
            <div className="LoginForm">
                <h2>Login</h2>
                <Input placeholder="" />
                <Input placeholder="" />
                <Button type="primary">Login</Button>
            </div>
        )
    }
}
