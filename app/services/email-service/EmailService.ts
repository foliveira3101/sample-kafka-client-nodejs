import { KafkaService } from "../../Common/KafkaService"
import { delay } from '../../Helper/delay'

import { Message } from 'kafkajs'

const parse = async (topic:string, message: Message) => {
    console.log('-----------------------------------------')
    console.log('Send e-mail')
    console.log('Partition: ' + message.partition)
    console.log(message.key)
    console.log(message.value)
    console.log('Topic ' + topic)  

    await delay(1000)

    console.log('e-mail sent')
}

const service = new KafkaService<string>('EmailService', 'ECOMMERCE_SEND_EMAIL', parse)

service.run()
