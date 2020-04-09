import { Message } from 'kafka-node'

export interface ConsumerFunction {
    parse(messge: Message): void
}