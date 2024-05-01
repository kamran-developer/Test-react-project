const SectionContent = ({ title, children, className, ...props }) => {
  return (
    <section className={`max-w-7xl m-auto bg-slate-950 rounded-xl py-10 px-10 mt-20 ` + className} {...props}>
      <h2 className='text-4xl mb-10 font-bold text-orange-100 border-b border-slate-500 border-opacity-50 pb-10'>{title}</h2>
      {children}
    </section>
  )
}

export default SectionContent;