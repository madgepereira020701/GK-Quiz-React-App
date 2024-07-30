function Home({ onStartQuiz }) {
    const buttonStyle = {
      padding: '30px 50px',
      backgroundColor: '#0064fb',
      color: 'white',
      border: 'none',
      borderRadius: '12px',  
      cursor: 'pointer',
      margin: '10px 0',
      fontSize: '24px'
    };
  
    return (
      <div id="quiz">
        <button style={buttonStyle} onClick={onStartQuiz}>Start Quiz</button>
      </div>
    );
  }
  
  export default Home;
  