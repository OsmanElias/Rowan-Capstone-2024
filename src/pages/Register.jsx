/** 
 * 
 * Register.jsx
 * 
 * Osman Elias
 * 
 * 4/24/2024
 * 
 *  Register logic and html to generate the page
 * 
*/


import { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords don't match.");
      return;
    }

    const registerData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
        credentials: 'include', // Needed for cookies
      });

      if (response.ok) {
        console.log("Registration successful");
        window.location.href = '/login';
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to register');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-4 bg-white shadow box-area">
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: '#00011a'}}>
          {/* Rest of your left box content */}
        </div>
        <div className="col-md-6 right-box">
          <form onSubmit={handleRegister}> {/* Fixed the onSubmit handler */}
            <div className="header-text mb-4">
              <h2>CinemaWorld</h2>
              {/* Rest of your header text */}
            </div>
            {/* Email input */}
            {/* Password input */}
            {/* Confirm password input */}
            <div className="input-group mb-3">
              <input 
                name="confirmPassword" 
                type="password" 
                className="form-control form-control-lg bg-light fs-6" 
                placeholder="Confirm Password" 
                required 
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)} 
              />
            </div>
            {/* Rest of your form content */}
            <div className="input-group mb-3">
              <button type="submit" className="btn btn-lg btn-primary w-100 fs-6">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
