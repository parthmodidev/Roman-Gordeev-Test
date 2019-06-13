import React from 'react';
import { Layout } from 'antd';
import Routes from './routes';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Header>
        <HeaderComponent />
      </Header>
      <Content>
        <Routes />
      </Content>
      <Footer>
        <FooterComponent />
      </Footer>
    </div>
  );
}

export default App;
