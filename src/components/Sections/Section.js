const Section = ({ title, children, ...props }) => {
  return (
    <section className='max-w-7xl m-auto bg-slate-800 rounded-xl py-5 px-10 mt-20 mb-20' {...props}>
      <h2 className='text-orange-200 text-xl mb-6'>{title}</h2>
      {children}
    </section>
  )
}

export default Section;