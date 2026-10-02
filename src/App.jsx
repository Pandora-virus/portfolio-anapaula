import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Projetos from './pages/Projetos.jsx'
import Sobre from './pages/Sobre.jsx'
import ProjetoPontua from './pages/ProjetoPontua.jsx'
import ProjetoRaizCafe from './pages/ProjetoRaizCafe.jsx'
import ProjetoAutomacaoAefetiva from './pages/ProjetoAutomacaoAefetiva.jsx'
import ProjetoSuporteTecnico from './pages/ProjetoSuporteTecnico.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/pontua" element={<ProjetoPontua />} />
          <Route path="/projetos/raiz-cafe" element={<ProjetoRaizCafe />} />
          <Route path="/projetos/automacao-aefetiva" element={<ProjetoAutomacaoAefetiva />} />
          <Route path="/projetos/suporte-tecnico" element={<ProjetoSuporteTecnico />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
