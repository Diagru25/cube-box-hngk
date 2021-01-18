import './App.css';

function App() {
  setTimeout(() => {
    let items = document.getElementsByClassName("max-box-item");
    items[0].style.transform = "translateZ(150px)";
    items[1].style.transform = "rotateX(180deg) translateZ(150px)";
    items[2].style.transform = "rotateX(-90deg) translateZ(150px)";
    items[3].style.transform = "rotateX(90deg) translateZ(150px)";
    items[4].style.transform = "rotateY(-90deg) translateZ(150px)";
    items[5].style.transform = "rotateY(90deg) translateZ(150px)";

    setTimeout(() => {
      items[0].style.transform = null;
      items[1].style.transform = null;
      items[2].style.transform = null;
      items[3].style.transform = null;
      items[4].style.transform = null;
      items[5].style.transform = null;
    }, 10000)
  }, 2500);



  return (
    <>
      <div className='box'>
        <ul className='minbox'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ol className='maxbox'>
          <li className="max-box-item"></li>
          <li className="max-box-item"></li>
          <li className="max-box-item"></li>
          <li className="max-box-item"></li>
          <li className="max-box-item"></li>
          <li className="max-box-item"></li>
        </ol>
      </div>

      <div className="hp"></div>
    </>
  );
}

export default App;
