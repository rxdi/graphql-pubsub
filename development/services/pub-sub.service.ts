import { PubSub } from 'graphql-subscriptions';
import { AmqpPubSub } from 'graphql-rabbitmq-subscriptions';
import { ConsoleLogger, IConsoleLoggerSettings } from '@cdm-logger/server/lib';
import * as Logger from 'bunyan';
import { Service, Inject } from '@rxdi/core';
import { GRAPHQL_PUB_SUB_CONFIG, GRAPHQL_PUB_SUB_DI_CONFIG } from '../config.tokens';

export let pubsub: PubSub | AmqpPubSub;

const logger: Logger = ConsoleLogger.create('<app name>', <IConsoleLoggerSettings>{
    level: 'info', // Optional: default 'info' ('trace'|'info'|'debug'|'warn'|'error'|'fatal')
    mode: 'raw' // Optional: default 'short' ('short'|'long'|'dev'|'raw')
});

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
                logger,
            });
        } else {
            this.sub = new PubSub();
        }
    }

    asyncIterator<T>(event): AsyncIterator<T> {
        return this.sub.asyncIterator<T>(event);
    }

    publish(signal: string, data: any): boolean {
        return this.sub.publish(signal, data);
    }
}



