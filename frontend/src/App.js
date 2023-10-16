import "./App.css";
import MessTiffins from "./Components/MessTiffins";
import Login from "./Components/Login";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import MessOwnerDashboard from "./Components/MessOwnerDashboard";
import Profile from "./Components/Profile";
import UserSubscriptionPage from "./Components/UserSubscriptionPage";
import SubscribeMessPage from "./Components/SubscribeMessPage";
import MessRegistration from "./Components/MessRegistration";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/UserSubscriptionPage" element={<UserSubscriptionPage />} />
        <Route path="/SubscribeMessPage" element={<SubscribeMessPage />} />
        <Route path="/tiffin" element={<MessTiffins />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mess" element={<MessOwnerDashboard />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/MessRegistration" element={<MessRegistration/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
