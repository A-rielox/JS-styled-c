import styled from 'styled-components';
import { HipsterButton } from './components/Buttons';

function App() {
   return (
      <div style={{ padding: '2rem' }}>
         <HipsterButton>holi holi</HipsterButton>
         <HipsterButton as="a" href="https://www.johnsmilga.com/">
            holi holi
         </HipsterButton>
         <HipsterButton>holi holi</HipsterButton>
      </div>
   );
}

export default App;
