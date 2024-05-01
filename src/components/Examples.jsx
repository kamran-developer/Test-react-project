import { useState } from "react";
import Section from "./Sections/Section"
import { Data, Contents } from '../data'
import TabButton from "./Buttons/TabButton";
import Tabs from "./Tab/Tabs";

const Examples = () => {

  const items = Data;
  const contents = Contents

  const [content, setContent] = useState({});

  const changeHandler = (item) => {
    setContent(contents[item]);
  }


  return (
    <Section title="Example">
      <Tabs buttons={
        <>
          <TabButton isActive={content.title === 'Component'} onChange={() => changeHandler('Component')}>Component</TabButton>
          <TabButton isActive={content.title === 'JSX'} onChange={() => changeHandler('JSX')}>JSX</TabButton>
          <TabButton isActive={content.title === 'Props'} onChange={() => changeHandler('Props')}>Props</TabButton>
          <TabButton isActive={content.title === 'State'} onChange={() => changeHandler('State')}>State</TabButton>
        </>
      }>
        <div className='bg-slate-300 rounded-lg px-5 py-3'>
          {content.description ? '' : 'Please select item'}
          <h2 className='font-bold text-lg mb-3'>{content.title}</h2>
          <p className='opacity-60'>{content.description}</p>
          <pre>{content.code}</pre>
        </div>
      </Tabs>


    </Section>
  )
}

export default Examples