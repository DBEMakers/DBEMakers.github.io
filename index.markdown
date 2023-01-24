---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults


layout: default
title: Welcome
nav_order: 1
 
# Card Structure
card:
  - title: Book
    link: https://siso.curtin.edu.au/sodbe/
    image: /assets/images/bookmark.svg
    content: For booking equipment and booking an induction, click here.

  - title: Learn
    link: /equipment/
    image: /assets/images/idea.svg
    content: Tutorials and instructions how to use equipment, click here

  - title: Talk
    link: "#contact-us"
    image: /assets/images/speech-bubble.svg
    content: For questions and support from the technicians, <br> click here


halfgrid: 
    - content1: |
        <ul> 
          <li> 3D printers </li>
          <li> 3D laser scanners </li>
          <li> laser cutters </li>
          <li> so much more! </li>
        </ul>
      content2: |
        <ul>
          <li> Arduino circuit boards </li> 
          <li> VR headsets </li>
          <li> Motion Capture </li>
        </ul>
--- 

# DBE Makerspace

Welcome to B418 Makerspace, your one stop for all information about the 418:114 Makerspace and equipment within B418. Please click on one of the links below to be redirected to our most common questions or click on the options to your left for further options.


{% include cards.html %}
{: .mt-2 .mb-6}

---

## What we provide
{: .mt-4 .mb-3}

{% include cards.html %}

The DBE Makerspace offers many resources available for booking from staff and students. Some equipment can even be booked home for use. This includes:
{: .mb-6}

<!-- <h2>Calendar</h2>
<p>Want to know what's happening at the Makerspace? Find out below:
  <div id='calendar'></div>
</p> -->

<!-- <iframe src="https://calendar.google.com/calendar/embed?src=280706j%40curtin.edu.au&ctz=Australia%2FPerth" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe> -->

---
{: .mb-6}

## Contact Us
Want to know what's happening at the Makerspace? Find out below
{% include form.html %}


