const Tabs = ({ children, buttons, buttonsContainer = 'menu' }) => {

  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer className='flex gap-5 mb-5'>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  )
}

export default Tabs;