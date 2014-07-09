# Eaternity Database Docs
[![Build Status](https://travis-ci.org/prose/prose.svg?branch=master)](https://travis-ci.org/prose/prose)

The Eaternity Database is a collection of files and tools.
1. File Structure: Ingredient data is stored in the JSON data format in a [non-public GitHub repository](http://prose.io/#eaternity-agent/Eaternity-Datenbank). There is one .json file per ingredient.
2. Jekyll-DB: [Jekyll-DB](https://github.com/rypan/jekyll-db) is used to display an overview of all ingredients to the user. The user can search for keywords and select the file to edit.
3. Prose: Data is edited in [Prose](http://prose.io/). Thus, the full advantage of GitHub's versioning system is offered to the users.

## 1. File Structure
Every ingredient is stored in the JSON data format in its own .json file. The files are basically flat, i.e. there is no nested, hierarchical structure inside each file. Yet, the files are not exactly 100% compliant to the JSON specification: Additionally to containing fully valid JSON, in the beginning and the end of each file a YAML-frontmatter header and footer string ("---") is added. Example: <code>   
\-\-\-  
{  
  "ID": "8",  
  "Name_Deutsch": "Sesamöl",  
  "Std_Herkunft": "Schweiz",  
  "kg_CO2": "2.67",  
  ...  
}  
\-\-\-</code>  

Each file therefore serves a double purpose. Interpreted as a JSON file, it can be processed by JSON parsers. At the same time, it can be processed by Jekyll's frontmatter parsers (which [accepts both YAML and JSON equally](https://github.com/dworthen/js-yaml-front-matter)).

Furthermore, all files are placed in a <code>_data/edbs/</code> subdirectory. [As per Jekyll v2.1.0 all YAML- or JSON-files placed in such a subdirectory can be accessed and looped over via Liquid templates](http://jekyllrb.com/docs/datafiles/) like this: <code>{% for edb in site.data.edbs %} ...do something... {% endfor %}</code>. **(Attention: On the 9th July 2014 the datafiles examples in the linked documentation contained errors, for more info see [here](https://github.com/jekyll/jekyll/pull/2395).)** <code>edb[0]</code> will contain the filename (without leading path and without file ending), whereas <code>edb[1]</code> will contain the key/value-pairs specified in YAML or JSON. It is now easy to build a HTML page containing a list of all ingredients with selected attributes: <code>  
...  
&lt;ul&gt;  
{% for edb in site.data.edbs %}  
  &lt;li&gt;Filename: {{ edb[0] }}.json; Name_Deutsch: {{ edb[1].Name_Deutsch }}&lt;/li&gt;  
{% endfor %}  
&lt;/ul&gt;  
...</code>  
**(Attention: On the 9th July 2014 [GitHub Pages was still running Jekyll 1.5.1](https://pages.github.com/versions/). The datafiles feature is therefore currently not available on GitHub pages. To use it, a Jekyll server instance with version >= 2.1.0 must be run.)**

## 2. Jekyll-DB
[Jekyll-DB](https://github.com/rypan/jekyll-db) is an open source and easy-to-use tool based on [List.js](http://listjs.com/) to index, filter, search, sort and display html tables and lists. Basically, Jekyll-DB allows to index YAML- (or JSON-) frontmatter of (markdown or html) posts placed in the <code>_posts</code> folder. It builds an adaptable display table that can be searched and filtered by keywords and sorted by columns. It is also possible to place links in the display table e.g. to a open a given post item in a GitHub or Prose editor. Data columns can be specified, as can the number of displayed items.
Although the official documentation does not state it explicitly, Jekyll-DB not only works with files placed inside a <code>_posts</code> directory, but also with files in a <code>_data/edbs/</code> subdirectory. If a <code>_posts/</code> directory is used, in Liquid templates frontmatter data can be accessed directly, e.g. <code>{% for post in site.posts %} ...{{ post.myFrontmatterKey }}... {% endfor %}</code>. For <code>_data/edbs/</code> subdirectories, additionally indices must be used to differentiate between filename at index 0 and frontmatter content at index 1: <code>{% for edb in site.data.edbs %} ...{{ edb[1].myFrontmatterKey }}... {% endfor %}</code>.
If JSON files inside a <code>_data</code> subdirectory should be indexed, a Jekyll server instance >= v.2.1.0 is required. Indexing frontmatter only in a <code>_posts</code> directory also works with older Jekyll server instances.

## 3. Prose



__Attention: This is an enhanced version of Prose in combination with JSON Form.__

Prose provides a beautifully simple content authoring environment for [CMS-free websites](http://developmentseed.org/blog/2012/07/27/build-cms-free-websites/). It's a web-based interface for managing content on [GitHub](http://github.com). Use it to create, edit, and delete files, and save your changes directly to GitHub. Host your website on [GitHub Pages](http://pages.github.com) for free, or set up your own [GitHub webhook server](http://developmentseed.org/blog/2013/05/01/introducing-jekyll-hook/).

[Read more about Prose](http://prose.io/#about)

### Setting up Prose with your site

Prose supports configuration settings with a variety of options, which makes it easy to adjust the application to support your project needs. Read the [Getting Started Guide](https://github.com/prose/prose/wiki/Getting-Started) to learn more.

### Installation and developing

Prose is hosted at [Prose.io](http://prose.io), or you can use on your own server. For installation instructions and contributing guidelines, please [read contributing.md](CONTRIBUTING.md).

*Prose is developed and maintained by [Development Seed](http://developmentseed.org).*
