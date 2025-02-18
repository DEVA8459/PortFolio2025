import { useDisclosure } from '@mantine/hooks';
import { Burger ,Drawer } from '@mantine/core';
import { navLinks } from './Header';

const SideBar = () => {
    const [opened, { toggle }] = useDisclosure(false);
  return (
    <div className='sm:hidden '>
       <Drawer.Root  className=' !-z-0'  position='right' opened={opened}   onClose={toggle} size="50vw" >
        <Drawer.Overlay className='!-z-0 !backdrop-opacity-85 blur-sm  !pointer-events-none' />
        <Drawer.Content className='!-z-0 '  bg="#112240" >
          <Drawer.Body>
            <div  className='mt-20 flex flex-col items-center gap-5 hover:text-amber-300'>{navLinks(true)}   </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
       <Burger variant="default"  opened={opened} onClick={toggle} color='#64FFDA' aria-label="Toggle navigation" className='relative z-50  '/> 
    </div>
    
  )
}

export default SideBar