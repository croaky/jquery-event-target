jQuery Event Target
===================

A jQuery plugin for setting event targets in data- attributes.

Install
-------

    <script src="https://github.com/croaky/jquery-event-target/raw/master/jquery.event-target.js" type="text/javascript"></script>

Use
---

    <a href="#" data-show=".rename-document" data-focus="#document-name">Rename Document</a>

    <div class="rename-document" style="display: none;">
      <form action="/documents/1" method="post">
        <input id="document-name" type="text" value="Untitled" />
        <input type="submit" value="Rename" />
        <a href="#" data-hide=".rename-document">Cancel</a>
      </form>
    </div>

When the user clicks "Rename Document", the form will appear and the cursor will be in the text field. When the user clicks "Cancel", the form will disappear.

How it works
------------

The plugin observes links (a tags) with the following data- attributes:

    data-show
    data-hide
    data-focus

When the link is clicked, the plugin will fire the event named by the data- attribute on the value of the data- attribute.

Think of these as key-value pairs where the key is the jQuery event (in data- attribute form) and the value is the target element to operated on (in CSS selector form).

    data-show=".rename-document"
    data-focus="#document-name"
    data-hide=".rename-document"
