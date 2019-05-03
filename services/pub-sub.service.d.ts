import { PubSub } from 'graphql-subscriptions';
import { AmqpPubSub } from 'graphql-rabbitmq-subscriptions';
import { GRAPHQL_PUB_SUB_DI_CONFIG } from '../config.tokens';
export declare let pubsub: PubSub | AmqpPubSub;
export declare class PubSubService {
    private config;
    sub: AmqpPubSub | PubSub;
    constructor(config: GRAPHQL_PUB_SUB_DI_CONFIG);
    asyncIterator<T>(event: any): AsyncIterator<T>;
    publish(signal: string, data: any): Promise<void>;
}
