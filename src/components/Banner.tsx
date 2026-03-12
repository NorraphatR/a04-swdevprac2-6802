import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner(){
    return(
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className={styles.h1}>where every event finds its venue</h1>
                <h3 className={styles.h3}>Looking for the perfect place for your special event?Our venue offers elegant spaces, professional service.Let us help make your event unforgettable.</h3>
            </div>

        </div>
    );
}