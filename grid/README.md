# Setting up a grid

CSS Grid Layout (aka “Grid” or “CSS Grid”), is a two-dimensional grid-based layout.

## Grid container

We can think about CSS Grid in terms of a container and items. When you make an element a grid container, it will “contain” the whole grid. In CSS, an element is turned into a grid container with the property `display: grid` or `display: inline-grid`.

Note that only the direct child elements will become grid items here. If we had another element as a child under one of these child elements it would not be a grid item. Grid items can also be grid containers. So you could make grids inside of grids if you wanted.

## Columns and rows

Colums and rows will define the grid track (the space between lines on a grid). So we could set a column track to give us space between our columns and a row track to give us space between our rows. The properties `grid-template-columns` and `grid-template-rows` make defining column and row tracks easy.

CSS Grid also includes a shorthand property for defining rows and columns. We can replace the properties for `grid-template-rows` and `grid-template-columns` with the shorthand `grid-template` property. Here we can define our rows and columns all at once. For this property, rows are defined before the slash and columns are defined after the slash.

## Explicit vs implicit grid

When we use the `grid-template-columns` and `grid-template-rows` properties, we are explicitly defining grid tracks to lay out our grid items. But when the grid needs more tracks for extra content, it will implicitly define new grid tracks. Additionally, the size values established from our `grid-template-columns` or `grid-template-rows` properties are not carried over into these implicit grid tracks. But we can define values for the implicit grid tracks.

We can set the implicit grid track sizes using the `grid-auto-rows` and `grid-auto-columns` properties. In this way we can ensure any new tracks the implicit grid makes for extra content are set at values that we defined.

By default, CSS Grid will add additional content with implicit rows. This means the extra elements would keep being added further down the grid in a vertical fashion. It would be much less common to want extra content added horizontally along the grid, but that can be set using the `grid-auto-flow: column` property and those implicit track sizes can be defined with the `grid-auto-columns` property.

## Gap

The gap between grid rows and columns is known as the gutter or alley. Gap sizes can be adjusted separately for rows and columns using the `column-gap` and `row-gap` properties. Furthermore, we can use a shorthand property called `gap` to set both `row-gap` and `column-gap`.

# Important terminology

- **Grid Container:** The element on which `display: grid` is applied. It’s the direct parent of all the grid items.
- **Grid Item:** The children (i.e. direct descendants) of the grid container.
- **Grid Line:** The dividing lines that make up the structure of the grid. They can be either vertical (“column grid lines”) or horizontal (“row grid lines”) and reside on either side of a row or column.
- **Grid Cell:** The space between two adjacent row and two adjacent column grid lines. It’s a single “unit” of the grid.
- **Grid Track:** The space between two adjacent grid lines. You can think of them as the columns or rows of the grid.
- **Grid Area:** The total space surrounded by four grid lines. A grid area may be composed of any number of grid cells.

# [DevTools](https://developer.chrome.com/docs/devtools/css/grid/)

# Positioning gird elements

## Lines

Grid lines are what we use to position grid items. Whenever we create grid tracks, grid lines are created implicitly. This is important. Grid lines are only created after our grid tracks have been defined. We can not explicitly create grid lines.

Every track has a start line and an end line. The lines are numbered from left to right and top to bottom starting at 1.

## Cells

**The space in a grid shared by a single row track and a single column track is called a grid cell**. You can think of a grid cell like a _cell in a spreadsheet: a space defined by a row, column coordinate_. By default, each child element of a grid container will occupy one cell.

## Positioning

We positioned grid item using `grid-column-start` and `grid-column-end` or `grid-row-start` and `grid-row-end`. Their property values represent the column or row grid lines we wish it to start and end with.

`grid-column` is just a combination of `grid-column-start` and `grid-column-end` with a slash between the two values. And `grid-row` is the shorthand version for setting an item’s row positioning.

You can combine `grid-row-start` / `grid-column-start` / `grid-row-end` / `grid-column-end` into one line using `grid-area`. But `grid-area` can also refer to a few different things. Instead of using the grid lines to position all the items in a grid, we can create a visual layout of the grid in words. To do this we give each item on the grid a name using `grid-area`. Then we can map out the whole structure with the grid container using `grid-template-areas`. We can even use `.` to indicate empty cells.

Lines value can addresed from backward using minus. For example lines can be addressed as `-1`, and you can count back from there – so the second last line is `-2`.

In addition to specifying the start and end lines by number, you can specify a start line and then the number of tracks you would like the area to span using the `span` keyword. You can also use the span keyword in the value of `grid-row-start`/`grid-row-end` and `grid-column-start`/`grid-column-end`

# Source

- [The Odin Project](https://www.theodinproject.com/)
- [CSS-Trick Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)