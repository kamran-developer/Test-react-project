import { useState } from 'react';
import Button from './components/Button/Button';
import CoreConsept from './components/Core consept/CoreConsept';
import { Data, Contents } from './data'
import logo from './logo.svg';

function App() {

  const items = Data;
  const contents = Contents

  const [content, setContent] = useState({});

  const changeHandler = (item) => {
    setContent(contents[item]);
  }

  return (
    <div className="App">
      <section className='max-w-7xl m-auto bg-slate-950 rounded-xl py-10 px-10 text-center mt-32'>
        <h2 className='text-4xl mb-10 font-bold text-orange-100 border-b border-slate-500 border-opacity-50 pb-10'>Core Consepts</h2>

        <ul className='flex gap-10 text-blue-100 px-16'>
          {items.map((item) => <CoreConsept key={item.title} {...item} />)}
        </ul>
      </section>

      <section className='max-w-7xl m-auto bg-slate-800 rounded-xl py-5 px-10 mt-20 mb-20'>
        <h2 className='text-orange-200 text-xl mb-6'>Example</h2>
        <menu className='flex gap-5 mb-5'>
          <li><Button isActive={content.title === 'Component'} onChange={() => changeHandler('Component')}>Component</Button></li>
          <li><Button isActive={content.title === 'JSX'} onChange={() => changeHandler('JSX')}>JSX</Button></li>
          <li><Button isActive={content.title === 'Props'} onChange={() => changeHandler('Props')}>Props</Button></li>
          <li><Button isActive={content.title === 'State'} onChange={() => changeHandler('State')}>State</Button></li>
        </menu>

        <div className='bg-slate-300 rounded-lg px-5 py-3'>
          {content.description ? '' : 'Please select item'}
          <h2 className='font-bold text-lg mb-3'>{content.title}</h2>
          <p className='opacity-60'>{content.description}</p>
          <pre>{content.code}</pre>
        </div>
      </section>
    </div>
  );
}

export default App;
