import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../../pages/Home/Home";
import Gigs from "../../pages/Gigs/Gigs";
import Gig from "../../pages/Gig/Gig";
import MyGigs from "../../pages/MyGigs/MyGigs";
import Add from "../../pages/Add/Add";
import Orders from "../../pages/Orders/Orders";
import Messages from "../../pages/Messages/Messages";
import Message from "../../pages/Message/Message";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

const AppRouter = () => {
    const location = useLocation();

    return (
        <Routes key={location.pathname} location={location}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/events" element={<Gigs />} />
            <Route exact path="/event/:id" element={<Gig />} />
            <Route exact path="/my-events" element={<MyGigs />} />
            <Route exact path="/new-event" element={<Add />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/messages" element={<Messages />} />
            <Route exact path="/message/:id" element={<Message />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
        </Routes>
    )
}

export default AppRouter