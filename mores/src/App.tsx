import { useHashRoute } from './hooks/useHashRoute'
import { HomePage } from './pages/HomePage'
import { GalleryPage } from './pages/GalleryPage'
import { CatalogPage } from './pages/CatalogPage'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  const { path } = useHashRoute()

  const renderPage = () => {
    switch (path) {
      case 'galeria':
        return <GalleryPage />
      case 'katalog':
        return <CatalogPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-paper focus:text-brand">
        Przejdź do treści
      </a>
      <TopBar />
      <Navbar />
      <main id="main-content" className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App