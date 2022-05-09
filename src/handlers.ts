
// I implemented this with openapi-typescript. If you import the operations interface from the generated types, you can pass in handlers.
// import { operations } from '../definition';
// const handlers = createHandlers<operations>({
//   // handler definitions here...
// });
// The current version uses Express types, but can be easily modified for other libraries.

import { Request, Response } from 'express';
import { Context, Handler, ParsedRequest } from 'openapi-backend';

type Operation = {
    parameters?: {
        path?: any;
        query?: any;
    };
    responses: Record<string, any>;
};

type OperationPath<T> = T extends {
    parameters?: {
        path?: infer U;
    };
}
    ? U
    : never;

type OperationQuery<T> = T extends {
    parameters?: {
        query?: infer U;
    };
}
    ? U
    : never;

type OperationBody<T> = T extends {
    requestBody?: {
        content?: {
            'application/json': infer U;
        };
    };
}
    ? U
    : never;

type JsonResponse<T> = T extends {
    content?: {
        'application/json': infer U;
    };
}
    ? U
    : any;

type OperationResponse<T> = T extends {
    responses?: Record<string, infer U>;
}
    ? JsonResponse<U>
    : any;

interface ExtendedRequest<
    TParams extends Record<string, string | string[]>,
    TQuery extends Record<string, string | string[]>,
    TBody
> extends ParsedRequest {
    params: TParams;
    cookies: {
        [key: string]: string | string[];
    };
    query: TQuery;
    requestBody: TBody;
    body: TBody;
}

interface ExtendedContext<
    TParams extends Record<string, string | string[]>,
    TQuery extends Record<string, string | string[]>,
    TBody,
    TResponse
> extends Context {
    request: ExtendedRequest<TParams, TQuery, TBody>;
    response: Response<TResponse>;
}

type ExtendedHandler<
    TParams extends Record<string, string | string[]>,
    TQuery extends Record<string, string | string[]>,
    TBody,
    TResponse
> = (
    context: ExtendedContext<TParams, TQuery, TBody, TResponse>,
    request: Request,
    response: Response<TResponse>
) => any | Promise<any>;

type OperationHandler<T> = T extends Operation
    ? ExtendedHandler<OperationPath<T>, OperationQuery<T>, OperationBody<T>, OperationResponse<T>>
    : any;

export type Handlers<T> = {
    [Property in keyof T]: OperationHandler<T[Property]>;
};

export function createHandlers<TOperations>(handlers: Handlers<TOperations>) {
    return handlers as unknown as Record<string, Handler>;
}
