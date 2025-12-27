
const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
};

const Part = ({part}) => {
    return (
        <p>{part.part} {part.exercise}</p>
    )
};

const Content = ({parts}) => {
    return (
        <div>
            <Part part={parts[0]} />
            <Part part={parts[1]} />
            <Part part={parts[2]} />
        </div>
    )
};

const Total = ({parts}) => {
    const total = parts.reduce((sum, p) => sum + Number(p.exercise), 0)
    console.log(total)
    return (
        <div>
            <p>Number of exercises {total} </p>
        </div>
    )
};

const App = () => {
  // const-definitions
    const course = 'Half Stack application development'
    const parts = [
        {part: 'Fundamentals of React', exercise: '10'},
        {part: 'Using props to pass data', exercise: '7'},
        {part: 'State of a component', exercise: '14'}
    ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
};

export default App