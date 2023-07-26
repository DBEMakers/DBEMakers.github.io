---
layout: page
title: Ultimaker 3D Printer
permalink: /ultimaker/
parent: Fabrication
grand_parent: Makerspace 418
card:
  - title: Ultimaker 2+ Connect
    image: /assets/images/equipment/S2.jpg
  - title: Ultimaker S3
    image: /assets/images/equipment/S3.jpg
  - title: Ultimaker S5
    image: /assets/images/equipment/S5.jpg
halfgrid:
  - content1: |
      <h3> Check list </h3>
      <ol type="1">
         <li>Check for Non-Manifold Errors </li>
         <li>Check for Naked Edges</li>
         <li>Fill/ Cap Holes</li>
         <li>Unify Normals</li>
         <li>Convert your model to a Mesh</li>
         <li>Export your model as a .stl file</li>
      </ol>  
    content2: >-
      <img src="/assets/images/equipment/ccc.JPG" alt="settings to alter"
      style="display:block;margin-left:auto;margin-right:auto;">
---

# Ultimaker 3D Printers

***

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>
---
## General Information
{% include cards.html %}
{: .mb-7 .mt-3}

(FDM) Fused Deposition Modelling printing technology for printing 3D models into physical objects. This is available for all students of DBE. To print, you must complete a [General Makerspace Induction](https://siso.curtin.edu.au/sodbe "Siso") and a [3D Printing Badge](https://siso.curtin.edu.au/sodbe "Siso"). 

The DBE Makerspace contains 22 3D printers. You can also access 3D printers in the 202 Digital Modelling Workshop.

[Email DBE Makerspace](mailto:DBEMakerspace@curtin.edu.au){: .btn .btn-primary }
{: .mb-7 .mt-7}

***

## Materials Available

| Materials | Description | Available Colours |
|:-|:-|:-|
| [PLA (Polylactic acid)](https://ultimaker.my.salesforce.com/sfc/p/#j0000000HOnW/a/5b000005DOwb/tXMchH9fknixcHLxvIy6BJZmQs8_XAVpii2p2uFmwwQ "Ultimaker PLA Safety Data Sheet") | Good for most 3D print projects. Easy to print, with relatively high strength, low thermal expansion and good adhesion, but low heat resistance | White, pearl white, black, transparent, silver, grey, blue, green, teal, purple, red, orange, yellow |
| [Tough PLA](https://ultimaker.my.salesforce.com/sfc/p/#j0000000HOnW/a/5b000005DOwv/kna_iV6QzCrpYsOS16Zk.u34DHjdCIVIT4vrElSbSYY "Ultimaker Tough PLA Safety Data Sheet") | Similar strength to ABS and heat-resistant to 58°C | White, black |
| [TPU95A (thermoplastic polyurethane)](https://ultimaker.my.salesforce.com/sfc/p/#j0000000HOnW/a/5b000005DP0N/0XXi_RB8_mENixIzjBHMxq.pBuznUxWXzkBM3LD0.wM "Ultimaker TPU95A SDS") | Flexible, elastic, chemical-resistant filament | Red |
| [PVA](https://ultimaker.my.salesforce.com/sfc/p/#j0000000HOnW/a/5b000005DP4Q/L3eW04E4MQJBHPV7EbThHsqtGTHNOuZhpltyTQVaDng "Ultimaker PVA SDS") | Water-soluble support material, for specialised applications only | Natural |

***

{: .mt-7}

## Printer Information

|                                       | Ultimaker S5              | Ultimaker S3              | Ultimaker 2+ Connect               |
|:--------------------------------------|:--------------------------|:--------------------------|:----------------------------|
| **Build volume (X,Y,Z)**              | 330 x 240 x 300mm         | 230 x 190 x 200mm         | 223 x 220 x 205mm           |
| **No. of Extruders**                  | 2                         | 2                         | 1                           |
| **Resolution**                        | 0.06 – 0.8mm              | 0.06 – 0.8mm              | 0.06 – 0.2mm                |
| **No. of Printers**                   | 1                         | 11                        | 10                          |

***

{: .mt-7}

## Setting up your Files

### Check for modelling errors

Common issues with 3D printing occur due to bad geometry, please make sure you check you meshes for the following before handing it to the technician team:
{: .mb-4}

| Error Type | What this is?              | What does it causes?            | How do you fix it?              |
|:-----------|:---------------------------|:--------------------------------|:--------------------------------|
| **Non Manifold Geometry**  |  When an objects has edges that are not totally connected or objects with added faces. The object does not have volume. | Doing this causes some or all of the model to have no volume making it impossible to print. | Geometry must be fully enclosed (watertight), and only 2 faces may share an edge.
| **Non Unified Faces**      | When an mesh's faces (normals) are not all facing in the correct direction.  | Doing this cases printing software to not understand what is inside or outside the model leading to unexpected results. | Check that your face's normals are all facing the correct direction. |
| **Support Issues**      | When there are not enough support structures to print parts of an object in mid-air. | Without supports, your object may fail to print and break apart. | Supports can be added during the printing process but it is also recommended you support anything over a 45 degree angle or to print your object in multiple pieces you glue after printing. |

***

{% include halfgrid.html %}
{: .mb-6}

***

!\[Non-Manifold / Bad Geometry]\(/assets/images/equipment/non-manifold (1).JPG)\
{: .mt-6}

***

## Documentation

[STL Files Preparation](https://www.3dnest.in/blog/how-to-create-3dprintready-designs){: .btn .btn-primary } [FDM Design guide](https://cdn2.hubspot.net/hubfs/340051/Design_Guides/Xometry_DesignGuide_FDM.pdf){: .btn .btn-primary } [Printing Troubleshooting](https://www.simplify3d.com/resources/print-quality-troubleshooting/){: .btn .btn-primary } <br>

### Setting up your model in Rhino

<iframe width="100%" height="415" src="https://www.youtube-nocookie.com/embed/o0rJlxwbr4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Constraints

<iframe width="100%" height="415" src="https://www.youtube-nocookie.com/embed/xiIOoX714Qs?start=646" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### Best practices

<iframe width="100%" height="415" src="https://www.youtube-nocookie.com/embed/xiIOoX714Qs?start=926" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
