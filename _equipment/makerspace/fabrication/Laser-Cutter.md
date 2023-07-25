---
layout: page
grand_parent: Makerspace 418
title: Laser Cutter
parent: Fabrication
halfgrid:
  - content1: >-
      <h3>Strawboard</h3> <br> <img
      src="/assets/images/equipment/vector_example.gif" alt="vector example">
    content2: >-
      <h3>Plywood</h3> <br> <img
      src="/assets/images/equipment/vector_example.gif" alt="vector example">
card:
  - title: SP 500
    image: /assets/images/equipment/SP500_NoBackground.png
  - title: Emblaser 2
    image: /assets/images/equipment/Emblaser 2_NoBackground.png
---

# Laser Cutting

***

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

***

## General Information

{% include cards.html %}
{: .mb-7 .mt-3}

Laser cutters use high-power laser system which allows for precise and fast processing of projects. It is still important to carefully check any files with the technical team to ensure a complete understanding of the timeframes of any work.

**The SP 500:** It is an efficient machine but there is only 1 machine available which can cause delays in results to high demand.

**Emblaser 2's:** The emblaser 2 is a small desktop laser cutter that allows for small projects to be processed with extra safety guards to avoid risks of major injury.
{: .mb-7}

| Quantity | Quantity | Risk Assessment |
|:-|:-|:-|
| **SP 500** | 1 | None, but you must have completed a [Makerspace induction.](https://siso.curtin.edu.au/sodbe//) |
| **Emblaser 2** | 10 | None, but you must have completed a [Makerspace induction.](https://siso.curtin.edu.au/sodbe//) |

\[Email DBE Makerspace]\(mailto: dbe-technicalsupport@curtin.edu.au){: .btn .btn-primary }
{: .mb-7 .mt-7}

{: .important-title }

> Important
> {: mx-auto }
> **SP 500**
> This equipment is strictly operated only by the technical team. Students can assist in the process, but the use of the machine can only be done by a technician.
> {: mx-auto }
> **Emblaser 2**
> This equipment is watched over by the user for the ***entirety*** of the printing process. In the event of an emergency, please signal to the nearest technician.

***

## Machine Information

| Laser Cutter                          | Dimensions                |  Materials                |
|:--------------------------------------|:--------------------------|:--------------------------|
| **SP 500**                            | 1245 mm x 710 mm          | Strawboard, Plywood       |
| **Emblaser 2**                        | 500mm x 300mm             | Strawboard, Plywood       |

See the “Equipment” section below for more information on the material dimensions that can be processed in the DBE Maker Space.

***

## Documentation

### Setting up your files

#### Vector lines

* Vector files need to be DRAWN in the vector program rather than just imported or pasted in there. Also opening a vector file in a raster file program, such as Photoshop, will convert it to a raster image.

### Line weight

#### Process colors

To process any file, it is required that the PDF only have the following colours:

<ul>
    <li> Cut = <strong style="color: red;"> RGB Red </strong> </li>
    <li> Vector engrave = <strong style="color: green;"> RGB Green </strong> </li>
    <li> Raster engrave = <strong style="color: blue;"> RGB Blue </strong> </li>
</ul>

##### Examples

![laser cutting examples](/assets/images/equipment/laser_cutting_examples.jpg)

#### File format

* PDF format is the only file received in the maker space to process any laser cutting job. Ensure that you

#### Naming format

* StudentID\_MaterialThickness\_MaterialSize.PDF

#### Setup file in AutoCAD

#### Setup file in Fusion 360

### &#x20;   What is Autodesk Fusion 360?

Autodesk Fusion 360 combines CAD, CAM, CAE, and PCB into a
single, integrated cloud software platform. It includes all the tools
that you need to go from design to manufacturing, seamlessly.

In the 418 Makerspace we only accept PDF format for laser cutting as it is lightweight and avoids the importing of unnecessary CAD information. **YOU MUST EXPORT AS A .PDF!!!**

####

#### **Laser Cut Setup**

The golden rule in Fusion is that you make sections of your models as Components. They store data about your design i.e sketch information, bodies and origin planes. Think of it as a layer in AutoCAD or Photoshop.

It is best to make each piece of your design as its own individual Component as it will help later on and is generally a good habit to be in for an effective workflow.

![](/assets/images/components.png)

My model 👇 is a 3mm Polar ply box that is connected by finger joins.

![](</assets/images/Screenshot 2023-07-18 122946.png>)

I would like change my view to help identify each sections in the inspect menu.

![](</assets/images/Screenshot 2023-07-18 123311.png>)

Now my model has an ID color for each of its components.

![](</assets/images/Screenshot 2023-07-18 123441.png>)

I now need to create a rectangle for arranging my pieces for laser cutting. You can always specify this area in the arrange menu later but I have chosen a more visual method of defining my bounding box for the laser cut. 

Make sure your top level component is selected.

1. Create a new sketch
2. Select the plane that you would like to create the sketch on![](</assets/images/Screenshot 2023-07-18 124209.png>)
3. Draw a rectangle using the create menu or simply hit the \[R] key![](</assets/images/Screenshot 2023-07-18 123813.png>)
4. Select Center Point rectangle![](</assets/images/Screenshot 2023-07-18 123854.png>)  
5. Define your size, switching between height and width with \[Tab➡] key![](</assets/images/Screenshot 2023-07-18 124030.png>)
6. Hit enter and then finish sketch![](</assets/images/Screenshot 2023-07-18 124104.png>)
7. the plane should be at the bottom of you model as displayed here:![](</assets/images/Screenshot 2023-07-18 124332.png>)

I designed my ply box with my material width in mind however the laser cutting only needs the top surface of a shape as it only considers a drawing to have x,y axis information or that is in 2d. This means we need to lay out and Nest our components, using an orthographic view to capture our line information.

For my design I have set this to work from the top view. 

Nesting

1. Select Arrange in Modify menu with all the components selected, or select them individually afterward![](</assets/images/Screenshot 2023-07-25 120003.png>)
2.  Make sure all componnets appear in Arrange options.

#### Setup file in Illustrator

#### Setup file in Rhino

This is a test.
