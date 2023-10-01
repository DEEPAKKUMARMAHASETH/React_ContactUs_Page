import ContactFrom from "./Components/ContactForm/ContactFrom"
import ContactHeader from "./Components/ContactHeader/ContactHeader"
import Navigation from "./Components/Navigation/Navigation"
import './App.css'
function App() {
  return (
   <div>
   <Navigation/>
   <main className="main_container">
   <ContactHeader contact = "CONTACT US" />
   <ContactFrom/>
   </main>
   </div>
  )
}

export default App
