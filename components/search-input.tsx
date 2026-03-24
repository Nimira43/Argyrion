import { IoSearchSharp } from 'react-icons/io5'
import { Input } from './ui/input'

export default function SearchInput() {
  return (
    <form className='relative w-full'>
      <IoSearchSharp className='absolute w-4 h-4 text-muted-foreground left-2.5 top-1/2 -translate-y-1/2' />
      <Input 
        type='search'
        placeholder='Search...'
        className='pl-8'
      />
    </form>
  )
}