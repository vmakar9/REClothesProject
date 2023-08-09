import {Navigate, Route, Routes} from "react-router-dom";
import Clothes from "./components/Clothes/Clothes";
import Layout from "./components/Layout/Layout";
import ClothesDetails from "./components/ClothesDetails/ClothesDetails";
import UserDetails from "./components/UserDetails/UserDetails";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";




function App() {



    return (
        <div>
            <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Navigate to="/clothes" />} />
                    <Route path="/clothes" element={<Clothes />} />
                    <Route path="/clothes/:id" element={<ClothesDetails />} />
                    <Route path="/clothes/:id/userDetails" element={<UserDetails/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                </Route>
            </Routes>
        </div>
</div>
    );
}

export default App;
