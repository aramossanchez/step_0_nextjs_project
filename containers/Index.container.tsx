import Image from 'next/image';
import { basePath } from '../config/config';

export function IndexContainer() {

  return (
    <section className=''>
      <Image
        src={`${basePath}images/logo.png`}
        width={100}
        height={100}
        alt="Logo"
        className='w-[100px] h-[100px]'
      />
    </section>
  )
}