import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button, Grid, Segment, Header } from 'semantic-ui-react'
import authActions from '../redux/actions/authActions'

const Auth = (props) => {
    const dispatch = useDispatch();
  
    // Setting up local state using the useState hook
    const [login, setLogin] = useState(true)
    const [userData, setUserData] = useState({
      email: '',
      password: ''
    });
  
    const handleChange = e => 
      setUserData({ ...userData, [e.target.name]: e.target.value }
    );
  
    const handleSubmit = e => {
      e.preventDefault(); 
        if (login){
          dispatch(authActions.loginUser(userData))
          props.history.push('/dashboard');
        } else {
          console.log(userData)
          dispatch(authActions.newUser(userData))
          props.history.push('/')
        }
    };

    // const handleLoginSwitch = e => {
    //     e.preventDefault();
    //     setLogin(!login)
    // }

    const { email, password } = userData;

    return (
      <Grid>
        <Grid.Column>
          <Form onSubmit={handleSubmit}>
          <Segment>
              <Header as='h1' color="olive" >{login ? 'Login' : 'Sign-Up' }</Header>
              <Form.Field>
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="E-mail"
              />
              </Form.Field>
              <Form.Field>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
              />
              </Form.Field>
              <Button type="submit" color="olive" >{login ? 'Login' : 'Sign-up'}</Button>
            </Segment>
          </Form>
            <Button onClick={() => setLogin(false)} color='olive' content='sign-up now' ></Button>
            <Button onClick={() => setLogin(true)} color='olive' content='login now' ></Button>
        </Grid.Column>
      </Grid>
    );
}

export default Auth;
