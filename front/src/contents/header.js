import '../css/header.css'
function Header() {
  return (
    <div id='header'>
        <div className='headerTitle'>GugeMoim</div>
        <div className='headerSubTitle'>간편한 모임 공지와 소통</div>
        <div className='headerNavigator'>
          <ul className='navigationBar'>
            <li className='navigation'>menu1</li>
            <li className='navigation'>menu2</li>
            <li className='navigation'>menu3</li>
          </ul>
        </div>
    </div>
  );
}

export default Header;
