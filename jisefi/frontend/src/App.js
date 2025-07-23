import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Landing/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import UserDashboardPage from './pages/Dashboard/UserDashboardPage';
import AdminDashboardPage from './pages/Dashboard/AdminDashboardPage';
import CreateRecordPage from './pages/Records/CreateRecordPage';
import EditRecordPage from './pages/Records/EditRecordPage';
import RecordDetailPage from './pages/Records/RecordDetailPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/dashboard/user" component={UserDashboardPage} />
                <Route path="/dashboard/admin" component={AdminDashboardPage} />
                <Route path="/records/create" component={CreateRecordPage} />
                <Route path="/records/edit/:id" component={EditRecordPage} />
                <Route path="/records/:id" component={RecordDetailPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;