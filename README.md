https://hanslau.github.io/css-admin-dashboard/


1. Grids better for general layout (use justify-items!), Flex for aligning items
    - Height 100vh on body for 1fr to stretcch!
2. Counters
3. Filters
4. Place CSS shorthand at top!
5. Mask on Background gradients with padding-box as transparent gap, rotating with mask
6. Alt img on click using 2 elements with utility class hidden and position relative
7. Order: -1 to place in front of pseudo
8. List items, try wrap <li> with <a> easier click
9. Ways to implement SVG:
    -use xlink href
    -as bg img in CSS
    -img element
    -plugins to replace img onload()
    -svg object with external stylesheet
10. BG Gradient animations:
    - Background only (content-box, border-box)
    - Mask exclude on 2nd/pseudo, allowing transparent gap (padding-box)
    - Rotate bg animation but not mask
        - Mask on parent, rotate on pseudo/child 
        - Text on another element, cause mask will exclude it
    - Background-size for animation, Opacity for transition
        - Animate background-position/size if mask, otherwise translateX/width-height

TO LEARN:
SASS
Typescript
React

TODO:
anchor dropdown menu
reactive dashboard