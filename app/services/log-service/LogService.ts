import { KafkaService } from "../../Common/KafkaService"
import { Message } from 'kafkajs'

const parse = (topic:string, message: Message) => {
    console.log('-----------------------------------------')
    console.log('LOG:' + message.key)
    console.log(message.key)
    console.log(message.value)
    console.log(topic)
    console.log(message.partition)           
}


const service = new KafkaService<string>('LogService', 'ECOMMERCE' , parse)

service.run()
