
import { InjectionToken } from '@rxdi/core';
import { AmqpPubSub } from 'graphql-rabbitmq-subscriptions';
import { PubSub } from 'graphql-subscriptions';

export class GRAPHQL_PUB_SUB_DI_CONFIG {
    pubsub?: AmqpPubSub | PubSub | any;
    host?: string;
    port?: string | number;
    authentication?: any;
    logger?: any;
};

export const GRAPHQL_PUB_SUB_CONFIG = new InjectionToken<GRAPHQL_PUB_SUB_DI_CONFIG>('graphql-pub-sub-config-injection-token');
