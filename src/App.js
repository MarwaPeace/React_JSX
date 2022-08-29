//import logo from './logo.svg';
import "./App.css";
import ProfilePhoto  from "./Component/Profile/ProfilePhoto.js";
import FullName from "./Component/Profile/FullName.js";
import Adress from "./Component/Profile/Adress.js";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
     <ProfilePhoto/>
      <Card.Body>
        <Card.Title><FullName/></Card.Title>
        <Card.Text>
        <Adress />
        </Card.Text>
        <Button variant="primary">Voter</Button>
      </Card.Body>
    </Card>
     
    
    
      
      
    </>
  );
}

export default App;
