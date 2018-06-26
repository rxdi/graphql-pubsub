"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rxdi/core");
const subscription_service_1 = require("./services/subscription.service");
const pub_sub_service_1 = require("./services/pub-sub.service");
const config_tokens_1 = require("./config.tokens");
let GraphQLPubSubModule = GraphQLPubSubModule_1 = class GraphQLPubSubModule {
    static forRoot(config) {
        return {
            module: GraphQLPubSubModule_1,
            services: [
                {
                    provide: config_tokens_1.GRAPHQL_PUB_SUB_CONFIG,
                    useValue: config || new config_tokens_1.GRAPHQL_PUB_SUB_DI_CONFIG()
                }
            ]
        };
    }
};
GraphQLPubSubModule = GraphQLPubSubModule_1 = __decorate([
    core_1.Module({
        services: [
            pub_sub_service_1.PubSubService,
            subscription_service_1.SubscriptionService
        ]
    })
], GraphQLPubSubModule);
exports.GraphQLPubSubModule = GraphQLPubSubModule;
__export(require("./config.tokens"));
__export(require("./decorators"));
__export(require("./services"));
var GraphQLPubSubModule_1;
