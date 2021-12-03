import './App.css';

import Head from './components/Head/Head';
import Body from './components/Body/Body';
import Shoes from './components/Shoes/Shoes';
import Preview from './components/Preview/Preview';

function App() {
  const heads = [
    { id: 1, type: 'chris-paul' },
    { id: 2, type: 'lebron-james ' },
    { id: 3, type: 'jason-kidd' },
  ];

  const body = [
    { id: 1, type: 'curry-jersey' },
    { id: 2, type: 'durant-jersey' },
    { id: 3, type: 'shaq-jersey' },
  ];

  const shoes = [
    { id: 1, type: 'iverson-shoes' },
    { id: 2, type: 'jordan-shoes' },
    { id: 3, type: 'kobe-shoes' },
  ];

  return (
    <>
      <h1 className="title"> Create Your Nba Player </h1>
      <div className="App">
        <Head key={heads.id} type={heads.type} />
        <Body key={body.id} type={body.type} />
        <Shoes key={shoes.id} typer={shoes.type} />
        <Preview />
      </div>
    </>
  );
}

export default App;
