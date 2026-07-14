import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactJSXApp from "./2-jsx-file/ReactJSX";
import HelloWorldApp from "./1-first-react-app/HelloWorld";
import BookApp from "./3-props/BookApp";
import KeyProps from "./4-key-props/BookApp";
import TodoListApp1 from "./5-conditional-rendering/TodoListApp1";
import TodoListApp2 from "./5-conditional-rendering/TodoListApp2";
import TodoListApp3 from "./5-conditional-rendering/TodoListApp3";
import TodoListApp4 from "./5-conditional-rendering/TodoListApp4";
import TodoListApp5 from "./5-conditional-rendering/TodoListApp5";
import EventApp from "./6-events/Events";
import StatesApp from "./7-states/StatesApp";
import CounterApp2 from "./7-states/CounterApp2";
import CounterApp1 from "./7-states/CounterApp1";
import FruitList from "./8-states/useState/HandlingArrays";
import Person from "./8-states/useState/HandlingObjects";
import LaziInitialization from "./8-states/useState/LaziInitialization";
import UserList from "./8-states/useEffect/RunOnlyOnce";
import CounterTitle from "./8-states/useEffect/RunWhenDependencyChange";
import Counter from "./8-states/useEffect/RunAfterEveryRender";
import WindowResizeListener from "./8-states/useEffect/WindowResizeListener";
import Counter3 from "./8-states/useReducer/CounterApp3";
import Counter2 from "./8-states/useReducer/CounterApp2";
import Counter1 from "./8-states/useReducer/CounterApp1";
import SubscriberForm from "./8-states/useRef/SubscriberForm";
import IncrementCount from "./8-states/useRef/IncrementCount";
import PreviousValue from "./8-states/useRef/PreviousValue";
import Timer from "./8-states/useRef/Timer";

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);


function App() {
    return (
        <div className="app-container">
            <h1 className="main-title">React JS Learning Path</h1>

            <section className="component-section">
                <h2 className="section-title">1. Hello World - Basic React Setup</h2>
                <div className="component-wrapper">
                    <HelloWorldApp />
                </div>
            </section>

            <section className="component-section">
                <h2 className="section-title">2. JSX - JavaScript XML Syntax</h2>
                <div className="component-wrapper">
                    <ReactJSXApp />
                </div>
            </section>

            <section className="component-section">
                <h2 className="section-title">3. Props - Component Properties</h2>
                <div className="component-wrapper">
                    <BookApp />
                </div>
            </section>

            <section className="component-section">
                <h2 className="section-title">4. Key Props - List Rendering</h2>
                <div className="component-wrapper">
                    <KeyProps />
                </div>
            </section>

            <section className="component-section">
                <h2 className="section-title">5.1 Conditional Rendering - Basic Example</h2>
                <div className="component-wrapper">
                    <TodoListApp1 />
                </div>
            </section>

            <section className="component-section">
                <h2 className="section-title">5.2 Conditional Rendering - Ternary Operator</h2>
                <div className="component-wrapper">
                    <TodoListApp2 />
                </div>
            </section>

            <section className="component-section">
                <h2 className="section-title">5.3 Conditional Rendering - Logical AND</h2>
                <div className="component-wrapper">
                    <TodoListApp3 />
                </div>
            </section>

            <section className="component-section">
                <h2 className="section-title">5.4 Conditional Rendering - Switch Statement</h2>
                <div className="component-wrapper">
                    <TodoListApp4 />
                </div>
            </section>

            <section className="component-section">
                <h2 className="section-title">5.5 Conditional Rendering - Enum Pattern</h2>
                <div className="component-wrapper">
                    <TodoListApp5 />
                </div>
            </section>

            <section className="component-section">
                <h2 className="section-title">6. Event Handling in React</h2>
                <div className="component-wrapper">
                    <EventApp />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">7. React States</h2>
                <div className="component-wrapper">
                    <StatesApp />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">7.1 Counter App 1</h2>
                <div className="component-wrapper">
                    <CounterApp1 />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">7.2 Counter App 2</h2>
                <div className="component-wrapper">
                    <CounterApp2 />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">8.1 Handle Arrays Using useStates </h2>
                <div className="component-wrapper">
                    <FruitList />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">8.2 Handle Objects Using useStates </h2>
                <div className="component-wrapper">
                    <Person />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">8.3 Lazy Initialization Using useStates </h2>
                <div className="component-wrapper">
                    <LaziInitialization />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">9.1 Run useEffect Only Once </h2>
                <div className="component-wrapper">
                    <UserList />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">9.2 Run useEffect When Dependency Changes </h2>
                <div className="component-wrapper">
                    <CounterTitle />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">9.3 Run useEffect After Every Render </h2>
                <div className="component-wrapper">
                    <Counter />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">9.4 Example: Window Resize Listeners </h2>
                <div className="component-wrapper">
                    <WindowResizeListener />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">10.1 Counter App 1 using useState </h2>
                <div className="component-wrapper">
                    <Counter1 />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">10.2 Counter App 2 using useReducer </h2>
                <div className="component-wrapper">
                    <Counter2 />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">10.3 Counter App 3 using useReducer </h2>
                <div className="component-wrapper">
                    <Counter3 />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">11.1 Subscriber Form </h2>
                <div className="component-wrapper">
                    <SubscriberForm />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">11.2 Increment Count </h2>
                <div className="component-wrapper">
                    <IncrementCount />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">11.3 Previous Value </h2>
                <div className="component-wrapper">
                    <PreviousValue />
                </div>
            </section>
            <section className="component-section">
                <h2 className="section-title">11.4 Timer </h2>
                <div className="component-wrapper">
                    <Timer />
                </div>
            </section>
        </div>
    )
}

root.render(<App />);