import styled from 'styled-components';
import Card from './components/Card';
import GlobalStyle from './global-styles';

function App() {
   return (
      <div style={{ padding: '2rem' }}>
         <GlobalStyle />
         <Card />
      </div>
   );
}

export default App;
