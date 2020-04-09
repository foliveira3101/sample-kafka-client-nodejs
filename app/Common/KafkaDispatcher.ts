import { Producer, Kafka } from 'kafkajs'

export class KafkaDispatcher<T> {

    private producer: Producer

    constructor() {

        const kafkaClient = new Kafka({  
            clientId: 'ecommerce-client',
            brokers: ['localhost:9092']
        })

        this.producer = kafkaClient.producer()
    }

    async send(topic: string, key: string, value: string) {

        await this.producer.connect()
        
        await this.producer.send({
            topic,            
            messages: [{
                key,
                value
            }]
        })

        // const paylods: ProduceRequest[] = [ {
        //     messages: value,
        //     topic,
        //     key,            
        // }]

        // this.producer.on('ready', ()=> { 
        //     this.producer.send(paylods, (error, data) => {
        //         if(error)
        //             console.log(error)
        //         else
        //             console.log(data)
        //     })
        // })
        
        // this.producer.on('error', (error) => console.log(error))
    }    
}