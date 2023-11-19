import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DefaultLayout from './Layout/DefaultLayout';
import { publicRoutes } from './routes';
function App() {

  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          return (
            <Route key={index} path={route.path} element={
              <DefaultLayout>
                <Page></Page>
              </DefaultLayout>
            }>

            </Route>
          )
        })}
      </Routes>
    </Router>


  );
}

export default App;
