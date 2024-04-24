const CoreConsept = ({ title, description, img }) => {
  return (
    <li className=''>
      <h2 className='font-bold text-lg mt-3'>{title}</h2>
      <p className='opacity-60'>{description}</p>
    </li>
  )
}

export default CoreConsept;