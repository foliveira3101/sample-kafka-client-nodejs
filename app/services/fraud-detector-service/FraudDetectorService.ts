import { KafkaService } from "../../Common/KafkaService"
import { Message } from 'kafkajs'
import { delay } from '../../Helper/delay'

const parse = async (topic:string, message: Message) => {

    console.log('-----------------------------------------')
    console.log('Processing new order, checking for fraud')
    console.log('Partition: ' + message.partition)
    console.log(message.key)
    console.log(message.value)
    console.log('Topic ' + topic)  
    console.log("Beforep: " + new Date().toString());
    await delay(5000)
    console.log("Afterp:  " + new Date().toString());
    console.log('Order processed')

}

const service = new KafkaService<string>('FraudDetectorService', 'ECOMMERCE_NEW_ORDER', parse)

service.run()