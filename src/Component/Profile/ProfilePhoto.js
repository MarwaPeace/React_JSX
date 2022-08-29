import ProfileImg from '../../Assets/ProfilPhoto.png';
import Card from 'react-bootstrap/Card';

function ProfilePhoto(){
    return(
<>
<Card.Img variant="top" src={ProfileImg} />

</>
    );
}
export default ProfilePhoto;