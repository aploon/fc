import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <div style={{ padding: "2rem", paddingLeft: "max(0px, (100% - 1600px) / 2)", paddingRight: "max(0px, (100% - 1600px) / 2)" }}>
          <h1>
            HeartConsultants LLC Portal
          </h1>
          <p>Content coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
