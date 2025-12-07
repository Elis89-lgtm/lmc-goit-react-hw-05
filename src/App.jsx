// import { Routes, Route, NavLink } from "react-router-dom";
// import clsx from "clsx";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Products from "./pages/Products/Products";
// import NotFound from "./pages/NotFound/NotFound";
// import ProductDetails from "./pages/ProductDetails/ProductDetails";
// import css from "./App.module.css";
// import Product from "./components/Product";
// import Alert from "./components/alert/Alert";
// import BookIcon from "./components/BookIcon/BookIcon.jsx";

// import { ClickCounter } from "./components/ClickCounter.jsx";

// console.log(clsx("a", "b", "c"));
// console.log(clsx("a", false && "b"));
// console.log(clsx("a", true && "b"));
// console.log(clsx(null, "a", undefined, "b"));
// console.log(clsx("a", 0, 1, 2));
// console.log(clsx("a", { b: true, c: false }));
// let isError = true;
// console.log(clsx(isError ? "error" : "success"));
// isError = false;
// console.log(clsx(isError ? "error" : "success"));
// let isActive = true;
// console.log(clsx("btn", isActive && "btn-active"));
// isActive = false;
// console.log(clsx("btn", isActive && "btn-active"));
// console.log(clsx("first", 10, true && "third", false ? "fourth" : "fifth"));
// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

// const App = () => {
//   return (
//     <div>
//       <nav className={css.nav}>
//         <NavLink to="/" className={buildLinkClass}>
//           Home
//         </NavLink>
//         <NavLink to="/about" className={buildLinkClass}>
//           About
//         </NavLink>
//         <NavLink to="/products" className={buildLinkClass}>
//           Products
//         </NavLink>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />

//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:productId" element={<ProductDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };
// export default App;

// function Product() {
//   return (
//     <div>
//       <h2>Cookies</h2>
//       <p>Price: 999 credits</p>
//     </div>
//   );
// }

// закоментовано перший модуль ы частина другого
// export default function App() {
//   // список книжок
//   const favBooks = [
//     { id: "id-1", name: "JS for beginners" },
//     { id: "id-2", name: "React basics" },
//     { id: "id-3", name: "React Router overview" },
//   ];

//   // компонент для рендерингу списку книг
//   const BookList = ({ books }) => (
//     <ul>
//       {books.map((book) => (
//         <li key={book.id}>{book.name}</li>
//       ))}
//     </ul>
//   );

//   // стан для лічильника кліків

//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   // обробник події кліку
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <>
//       <div>
//         <BookIcon name="React Basics" />
//         <h1> Best selling</h1>

//         <Product
//           name="Tacos With Lime"
//           imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//           price={10.99}
//         />
//         <Product
//           name="Fries and Burger"
//           imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//           price={14.29}
//         />
//         <Product
//           name="Lavash with filling"
//           imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//           price={11.99}
//         />

//         <h2>Books of the week</h2>
//         <BookList books={favBooks} />

//         {/* кнопка-лічильник */}
//         <button onClick={handleClick}>Current: {clicks}</button>
//         <button onClick={handleToggle}>{isOpen? "Hide": "Show"}</button>
//         {isOpen && <p>Now you can see me!</p>}
//       </div>

//       {/* алерти */}
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         An error occurred during your long-running transaction.
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase!
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// }

// Поднятие состояния
//  const App = () => {
//    const [clicks, setClicks] = useState ( 0 );
//    const handleClick = () => {
//      setClicks (clicks + 1 );
//   }; return (
//      <>
//      < ClickCounter value = {clicks} onUpdate = {handleClick}/>
//      < ClickCounter value = {clicks} onUpdate = {handleClick}/>
//      </>
//   );
// };
// export default App;

// 	// Обновление объектов
//   const App = () => {
//   const [values, setValues] = useState({ x: 0, y: 0 });

//   // БЕЗПЕЧНО: використовуємо попередній стан
//   const updateX = () => {
//     setValues(prev => ({ ...prev, x: prev.x + 1 }));
//   };

