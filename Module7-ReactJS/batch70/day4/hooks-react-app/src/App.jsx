
import './App.css'
import Counter1 from "../public/components/useState/Counter1.jsx";
import Counter2 from "../public/components/useState/Counter2.jsx";
import FetchData2 from "../public/components/useEffect/FetchData2.jsx";
import FetchData1 from "../public/components/useEffect/FetchData1.jsx";
import UseEffectDemo from "../public/components/useLayoutEffect/UseEffectDemo.jsx";
import UseLayoutEffectDemo from "../public/components/useLayoutEffect/UseLayoutEffectDemo.jsx";
import CounterRef1 from "../public/components/useRef/Counter1.jsx";
import CounterRef2 from "../public/components/useRef/Counter2.jsx";
import ManipulateDOM from "../public/components/useRef/ManipulateDOM.jsx";
import WithContextAPI from "../public/components/useContext/WithContextAPI.jsx";
import WithoutContextAPI from "../public/components/useContext/WithoutContextAPI.jsx";
import CounterMemo1 from "../public/components/useMemo/CounterMemo1.jsx";
import CounterMemo2 from "../public/components/useMemo/CounterMemo2.jsx";
import ProductList from "../public/components/useMemo/ProductList.jsx";
import Rendering1 from "../public/components/reactMemo/Rendering1.jsx";
import Rendering2 from "../public/components/reactMemo/Rendering2.jsx";
import Cache1 from "../public/components/useCallback/Cache1.jsx";
import Cache2 from "../public/components/useCallback/Cache2.jsx";
import CustomHook from "../public/components/customHooks/CustomHook.jsx";

function App() {

  return (
    <>
      <section id="use-state">
        <div className="hook">
          <h2>Counter using variables</h2>
          <Counter1 />
        </div>
        <div className="hook">
          <h2>Counter using useState</h2>
          <Counter2 />
        </div>
      </section>
      <section id="use-effect">
        <div className="hook">
          <h2>Fetch Data ❌ Without useEffect (Bad)</h2>
          <FetchData1 />
        </div>
        <div className="hook">
          <h2>Fetch Data ✅ With useEffect (Correct)</h2>
          <FetchData2 />
        </div>
      </section>
      <section id="use-layout-effect">
        <div className="hook">
          <h2>Fetch Data ❌ Using useEffect (Visible Flicker)</h2>
          <UseEffectDemo />
        </div>
        <div className="hook">
          <h2>Fetch Data ✅ Using useLayoutEffect (No Flicker)</h2>
          <UseLayoutEffectDemo />
        </div>
      </section>
      <section id="use-ref">
        <div className="hook">
          <h2>Counter Using a Normal Variable</h2>
          <CounterRef1 />
        </div>
        <div className="hook">
          <h2>Counter Using useRef</h2>
          <CounterRef2 />
        </div>
        <div className="hook">
          <h2>Manipulate DOM</h2>
          <ManipulateDOM />
        </div>
      </section>
      <section id="use-context">
        <div className="hook">
          <h2>Without Context API (prop drilling)</h2>
          <WithoutContextAPI/>
        </div>
        <div className="hook">
          <h2>With Context API</h2>
          <WithContextAPI/>
        </div>
      </section>
      <section id="use-memo">
        <div className="hook">
          <h2>Without useMemo</h2>
          <CounterMemo1/>
        </div>
        <div className="hook">
          <h2>With useMemo</h2>
          <CounterMemo2/>
        </div>
        <div className="hook">
          <h2>Filtering Large Lists with useMemo</h2>
          <ProductList/>
        </div>
      </section>
      <section id="react-memo">
        <div className="hook">
          <h2>Child component rendering without React.memo</h2>
          <Rendering1 />
        </div>
        <div className="hook">
          <h2>Child component rendering with React.memo</h2>
          <Rendering2 />
        </div>
      </section>
      <section id="use-callback">
        <div className="hook">
          <h2>Without useCallback</h2>
          <Cache1 />
        </div>
        <div className="hook">
          <h2>With useCallback</h2>
          <Cache2 />
        </div>
      </section>
      <section id="custom-hook">
        <div className="hook">
          <h2>Custom Hook</h2>
          <CustomHook />
        </div>
      </section>
    </>
  )
}

export default App
