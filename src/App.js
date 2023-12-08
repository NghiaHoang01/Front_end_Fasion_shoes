import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Header from 'components/header';
import AppRoutes from 'Routes/AppRoutes';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#c91f28',
            colorText: 'eclipse',
            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
          }, components: {
            Pagination: {
              colorPrimaryHover: '#c91f28',
              colorPrimary: '#c91f28',
              colorPrimaryBorder: '#c91f28',
            }
          },
        }}
      >
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </ConfigProvider>

    </div >
  );
}

export default App;
