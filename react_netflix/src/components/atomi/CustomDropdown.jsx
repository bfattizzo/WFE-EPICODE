import Dropdown from 'react-bootstrap/Dropdown';


function CustomDropdown() {
  return (

    <Dropdown>
      <Dropdown.Toggle variant="transparent" className='text-light' id="dropdown-basic">
        <img src='../src/assets/avatar-svgrepo-com.svg' alt="Profilo" width="30px"/>
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu-end bg-dark'>
        <Dropdown.Item href="#/action-1" className='text-light'>Manage Profiles</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className='text-light'>Account</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className='text-light'>Help Center</Dropdown.Item>
        <hr className='dropdown-divider'/>
        <Dropdown.Item href="#/action-3" className='text-light'>Signout Netflix</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomDropdown;