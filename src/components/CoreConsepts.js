import SectionContent from "./Sections/SectionContent";
import { Data, Contents } from './../data'
import CoreConsept from "./CoreConsept/CoreConsept";

const CoreConsepts = () => {

  const items = Data;
  
  return (
    <SectionContent title="Core Consepts">
      <ul className='flex gap-10 text-blue-100'>
        {items.map((item) => <CoreConsept key={item.title} {...item} />)}
      </ul>
    </SectionContent>
  )
}

export default CoreConsepts;