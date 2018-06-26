import { PluginInterface } from "@rxdi/core";
import { Server } from "hapi";
import { GRAPHQL_PLUGIN_CONFIG } from "@rxdi/graphql";
export declare class SubscriptionService implements PluginInterface {
    private server;
    private config;
    constructor(server: Server, config: GRAPHQL_PLUGIN_CONFIG);
    OnInit(): void;
    register(): Promise<void>;
}
