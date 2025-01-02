/* TODO - add your code to create a functional React component that renders a registration form */
   feature_JT
/* TODO - add your code to create a functional React component that renders a registration form */

function registration() {
    return <h2>Registration Forms</h2>;
  }
  
  // eslint-disable-next-line no-undef
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<registration form />);
  
  export default registration;
  function Registration() {
    return (
      <div>
        <h2>Registration Form</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
