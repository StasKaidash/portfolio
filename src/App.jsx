import {Header, Footer, Home, Clients, Contact, Services, Skills,  Portfolio, About} from "./Components/index.js"
import SkillsInfo from "./Components/skills/SkillsInfo.jsx";


function App() {


  return (
    <>
        <Header />
        <main>
            <Home />
            <About />
            <SkillsInfo />
        </main>

        <Footer />

    </>
  )
}

export default App
