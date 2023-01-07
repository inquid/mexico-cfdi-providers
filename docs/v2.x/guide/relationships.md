# Relationships

## Setting up Controller

Defining model relationship controller is very similar to defining model controller.

```php
<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use Orion\Http\Controllers\RelationController;

class PostCommentsController extends RelationController
{
    /**
     * Fully-qualified model class name
     */
    protected $model = Post::class; // or "App\Models\Post"

    /**
     * Name of the relationship as it is defined on the Post model
     */
    protected $relation = 'comments';
}
```

At this point, you do not need to worry about different relationship types - controllers are defined in the same way for all types of the relationships.

### Fillable pivot fields and casting

If you are defining the controller for `belongsToMany` or `morphToMany` relation type and have additional fields on pivot table, there are two additional properties to note - `protected $pivotFillable` and `protected $pivotJson`.

The `$pivotFillable` property needs to contain a list of pivot table fields that can be updated via `attach`, `sync`, `toggle` and `updatePivot` endpoints.

The `$pivotJson` property should contain a list of json fields on the pivot table that you would like to automatically cast to/from array. If you have defined `$casts` property on the related [Pivot model](https://laravel.com/docs/master/eloquent-relationships#defining-custom-intermediate-table-models), then you can skip it.

::: warning KEY TAKEAWAYS

* Model relationship controllers always extend `Orion\Http\Controllers\RelationController`
* `$model` property is set to a fully qualified model class name
* `$relation` property is set to the exact relationship name as it is defined on the model

:::

## Setting up Routes

Routes, unlike controllers, are defined in a different way for each relationship type.

```php
<?php

use Illuminate\Support\Facades\Route;
use Orion\Facades\Orion;
use App\Http\Controllers\ProfileImageController;
...

Route::group(['as' => 'api.'], function() {
    ...
    Orion::hasOneResource('profiles', 'image', ProfileImageController::class);
    Orion::hasManyResource('users', 'posts', UserPostsController::class);
    Orion::belongsToResource('posts', 'user', PostUserController::class);
    Orion::belongsToManyResource('users', 'roles', UserRolesController::class);
    Orion::hasOneThroughResource('posts', 'meta', PostMetaController::class);
    Orion::hasManyThroughResource('users', 'comments', UserCommentsController::class);
    Orion::morphOneResource('posts', 'image', PostImageController::class);
    Orion::morphManyResource('posts', 'comments', PostCommentsController::class);
    Orion::morphToResource('images', 'post', ImagePostController::class);
    Orion::morphToManyResource('posts', 'tags', PostTagsController::class);
    Orion::morphedByManyResource('tags', 'posts', TagsPostsController::class);
    ...
});

```

### Soft Deletes

If your relation model uses `SoftDeletes` trait and you would like to expose the same functionality via API, call `withSoftDeletes` method upon resource registration.

```php
<?php

use Illuminate\Support\Facades\Route;
use Orion\Facades\Orion;
use App\Http\Controllers\UserPostsController;

Route::group(['as' => 'api.'], function() {
    ...
    Orion::hasManyResource('users', 'posts', UserPostsController::class)->withSoftDeletes();
    ...
});

```

This will introduce `restore` and `batchRestore` endpoints. To learn how to permanently delete a resource via API (force delete), take a look at the related [Query Parameters](./query-parameters.html#soft-deletes) section.

```bash
+--------+-----------+-------------------------------------------------+----------------------------------------+---------------------------------------------------------------------------+-------------------------------------------------+
| Domain | Method    | URI                                             | Name                                   | Action                                                                    | Middleware                                      |
+--------+-----------+-------------------------------------------------+----------------------------------------+---------------------------------------------------------------------------+-------------------------------------------------+
...
|        | POST      | api/users/{user}/posts/{post}/restore           | api.users.relation.posts.restore       | App\Http\Controllers\Api\UserPostsController@restore                      | api                                             |
|        | POST      | api/users/{user}/posts/batch/restore            | api.users.relation.posts.batchRestore  | App\Http\Controllers\Api\UserPostsController@batchRestore                 | api                                             |
```

## One to One

The following relationships are considered one-to-one relationships:
- `hasOne`
- `hasOneThrough`
- `morphOne`
- `belongsTo` (inverse of the `hasMany` relation)
- `morphTo` (inverse of the `morphMany` relation)

For one-to-one relationships, Laravel Orion provides 4 endpoints (basically endpoints for CRUD operations): `store`, `show`, `update`, `destroy`

:::warning ATTENTION
The `belongsTo` and `morphTo` relations are not provided with `store` endpoint.
:::

**Example route registration**

```php
Orion::hasOneResource('profiles', 'image' , ProfileImageController::class);
```

**Example available endpoints**

```bash
+-----------+-------------------------------------------------+------------------------------------------+---------------------------------------------------------------------------+
| Method    | URI                                             | Name                                     | Action                                                                    |
+-----------+-------------------------------------------------+------------------------------------------+---------------------------------------------------------------------------+
| POST      | api/profiles/{profile}/image                    | api.profiles.relation.image.store        | App\Http\Controllers\Api\ProfileImageController@store                     |
| GET|HEAD  | api/profiles/{profile}/image/{image?}           | api.profiles.relation.image.show         | App\Http\Controllers\Api\ProfileImageController@show                      |
| PATCH|PUT | api/profiles/{profile}/image/{image?}           | api.profiles.relation.image.update       | App\Http\Controllers\Api\ProfileImageController@update                    |
| DELETE    | api/profiles/{profile}/image/{image?}           | api.profiles.relation.image.destroy      | App\Http\Controllers\Api\ProfileImageController@destroy                   |
```

:::tip TIP
Notice that the last parameter is marked as optional. Because it's a one-to-one relation, you can access the endpoint without providing related key - Laravel Orion will take care of it :slightly_smiling_face:

`hasOne`, `hasOneThrough`, `morphOne`, `belongsTo`, and `morphTo` relations do not require the related resource key.
:::

## One to Many

The following relationships are considered one-to-many relationships:
- `hasMany`
- `hasManyThrough`
- `morphMany`

For one-to-many relationships, Laravel Orion provides 11 endpoints (endpoints for CRUD operations, searching, associating, and dissociating): `index`, `search`, `store`, `show`, `update`, `destroy`, `associate`, `dissociate`, `batchStore`, `batchUpdate`, `batchDestroy`

**Example route registration**

```php
Orion::hasManyResource('users', 'posts' , UserPostsController::class);
```

**Example available endpoints**

```bash
+-----------+-------------------------------------------------+----------------------------------------+---------------------------------------------------------------------------+
| Method    | URI                                             | Name                                   | Action                                                                    |
+-----------+-------------------------------------------------+----------------------------------------+---------------------------------------------------------------------------+
| GET|HEAD  | api/users/{user}/posts                          | api.users.relation.posts.index         | App\Http\Controllers\Api\UserPostsController@index                        |
| POST      | api/users/{user}/posts/search                   | api.users.relation.posts.search        | App\Http\Controllers\Api\UserPostsController@index                        |
| POST      | api/users/{user}/posts                          | api.users.relation.posts.store         | App\Http\Controllers\Api\UserPostsController@store                        |
| GET|HEAD  | api/users/{user}/posts/{post}                   | api.users.relation.posts.show          | App\Http\Controllers\Api\UserPostsController@show                         |
| PATCH     | api/users/{user}/posts/{post}                   | api.users.relation.posts.update        | App\Http\Controllers\Api\UserPostsController@update                       |
| PUT       | api/users/{user}/posts/{post}                   | api.users.relation.posts.update        | App\Http\Controllers\Api\UserPostsController@update                       |
| DELETE    | api/users/{user}/posts/{post}                   | api.users.relation.posts.destroy       | App\Http\Controllers\Api\UserPostsController@destroy                      |
| POST      | api/users/{user}/posts/associate                | api.users.relation.posts.associate     | App\Http\Controllers\Api\UserPostsController@associate                    |
| DELETE    | api/users/{user}/posts/{post}/dissociate        | api.users.relation.posts.dissociate    | App\Http\Controllers\Api\UserPostsController@dissociate                   |
| POST      | api/users/{user}/posts/batch                    | api.users.relation.posts.batchStore    | App\Http\Controllers\Api\UserPostsController@batchStore                   |
| PATCH     | api/users/{user}/posts/batch                    | api.users.relation.posts.batchUpdate   | App\Http\Controllers\Api\UserPostsController@batchUpdate                  |
| DELETE    | api/users/{user}/posts/batch                    | api.users.relation.posts.batchDestroy  | App\Http\Controllers\Api\UserPostsController@batchDestroy                 |
```

### Associating

One-to-many relation resource provides `associate` endpoint to associate relation model with a parent model.

Request payload to the endpoint has only one field - `related_key`. In our example, `related_key` would be ID of a post to be associated with user.

**Example request:**

```json
// (POST) https://myapp.com/api/users/{user}/posts/associate
{
    "related_key" : 5
}
```

### Dissociating

One-to-many relation resource also provides `dissociate` endpoint to dissociate relation model from its parent model.

There is no payload in request for this endpoint, however notice the `{post}` route parameter in the example routes above - this would be ID of a post to be dissociated from a user.

## Many to Many

The following relationships are considered many-to-many relationships:
- `belongsToMany`
- `morphToMany`

For many-to-many relationships, Laravel Orion provides 14 endpoints (endpoints for CRUD operations, searching, attaching, detaching, syncing, toggling, and updating pivot): `index`, `search`, `store`, `show`, `update`, `destroy`, `attach`, `detach`, `sync`, `toggle`, `pivot`,  `batchStore`, `batchUpdate`, `batchDestroy`

**Example route registration**

```php
Orion::belongsToManyResource('users', 'roles' , UserRolesController::class);
```

**Example available endpoints**

```bash
+-----------+-------------------------------------------------+----------------------------------------+---------------------------------------------------------------------------+
| Method    | URI                                             | Name                                   | Action                                                                    |
+-----------+-------------------------------------------------+----------------------------------------+---------------------------------------------------------------------------+
| GET|HEAD  | api/users/{user}/roles                          | api.users.relation.roles.index         | App\Http\Controllers\Api\UserRolesController@index                        |
| POST      | api/users/{user}/roles/search                   | api.users.relation.roles.search        | App\Http\Controllers\Api\UserRolesController@index                        |
| POST      | api/users/{user}/roles                          | api.users.relation.roles.store         | App\Http\Controllers\Api\UserRolesController@store                        |
| GET|HEAD  | api/users/{user}/roles/{role}                   | api.users.relation.roles.show          | App\Http\Controllers\Api\UserRolesController@show                         |
| PATCH     | api/users/{user}/roles/{role}                   | api.users.relation.roles.update        | App\Http\Controllers\Api\UserRolesController@update                       |
| PUT       | api/users/{user}/roles/{role}                   | api.users.relation.roles.update        | App\Http\Controllers\Api\UserRolesController@update                       |
| DELETE    | api/users/{user}/roles/{role}                   | api.users.relation.roles.destroy       | App\Http\Controllers\Api\UserRolesController@destroy                      |
| POST      | api/users/{user}/roles/attach                   | api.users.relation.roles.attach        | App\Http\Controllers\Api\UserRolesController@attach                       |
| DELETE    | api/users/{user}/roles/detach                   | api.users.relation.roles.detach        | App\Http\Controllers\Api\UserRolesController@detach                       |
| PATCH     | api/users/{user}/roles/sync                     | api.users.relation.roles.sync          | App\Http\Controllers\Api\UserRolesController@sync                         |
| PATCH     | api/users/{user}/roles/toggle                   | api.users.relation.roles.toggle        | App\Http\Controllers\Api\UserRolesController@toggle                       |
| PATCH     | api/users/{user}/roles/{role}/pivot             | api.users.relation.roles.pivot         | App\Http\Controllers\Api\UserRolesController@updatePivot                  |
| POST      | api/users/{user}/roles/batch                    | api.users.relation.roles.batchStore    | App\Http\Controllers\Api\UserRolesController@batchStore                   |
| PATCH     | api/users/{user}/roles/batch                    | api.users.relation.roles.batchUpdate   | App\Http\Controllers\Api\UserRolesController@batchUpdate                  |
| DELETE    | api/users/{user}/roles/batch                    | api.users.relation.roles.batchDestroy  | App\Http\Controllers\Api\UserRolesController@batchDestroy                 |
```

:::warning ATTENTION

Do not forget to define fillable pivot fields as described in [Fillable pivot fields and casting](./relationships.html#setting-up-controller) section, if you have additional fields on pivot table, otherwise `attach`, `sync`, `toggle` and `updatePivot` endpoints may not work as expected for these fields.

:::

### Attaching

Many-to-many relation resource provides `attach` endpoint to attach one or multiple related models to another model. For details on how attaching/detaching of related models works in Laravel, take a look at [Attaching / Detaching](https://laravel.com/docs/master/eloquent-relationships#updating-many-to-many-relationships) section in Laravel Documenation.

Request payload consist of required `resources` and optional `duplicates` fields. Note, that `duplicates` field can also be provided as query parameter.

The `resources` field might be an array or an object. If it is an array, then array items would be IDs of related models that you would like to attach. If it is an object, then its keys would be IDs of related models and values - objects containing pivot table fields to be set upon attaching the related model.

By default `duplicates` parameter is `false`. If set to `true`, attaching the same related model multiple times would result in duplicated entries in pivot table.

**Example request (array version):**

```json
// (POST) https://myapp.com/api/users/{user}/roles/attach
{
    "resources" : [3,4,7]
}
```

**Example request (object version):**

```json
// (POST) https://myapp.com/api/users/{user}/roles/attach
{
    "resources" : {
        "3" : {
            "example_pivot_field" : "value A",
            ...
        },
        "4" : {
            "example_pivot_field" : "value B",
            ...
        },
        "7" : {
            "example_pivot_field" : "value C",
            ...
        }
    }
}
```

### Detaching

Many-to-many relation resource provides `detach` endpoint to detach one or multiple related models from the model they are attached to.

Request payload consist of only one field `resources`.

Similar to the `attach` endpoint, `resources` field might be an array or an object. By providing support for object representation of `resources` field in this method, it makes it easier for the frontend to attach/detach related resources in a standardized way. You can also optionally store additional data in these objects that can be used in `beforeDetach` or `afterDetach` hooks.

**Example request (array version):**

```json
// (DELETE) https://myapp.com/api/users/{user}/roles/detach
{
    "resources" : [3,4,7]
}
```

**Example request (object version):**

```json
// (DELETE) https://myapp.com/api/users/{user}/roles/detach
{
    "resources" : {
        "3" : {},
        "4" : {
            "some_field" : "some value",
            ...
        },
        "7" : {},
    }
}
```

### Syncing

Many-to-many relation resource provides `sync` endpoint to sync associations of one or multiple related models with another model. For details on how syncing of related models works in Laravel, take a look at [Syncing Associations](https://laravel.com/docs/master/eloquent-relationships#updating-many-to-many-relationships) section in Laravel Documentation.

Request payload consist of required `resources` and optional `detaching` fields. Note, that `detaching` field can also be provided as query parameter.

The `resources` field might be an array or an object. If it is an array, then array items would be IDs of related models that you would like to sync. If it is an object, then its keys would be IDs of related models and values - objects containing pivot table fields to be set upon syncing the related model.

By default `detaching` parameter is `true`. If set to `false`, related models that are missing in the payload, but preset in pivot table won't be detached.

**Example request (array version):**

```json
// (PATCH) https://myapp.com/api/users/{user}/roles/sync
{
    "resources" : [3,4]
}
```

**Example request (object version):**

```json
// (PATCH) https://myapp.com/api/users/{user}/roles/sync
{
    "resources" : {
        "3" : {
            "example_pivot_field" : "value A",
            ...
        },
        "4" : {
            "example_pivot_field" : "value B",
            ...
        },
    }
}
```

### Toggling

Many-to-many relation resource provides `toggle` endpoint to "toggle" the attachment status of one or multiple related models. For details on how "toggling" of related models works in Laravel, take a look at [Toggling Associations](https://laravel.com/docs/master/eloquent-relationships#updating-many-to-many-relationships) section in Laravel Documenation.

Request payload consist of only one field `resources`. Same as the sync endpoint, `resources` field might be an array or an object.

**Example request (array version):**

```json
// (PATCH) https://myapp.com/api/users/{user}/roles/toggle
{
    "resources" : [3,4]
}
```

**Example request (object version):**

```json
// (PATCH) https://myapp.com/api/users/{user}/roles/toggle
{
    "resources" : {
        "3" : {
            "example_pivot_field" : "value A",
            ...
        },
        "4" : {
            "example_pivot_field" : "value B",
            ...
        },
    }
}
```

### Updating pivot

Many-to-many relation resource provides `pivot` endpoint to update pivot row of one of the related models. For details on how pivot row is updated, take a look at [Updating A Record On A Pivot Table](https://laravel.com/docs/master/eloquent-relationships) section in Laravel Documentation.

Request payload consist of only one field `pivot`. Its properties are pivot table fields that will be updated for the related model.

**Example request:**

```json
// (PATCH) https://myapp.com/api/users/{user}/roles/{role}/pivot
{
    "pivot" : { // properties correspond to the columns in pivot table
        "example_pivot_field" : "updated value",
        "another_pivot_field" : "new value"
        ...
    }
}
```

## Customizing Keys

Just like [model resources](./models.html#customizing-keys), relation resources are using primary key to fetch resources from the database.

### Customizing relation resource key

```php
<?php

namespace App\Http\Controllers\Api;

use App\Models\Team;
use Orion\Http\Controllers\RelationController;

class TeamPostsController extends RelationController
{
    /**
     * Fully-qualified model class name
     */
    protected $model = Team::class; // or "App\Models\Team"
    
    /**
     * Name of the relationship as it is defined on the Post model
     */
    protected $relation = 'posts';

    /**
     * The name of the field used to fetch a resource from the database.
     *
     * @return string
     */
    protected function keyName(): string
    {
        return 'slug'; // "slug" here is the field on the Post model (posts relation)
    }
}
```

### Customizing parent resource key

If both parent and relation resources use custom keys, you would also need to override the `parentKeyName` method:

```php
<?php

namespace App\Http\Controllers\Api;

use App\Models\Team;
use Orion\Http\Controllers\RelationController;

class TeamPostsController extends RelationController
{
    /**
     * Fully-qualified model class name
     */
    protected $model = Team::class; // or "App\Models\Team"
    
    /**
     * Name of the relationship as it is defined on the Post model
     */
    protected $relation = 'posts';

     /**
     * The name of the field used to fetch parent resource from the database.
     *
     * @return string
     */
    protected function parentKeyName(): string
    {
        return 'short_name'; // "short_name" here is the field on the Team model
    }

    /**
     * The name of the field used to fetch a resource from the database.
     *
     * @return string
     */
    protected function keyName(): string
    {
        return 'slug'; // "slug" here is the field on the Post model (posts relation)
    }
}
```

## Customizing Queries

It is possible, same as in [model controllers](./models.html#customizing-queries), to redefine Eloquent queries for each endpoint. The only major difference is that each endpoint in relation controller also has "build" and "run" methods for fetching relation's parent model.

### Standard operations methods

| Method | Build (parent) | Run (parent) | Build                  | Run                  | Perform |
| ---- | -------------- | ------------ |------------------------|----------------------| ------- |
| index | buildIndexParentFetchQuery | runIndexParentFetchQuery | buildIndexFetchQuery   | runIndexFetchQuery   | - |
| store | buildStoreParentFetchQuery | runStoreParentFetchQuery | buildStoreFetchQuery   | runStoreFetchQuery   | performStore |
| show | buildShowParentFetchQuery | runShowParentFetchQuery | buildShowFetchQuery    | runShowFetchQuery    | - |
| update | buildUpdateParentFetchQuery | runUpdateParentFetchQuery | buildUpdateFetchQuery  | runUpdateFetchQuery  | performUpdate |
| destroy | buildDestroyParentFetchQuery | runDestroyParentFetchQuery | buildDestroyFetchQuery | runDestroyFetchQuery | performDestroy |
| restore | buildRestoreParentFetchQuery | runRestoreParentFetchQuery | buildRestoreFetchQuery | runRestoreFetchQuery | performRestore |

### One-to-many operations methods

| Method | Build (parent) | Run (parent) | Build | Run | Perform |
| ---- | -------------- | ------------ | ----- |---- | ------- |
| associate | buildAssociateParentFetchQuery | runAssociateParentFetchQuery | buildAssociateFetchQuery | runAssociateFetchQuery | performAssociate |
| dissociate | buildDissociateParentFetchQuery | runDissociateParentFetchQuery | buildDissociateFetchQuery | runDissociateFetchQuery | performDissociate |


### Many-to-many operations methods

| Method | Build (parent) | Run (parent) | Build | Run | Perform |
| ---- | -------------- | ------------ | ----- |---- | ------- |
| attach | buildAttachParentFetchQuery | runAttachParentFetchQuery | - | - | performAttach |
| detach | buildDetachParentFetchQuery | runDetachParentFetchQuery | - | - | performDetach |
| sync | buildSyncParentFetchQuery | runSyncParentFetchQuery | - | - | performSync |
| toggle | buildToggleParentFetchQuery | runToggleParentFetchQuery | - | - | performToggle |
| updatePivot | buildUpdatePivotParentFetchQuery | runUpdatePivotParentFetchQuery | - | - | performUpdatePivot |

::: tip TIP
You can also customize how attributes are filled on the model by overriding `performFill` method.
:::
