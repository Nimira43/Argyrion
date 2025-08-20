import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <div className='bg-dark p-8'>
        <h1 className='logo-text text-light text-4xl'>Argyrion</h1>
      </div>
      <div className='p-8 mt-8'>
        <Button variant='outline'>Login</Button>
        <Button>Logout</Button>
      </div>
    </>
  )
}