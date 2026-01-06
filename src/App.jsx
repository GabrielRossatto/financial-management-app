import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { ContasBancarias } from './pages/ContasBancarias/ContasBancarias';
import { FormaDePagamento } from './pages/FormaDePagamento/FormaDePagamento';
import { ContasCadastradas } from './pages/Cadastros/ContasCadastradas';
import { MeioDePagamento } from './pages/Cadastros/MeioDePagamento';
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { DefaultLayout } from "./layouts/DefaultLayout";


function App() {
  return (

    
   
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route element={<DefaultLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contasBancarias" element={<ContasBancarias />} />
          <Route path="/formaDePagamento" element={<FormaDePagamento />} />
          <Route path="/contasCadastradas" element={<ContasCadastradas />} />
          <Route path="/meioDePagamento" element={<MeioDePagamento />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;