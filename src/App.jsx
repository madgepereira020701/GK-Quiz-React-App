import { useState } from 'react';
import Header from './components/Header.jsx';
import Quiz from './components/Quiz.jsx';
import Home from './components/Home.jsx';

function App() {
  const [page, setPage] = useState('home');

  const startQuiz = () => {
    setPage('quiz');
  };

  return (
    <>
      <Header />
      <main>
        {page === 'home' && <Home onStartQuiz={startQuiz} />}
        {page === 'quiz' && <Quiz />}
      </main>
    </>
  );
}

export default App;
