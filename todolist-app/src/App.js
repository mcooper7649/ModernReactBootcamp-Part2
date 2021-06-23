import TodoList from './TodoList.js'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
    <Helmet>
          <meta charset="utf-8" />
          <meta name="title" property="og:title" content="Todo List" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="image" property="og:image" content="https://i.ibb.co/LQTXBkQ/Screen-Shot-2021-06-23-at-9-58-44-AM.png" />
          <meta name="url" property="og:url" content="https://www.mycodedojo.com" />
          <meta name="description" property="og:description" content="Todo List| A sleep UI to help you focus on the little tasks at hand. More Features Coming Soon! Visit MyCodeDojo for more Apps and Games!" />
          <meta name="author" property="og:author" content="Michael Cooper" />
          <script src="https://kit.fontawesome.com/8cc1b75eb3.js" crossorigin="anonymous"></script>
          <title>Todo List</title>
      </Helmet>
      <TodoList />
    </div>
  );
}

export default App;
