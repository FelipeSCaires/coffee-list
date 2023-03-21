import { Route, Routes } from 'react-router-dom'
import { CoffeDetail } from './screens/CoffeDetail'
import { Home } from './screens/Home'
import { NewCoffee } from './screens/NewCoffe'

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-coffee" element={<NewCoffee />} />
            <Route path="/coffee-detail" element={<CoffeDetail />} />
        </Routes>
    )
}