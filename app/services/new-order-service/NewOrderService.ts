import { KafkaDispatcher } from '../../Common/KafkaDispatcher'
import { Order } from '../../Models/Order'
import { v4 as uuidv4  } from 'uuid'

const emailDispatcher = new KafkaDispatcher<string>()
const orderDispatcher = new KafkaDispatcher<Order>()

export class NewOrderService {    
   
    constructor() {
    }

    send(): void {
        console.log('Iniciando o dispatcher')

        for(let i = 0; i < 10; i++) {

            const userId = uuidv4()
            const orderId = uuidv4()
            const amount = Math.random() * 5000 + 1

            orderDispatcher.send('ECOMMERCE_NEW_ORDER', userId, 
                JSON.stringify({
                    userId,
                    orderId,
                    amount
                }
            ))

            const email = 'Thank you for your order! We are processing your order!'
            emailDispatcher.send('ECOMMERCE_SEND_EMAIL', userId, email)

        }

        console.log('Finalizando o dispatcher')
    }

}