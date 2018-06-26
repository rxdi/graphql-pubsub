import { Plugin, Inject, Service, PluginInterface } from "@rxdi/core";
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { subscribe } from 'graphql/subscription';
import { execute } from 'graphql/execution';
import { HAPI_SERVER } from "@rxdi/hapi";
import { Server } from "hapi";
import { GRAPHQL_PLUGIN_CONFIG } from "@rxdi/graphql";

@Service()
export class SubscriptionService implements PluginInterface {

  constructor(
    @Inject(HAPI_SERVER) private server: Server,
    @Inject(GRAPHQL_PLUGIN_CONFIG) private config: GRAPHQL_PLUGIN_CONFIG,
  ) { }

  OnInit() {
    console.log('Subscription');
    this.register();
  }

  async register() {
    new SubscriptionServer(
      {
        execute,
        subscribe,
        schema: this.config.graphqlOptions.schema,
        // onConnect(connectionParams) {
        //   return connectionHookService.modifyHooks
        //     .onSubConnection(connectionParams);
        // },
        //   onOperation: (connectionParams, params, webSocket) => {
        //     return connectionHookService.modifyHooks
        //       .onSubOperation(
        //         connectionParams,
        //         params,
        //         webSocket
        //       );
        //   }
      },
      {
        server: this.server.listener,
        path: '/subscriptions'
      }
    )
  }
}