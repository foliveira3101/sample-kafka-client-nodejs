// import { Consumer, KafkaClient, Topic, ConsumerOptions } from 'kafka-node'
// import { ConsumerFunction } from './ConsumerFunction'

import { Consumer, Kafka } from 'kafkajs'


export class KafkaService<T> {    

    private consumer: Consumer
    private kafkaClient: Kafka      

    constructor(groupId: string, topic: string, private parse: any) { 

        this.kafkaClient = new Kafka({  
            clientId: 'ecommerce-client',
            brokers: ['localhost:9092']
        })

        this.consumer = this.kafkaClient.consumer({ 
            groupId
        })        
        this.consumer.subscribe({ topic })
    }

    async run() {        
        await this.consumer.connect()
              
        await this.consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                this.parse(topic, message)  
            }
        })

        // this.consumer.on('message', (message) => {            
        //     this.parse(message)            
        // })
        
        // this.consumer.on('error', (error) => console.log(error))
    }    
}