//   const updateY = () => {
//     setValues(prev => ({ ...prev, y: prev.y + 1 }));
//   };

//   // Універсально: інкремент за ключем
//   const inc = key => {
//     setValues(prev => ({ ...prev, [key]: prev[key] + 1 }));
//   };

//   return (
//     <div>
//       <p>x: {values.x}, y: {values.y}</p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>

//       {/* приклад з універсальною функцією */}
//       <button onClick={() => inc("x")}>Inc x (universal)</button>
//       <button onClick={() => inc("y")}>Inc y (universal)</button>
//     </div>
//   );
// };

// Хук useEffect

// const App  = () => {
//   const [clicks, setClicks] = useState (0);

//   // обявляем еффект

//   useEffect (() => {
//     console.log("You can see me only once!");

//   }, []);

//   return (
//     <button onClick ={ () => setClicks(clicks +1)}>You clicked {clicks} times</button>
//   )
// }

// наочний приклад “три режими” useEffect

// export default function App() {
//   const [clicks, setClicks] = useState(0);

// 1) БЕЗ deps — спрацьовує після КОЖНОГО рендера (mount + кожне оновлення)
// useEffect(() => {
//   console.log("%c[1] useEffect без deps → після КОЖНОГО рендера", "color:#d97706");
// }); // ← немає другого аргументу

// 2) Порожній масив [] — спрацьовує ОДИН раз після першого рендера (mount)
// useEffect(() => {
//   console.log("%c[2] useEffect [] → один раз (mount)", "color:#10b981");
// }, []); // ← порожній масив залежностей

// 3) Залежності [clicks] — спрацьовує на mount і ЩОРАЗУ, коли змінюється clicks
// useEffect(() => {
//   console.log("%c[3] useEffect [clicks] → при зміні clicks:", "color:#3b82f6", clicks);
// }, [clicks]); // ← залежить від clicks

//   return (
//     <div style={{ fontFamily: "system-ui", padding: 16 }}>
//       <h1>useEffect: три режими</h1>
//       <p>clicks: {clicks}</p>
//       <button onClick={() => setClicks((c) => c + 1)}>+1</button>

//       <p>Відкрий консоль та клацай кнопку — подивись, які рядки з’являються.</p>
//       <small>
//         У dev-режимі з {"<StrictMode/>"} React може викликати ефекти двічі під час mount —
//         це нормально для перевірок.
//       </small>
//     </div>
//   );
// }
// export default App;

// Этап размонтирования

// const App = ()=> {
//  const [isOpen, setIsOpen] = useState (false);

//   return (
//   <div>
//     <button onClick = {() => setIsOpen (!isOpen)}>
//       { isOpen ? "Close" : "Open"}
//       </button>
//       { isOpen &&<Modal/>}
//   </div>
//   );
// }
// export default App;

// const App = () => {

//   useEffect( () => {
//      console . log ( "Effect" );

//     return  () => {
//        console . log ( "Clean up" );
//     };
//   });

//   return <div>App</div>;
// };
// export default App;
//!========================================================
// import { useState } from "react";
// import Modal from "./components/Modal.jsx";
// import { FcFeedback } from "react-icons/fc";

// export default function App() {
//   return <div><Modal/></div>;
// }

// Этап обновления

// const App =() => {
//   const [clicks, setClicks] = useState (0);
//   useEffect (()=> {
//     console.log("You can cee me only once");

//   },[]);
//   useEffect (() => {
//     console.log("Clicks updated:", clicks);
//     document.title = `You clicked ${clicks} times`;
//   }, [clicks]);

//   return (
//     <button onClick = {() => setClicks(clicks +1) }>
//       You clicked {clicks} times</button>
//   );
// };

// const App =() => {
//   const [ first, setFirst] = useState (0);
//   const [second, setSecond] = useState (0);

//   useEffect(()=> {
//     console.log("First updated", first);

//  }, [first]);

//  useEffect(()=> {
//     console.log("Second updated", second);

//  }, [second]);

// useEffect(()=> {
//     console.log("First or second updated", first + second);

