import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DefaultLayout from './Layout/DefaultLayout';
import { publicRoutes } from './routes';
import ScrollToTop from './ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          let layout = route.layout
          const Layout = layout ? layout : DefaultLayout
          return (
            <Route key={index} path={route.path} element={
              <Layout>
                <ToastContainer />
                <Page></Page>
              </Layout>
            }>

            </Route>
          )
        })}
      </Routes>
    </Router>


  );
}

export default App;
