import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function CustomButtonIcon() {
  return (
    <ButtonGroup aria-label="icon">
      <Button variant="transparent">
        <img src="../src/assets/search-svgrepo-com.svg" width="20px"/>
      </Button>
      <Button variant="transparent">
        <img src="../src/assets/bell-svgrepo-com.svg" width="22px"/> 
      </Button>
    </ButtonGroup>
  );
}

export default CustomButtonIcon;