//  }, [first,second]);
//  return (
//   <>
//   <button onClick={()=> setFirst(first +1)}> First:{first}</button>
//   <button onClick={()=> setSecond(second +1)}> Second:{second}</button>
//   </>
//  );
// };

// export default App;

// Работа с LocalStorage
// import { useId } from  "react" ;

// const LoginForm = ()=> {
// const loginId = useId ();
// const passwordId = useId ();

// return (
//   <form>
//     <label htmlFor = {loginId}>Login</label>
//     <input type = "text"  name = "login"  id = {loginId}/>

//    <label htmlFor = {passwordId}>Password</label>
//     <input type = "password"  name = "password"  id = {passwordId}/>
//     <button type = "submit" >Login</button>
//   </form>
// );
// };

// const App = () =>{
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = window.localStorage.getItem("saved-clicks");
//     if(savedClicks !== null) {
//       return Number(savedClicks);

//     } return 0;
//   });

//   useEffect(() => {
// window.localStorage.setItem("saved-clicks", clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick = {() => setClicks(clicks +1)}>
//         You clicked {clicks} times </button>
//         <button onClick = {() => setClicks(0)}>
//         Reset </button>
//         <LoginForm />
// </div>
//   );

//   };

// Элемент select

// import {LangSwitcher} from "./components/LangSwitcher";

// const App =()=>{
//   const [lang, setLang]=useState("uk");

//   return (
//     <>
//     <p>Selected language: {lang}</p>
//     <LangSwitcher value={lang} onSelect={setLang}/>
//     </>
//   );
// };

// Радіокнопка
// const App = ()=> {
//   const [coffeeSize, setCoffeeSize] = useState ("sm");

//   const handleSizeChange = (evt)=> {

//     setCoffeeSize(evt.target.value);

// };

// return (
//   <>
//   <h1>Sort by coffee size</h1>
//   <label>
//     <input
//     type = "radio"
//     name = "coffeeSize"
//     value = "sm"
//     checked = {coffeeSize === "sm"}
//     onChange = {handleSizeChange}
//     />Small
//   </label>

//   <label>
//     <input
//     type = "radio"
//     name = "coffeeSize"
//     value = "md"
//     checked ={coffeeSize ==="md"}
//     onChange = {handleSizeChange}
//     /> Meduim
//   </label>

//   <label>
//     <input
//     type = "radio"
//     name= "coffeeSize"
//     value = "lg"
//     checked ={coffeeSize ==="lg"}
//     onChange = {handleSizeChange}
//     /> Large
//   </label>
//   </>
// );
// };

// Чекбокс

// const App =()=>{

//   const [hasAccepted, setHasAccepted] = useState (false);

//   const handleChange = (evt) => {
//     setHasAccepted(evt. target. checked);

//   }

//   return (
//     <div>
//       <label>
//         <input
//         type = "checkbox"
//         name = "terms"
//         checked = {hasAccepted}
//         onChange = {handleChange}
//         /> I accept terms and conditions
//       </label>

//       <button type = "button" disabled = {!hasAccepted}> Continue</button>
//     </div>
//   );
// };

// import LoginForm from "./components/LoginForm";

// function App () {
// return (
//   <div>
//     <h1>Authorization</h1>
//     <LoginForm/>
//     </div>
// );
// }

// Колекція елементів
// import initialTasks from "../tasks.json";
// import { useState } from "react";
// import Form from "./components/Form/Form.jsx";
// import Filter from "./components/Filter/Filter.jsx";
// import TaskList from "./components/TaskList/TaskList.jsx";

// export default function App() {
//   const [tasks, setTasks] = useState(initialTasks);
//   const [filter, setFilter] = useState("");

//   const addTask = (newTask) => {
//     setTasks((prevTasks) => {
//       return [...prevTasks, newTask];
//     });
//   };

//   const deleteTask = (taskId) => {
//     setTasks((prevTasks) => {
//       return prevTasks.filter((task) => task.Id != taskId);
//     });
//   };

