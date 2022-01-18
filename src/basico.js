import styled from 'styled-components';

function App() {
   return (
      <div>
         <BasicTitle>stiled components</BasicTitle>
         <button className="btn">click me</button>
      </div>
   );
}

const BasicTitle = styled.h1`
   text-align: center;
   text-transform: capitalize;
`;

export default App;
