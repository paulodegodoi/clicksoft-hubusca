import ProjectRouter from './Routes'
import { UserContextProvider } from './context'

const App = () => (
    <UserContextProvider>
        <ProjectRouter />
    </UserContextProvider>
)

export default App
 