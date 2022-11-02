# Introduction

## How It Works

Laravel Orion uses the most powerful features of Laravel: Eloquent models and relationships, policies, request classes, and API resources, which makes it incredibly powerful and extensible, yet simple to get started with.

You create a controller, associate it with Eloquent model you would like to manage via API and let Laravel Orion do the REST (see what I've done here :smile: ) for you! All endpoints for `index`, `search`, `show`, `store`, `update`, `destroy`, `restore` and `batchStore`, `batchUpdate`, `batchDestroy`, `batchRestore` operations will already be there with proper authorization, validation and error handling (you need to define policies and request classes yourself, of course).

But it does not end here. Define relationship controllers, and it will allow your API consumers to manage all types of relations. Yes, all, which means `associate`/`dissociate`, `attach`/`detach`, `sync`, `toggle`, `updatePivot` as well as CRUD operations are available via a standardized REST API.

And, as a bonus, `search` endpoint on both model and relationship controllers allows applying all sorts of query constraints to retrieve filtered results.

## Features

* REST API for [models](./models.html) and [relationships](./relationships.html) with batch operations support
* Advanced searching capabilities with [sorting](./search.html#sorting), [filtering](./search.html#filtering), and [keyword search](./search.html#keyword-search)
* Automatic OpenAPI [specifications](./specifications.html) generation  
* Comprehensive set of endpoint [hooks](./hooks.html)
* [Relations inclusion](./query-parameters.html#including-relations) and [soft deletes](./query-parameters.html#soft-deletes) via query parameters
* Straightforward [authorization](./security.html#authorization) and [validation](./security.html#validation)
* [Responses](./responses.html) transformation via API resources

## Supported By

<SupportedBy/>
