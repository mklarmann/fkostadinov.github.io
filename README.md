# Eaternity Database Docs
[![Build Status](https://travis-ci.org/prose/prose.svg?branch=master)](https://travis-ci.org/prose/prose)

The Eaternity Database is a collection of files and tools.
1. Ingredient data is stored in the JSON data format in a [non-public GitHub repository](http://prose.io/#eaternity-agent/Eaternity-Datenbank). There is one .json file per ingredient.
2. [Jekyll-DB](https://github.com/rypan/jekyll-db) is used to display an overview of all ingredients to the user. The user can search for keywords and select the file to edit.
3. Data is edited in [Prose](http://prose.io/). Thus, the full advantage of GitHub's versioning system is offered to the users.

## File Structure
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

Furthermore, all files are placed in a <code>_data/edbs/</code> subdirectory. [As per Jekyll v2.1.0 all YAML- or JSON-files placed in such a subdirectory can be accessed and looped over via Liquid templates](http://jekyllrb.com/docs/datafiles/) like this: <code>{% for edb in site.data.edbs %} ...do something... {% endfor %}</code>. --__(Attention: On the 9th July 2014 the datafiles examples in the linked documentation contained errors, for more info see__ [here](https://github.com/jekyll/jekyll/pull/2395).) <code>edb[0]</code> will contain the filename (without leading path and without file ending), whereas <code>edb[1]</code> will contain the key/value-pairs specified in YAML or JSON. It is then easy to build a HTML page containing a list of all ingredients with selected attributes: <code>
...  
<ul>  
{% for edb in site.data.edbs %}  
  <li>Filename: {{ edb[0] }}.json; Name_Deutsch: {{ edb[1].Name_Deutsch }}</li>  
{% endfor %}  
</ul>  
...  
</code>

## Jekyll-DB


## Prose



__Attention: This is an enhanced version of Prose in combination with JSON Form.__

Prose provides a beautifully simple content authoring environment for [CMS-free websites](http://developmentseed.org/blog/2012/07/27/build-cms-free-websites/). It's a web-based interface for managing content on [GitHub](http://github.com). Use it to create, edit, and delete files, and save your changes directly to GitHub. Host your website on [GitHub Pages](http://pages.github.com) for free, or set up your own [GitHub webhook server](http://developmentseed.org/blog/2013/05/01/introducing-jekyll-hook/).

[Read more about Prose](http://prose.io/#about)

### Setting up Prose with your site

Prose supports configuration settings with a variety of options, which makes it easy to adjust the application to support your project needs. Read the [Getting Started Guide](https://github.com/prose/prose/wiki/Getting-Started) to learn more.

### Installation and developing

Prose is hosted at [Prose.io](http://prose.io), or you can use on your own server. For installation instructions and contributing guidelines, please [read contributing.md](CONTRIBUTING.md).

*Prose is developed and maintained by [Development Seed](http://developmentseed.org).*
