import React from 'react';

function LoginPage(props) {
    return (
        <div>
        <div> <h2>My Account</h2></div>
            <div>
            <h3>Log in</h3>
            <form>
                <label>
                    Email:
                    <input type="text" name="name" />
                </label>
                <label>
                    Password:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
            <div>
            <h3>Log in</h3>
            <form>
                <label>
                    Email:
                    <input type="text" name="name" />
                </label>
                <label>
                    Password:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
            <div>
            <h3>Login or Register with your Google Account</h3>
                {/*<img>button</img>*/}
            </div>
        </div>
    );
}

export default LoginPage;