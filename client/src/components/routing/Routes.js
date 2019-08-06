import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import PrivateRoute from "../routing/privateroute";
import CreateProfile from "../profile-forms/createprofile";
import EditProfile from "../profile-forms/edit-profile";
import AddExperience from "../profile-forms/add-experience";
import AddEducation from "../profile-forms/add-education";
import Profiles from "../profiles/profiles";
import Profile from "../profile/profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import NotFound from "../layout/NotFound";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
