import React from "react";
import Headerr from "./Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Decoration from "./Decoration/decoration";
import HOME from "./Home/Home";
import DecorationPage from "../pages/DecorationPage";
import SkillCotent from "./SkillCotent/SkillCotent";
import SkillPage from "../pages/SkillPage";
import Rampage from "./Rampage/Rampage";
import RampagePages from "../pages/RampagePages";
import EquipmentSkill from "./EquipmentSkill/EquipmentSkill";
import EquipmentSkillPage from "../pages/EquipmentSkillPage";
import Footer from "./Footer/Footer";

const Layoutt = () => {
    return <>
        <BrowserRouter>
            <Headerr></Headerr>
            <Routes>
                <Route path="/Home" element={<HOME />}></Route>
                <Route path='/Decoration' element={<Decoration />}></Route>
                <Route path="/Rampage" element={<Rampage />}></Route>
                <Route path="/SkillCotent" element={<SkillCotent />}></Route>
                <Route path="/EquipmentSkill" element={<EquipmentSkill />}></Route>
                <Route path="/Decoration/:DecId" element={<DecorationPage />}></Route>
                <Route path="/SkillCotent/:SkillId" element={<SkillPage />}></Route>
                <Route path="/Rampage/:RampageId" element={<RampagePages />}></Route>
                <Route path="/EquipmentSkill/:SkillId" element={<EquipmentSkillPage />}></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    </>
}
export default Layoutt;