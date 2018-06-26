import { Module, ModuleWithServices } from "@rxdi/core";
import { SubscriptionService } from './services/subscription.service';
import { PubSubService } from './services/pub-sub.service';
import { GRAPHQL_PUB_SUB_CONFIG, GRAPHQL_PUB_SUB_DI_CONFIG } from './config.tokens';

@Module({
    services: [
        PubSubService,
        SubscriptionService
    ]
})
export class GraphQLPubSubModule {
    public static forRoot(config?: GRAPHQL_PUB_SUB_DI_CONFIG) : ModuleWithServices {
        return {
            module: GraphQLPubSubModule,
            services: [
                {
                    provide: GRAPHQL_PUB_SUB_CONFIG,
                    useValue: config || new GRAPHQL_PUB_SUB_DI_CONFIG()
                }
            ]
        }
    }
}

export * from './config.tokens';
export * from './decorators';
export * from './services';
