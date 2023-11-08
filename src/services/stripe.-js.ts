import {loadStripe} from '@stripe/stripe-js'

export async function getstripe(){
    const stripeJs = await loadStripe()
}