//   const visibleTask = tasks.filter((task) =>
//     task.text.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className={css.container}>
//       <Form onAdd={addTask} />
//       <Filter value={filter} onFilter={setFilter} />
//       <TaskList tasks={visibleTask} onDelete={deleteTask} />
//     </div>
//   );
// }

// // Formik
// import FeedbackForm from "./components/FeedbackForm/FeedbackForm.jsx";
// const App = () => {
//   return <FeedbackForm></FeedbackForm>;
// };
// export default App;
//! ======================================================================
//? ======================================================================
//* ======================================================================
//TODO ===================================================================
// Обработка данних запроса
// import axios from "axios";
// import { useEffect, useState } from "react";
// import ArticleList from "./components/ArticleList.jsx";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
// import { fetchArticlesWithTopic } from "./articles-api.js";
// import { SearchForm } from "./components/SearchForm/SearchForm.jsx";

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSearch = async (topic) => {
//     try {
//       setArticles([]);
//       setError(false);
//       setLoading(true);
//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data);
//     } catch {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       {/* <h1>Latest articles</h1> */}
//       {loading && <p style={{ fontSize: 20 }}>Loading data, please wait ...</p>}
//       {error && (
//         <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!" />
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//       {/* Якщо масив articles не порожній — відображає список статей через компонент ArticleList. */}
//     </div>
//   );
// };
// export default App;
//! =========================Хук useMemo=============================================
// import { useMemo, useState } from "react";
// const App = () => {
//   const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
//   const [query, setQuery] = useState("");
//   const [clicks, setClicks] = useState(0);

//   const filteredPlanets = useMemo(
//     () => planets.filter((planet) => planet.includes(query)),
//     [planets, query]
//   );
//   return (
//     <>
//       <button onClick={() => setClicks(clicks + 1)}>
//         Number of clicks:{clicks}
//       </button>
//       <ul>
//         {filteredPlanets.map((planet) => (
//           <li key={planet}>{planet}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;
//!=========================================================================
//?=======================Хук useRef========================================

// import { useEffect, useRef, useState } from "react";
// const App = () => {
//   const valueRef = useRef(0);

//   useEffect(() => {
//     // Выполняется только один раз во время монтирования.
//     // Следующие обновления значения рефа не
//     // вызовут обновление компонента
//     console.log(valueRef.current);
//   });
//   const handleClick = () => {
//     valueRef.current;
//     +1;
//   };
//   return (
//     <>
//       <button onClick={handleClick}>Click to update ref value</button>
//     </>
//   );
// };
// export default App;
//?===================================================================
// Видеоплеер
// import { useRef } from "react";

// const Player = ({ source }) => {
//   const playerRef = useRef();

//   const play = () => playerRef.current.play();
//   const pause = () => playerRef.current.pause();
//   return (
//     <div>
//       <video ref={playerRef} src={source}>
//         Sorry, your browser does not support embedded videos.
//       </video>
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };
// export default App;
//?===============================================================================
//TODO=========================хук useToggle======================================
// import MyComponent from "./components/MyComponent.jsx";

// function App() {
//   return (
//     <div>
//       <MyComponent />
//     </div>
//   );
// }

// export default App;
//TODO=============================================================================
//!=============================Contrxt============================================
// import { UserMenu } from "./components/UserMenu.jsx";
// const App = () => {
//   return (
//     <div>
//       <h1>Context example</h1>
//       <UserMenu />
//     </div>
//   );
// };

// export default App;
//!================================================================================

//*==========================Маршрутизація=========================================
import { Routes, Route, NavLink } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound.jsx";
import css from "./App.module.css";
import { AppBar } from "./components/AppBar.jsx";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const About = lazy(() => import("./pages/About/About.jsx"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/ProductDetails.jsx")
);
const Products = lazy(() => import("./pages/Products/Products.jsx"));
const Mission = lazy(() => import("./components/Mission.jsx"));
const Team = lazy(() => import("./components/Team.jsx"));
const Reviews = lazy(() => import("./components/Reviews.jsx"));

const App = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={<div>Loading page... </div>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
