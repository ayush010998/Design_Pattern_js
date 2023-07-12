// The Decorator Pattern lets you attach new behaviour to objects by placing them inside wrapper objects that contains the behaviour.
// common example useCses care useContext hooks of Reactjs


import { useState } from 'react'
import Context from './Context'

const ContextProvider: React.FC = ({children}) => {

    const [darkModeOn, setDarkModeOn] = useState(true)
    const [englishLanguage, setEnglishLanguage] = useState(true)

    return (
        <Context.Provider value={{
            darkModeOn,
            setDarkModeOn,
            englishLanguage,
            setEnglishLanguage
        }} >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider

//
export default function App() {
    return (
      <ContextProvider>
        <Router>
  
          <ErrorBoundary>
            <Suspense fallback={<></>}>
              <Header />
            </Suspense>
  
            <Routes>
                <Route path='/' element={<Suspense fallback={<></>}><AboutPage /></Suspense>}/>
  
                <Route path='/projects' element={<Suspense fallback={<></>}><ProjectsPage /></Suspense>}/>
  
                <Route path='/projects/helpr' element={<Suspense fallback={<></>}><HelprProject /></Suspense>}/>
  
                <Route path='/projects/myWebsite' element={<Suspense fallback={<></>}><MyWebsiteProject /></Suspense>}/>
  
                <Route path='/projects/mixr' element={<Suspense fallback={<></>}><MixrProject /></Suspense>}/>
  
                <Route path='/projects/shortr' element={<Suspense fallback={<></>}><ShortrProject /></Suspense>}/>
  
                <Route path='/curriculum' element={<Suspense fallback={<></>}><CurriculumPage /></Suspense>}/>
  
                <Route path='/blog' element={<Suspense fallback={<></>}><BlogPage /></Suspense>}/>
  
                <Route path='/contact' element={<Suspense fallback={<></>}><ContactPage /></Suspense>}/>
            </Routes>
          </ErrorBoundary>
  
        </Router>
      </ContextProvider>
    )
  }

  //

  
const AboutPage: React.FC = () => {

    const { darkModeOn, englishLanguage } = useContext(Context)
    
    return (...)
}

export default AboutPage
