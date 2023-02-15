
import './App.css';
import {useState} from "react"
//değişme ihtimali olan her şeyde state kullanıyoruz. 
//import ediyoruz. state yapısı.const [count, setCount] =useState(0); fonksiyonu oluşturuyoruz. sonra butona onclick özelliği veriyoruz.


function App() {
  const [count, setCount] =useState(0); //birincisi state, içerisinde birşeyler barındırıyor yani değişken, ikincisi o stati değiştiren fonksiyon. useState'nin içindeki değer başlangıç değeri ve counta atanan değerdir.
  const inc = () =>{
    setCount(count +1) 
  }
  const Dec = () =>{
    if(count> 0){  //count 0 dan büyük olduğu müddetçe çalışsın.
      setCount(count -1) 
    }
    
  }
  return (
    <div className="App">
     <h2>Count: {count}</h2>
     <button onClick={inc}>Inc</button> 
     <button onClick={Dec}>Dec</button>

    </div>
  );
}

export default App;
