# Eaternity Database Docs
[![Build Status](https://travis-ci.org/prose/prose.svg?branch=master)](https://travis-ci.org/prose/prose)

The Eaternity Database is a collection of files and tools.
1. File Structure: Ingredient data is stored in the JSON data format in a [non-public GitHub repository](http://prose.io/#eaternity-agent/Eaternity-Datenbank). There is one .json file per ingredient.
2. Jekyll-DB: [Jekyll-DB](https://github.com/rypan/jekyll-db) is used to display an overview of all ingredients to the user. The user can search for keywords and select the file to edit.
3. Prose: Data is edited in [Prose](http://prose.io/). Thus, the full advantage of GitHub's versioning system is offered to the users.

## 1. File Structure
Every ingredient is stored in the JSON data format in its own .json file. The files are basically flat, i.e. there is no nested, hierarchical structure inside each file. Yet, the files are not exactly 100% compliant to the JSON specification: Additionally to containing fully valid JSON, in the beginning and the end of each file a YAML-frontmatter header and footer string ("---") is added. Example:    
<code>\-\-\-  
{  
  "ID": "8",  
  "Name_Deutsch": "Sesamöl",  
  "Std_Herkunft": "Schweiz",  
  "kg_CO2": "2.67",  
  ...  
}  
\-\-\-</code>  

Each file therefore serves a double purpose. Interpreted as a JSON file, it can be processed by JSON parsers. At the same time, it can be processed by Jekyll's frontmatter parsers (which [accepts both YAML and JSON equally](https://github.com/dworthen/js-yaml-front-matter)).

Furthermore, all files are placed in a <code>_data/edbs/</code> subdirectory. [As per Jekyll v2.1.0 all YAML- or JSON-files placed in such a subdirectory can be accessed and looped over via Liquid templates](http://jekyllrb.com/docs/datafiles/) like this: <code>{% for edb in site.data.edbs %} ...do something... {% endfor %}</code>. **(Attention: On the 9th July 2014 the datafiles examples in the linked documentation contained errors, for more info see [here](https://github.com/jekyll/jekyll/pull/2395).)** <code>edb[0]</code> will contain the filename (without leading path and without file ending), whereas <code>edb[1]</code> will contain the key/value-pairs specified in YAML or JSON. It is now easy to build a HTML page containing a list of all ingredients with selected attributes:    
<code>...  
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
Whereas Jekyll-DB allows to display data, [Prose](http://prose.io/) can be used to actually edit the underlying data. Prose is an open-source editor built on top of GitHub pages. There is a free-to-use online instance running at the given link, but it is also possible to run one's own Prose in any YAML-aware webserver such as Jekyll or a [Node.js](http://nodejs.org/) web server. Because as stated above all files are also valid frontmatter files, 

There are currently two alternatives how to use Prose: either edit data in Prose's metadata editor, or use an adapted version of Prose running on one's own server instance. Both have their advantages and disadvantages.

# Using Prose's metadata editor
_Advantages:_
- No redundancy between data and frontmatter - all data is stored as _only_ frontmatter.
- Prose's online version can be used. No need to run Prose on one's own server.
- No need for coding, all required metadata editor fields can be configured in a <code>prose</code> section in a <code>_config.yml</code> or in a <code>_prose.yml</code>.

_Disadvantages:_
- Apparently, JSON frontmatter is changed into YAML, i.e. curly brackets and commas are dropped as soon as the metadata is saved.
- Data in textareas is not displayed and saved properly. (On the 09th of July 2014, this bug has been known for 11 months, yet no patch has been provided by the developers so far.)

# Using an adapted version of Prose
_Advantages:_
- Prose can be adapted to one's need. JSONForm can be used to create good-looking forms for data editing.

_Disadvantages:_
- Redundancy of data and frontmatter. (TODO: Figure out whether JSONForm could be applied for editing frontmatter data.)
- Requires running one's own server instance.
- Need to maintain one's own adapted version of Prose.