
import {Navigate, Route, Routes} from "react-router-dom";
import Clothes from "./components/Clothes/Clothes";
import Layout from "./components/Layout/Layout";
import ClothesDetails from "./components/ClothesDetails/ClothesDetails";
import UserDetails from "./components/UserDetails/UserDetails";
import {useSelector} from "react-redux";



function App() {

    const {background, color} = useSelector(state => state.theme)

    return (
        <div>
            <div style={{color:color,background:background}}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/clothes" />} />
                    <Route path="/clothes" element={<Clothes />} />
                    <Route path="/clothes/:id" element={<ClothesDetails />} />
                    <Route path="/clothes/:id/userDetails" element={<UserDetails/>}/>
                </Route>
            </Routes>
            </div>
        </div>
    );
}

export default App;
