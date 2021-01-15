import "./App.css";
import "./components/Login.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Container } from "./components/Grid";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import User from "./pages/User";
import Movie from "./pages/MovieSearch";
import userAPI from "./utils/userAPI";
import ProtectedRoute from "./components/ProtectedRoute"
// import Comments from "./pages/Comments";
// import Comment from "./pages/Comment";
import Navbar from "./components/Navbar";
// import SignUp from "./components/SignUpComponents";


function App() {
	const [userState, setUserState] = useState({});

    useEffect(() => { 
	   // auth user on first render
      authenticate() 
    }, []);

	//user authentication
	function authenticate() {
		return userAPI.authenticateUser()
			.then(({ data }) => {
				console.log('user:', data );
            setUserState(data);
			})
			.catch((err) => console.log('registered user:', err.response));
	}

	return (
		<Router>
			<Navbar />
			<Container>
        
				<Switch>
				
				<Route exact path={["/",]}>
            <Home />
				</Route>
					<Route
						exact
						path='/login'
						render={ props => (
							<Login  
								{...props}
								userState={userState}
								setUserState={setUserState}
							/>
						)}
					/>

					<Route
						exact
						path='/signup'
						render={ props => (
							<Signup
								{...props}
								authenticate={authenticate}
								user={userState}
							/>
						)}
					/>

                <ProtectedRoute exact path={['/', 'user/:id']} >
                    <User {...userState} />
                </ProtectedRoute>

            
                <ProtectedRoute exact path={['/', '/movies/:id']} >
                    <Movie {...userState} />
                </ProtectedRoute>

                <ProtectedRoute exact path={["/", "/groups:id"]}>
                    <Groups {...userState} />
                </ProtectedRoute>

					<Route component={NoMatch} />

				</Switch>

			</Container>
           { userState.email ? <Redirect to="/user:id" /> : <></>}
		</Router>
	);
}

export default App;
