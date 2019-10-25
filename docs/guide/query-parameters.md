# Query Parameters

Laravel Orion allows consumers of your API to use query parameters for filtering, sorting, searching of resources as well as including other related resources (defined as relations on a particular model) together in response.

But first, allowed set of attributes and relations to be used in query parameters needs to be defined in controller.

## Filtering

```php

namespace App\Http\Controllers\API;

use Laralord\Orion\Http\Controllers\Controller;

class PostsController extends Controller
{
    ...

    /**
    * The attributes that are used for filtering.
    *
    * @return array
    */
    protected function filterableBy()
    {
        return ['id', 'title', 'user.id'];
    }

    ...
}
```

To filter results based on one or several attributes, url needs to contain attribute names and values as query parameters.

Note `user.id` - using the dot notation you can specify fields on relations.

**Pattern:** `https://<app url>/api/<resource>?<attribute>=<value>...`

**Example:** `https://<app url>/api/posts?title=ExactMatch&user.id=7`

## Sorting

```php

namespace App\Http\Controllers\API;

use Laralord\Orion\Http\Controllers\Controller;

class PostsController extends Controller
{
    ...

    /**
     * The attributes that are used for sorting.
     *
     * @return array
     */
    protected function sortableBy()
    {
         return ['id', 'title', 'created_at', 'user.name'];
    }

    ...
}
```

To sort results, url needs to contain `sort` query parameter.

**Pattern:** `https://<app url>/api/<resource>?sort=<attribute>|<direction>`, where `<attribute>` is one of the defined in `sortableBy` method attributes and `<direction>` is either `asc` or `desc`.

**Example:** `https://<app url>/api/posts?sort=title|desc`

## Searching

```php

namespace App\Http\Controllers\API;

use Laralord\Orion\Http\Controllers\Controller;

class PostsController extends Controller
{
    ...

    /**
     * The attributes that are used for searching.
     *
     * @return array
     */
    protected function searchableBy()
    {
        return ['title', 'description', 'user.name'];
    }

    ...
}
```

To search across resources, url needs to contain `q` query parameter. API will search in ALL of the defined in `searchableBy` method attributes.

**Pattern:** `https://<app url>/api/<resource>?q=<search text>`

**Example:** `https://<app url>/api/posts?q=This is my search query`

## Including Relations

```php

namespace App\Http\Controllers\API;

use Laralord\Orion\Http\Controllers\Controller;

class PostsController extends Controller
{
    ...

    /**
    * The relations that are allowed to be included together with a resource.
    *
    * @return array
    */
    protected function includes()
    {
        return ['user'];
    }

    ...
}
```

Sometimes you may want to include relationships together with the returned resources. To do that, url needs to contain `include` query parameter with a comma separated list of relations.

**Pattern:** `https://<app url>/api/<resource>?include=<relation a>,<relation b>...`

**Example:** `https://<app url>/api/posts?include=user`

::: warning KEY TAKEAWAYS

* Only attributes defined in `filterableBy`, `sortableBy`, `searchableBy` and relations in `includes` can be used in query parameters
* It is possible (and super convenient) to use nested attributes/relations (e.g. `user.name`)

:::

## Soft Deletes

There are 3 query parameters available - `with_trashed`, `only_trashed`, and `force`.

The first two allow you to include either all resources, even the deleted ones - `with_trashed` or only the deleted ones - `only_trashed`. These parameters are accepted on `index` endpoint of both [standard](./models.html#soft-deletes) and [relation](./relationships.html#soft-deletes) resources.

The last, but not least, parameter `force` allows you to permanently delete a resource. The parameter is accepted on the `destroy` endpoint.