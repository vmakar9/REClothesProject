import {Navigate, Route, Routes} from "react-router-dom";
import Clothes from "./components/Clothes/Clothes";
import Layout from "./components/Layout/Layout";
import ClothesDetails from "./components/ClothesDetails/ClothesDetails";
import UserDetails from "./components/UserDetails/UserDetails";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ActivatePage from "./components/ActivatePage/ActivatePage";
import ActivationPage from "./components/ActivatePage/ActivationPage";
import {Activate} from "./components/ActivatePage/Activate";
import ClothesCreate from "./components/ClothesCreate/ClothesCreate";
import UserCabinet from "./components/UserCabinet/UserCabinet";
import ChangePassword from "./components/ChangePasswordPage/ChangePassword";
import ForgotSendEmail from "./components/ForgotPassoword/ForgotSendEmail";
import ForgotPasswordMessage from "./components/ForgotPassoword/ForgotPasswordMessage";
import SetNewPassword from "./components/ForgotPassoword/SetNewPassword";
import UpdateOwnInfo from "./components/UpdateOwnInfo/UpdateOwnInfo";
import Avatar from "./components/Avatar/Avatar";
import Rating from "./components/Rating/Rating";
import OwnUsersClothes from "./components/UsersClothes/OwnUsersClothes";
import YourClothes from "./components/UsersClothes/YourClothes";
import UpdateForm from "./components/UsersClothes/UpdateForm";

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
                    <Route path="/activateAcc" element={<ActivatePage/>}/>
                    <Route path="/activateMess" element={<ActivationPage/>}/>
                    <Route path="/activate" element={<Activate/>}/>
                    <Route path="/create" element={<ClothesCreate/>}/>
                    <Route path="/cabinet" element={<UserCabinet/>}/>
                    <Route path="/changePassword" element={<ChangePassword/>}/>
                    <Route path="/forgotPassword" element={<ForgotSendEmail/>}/>
                    <Route path="/forgotPasswordMessage" element={<ForgotPasswordMessage/>}/>
                    <Route path="/forgot" element={<SetNewPassword/>}/>
                    <Route path="/updateOwnInfo" element={<UpdateOwnInfo/>}/>
                    <Route path="/avatar/:id" element={<Avatar/>}/>
                    <Route path="/clothes/:id/userDetails/FeedBack/:userId" element={<Rating/>}/>
                    <Route path="/yourClothes" element={<OwnUsersClothes/>}/>
                    <Route path="/yourClothes/:clothesId" element={<YourClothes/>}/>
                    <Route path="/updateForm/:clothesId" element={<UpdateForm/>}/>
                </Route>
            </Routes>
        </div>
</div>
    );
}

export default App;
