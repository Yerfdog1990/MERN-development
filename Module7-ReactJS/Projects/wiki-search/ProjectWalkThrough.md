# Wikipedia Search App — Step-by-Step Walkthrough

---

## Project Structure

```
wiki-search/
├── public/
│   └── index.html              ← the only HTML file — contains <div id="root">
├── src/
│   ├── index.js                ← entry point — mounts the app
│   ├── App.js                  ← root component — state and API orchestration
│   ├── App.css                 ← global styles
│   ├── api.js                  ← Wikipedia API call
│   ├── util.js                 ← helper functions (stripHtml, highlight)
│   ├── wikipedia-logo.png      ← logo image
│   └── components/
│       ├── SearchBar.js        ← search input and form
│       ├── ArticleList.js      ← renders the list of results
│       └── Article.js          ← renders a single article
```

---

## Component Hierarchy and Data Flow

```
App  (owns all state + API call)
├── SearchBar    ← receives onSearch callback prop from App
└── ArticleList  ← receives articles array prop from App
    └── Article  ← receives single article object prop from ArticleList
```

Data always flows **downward** through props. Communication back up (from SearchBar to App) is done via a **callback function prop** (`onSearch`).

---

## File 1 — `public/index.html`

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>
```

**What it does:**
- The entire file is a skeleton. The only significant piece is `<div id="root"></div>`
- React will inject the entire application inside this div at runtime
- Nothing visible is written here — all UI comes from React components

---

## File 2 — `src/index.js`

```jsx
import ReactDOM from 'react-dom/client';
import App from './App.js';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);

root.render(<App />);
```

**Step-by-step:**

| Line | What it does |
|---|---|
| `import ReactDOM` | Imports the library that knows how to render React into the browser DOM |
| `import App` | Imports the root component from `App.js` |
| `document.querySelector('#root')` | Finds the `<div id="root">` in `index.html` |
| `ReactDOM.createRoot(el)` | Tells React to take control of that div — makes it the React root |
| `root.render(<App />)` | Renders the `App` component and everything inside it into the root div |

This is the **bridge** between the HTML file and all your React components. Everything that appears on screen starts here.

---

## File 3 — `src/api.js`

```js
export const search = async (searchTerm) => {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchTerm}`;
    const response = await fetch(url);
    const results = await response.json();
    return results.query.search;
  } catch (error) {
    console.log(error);
  }
};
```

**Step-by-step:**

**1. Build the URL**
```js
const url = `...&srlimit=10&srsearch=${searchTerm}`;
```
The Wikipedia API endpoint is constructed with the search term embedded at the end via template literal. Key query parameters:
- `action=query&list=search` — tells Wikipedia to run a search
- `format=json` — response should be JSON
- `origin=*` — allows cross-origin requests from the browser
- `srlimit=10` — return up to 10 results
- `srsearch=${searchTerm}` — the actual search term

**2. Call the API**
```js
const response = await fetch(url);
```
`fetch()` sends an HTTP GET request to Wikipedia. It returns a Promise that resolves with a `Response` object. `await` pauses execution until the response arrives.

**3. Parse the JSON**
```js
const results = await response.json();
```
The raw response body is a JSON string. `.json()` parses it into a JavaScript object. This also returns a Promise so needs `await`.

**4. Return the articles array**
```js
return results.query.search;
```
The Wikipedia API response structure looks like:
```json
{
  "query": {
    "search": [
      { "pageid": 123, "title": "React", "snippet": "..." },
      { "pageid": 456, "title": "React Native", "snippet": "..." }
    ]
  }
}
```
So `results.query.search` drills down to the array of article objects.

**5. Error handling**
```js
} catch (error) {
  console.log(error);
}
```
If the fetch fails (no internet, bad URL, server error), the `catch` block logs the error. In production you would update an error state here.

---

## File 4 — `src/util.js`

```js
export const highlight = (str, keyword, className = 'highlight') => {
  const hl = `<span class="${className}">${keyword}</span>`;
  return str.replace(new RegExp(keyword, 'gi'), hl);
};

export const stripHtml = (html) => {
  let div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent;
};
```

Two exported utility functions:

### `stripHtml(html)`

Wikipedia API returns titles and snippets with HTML tags inside them, for example:
```
"<span class='searchmatch'>React</span> is a JavaScript library..."
```

`stripHtml` removes all HTML tags and returns clean text:

| Step | What happens |
|---|---|
| `document.createElement('div')` | Creates a temporary div element (not added to the page) |
| `div.innerHTML = html` | Sets the raw HTML string as the div's inner content — the browser parses the tags |
| `return div.textContent` | Returns only the visible text, stripping all HTML tags |

Result: `"React is a JavaScript library..."`

### `highlight(str, keyword, className)`

Wraps every occurrence of `keyword` inside `str` with a `<span>` tag for highlighting. Uses a **case-insensitive global regex** (`gi` flags) so it matches "React", "react", "REACT" etc.

