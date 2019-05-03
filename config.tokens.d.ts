import { InjectionToken } from '@rxdi/core';
import { AmqpPubSub } from 'graphql-rabbitmq-subscriptions';
import { PubSub } from 'graphql-subscriptions';
export declare class GRAPHQL_PUB_SUB_DI_CONFIG {
    pubsub?: AmqpPubSub | PubSub | any;
    host?: string;
    port?: string | number;
    authentication?: any;
    log?: boolean;
    activateRabbitMQ?: boolean;
    logger?: any;
}
export declare const GRAPHQL_PUB_SUB_CONFIG: InjectionToken<GRAPHQL_PUB_SUB_DI_CONFIG>;
