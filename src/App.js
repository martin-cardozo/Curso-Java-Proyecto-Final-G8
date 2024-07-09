import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './main/resources/static/components/Navbar/Navbar';
import Home from './main/resources/static/components/Home/Home';
import Footer from './main/resources/static/components/Footer/Footer';
import Login from './main/resources/static/components/Login/Login';
import SignUp from './main/resources/static/components/Signup/SignUp';
import Catalogue from './main/resources/static/components/Catalogue/Catalogue';
import Contact from './main/resources/static/components/Contact/Contact';
import FAQ from './main/resources/static/components/FAQ/FAQ';
import CatalogueAPI from './main/resources/static/components/CatalogueAPI/CatalogueAPI';
import ListadoEmpleados from "./main/resources/static/components/empleados/ListadoEmpleados";
import Navegacion from "./main/resources/static/components/plantilla/Navegacion";
import AgregarEmpleado from "./main/resources/static/components/empleados/AgregarEmpleado";
import EditarEmpleado from "./main/resources/static/components/empleados/EditarEmpleado";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="app-container">
      {isAdminRoute ? <Navegacion /> : <Navbar />}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/catalogueAPI" element={<CatalogueAPI />} />
        <Route path='/admin' exact element={<ListadoEmpleados/>}/>
        <Route path='/admin/agregar' element={<AgregarEmpleado/>}/>
        <Route path='/admin/editar/:id' element={<EditarEmpleado/>}/>
      </Routes>
      {!isAdminRoute && <Footer />}
     
    </div>
  );
}

export default App;

