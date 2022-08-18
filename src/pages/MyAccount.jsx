import React from 'react';
import '../styles/MyAccount.scss';
const MyAccount = (route) => {
  //const { itemId } = route.params;
  console.log("---------------");
  console.log(route);
  /*const { userState } = props;
  console.log("---------------");
  console.log({userState});
  const { 
      name,
      login,
      created_at,

   } = userState;*/
    return (
        <div className="login">
        <div className="form-container">
          <h1 className="title">My account</h1>    
          <form action="/" className="form">
            <div>
              <label htmlFor="name" className="label">Name</label>
              <input type="text" id="name" placeholder="{name}" className="input input-name"/>
    
              <label htmlFor="email" className="label">Email</label>
              <input type="text" id="email" placeholder="platzi@example.com" className="input input-email"/>
    
              <label htmlFor="password" className="label">Password</label>
              <input type="password" id="password" placeholder="*********" className="input input-password"/>
            </div>    
            <input type="submit" value="Create" className="primary-button login-button"/>
          </form>
        </div>
      </div>
    );
}
export default MyAccount;