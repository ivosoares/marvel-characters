import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const AppRoutes = () => {
  return (
    // chamo o componente BrowserRouter do react-router-dom, para informar para o browser que iremos trabalhar com roteamento
    // Routes - Container que gerencia a arvore das rotas da aplicação.
    // Route - Rota da aplicaçao onde contém a logica que verifica qual componente deve ser renderizado com o path cadastrado
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes