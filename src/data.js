export const Data = [
  {
    title: 'Component',
    description: 'Components are independent and reusable bits of code.',
  },
  {
    title: 'JSX',
    description: 'JSX stands for JavaScript XML. JSX allows us to write HTML in React.',
  },
  {
    title: 'Props',
    description: 'Props is a special keyword in React that stands for properties and is used for passing data from one component to another.',
  },
  {
    title: 'State',
    description: 'The state is a built-in React object that is used to contain data or information about the component.',
  }
]

export const Contents = {
  Component: {
    title: 'Component',
    description: 'Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.',
    code: `
    const CoreConsept = ({ title, description, img }) => {
      return (
        <li className=''>
          <img src={image} />
          <h2 className='font-bold text-lg mt-3'>{title}</h2>
          <p className='opacity-60'>{description}</p>
        </li>
      )
    }
    
    export default CoreConsept;`,
  },
  JSX: {
    title: 'JSX',
    description: 'JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.',
    code: `
    <menu className='flex gap-5 mb-5'>
      <li><Button isActive={content.title === 'Component'} onChange={() => changeHandler('Component')}>Component</Button></li>
      <li><Button isActive={content.title === 'JSX'} onChange={() => changeHandler('JSX')}>JSX</Button></li>
      <li><Button isActive={content.title === 'Props'} onChange={() => changeHandler('Props')}>Props</Button></li>
      <li><Button isActive={content.title === 'State'} onChange={() => changeHandler('State')}>State</Button></li>
    </menu>`,
  },
  Props: {
    title: 'Props',
    description: 'Props is a special keyword in React that stands for properties and is used for passing data from one component to another.',
    code: ``,
  },
  State: {
    title: 'State',
    description: 'The state is a built-in React object that is used to contain data or information about the component.',
    code: `
    const [content, setContent] = useState({});

    const changeHandler = (item) => {
      setContent(contents[item]);
    }`,
  },
}

