---

layout: page  
title: Artec Leo Laser Scanner 
permalink: /makerspace/multimedia/laser_scanner/  
parent: Multimedia
grand_parent: Makerspace 418

---

# Artec Leo - Wireless 3D Laser Scanner

---
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
Artec Leo is the only wireless and fully standalone professional 3D scanner designed to make scanning as easy and effortless as possible.
{: .mb-8}

![Laser Scanner](/assets/images/equipment/artec-leo-main.png)
{: .mb-8}

| Quantity | Risk Assessment |
| --- | --- |
| 1 | None, however prior training with a technician is required. |

  ---
{: .mt-8}

## Important notes
{: .mb-4}

{: .important-title }
> Important
>{: mx-auto }
> 
> When using the scanner, you must adhere to the following rules:
> 1. This scanner cannot be used without in-person supervision from a technician.
> 2. This equipment may also not leave Curtin's campus at any time. 
> 3. When using the laser scanner, the user and if people are being scanned must wear protective goggles provided with the scanner. This is due to the scanner using a class-1 laser.
> 4. If people are being scanned, the person being scanned must be at least 1 meter away from the scanner at all times. 
> 5. Downloading outcomes of the scans require the software, "Artec Studio 15" which is only availble within the DBE Makerspace. Refining scans in this software can be done by a technician.
> 
> {: mx-auto }

---
{: .mt-8}

## Documentation

| Document Title | Link to video/document |
|:---------------|:-----------------------|
| Artec Studio 15 Documentation | [http://docs.artec-group.com/as/15/en/](http://docs.artec-group.com/as/15/en/) |
| Scanner Documentation | [http://docs.artec-group.com/leo/](http://docs.artec-group.com/leo/) |


---
{: .mt-8}

## Example Outcomes
{: .mb-3}
<iframe width="100%" height="500" src="https://sketchfab.com/playlists/embed?collection=7bc3b344b8ee44bc963b665d5a4a6fbb&autostart=0"
        title="Scans of Myself"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
></iframe>

<iframe width="100%" height="480" src="https://sketchfab.com/playlists/embed?collection=638ca15f6f3540ea8d674ffaa8bcaeec&autostart=0"
        title="Gradfest Fasion"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
></iframe>
   
{: .note-title  .mb-6}
> Note
>
> Content may take a while to load due to being 3D. Please be patience while it loads.


---
## Animating Scans

If you wish to create a 3D scan of a person and have them animated, you can do so by following these steps:

### 1. Scanning

- Both the person scanning and person being scanned must wear protective eyewear and be supervised by a trained technician.
- The person ebing scanned will need to hold a pose for an extended period of time (upwards of 10 minutes) so it is recommended that they have additional equipment to support them if needed. For example, if you wish to animate the users arms you will need the person to be using an "A-Pose" (arms at 45 degrees) or "T-Pose"(arms at 90 degrees) to allow for easier rigging. Tripods can be used to support the scanee's arms.

![A-Pose vs T-Pose](/assets/images/equipment/a-pose_t-pose.jpg)

- Make sure colour data is turned on when scanning to help with texturing the person.

### 2. Clean up

- Scans are uploaded to the Artec Leo software at the Makerspace for conversion. Scans are originally made as point clouds which is then converted to geometry and exported out as a texture file (e.g. a .JPG or .PNG) and a 3D file (e.g. .OJB or .FBX).
- If you find there was excessive movement (most commonly seen in hands), export out the mesh and replace the hands with similar 3D scanned hands found online. This can be done using software such as zBrush.

![Messy Fingers Geometry](/assets/images/equipment/messy_fingers.jpg)

### 3. Rigging
- For rigging and animation, there are two recommended methods:
  1. **Mixamo** -
    Mixamo is a free auto rigging tool created by Adobe. Simply upload your 3D model and follow the auto rigging options provided. Please follow the following link below for more information: [https://www.mixamo.com/#/](https://www.mixamo.com/#/)

  2. **Rigify** -
    Rigify is a free rigging system built into Blender. Please follow the following tutorial below for more information:
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/f2pTkW-1JkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### 4. Animation

Software such as Maya, Blender or other animation software can be used for further animation.