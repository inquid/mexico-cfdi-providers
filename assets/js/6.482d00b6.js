(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("ul",[a("li",[t._v("PHP >= 7.2")]),t._v(" "),a("li",[t._v("Laravel >= 5.7")])]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("Laravel Orion can be installed into a new or existing project, simply by adding a composer dependency:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require tailflow/laravel-orion\n")])])]),a("h2",{attrs:{id:"simple-crud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-crud"}},[t._v("#")]),t._v(" Simple CRUD")]),t._v(" "),a("p",[t._v("Let's assume you have a model "),a("code",[t._v("Post")]),t._v(" that represents a blog post and you would like to manage it via REST API.")]),t._v(" "),a("p",[t._v("With Laravel Orion it can be acomplished in 3 simple steps:")]),t._v(" "),a("ol",[a("li",[t._v("Create "),a("code",[t._v("PostsController")]),t._v(" and extend it from "),a("code",[t._v("Orion\\Http\\Controllers\\Controller")])])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Orion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostsController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Then define "),a("code",[t._v("protected $model")]),t._v(" property and set it to the fully-qualified model class name. The complete controller should look like this")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Orion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostsController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Fully-qualified model class name\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$model")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// or "App\\Models\\Post"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("By default Laravel is not shipped with "),a("code",[t._v("API")]),t._v(" folder in "),a("code",[t._v("app/Http/Controllers")]),t._v(", but it is recommended to create one and store all API controllers there to keep the code organized.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("ATTENTION")]),t._v(" "),a("ul",[a("li",[t._v("Make sure to have "),a("a",{attrs:{href:"https://laravel.com/docs/master/authorization#creating-policies",target:"_blank",rel:"noopener noreferrer"}},[t._v("policy"),a("OutboundLink")],1),t._v(" created and registered for the model you are exposing via the API or consider using "),a("code",[t._v("DisableAuthorization")]),t._v(" trait (only for local testing) to avoid getting 403 error, if the policy is not registered or incorrect.")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/guide/security.html#validation"}},[t._v("Request classes")]),t._v(" "),a("strong",[t._v("must")]),t._v(" extend "),a("code",[t._v("Orion\\Http\\Requests\\Request")]),t._v(" class instead of "),a("code",[t._v("Illuminate\\Foundation\\Http\\FormRequest")])],1)])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Finally, register the route in "),a("code",[t._v("api.php")]),t._v(" by calling "),a("code",[t._v("Orion::resource")])])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Orion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Orion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostsController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nRoute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'as'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'api.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Orion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'posts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PostsController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])]),a("p",[t._v("Done 🎉 Now you can create, list, search, view, update, and delete blog posts via REST API. Try to create a post via "),a("code",[t._v("(POST) https://<your app url>/api/posts")]),t._v(" endpoint 😉")]),t._v(" "),a("p",[t._v("You can also take a look at all available endpoints by running "),a("code",[t._v("php artisan route:list")]),t._v(" command")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("+--------+-----------+-------------------------------------------------+----------------------------------------+---------------------------------------------------------------------------+-------------------------------------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Domain "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Method    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" URI                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Name                                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Action                                                                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Middleware                                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------+-----------+-------------------------------------------------+----------------------------------------+---------------------------------------------------------------------------+-------------------------------------------------+\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" GET"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("HEAD  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api/posts                                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api.posts.index                        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostsController@index                            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" POST      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api/posts/search                                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api.posts.search                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostsController@index                            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" POST      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api/posts                                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api.posts.store                        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostsController@store                            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" GET"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("HEAD  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api/posts/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api.posts.show                         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostsController@show                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" PUT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("PATCH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api/posts/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api.posts.update                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostsController@update                           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" DELETE    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api/posts/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api.posts.destroy                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostsController@destroy                          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" POST      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api/posts/batch                                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api.posts.batchStore                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostsController@batchStore                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" PATCH     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api/posts/batch                                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api.posts.batchUpdate                  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostsController@batchUpdate                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" DELETE    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api/posts/batch                                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api.posts.batchDestroy                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostsController@batchDestroy                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" api                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);