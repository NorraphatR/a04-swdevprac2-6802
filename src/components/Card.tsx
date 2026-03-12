import styles from './card.module.css'
import Image from 'next/image';

export default function Card({venueName,imgSrc}:{venueName:string,imgSrc:string}){
    return (
        <div className='w-1/5 h-[300px] rounded-lg shadow-lg bg-white'>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Event Picture'
                fill={true}
                objectFit='cover'
                className='odject-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%]'>
                <h1 className='p-[10px] text-black font-serif text-2xl'>{venueName}</h1>
            </div>
        </div>
    );
}