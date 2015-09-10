# Responsive Accordion Tabs

Tabbed interfaces work well on larger screens, but usually display in odd ways
on smaller devices. This jQuery plugin will automatically convert between a
tabbed interface and an accordion interface based on a CSS media query.

The [tabs](http://api.jqueryui.com/tabs/) and
[accordions](http://api.jqueryui.com/accordion/) are created with
[jQuery UI](http://jqueryui.com), so all options available to those jQuery UI
widgets are also available to this plugin.

## Usage

Include jQuery, jQuery UI, and this plugin in your page, either in the `<head>` or before your
`</body>` tag.

### Add Scripts to Your Page

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="js/jquery.responsive-accordion-tabs.min.js"></script>
```

### Include or Write Your Own CSS

You can use the [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/) to
create a theme for your accordions and tabs, or you can write your own CSS.

### Create the HTML

Use the following HTML structure. Ensure that the `href` attribute for each tab
heading matches the corresponding section `id` attribute. The accordion headings
do not have to be `<h1>`, but you will need to pass whatever level you use
as an option in your JavaScript.

You can change the `accordion-tabs` class to anything you like, but the other
classes are required.

```html
<div class="accordion-tabs">
	<ul class="accordion-tab-headings">
		<li><a href="#example-section">Tab Heading</a></li>
		<li><a href="#another-example">The Next Tab</a></li>
		<li><a href="#last-one">The Third Tab</a></li>
	</ul>

	<div class="accordion-tab-content">
		<section id="example-section">
			<h1>First Accordion Header</h1>
			<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque velit unde, porro sint iusto perferendis quisquam similique impedit consequatur mollitia, veritatis. Possimus officia, quaerat assumenda!</p></div>
		</section>

		<section id="another-example">
			<h1>The Next Accordion Header</h1>
			<div><p>Nihil, deleniti cum esse incidunt voluptatibus corporis, libero, sapiente voluptates non ut autem dolorum ullam commodi ipsam! Dolores quasi voluptate cum dolore quia nemo, at?</p></div>
		</section>

		<section id="last-one">
			<h1>Last Accordion Header</h1>
			<div><p>Numquam aliquam delectus deleniti quis repellendus alias laboriosam ipsum atque accusantium! Reiciendis obcaecati cupiditate repellat ipsam suscipit necessitatibus sunt eaque et laudantium eligendi, laborum distinctio.</p></div>
		</section>
	</div>
</div>
```

Call the plugin on the element you want to convert, passing in three objects
representing the options for the plugin, the accordion widget options, and the
tabs widget options, respectively.

All options available to the jQuery UI Accordion and Tabs widgets are available
for use.

```javascript
var $accordionTabs = $('.accordion-tabs');

$accordionTabs.accordionTabs({
	// Plugin options
	mediaQuery: '(min-width: 40em)' // Set when tabs should be used instead of accordion
}, {
	// jQuery UI Accordion options <http://api.jqueryui.com/accordion/>
	header: 'h1', // Specify the heading level you used (required)
	heightStyle: 'content'
}, {
	// jQuery UI Tabs options <http://api.jqueryui.com/tabs/>
	show: {
		effect: 'fade'
	}
});
```
