import {
  pipe,
  share,
  filter,
  map,
  fromPromise,
  mergeMap,
  merge,
  tap
} from "wonka";
import { Exchange, makeResult, makeErrorResult } from "urql";
import {
  GraphQLSchema,
  GraphQLFieldResolver,
  GraphQLTypeResolver,
  execute
} from "graphql";

interface ExecuteExchangeArgs {
  schema: GraphQLSchema;
  rootValue?: any;
  contextValue?: any;
  fieldResolver?: GraphQLFieldResolver<any, any>;
  typeResolver?: GraphQLTypeResolver<any, any>;
}
/** Exchange for executing queries locally on a schema using graphql-js. */
export const executeExchange = ({
  schema,
  rootValue,
  contextValue,
  fieldResolver,
  typeResolver
}: ExecuteExchangeArgs): Exchange => ({ forward }) => {
  return ops$ => {
    const sharedOps$ = share(ops$);
    const targetOperationTypes = ["query", "mutation", "subscription"];

    const executedOps$ = pipe(
      sharedOps$,
      filter(f => targetOperationTypes.includes(f.operationName)),
      map(async o => {
        console.log(o);
        try {
          const r = await execute(
            schema,
            o.query,
            rootValue,
            contextValue,
            o.variables,
            null,
            fieldResolver,
            typeResolver
          );
          return makeResult(o, r);
        } catch (err) {
          return makeErrorResult(o, err);
        }
      }),
      mergeMap(p => fromPromise(p))
    );

    const forwardedOps$ = pipe(
      sharedOps$,
      filter(o => !targetOperationTypes.includes(o.operationName)),
      forward
    );

    return merge([executedOps$, forwardedOps$]);
  };
};
