import { PubSub } from 'graphql-subscriptions';
import { AmqpPubSub } from 'graphql-rabbitmq-subscriptions';
import { Service, Inject } from '@rxdi/core';
import { GRAPHQL_PUB_SUB_CONFIG, GRAPHQL_PUB_SUB_DI_CONFIG } from '../config.tokens';

export let pubsub: PubSub | AmqpPubSub;

@Service()
export class PubSubService {
    sub: AmqpPubSub | PubSub;
    constructor(
        @Inject(GRAPHQL_PUB_SUB_CONFIG) private config: GRAPHQL_PUB_SUB_DI_CONFIG
    ) {
        if (this.config.pubsub) {
            this.sub = this.config.pubsub;
        } else if (process.env.NODE_ENV === 'production') {
            this.sub = new AmqpPubSub({
                config: {
                    host: this.config.host || process.env.AMQP_HOST,
                    port: this.config.port || process.env.AMQP_PORT,
                },
                logger: this.config.logger || {
                    child: (log) => ({
                      trace: (log) => console.log(log),
                    }),
                    trace: (log) => console.log(log),
                    debug: (debug) => console.log(debug)
                },
            });
        } else {
            this.sub = new PubSub();
        }
    }

    asyncIterator<T>(event): AsyncIterator<T> {
        return this.sub.asyncIterator<T>(event);
    }

    publish(signal: string, data: any): Promise<void> {
        return this.sub.publish(signal, data);
    }
}



