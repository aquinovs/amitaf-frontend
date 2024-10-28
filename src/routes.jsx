import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import App from './pages/Home'

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<App />} />
              <Route path='/home' element={<App />} />
              <Route path='/login' element={<Login />} />
              <Route path='/contato' element={<Contato />} />
         </Routes>
      </BrowserRouter>

    )
}