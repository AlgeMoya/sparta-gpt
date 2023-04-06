import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {/* 뼈대 잡기 */}
    <div className="hero-section bg-dark text-white d-flex text-center align-items-center py-5 my-4">
        <div className="container text-center">
            <h1 className="display-3 text-white">말밥마켓 말고 마시켓발</h1>
            <p className="lead text-white">몰랐던 주변의 또1라이들을 구경해 보세요</p>
            <button className="btn btn-primary">아무 일도 일어나지 않는 버튼</button>
        </div>
    </div>
    {/* 여기 */}
    {/* Content goes here */}
    <div className="container">
    <div className="row">
      {/* First Card */}
      <div className="col-sm-4 mb-4">
        <div className="card h-100">
          <img src="https://source.unsplash.com/1600x900/?refrigerator" className="card-img-top" alt="Refrigerator Image"></img>
          <div className="card-body">
            <h5 className="card-title">냉장고</h5>
            <h6 className="card-subtitle mb-2 text-muted">89.99$</h6>
            <p className="card-text">한 번 밖에 안쓴 냉장고 팝니다. 부모님이 독립 할 때 주신 거에요!</p>
            <a href="https://codingapple.com/" className="card-link stretched-link" target="_blank"></a>
          </div>
        </div>
      </div>
  
      {/* Second Card */}
      <div className="col-sm-4 mb-4">
        <div className="card h-100">
          <img src="https://source.unsplash.com/1600x900/?washing-machine" className="card-img-top" alt="Washing Machine Image"></img>
          <div className="card-body">
            <h5 className="card-title">세탁기</h5>
            <h6 className="card-subtitle mb-2 text-muted">109.99$</h6>
            <p className="card-text">한 번 밖에 안쓴 세탁기 팝니다. 지방 발령 때문에 샀는데 취소됐어요 ㅠㅠ</p>
            <a href="https://codingapple.com/" className="card-link stretched-link" target="_blank"></a>
          </div>
        </div>
      </div>
  
      {/* Third Card */}
      <div className="col-sm-4 mb-4">
        <div className="card h-100">
          <img src="https://source.unsplash.com/1600x900/?laptop" className="card-img-top" alt="Laptop Image"></img>
          <div className="card-body">
            <h5 className="card-title">노트북</h5>
            <h6 className="card-subtitle mb-2 text-muted">199.99$</h6>
            <p className="card-text">노트북 팝니다. 직장 다니면서 쓰던 건데, 쓰다가 마음에 안 들어서 이직 이후로 두고두고 안 썼어요.</p>
            <a href="https://codingapple.com/" className="card-link stretched-link" target="_blank"></a>
          </div>
        </div>
      </div>

      {/* Fourth Card */}
      <div className="col-sm-4 mb-4">
        <div className="card h-100">
          <img src="https://source.unsplash.com/1600x900/?nintendo-switch" className="card-img-top" alt="루타이원"></img>
          <div className="card-body">
            <h5 className="card-title">닌텐도 스위치</h5>
            <h6 className="card-subtitle mb-2 text-muted">129.99$</h6>
            <p className="card-text">닌텐도 스위치 팝니다 엄마가 공부해야된다고 올리라고 해서 어쩔 수 없이 올려요 ㅠ</p>
            <a href="https://codingapple.com/" className="card-link stretched-link" target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default App