```js
highlight('React is popular', 'react')
// → '<span class="highlight">React</span> is popular'
```

The default `className` is `'highlight'` — styled in `App.css` with a yellow background.

---

## File 5 — `src/App.js`

```jsx
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import { search } from './api';
import './App.css';
import logo from './wikipedia-logo.png';

const App = () => {
  const [articles, setArticles] = useState([]);

  const handleSearch = async (searchTerm) => {
    const results = await search(searchTerm);
    setArticles(results);
  };

  return (
    <>
      <header>
        <img src={logo} alt="wikipedia" />
        <h1>Wikipedia Search</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main id="searchResult">
        <ArticleList articles={articles} />
      </main>
    </>
  );
};

export default App;
```

**Step-by-step:**

**1. Imports**
```js
import { useState } from 'react';           // hook for managing state
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import { search } from './api';             // the Wikipedia API function
import './App.css';                         // global styles
import logo from './wikipedia-logo.png';    // logo image as an imported asset
```

**2. State definition**
```js
const [articles, setArticles] = useState([]);
```
- `articles` — starts as an empty array `[]`
- `setArticles` — the function to update it
- When `setArticles(results)` is called, React re-renders the component with the new data

**3. The `handleSearch` function**
```js
const handleSearch = async (searchTerm) => {
  const results = await search(searchTerm);
  setArticles(results);
};
```
- Called by `SearchBar` when the user submits the form
- Calls `search(searchTerm)` from `api.js` — waits for the Wikipedia response
- Updates `articles` state with the returned array
- React re-renders: `ArticleList` receives the new articles and displays them

**4. The JSX**
```jsx
<SearchBar onSearch={handleSearch} />
```
Passes `handleSearch` down to `SearchBar` as the `onSearch` prop — this is the **callback pattern** that allows the child to trigger a state update in the parent.

```jsx
<ArticleList articles={articles} />
```
Passes the `articles` state array down to `ArticleList` as a prop.

**Flow summary:**
```
App state: articles = []

User types and submits in SearchBar
        ↓
SearchBar calls onSearch(searchTerm)
        ↓
App.handleSearch('React') runs
        ↓
search('React') fetches Wikipedia API
        ↓
setArticles(results) → articles = [{ pageid, title, snippet }, ...]
        ↓
React re-renders App
        ↓
ArticleList receives updated articles prop
        ↓
Articles displayed on screen
```

---

## File 6 — `src/components/SearchBar.js`

```jsx
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="searchTerm"
        id="searchTerm"
        placeholder="Enter a search term..."
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
```

**Step-by-step:**

**1. Props**
```js
const SearchBar = ({ onSearch }) => {
```
Receives `onSearch` — the `handleSearch` function from `App` — via destructured props.

**2. Local state**
```js
const [searchTerm, setSearchTerm] = useState('');
```
`searchTerm` tracks what the user is currently typing. It is local to `SearchBar` — `App` doesn't need to know about it until the form is submitted.

**3. Controlled input**
```jsx
value={searchTerm}
onChange={(event) => setSearchTerm(event.target.value)}
```
This makes the input a **controlled input**:
- `value={searchTerm}` — React controls what the input displays
- `onChange` fires on every keystroke → `setSearchTerm` updates the state → React re-renders → input shows the new value

Every character the user types goes through React state before appearing in the input.

**4. Form submission**
```js
const handleSubmit = (event) => {
  event.preventDefault(); // stops the browser from reloading the page
  onSearch(searchTerm);   // sends the current value up to App
};
```
`event.preventDefault()` is essential — without it, submitting the form would cause a full page reload, clearing all state.

**Controlled input flow:**
```
User types 'R'
    ↓
onChange fires → setSearchTerm('R')
    ↓
State updates → re-render
    ↓
input displays 'R'

User presses Enter
    ↓
form onSubmit fires
    ↓
handleSubmit called
    ↓
event.preventDefault() — no page reload
    ↓
onSearch('React') — calls App's handleSearch
```

---

## File 7 — `src/components/ArticleList.js`

```jsx
import Article from './Article';

const ArticleList = ({ articles }) => {
  const renderedArticles = articles.map((article) => {
    return <Article key={article.pageid} article={article} />;
  });

  return <div>{renderedArticles}</div>;
};

export default ArticleList;
```

**Step-by-step:**

**1. Props**
```js
const ArticleList = ({ articles }) => {
```
Receives the `articles` array from `App` via props. Initially this is `[]` (empty), so nothing renders until a search is made.

**2. Mapping data to components**
```js
const renderedArticles = articles.map((article) => {
  return <Article key={article.pageid} article={article} />;
});
```
`map()` transforms each article object in the array into an `<Article />` component:
- `key={article.pageid}` — uses the Wikipedia page ID as a stable unique key. React uses this to track which articles changed
- `article={article}` — passes the whole article object as a prop to `Article`

