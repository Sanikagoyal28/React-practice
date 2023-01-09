import React from "react";
import { BrowserRouter, Routes , Route} from "react-router-dom"
import ReduxOne from "./components/reduxOne";
import HooksPractice from "./components/hooksPractice";
import ComA from "./components/ComA";
import Bootstrap from "./components/Bootstrap";
import ClassComp from "./components/ClassComp";
import LifeCycleMethod from "./components/LifeCycleMethod";
import Formik from "./components/formik";
import SimplifiedFormik from "./components/simplifiedFormik";
import FormikComponent from "./components/VIDEO31/FormikComponent";
import RegForm from "./components/RegistrationForm.jsx/RegForm";
import Lifecycle from "./components/lifecycle";
import CurrentLocation from "./components/CurrentLocation";
import FakeApi from "./components/fakeApi";

function App() {
  return <>
    {/* <HooksPractice /> */}
  {/* <BrowserRouter>
  <Routes>
  <Route path="/" exact element={<HooksPractice />} />
  <Route path="/lifecycle" exact element={<Lifecycle />} />
   </Routes>
   </BrowserRouter>  */}
  <ComA />
  <ReduxOne />
    {/* <Bootstrap /> */}
    {/* <ClassComp /> */}
    {/* <HooksPractice /> */}
    {/* <Formik />  */}
    {/* <SimplifiedFormik /> */}

   {/* <FormikComponent /> */}
  {/* <RegForm /> */}
  {/* <LifeCycleMethod name="avhd"/> */}
  {/* <CurrentLocation /> */}
  <FakeApi />
  </>
}

export default App;
