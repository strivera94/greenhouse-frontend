const BASE_URL = 'http://localhost:3000'
const USERS_URL = BASE_URL + '/users'
const LOGIN_URL = BASE_URL + '/login'
const PERSIST_URL = BASE_URL + '/persist'
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;

//Actions

const setUserAction = userObj => ({
    type: 'SET_USER',
    payload: userObj
})

const clearUserAction = () => ({
    type: 'CLEAR_USER'
})

const editUserAction = userObj => ({
    type: 'EDIT_USER',
    payload: userObj
})


//Action Creators

const newUser = userObj => dispatch => {
  console.log(userObj)  
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  };
    fetch(USERS_URL, config)
    .then(r => r.json())
    .then(data => {
        if (data.errors){
            alert(data.errors)
        } else {
            dispatch(setUserAction(data.user));
            localStorage.setItem('token', data.token);
        };
    });
};

const loginUser = userCredentials => dispatch => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userCredentials)
    };
    fetch(LOGIN_URL, config)
    .then(r => r.json())
    .then(data => {
        if (data.errors){
            alert(data.errors)
        } else {
            dispatch(setUserAction(data.user));
            localStorage.setItem('token', data.token);
        };
    });
};

const persistUser = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
    Authorization: `bearer ` + localStorage.token
    }
  };
  fetch(PERSIST_URL, config)
  .then(r => r.json())
  .then(userInstance => {
    dispatch(setUserAction(userInstance));
  });
};

const editProfile = (newUserInfo, userId) => dispatch => {
  const config = {
    method: 'PATCH',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUserInfo)
  }
  fetch(SPECIFIC_USER_URL(userId), config)
  .then(r => r.json())
  .then(userObj => {
    dispatch(editUserAction(userObj))
  });
};

const addCurrentCart = (cart, user) => dispatch => {
  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      current_cart: cart
    })
  }
  fetch(SPECIFIC_USER_URL(user), config)
  .then(r => r.json())
  .then(userObj => {
    dispatch(editUserAction(userObj))
   })
  
}

const logoutUser = () => dispatch => {
  dispatch(clearUserAction());
  localStorage.clear();
};

const deleteUser = userId => dispatch => {
  const config = {
    method: 'DELETE'
  };
  fetch(SPECIFIC_USER_URL(userId), config)
  .then(r => {
    dispatch(clearUserAction());
    localStorage.clear();
  });
};


export default {
    newUser,
    deleteUser,
    loginUser,
    persistUser,
    logoutUser,
    editProfile,
    addCurrentCart,
  };