**3. Rendering**
```jsx
return <div>{renderedArticles}</div>;
```
Renders the array of `Article` components inside a `div`. When `articles` is empty (`[]`), `map()` returns an empty array and nothing is shown.

---

## File 8 — `src/components/Article.js`

```jsx
import { stripHtml } from '../util';

const Article = ({ article }) => {
  const url = `https://en.wikipedia.org/?curid=${article.pageid}`;
  const title = stripHtml(article.title);
  const snippet = stripHtml(article.snippet);

  return (
    <article>
      <a href={url} title={title}>
        <h2>{title}</h2>
      </a>
      <div className="summary">{snippet}...</div>
    </article>
  );
};

export default Article;
```

**Step-by-step:**

**1. Props**
```js
const Article = ({ article }) => {
```
Receives a single `article` object with these fields from the Wikipedia API:
- `article.pageid` — unique page ID
- `article.title` — article title (may contain HTML)
- `article.snippet` — short excerpt (may contain HTML)

**2. Data preparation**
```js
const url     = `https://en.wikipedia.org/?curid=${article.pageid}`;
const title   = stripHtml(article.title);
const snippet = stripHtml(article.snippet);
```
- `url` — constructs the direct Wikipedia link using `curid` (page ID) — this always points to the correct article
- `title` and `snippet` — cleaned of HTML tags via `stripHtml` before displaying

**3. Rendering**
```jsx
<article>
  <a href={url} title={title}>
    <h2>{title}</h2>
  </a>
  <div className="summary">{snippet}...</div>
</article>
```
- `<article>` — semantic HTML5 element for a self-contained piece of content
- `<a href={url}>` — clicking the title navigates to the Wikipedia page
- `{snippet}...` — the three dots indicate the snippet is a preview, not the full article

---

## File 9 — `src/App.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

:root {
  --primary-color: #00369a;  /* Wikipedia blue */
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  margin: 0 20px;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 768px;
  margin: 0 auto;
}

main { max-width: 768px; margin: 0 auto; }

input[type='search'] {
  padding: 10px 20px;
  border: solid 2px #f0f0f0;
  border-radius: 50px;   /* pill shape */
  width: 100%;
}

.highlight {
  background-color: #fff6ea;  /* used by the highlight() utility */
  font-weight: bold;
  padding: 5px;
}
```

Key styling decisions:
- `max-width: 768px` — content is constrained to a readable width and centered
- `border-radius: 50px` on the search input — gives the pill/rounded style
- `--primary-color: #00369a` — Wikipedia's blue, used for links
- `.highlight` class — applied by the `highlight()` utility function to emphasize matched keywords

---

## Complete Application Flow — End to End

```
1. Browser loads localhost:3000
         ↓
2. index.html served → <div id="root"> loaded
         ↓
3. index.js runs → ReactDOM.createRoot + root.render(<App />)
         ↓
4. App renders:
   - articles state = []
   - <SearchBar onSearch={handleSearch} />  (no results shown yet)
   - <ArticleList articles={[]} />          (empty, renders nothing)
         ↓
5. User types "React" into SearchBar input
   - Each keystroke → onChange → setSearchTerm → re-render
         ↓
6. User presses Enter
   - form onSubmit → handleSubmit()
   - event.preventDefault()   (no page reload)
   - onSearch('React')         (calls App's handleSearch)
         ↓
7. App.handleSearch('React') runs
   - calls search('React') from api.js
   - fetch() sends GET request to Wikipedia API
   - await response.json() parses the result
   - returns array of 10 article objects
         ↓
8. setArticles(results) → articles state updates
         ↓
9. App re-renders:
   - ArticleList receives new articles prop (10 items)
         ↓
10. ArticleList maps articles → 10 <Article /> components
         ↓
11. Each Article:
    - constructs Wikipedia URL from pageid
    - strips HTML from title and snippet
    - renders <article> with link, title, and snippet
         ↓
12. Browser displays 10 Wikipedia search results
```

---

## Summary — What Each File Does

| File | Role | Key concept |
|---|---|---|
| `public/index.html` | HTML skeleton with `<div id="root">` | Mount point for React |
| `src/index.js` | Entry point — mounts `<App />` into the DOM | `createRoot` + `render` |
| `src/api.js` | Wikipedia API call — fetch, parse, return | `async/await`, `fetch` |
| `src/util.js` | Helper functions — `stripHtml`, `highlight` | DOM manipulation, regex |
| `src/App.js` | Root component — holds state, orchestrates API | `useState`, callback props |
| `src/components/SearchBar.js` | Search form — controlled input, submit handler | Controlled input, `preventDefault` |
| `src/components/ArticleList.js` | Renders list of Article components | `map()`, `key` prop |
| `src/components/Article.js` | Renders a single article | Props, `stripHtml` |
| `src/App.css` | Global styles | CSS variables, flexbox |


---