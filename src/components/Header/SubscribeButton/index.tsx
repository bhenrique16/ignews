import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss'
import { api } from '../../../services/api';


interface SubscribeButtonProps {
    priceId: string;
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const session = useSession()

    async function handleSubscribe() {
        if (!session) {
            signIn('github')
            return
        }
        try {
            const response = await api.post('/subscribe')

            const { sessionId } = response.data

        }
        
    }


    return (
        <button type="button" className={styles.subscribeButton}>
            Subscribe now
        </ button>
    )
};
