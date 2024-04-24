export const Data = [
  {
    title: 'Components',
    description: 'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    title: 'JSX',
    description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    title: 'Props',
    description: 'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    title: 'State',
    description: 'React-managed data which, when changed. couses the component to re-render & the UI to update.',
  }
]

export const Contents = {
  Component: {
    title: 'Component',
    description: 'Components are the building blocks of React applications. A component is a self-contained module (HTML + optianal CSS + JS) that renders some output.',
    code: `
    const Welcome = () => {
      return (
        <h1>Hello, World</h1>
      )
    }
    
    export default Welcome;`,
  },
  JSX: {
    title: 'JSX',
    description: 'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
    <menu>
      <li><Button onChange={() => changeHandler('Component')}>Component</Button></li>
      <li><Button onChange={() => changeHandler('JSX')}>JSX</Button></li>
    </menu>`,
  },
  Props: {
    title: 'Props',
    description: 'Components accept arbitrary inputs called props. they are like function arguments.',
    code: `
    const Welcome = (props) => {
      return (
        <h1>Hello, {props.name}</h1>
      )
    }`,
  },
  State: {
    title: 'State',
    description: 'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
    const [content, setContent] = useState({});

    const changeHandler = (item) => {
      setContent(contents[item]);
    }`,
  },
}

