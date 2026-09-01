Compiled and shared by [Cristóbal Vila](https://etereaestudios.com/resources/blender-resources/)

# BLENDER TIPS

> **NOTE:** This is by far the most extensive and complex content resource. I’m currently working on organizing and cleaning it up, as it’s a bit chaotic at the moment. In the meantime, *use the Search field* — it’s very fast!

## GENERAL - MISC

### Upgrade Blender without losing anything:

[How to Update Blender Without Losing Settings and Add-Ons](https://www.tripo3d.ai/blog/collect/how-to-update-blender-without-losing-settings-and-add-ons-t1d5nijtdx4)

1. Open the previous version one last time. File > Defaults > Save Startup File

2. Install new version and (ATTENTION) in the presentation image click on “Import Blender 4.x Preferences” (the previous version, if this appears)

### Routes for config, datafiles, extensions, nodes & scripts

**Mac:**

`/Users/cristobal/Library/Application Support/Blender/[version]`

**Windows:**

`cristobal › AppData[#] › Roaming Blender Foundation › Blender › [version]`

NOTE: to locate this in Windows go to Search field (bottom-left), write `execute` (`ejecutar`) and then write `%appdata%`

### To open a second instance of Blender in Mac

For example to copy-paste objects from Scene A to Scene B:

Open Terminal and Enter the following command:

`open -n /Applications/Blender.app`

**ALTERNATE:** You can wrap that command in an AppleScript and save it as an app to launch it with a double-click:

Open Script Editor (it comes with macOS). Type:

`do shell script "open -n /Applications/Blender.app"`

In “File Format” choose Application. Give it a name, for example: Blender Second Instance.app.

You can now open this app like any other program, and it will launch another instance of Blender.

### To test something with Temporal Factory Settings

And also to disable add-ons, and more:

Open Blender

Select File -> Defaults -> **Load Factory Settings** to temporarily load factory settings

Open your file and see if it's there.

IMPORTANT: When you next open Blender, all your add-ons and personal settings will be reloaded and if the issue is related to a addon, then the issue will return.

### About the Workspaces

The **workspaces** are saved in the blend-file. When you open a file, enabling Load UI in the File Browser (small gear top-right) indicates that Blender should use the file’s screen layout rather than the current one.

### Splitting & Joining Viewport Areas

Dragging from an area corner **inward** will split the area. You define the split direction by dragging either horizontally or vertically.

Dragging from an area corner **outward** will join two areas. The area that will be closed shows a dark overlay. You can select which area will be closed by moving the mouse over it. Release the LMB to complete the join. If you press Esc or RMB before releasing the mouse, the operation will be canceled.

### Differences between 'hide in viewport' vs 'disable in viewport'

By default they function the same, however, you can have multiple 3D viewports open. In each 3D viewport you can enable "local collection" in "[N] sidebar">"View Tab">"Collections Section".

Now "Hide in Viewport" will disable visibility in all 3D viewports that do not have "local collections" enabled. While "Disable in Viewport" will overwrite even 3D viewports with "local collections" enabled.

If you disable something, the animation, collision, etc. wont work affect anything. With hiding, it can still be a collider

It's essentially the difference between "object is invisible" and "object no longer exists."
#### Hide in Viewport (Eye icon)

**Outliner → Eye icon** 👁️

- Temporarily hides the object from view in the 3D viewport.

- The object is still active in the scene, meaning it will still:

- Participate in modifiers.

- Affect simulations (e.g., collisions).

- Be evaluated by the dependency graph.

- Still visible in renders (unless also hidden from render).

Use case: When you just want to hide something visually for clarity.
#### Disable in Viewport (Monitor icon)

**Outliner → Monitor icon** 🖥️ (you may need to enable it from the filter options)

- Disables the object entirely in the viewport.

- The object is excluded from the dependency graph, so:

- Modifiers, constraints, physics, and drivers are not evaluated.

- It does not affect other objects (e.g., collisions, booleans).

- It behaves as if it doesn't exist in the scene at all (for viewport purposes).

- Still rendered unless you also disable it for rendering.

Use case: For performance optimization or to prevent interference with other objects (e.g., when debugging simulations or modifiers).

### Report and Missing Files

**File > External Data > Report Missing Files**, will report all missing files, but it only show a single line at bottom of interface. To see ALL missing ones, open an **Info** viewport (clean it deleting all, first of all)

Then, with **File > External Data > Find Missing Files**, you can catch all those directories where your missing data is stored

### Fake user - caution!!!

Summary: caution with all those Materials, Node Groups, etc which was created but NOT assigned to any Object. If that is the case, the Material, NodeGroup, etc, could be deleted on your next save

[Automatic Fake User - Blender Market](https://blendermarket.com/products/automatic-fake-user)

[Blender Deleted My Un-assigned Materials - How is That A Feature? - Fake User - Archive / User Feedback - Developer Forum](https://devtalk.blender.org/t/blender-deleted-my-un-assigned-materials-how-is-that-a-feature-fake-user/22715)

[Data Blocks, Fake Users & External Files Explained | Brandon 3D](https://brandon3d.com/blender-data/)[ ](https://blender.stackexchange.com/questions/2448/what-does-users-means-in-term-of-datablocks)

[What does "users" means in term of datablocks? - Blender Stack Exchange](https://blender.stackexchange.com/questions/2448/what-does-users-means-in-term-of-datablocks)

### About assets (Link / Append / Append Reuse Data)

[Discussion from Discord Erindale.xyz](https://discord.com/channels/314131871376080906/734779545454116918/1349676093442887710)
Question:

> I have an GN Asset Group, that I have imported in the Scene, and modified, and renamed.
> When I try to add the original Asset, Blender adds the one I have modified. Is there any way to prevent this? I want to add the original version. If I drag it to Scene, it doesn't add the original, from the Asset Browser, but the one I have in the scene, which I have edited.
> If I add it to empty scene, it works as expected.

Answer:

> Top of the asset menu changes how the assets are linked / append: if you change it to **Append** it should append a whole new datablock rather than re-using. Otherwise you could also mark the modified group no longer as an asset (that's why I always suggest to use link. append and reuse is so evil)

Question:

> If I use Linked, will the Asset change if I edit it in Library file? If so, does it update automatically, or do I have to refresh it somehow? Why they are evil?

> Asking because that is what I need now. Is there something that I should be aweare of?

Answer:

> Blender assets currently is hard-coded "append and reuse" (AAR), such as the hair node groups.

> There was a mistake in the hair node group. BF fixrd it. However because it's using AAR, even if you update your blender, the original broken node group will be used.

> And because it's AAR preventing a second duplicate copy, the group node you pull from the asset library will remain broken too

> This means: the bug fixed in the node group blender side can't be transferred to your file.

> You have to manually import the asset somehow to create a duplicate besides the broken one ([LINK](https://projects.blender.org/blender/blender/issues/111354#issuecomment-1012992))

Question

> From where I can find this preference setting?

Answer:

> Where you set the asset library folder. You can decide whether to use either method for each folder

> **Note: the benefit of "link":** It saves blender size, because data is from another blender file. You can choose to localize it if you want. Bug fix/improvements in the original file can be updated through link.

> **The downside:** Because asset is not local inside the blender file, if you use render farm, you will have to localize them first. It's an easy process in the outliner though

> BF is currently designing "embedding" which is a midpoint between link and append to solve previously mentioned issue. You can also decide when you drag it in or per session at the top of the asset browser.

### GENERAL MISC - LINKS

[Tool System - Blender Manual](https://docs.blender.org/manual/en/latest/interface/tool_system.html)
[Operators - Blender Manual](https://docs.blender.org/manual/en/latest/interface/operators.html)
[Blender crashes at startup? Delete the default startup.blend file! - YouTube](https://www.youtube.com/watch?v=1_G9AYh4v0g)
[Groups in Blender and confusion with Collections](https://www.rendereverything.com/blender-groups-confusion-about-collections/)
[How Blender Keymap Presets Works](https://discord.com/channels/267112699517861888/1276613499878903808/1312076163463643221) - *Discord link*, by Xen Wildman - Saved on disk
[How To Install or Reset Blender (The Right Way)](https://www.youtube.com/watch?v=Y_DRWnWq2fI)
[Make And Change Hotkeys In Blender](https://www.youtube.com/watch?v=bwwKQLDoOyg)
[Theres More to Blender's Custom Startup Saves Than You Realize](https://www.youtube.com/watch?v=VHlFAobw6wc)
[Understanding Blend1 Files: Do You Really Need Them? - CG Cookie](https://cgcookie.com/posts/what-is-a-blend1-file-and-do-you-really-need-them)
[You can still move the old Preferences to your new Version by hand](https://cgcookie.com/community/14898-question-about-quick-favorites?page=1#answer-61367)
[Zenplates - New File Templates Made Easy](https://www.patreon.com/posts/zenplates-new-100172069?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link)
[Application Templates - Blender Manual](https://docs.blender.org/manual/en/latest/advanced/app_templates.html)
[Link, Append, Pack & Library Overrides Explained](https://www.youtube.com/watch?v=Ieb_VGl8MTI)

[Link & Append - Blender Manual](https://docs.blender.org/manual/en/latest/files/linked_libraries/link_append.html) - These functions help you reuse objects, materials and other data-blocks from another blend-file. You can build libraries of common content and share them across multiple referencing files.

[When to link external blend files - Support / Modeling - Blender Artists Community](https://blenderartists.org/t/when-to-link-external-blend-files/1222869)

[Best way/workflow to link between scenes - Support / Technical Support - Blender Artists Community](https://blenderartists.org/t/best-way-workflow-to-link-between-scenes/1332293/4)

## CLEANING

### Cleanup to do after importing geometry

Specially, and tested, with FBX coming from Modo:

#### Rename UVs of all selected objects to the standard “uvmap”

```python
import bpy

for obj in bpy.context.selected_objects:
    
    try:
        obj.data.uv_layers.data.uv_layer_stencil.name = 'UVMap'
    except:    
        continue
```

#### Clear “custom_normal” attributes on all selected objects

```python
import bpy

selection = bpy.context.selected_objects

for o in selection:
    bpy.context.view_layer.objects.active = o
    bpy.ops.mesh.customdata_custom_splitnormals_clear()
```

#### Clear “sharp_edge” attributes on all selected objects

```python
import bpy
import bmesh

selection = bpy.context.selected_objects

for obj in selection:
    if obj.type == 'MESH':
        mesh = obj.data
        bm = bmesh.new()
        bm.from_mesh(mesh)
        
        for edge in bm.edges:
            edge.smooth = True  # Remove sharp flag
        
        bm.to_mesh(mesh)
        bm.free()
```

## MODELING

### Remove a (sds) modifier from multiple objects

Various methods:

1. BEST: Use my own addon etr_remove_subdivision_modifiers, in N-Panel > Tools

2. Or instead of removing modifier you can disable its effect via e.g. `m.show_render = False`

3. Another approach, without script:

> [How to add/remove modifiers from multiple objects at once - Blender Stack Exchange](https://blender.stackexchange.com/questions/147314/how-to-remove-modifiers-from-multiple-objects-at-once)

> You can select the objects you wish to add/remove all modifiers from, then select an object with no modifiers, hit **Cmd+L**, and **Copy the Modifiers**. This will get rid of all of them on all of the objects.

4. Also, a simpler/better/clean option: select all objects with a SDS Modifier, press Alt and Delete a SDS Modifier (it will delete all SDS Modifiers in all objects)

### Clean deltas without “apply”

To avoid breaking instance dependencies

1. Best: use my own addon etr_transforms_deltas, in N-Panel > Tools

2. Source: [Deltas to transform ⁠— Right-Click Select](https://blender.community/c/rightclickselect/lRv6/?sorting=hot)

### Select adjacent edge loops up to a certain point

[Select Multiple Edge Loops Instantly in Blender - YouTube](https://www.youtube.com/shorts/aouPOvImP50)

1. LMB-Select an edge, press CTRL-LMB-Select another far away parallel edge (this is: Pick Shortest Path)

2. In the bottom options enable **Face Stepping**

3. Menu Select > Select Loops > **Edge Loops** (available on QuickMenu)

### Use always Bevel Modifier with Weight Limit Method

This is much better than default “Angle”.

Remember to group all edges with same Edge Bevel Value under a common Selection Set, using YT-Tools Selection Sets

Never use a explicit value for SelectionSet name, like “eBevel_0.15”

Rename as:

- **eBevel_MIN**, with value depending on needs, typically, around 0.1 or 0.2

- **eBevel_MED**, with value depending on needs, typically, around 0.4 or 0.5

- **eBevel_MAX** for top, maximun 1.0 value

If more intermediate steps are needed use MIN, **LOW**, MED, **HIGH** and MAX

And then once we need to Join various object with different Bevel Amount Values we can use my “Join Equalizing Bevels”

### Tip for small bevels created with Bevel Modifier

Remember to enable Harden Normals to simulate a really soft round (like it was using more steps), but just using 1 segment.

Here's a little script that will turn on Harden Normals on all bevel modifiers in your scene ([source](https://x.com/robertrioux/status/2037537539762930075?s=12)):

```python
import bpy

for obj in bpy.data.objects:
    for mod in obj.modifiers:
        if mod.type == 'BEVEL':
            mod.harden_normals = True
```

### Shade differently active and inactive

To shade differently the active and inactive geometry in the viewport go to 3D Viewport Overlays while in edit mode and look for that Fade Inactive Geometry Checkbox and Opacity Slider

- I use a custom keymap *Alt-Ctrl-Z* for the checkbox

### Quick cut, slice, boolean, carver objects

Use **Bool Tool** Addon - In object mode > N > Edit > Auto Boolean

- CAUTION: carver tools, inside Tools, seems to freeze the app, at least in Mac…

### To change the Active Island when in Edit mode

Between several “islands” of elements, meshes or curves)

Deselect all.

Select an ELEMENT of the ISLAND that you want to make active.

Press TAB twice, to convert to Object Mode and then to Edit Mode.

### How to directly draw a handmade Curve onto a mesh with the Draw tool

1. Add Curve object, switch to Edit mode, Delete curve, take Draw tool (free-hand pen), under Tool properties (N) switch to Surface, draw a shape over your model

2. Be sure Curve object is set to 3D type

#### Also, to project a premade curve (any kind) to a surface

1. Select all points on the path,

2. Navigate to a POV where you’re looking past the curve to the object,

3. Turn on Snap,

4. Enable Face Project

5. Press G and Enter

**Also, consider using Shrinkwrap Modifier, for a live projection**

### Manual linear (array) copy of mesh islands with snap to vertices

It seems that the **Quick Snap Tool** add-on does not work in combination with Shift-R (repeat last action). So to move with copy and snape to mesh islands vertices we can do:

1. Adjust 3D cursor to the vertex that serves as anchor.

2. Transform Pivot Point: 3D Cursor

3. Snap Base Center / Snap Vertex

4. Duplicate island with Shift-D and move the copy while snapping.

### How to setup blender 3.0 in millimeters (mm) for precision modeling

[Blender 3.0, Working in Millimeters for modeling small items - YouTube](https://www.youtube.com/watch?v=kep-Fl_XcrI)

[How To Setup Blender 3.0 In Millimetres (mm) Precision Modeling - YouTube](https://www.youtube.com/watch?v=R-Vq2O-hvfo)

1. Scene / Units / Length / **Millimeters**

2. Scene / Units / Unit Scale / **0.001**

3. 3D Viewport Overlays / Scale / **0.001**

4. N Panel / View / Clip Start / **0.1 mm (#)**

5. N Panel / View / Clip End / **10000 mm (#)**

6. Camera Data / Lens / Clip End / **10000 mm (#)**

(#) You can play with these amounts depending on scene specifics and maximum/minimum sizes

### Set the origin of an object to the center of it´s bounding box

1. Change the transform pivot point to Bounding Box Center

2. Object > Set Origin > Origin to Geometry

### To align our Transform Gizmo (Move, Rotate, Scale) to a given edge loop

1. Change Transform Orientation (comma) to Normal

2. Change Transform Pivot Point (dot) to Active Element

### To manage custom Attributes for elements (verts, edges, faces…)

1. Go to Attributes panel, press the “+” icon to add a new custom empty Attribute. Choose Name, Domain and Data Type. Typically, Edge/Float, for example)

2. Go to your geometry in Edit mode, select a loop of edges, press SpaceBar for “Search” and choose Mesh > Set Attribute

3. Assign whatever amount you need, typically, 1.0

You can later select again your desired Attribute, select more geometry and Set different amounts

This can be useful for LOTS of areas in the app. For example to modulate a Bevel Modifier. Or to choose that Named Attribute inside Geometry Nodes to work with.

### Solving Warning: Multiple objects share the same data

Solving the issue with “Apply Object Transformations - Warning: Multiple objects share the same data. Make single user and then apply transformations?”

In theory, the newest versions —since 3.2— lets you apply transform on linked objects and there’s no more warning message. But I received this message… sometimes, not ever…

And, in any case (and I have suffered this in 4.4): some times, even if it works, it also fails, leaving objects with 180º or +-90º rotations. In those cases:

1. Select/linked or cmd+l and then chose object data

2. Object/Relationship/make single user/object and data

3. Now you can apply the transform or what ever you want (cmd+a)

4. To take it back: Object/Link/Link Object Data (Note that of course scaling of instances was undo in the step before. May be a problem with negative scaling)

### Add Image > Reference vs Add Image > Background

(I think it doesn’t matter too much what to use, since you can change settings once added to change to “Reference” or “Background”)

#### Reference Image

Purpose: Used as a visual guide for modeling (e.g., blueprints, sketches, anatomy charts).

Always visible in **orthographic** and **perspective** views.

**Selectable** and **manipulable** like any other object (you can move, rotate, scale, etc.).

Can appear in front or behind geometry, depending on its settings.

Useful when you want to model using the image as a visual reference from multiple angles.

#### Background Image

Purpose: Used primarily as a background aid for modeling or layout in orthographic views (e.g., front/side view).

Only visible in **orthographic** viewports (like Front, Side, or Top — not in perspective).

**Not selectable** in the 3D Viewport (less intrusive).

Stays fixed in the background and doesn’t get in the way of your modeling.

Best used when you want to trace over an image or use it as a static modeling aid.

Use **Reference** if you want the image to behave like a regular object (move/rotate/scale it, render it optionally).

Use **Background** if you want a static image that doesn’t get in your way while modeling in orthographic views.

### Select edges with same bevel weight

If you have edges with different bevel weights, e.g. 1.0, 0.5 and 0.25 while some have 0, and you want to select all with some bevel weight, whatever high it may be, you could try to select one with i.e. 0.5 and then use **Select > Select Similar > Bevel**.

To select all edges with a bevel weight > 0, select one which has 0, then **Select > Select Similar > Bevel**. Now all edges with bevel weight = 0 are selected. Then press Ctrl+I to invert the selection. Now all edges with a weight above 0 are selected.

### To convert a Blender loop to a circle

Use the Loop Tools add-on's Circle function. Select the edge loop, access the Loop Tools menu (usually through the N-panel or by right-clicking and selecting LoopTools), and choose "Circle". This will transform the selected edge loop into a circular shape.

Steps:

1. Select the Edge Loop

2. Access Loop Tools: Either press the 'N' key to open the side panel, navigate to the "Edit" tab, and find the Loop Tools section, or right-click in the 3D viewport and select "LoopTools".

3. Choose Circle

4. Adjust if Needed

### Easily apply Shape Keys to the Basis

This is a tip with [ShapeKeySwapper](https://extensions.blender.org/add-ons/shape-key-swapper-extension/) add-on

Do a custom mix and make sure that all other shape keys that should not apply to the Basis are set to 0.

open the ‘Shape Key Specials’ menu (drop-down arrow next to the ‘Shape Keys’ list) and select ‘New Shape from Mix’.

set the value of the newly created Mix Shape Key to 1, open the ‘Shape Key Specials’ menu and select ‘Swap Vertecies at Shape Key Value’

Delete the old shape keys that contributed

Set the newly created Mix Shape Key back to 0 and delete it.

### Shape Keys values to 0

Little script that will set all the Shape Keys values to 0 for the selected object:

```python
import bpy

obj = bpy.context.object

if obj and obj.type == 'MESH' and obj.data.shape_keys:
    for key in obj.data.shape_keys.key_blocks:
        key.value = 0.0
    print("All shape keys set to 0 on:", obj.name)
else:
    print("Selected object has no shape keys or is not a mesh")
```

### Boolean in Edit Mode

[You can easily boolean in edit mode without any modifiers](https://x.com/passivestar_/status/1669986059743051779?s=66) (video)

1. Select the geometry you want to cut out

2. Press Ctrl+F,R

3. ???

4. Profit!

Important: Make sure you don't have any coplanar faces when you boolean, always pre-scale things a little bit to make sure the geometry you want to cut out sticks out of geometry you want to cut out FROM. Not even the new "Exact" solver can handle coplanar faces

### Make insets with Knife

[You can easily make insets with the 'Intersect Knife' operator](https://x.com/passivestar_/status/1670356677827149826?s=66) (video)

1. Select the geometry you want to cut out

2. Press Ctrl+F,K

3. Remove the original geometry and select the newly cut faces

4. Press Ctrl+F,F to extrude along normals

Important: when you're extruding faces along normals, be sure to also press S after you press Ctrl+F,F to enable the "Even Thickness" option for a better result! So the full shortcut is Ctrl+F,F,S (yes, really)

### Make holes

[10 ways to make Holes in Blender](https://www.youtube.com/watch?v=oFg367w5Cpo) - Local file:

`.../TUTORIALS_BLENDER/Blender Secrets Book Feb 27th 2024/Vid 401-500/Blender Secrets 435 - 10 ways to make Holes in Blender.mp4`
I specially like this method

#### Cut with a polygon or closed line in front of it.

1. We have a cube.

2. Add a circle in front of it (curve, hollow polygon or fill, it doesn't matter) - It could also be a non-closed surface, like a hemisphere.

3. Select only the cube > EDIT MODE

4. CTRL + LMB to select also the circle (in 3DVP or in the Outliner)

5. Front view (or from the angle of projection that we want)

6. Mesh > Knife Project (we can activate “Cut Through”)

### Orient ortho views to selected geo

Orient ortho views to selected geo & create an oriented Empty (similar to Modo Orient View to Selected Object)

1. Select an edge to mark Y orientation

2. Shift-7 to view from RELATIVE TOP view

3. Shift-D, 2 (Cursor to Selected)

4. Go Object mode

5. Add an Empty, change Align to View. Rename and Store

### Work in a given orientation (defined by an object):

1. Select your Object/Empty

2. Go to Transforms Orientation and press "+" (this will create a New Transform Orientation) - *GREAT TIP!!!*

### Orient S as Selected Object/Empty
#### Super-slow method

Not good for component selections, just objects/empties

1. Change your transform orientation to Local

2. Select the object you want to snap to

3. Select the cursor tool in the toolbar

4. Change its orientation setting from **None** to **Transform** in N panel > Tool > Active Tool

5. Click anywhere in the viewport to move the cursor, which will align its orientation with the selected object.

6. Press Shift S > Cursor To Selected to snap the cursor location to the object origin.

#### Fast Method

Good for all, objects & components

- Use **KeKit** add-on > Select & Align > Cursor Fit & Align > Custom Keymap: **F6**

### Spin face around an axis

[Blender Docs](https://docs.blender.org/manual/en/latest/modeling/meshes/tools/spin.html) [Example](https://www.instagram.com/reel/C-Kl0OrKXiA)

1. Select top of cube

2. Front view

3. Shift-RMB to move 3D Cursor to the center of rotation

4. N > Tool Options

5. Spin tool (change Axis in N if necessary)

6. Control extrude-rotation and steps (caution: if using bottom options, then no more direct edit is possible…)

### Randomise vertices position along an axis

[Link to Blender Exchange](https://blender.stackexchange.com/questions/47849/how-to-randomise-vertex-position-along-an-axis) - Tip using Proportional Editing

1. Select the vertices you want affected, press Ctrl + I, to invert the selection, and then H to hide those vertices. Now, select a vertex of the ones left, press O, to turn Proportional Editing on, and, in the 3D view header, set the falloff to random:

2. Then, press G, to move, followed by one of X, Y or Z, either once or twice, to limit to the axis you want. Now, use the scroll wheel to enlarge the affected area so that all the vertices are affected and move the mouse until you get the results you want. Then, press Alt + H to show all hidden vertices again.

### Extend and align randomised verts on a tilted plane-mesh border

Two methods:

#### Method 1

1. Pivot Point > Active Element
2. Transform Orientations > View
3. Select Directional Edge > Shift-7 to align Top View orthogonal to Edge Selection
4. Select randomised border as verts, deselect and select desired active vert
5. S-Y-0

#### Method 2

1. Pivot Point > Active Element
2. Select Directional Edge > Transform Orientations > + (Create Orientation - Edge)
3. And also Shift-7 to align Top View orthogonal to Edge Selection
4. Select randomised border as verts, deselect and select desired active vert
5. S-Y-0

### MODELING - QUICK TIPS

#### Triangles to Quads
You can un-triangulate the selected portion of a mesh by hitting Alt-J. This is in Menu Faces > Triangles to Quads
#### Fix Near Clip on extremely small or large models

N (Side Panel) > View > View > Clip Start / Clip End (adjust both)

#### To know the coordinates of a selected vertex

Of a mesh or a curve: N > Element > Transform

#### There is not Workplane in Blender

Use **Empties-Arrows**, instead and saved them as Custom **Transform Orientations***

#### Switch Objects in Edit Mode

For quickly Switch Between Different Objects in Edit but also in Sculpt, Weight or Draw Mode just place you mouse over the other object and press **Alt-Q**

### MODELING  - LINKS

[Symmetrize](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/symmetrize.html) (in QuickMenu) vs [Mirror](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/mirror.html) (Ctrl-M)

[100+ Tips to Boost Modeling in Blender](https://www.youtube.com/watch?v=JMBMHSca_j0) - *Really great tips here!!!*

[3 ways to Slice Objects : r/BlenderSecrets](https://www.reddit.com/r/BlenderSecrets/comments/14se2cu/3_ways_to_slice_objects/)

[5 minutes of N-Gons to Quads tips](https://www.youtube.com/watch?v=DwpajQ0oQPI)

[All 54 Modifiers in Blender Explained in 10 Minutes - YouTube](https://www.youtube.com/watch?v=idcFMhoSdIc)

[Basics of Nurbs modeling](https://www.youtube.com/watch?v=1zNfh_g8jXM&t=59s)

[Boolean modeling and SDS without ngons](https://x.com/FR3NKD/status/1902371952494338215) - Useful for non extremely complex shapes

[Bool Tool just got even better with Box Carve functionality in Blender 5.2](https://www.youtube.com/watch?v=tXuK3uIasUE)

[Connect two objects using the Data Transfer modifier](https://www.youtube.com/watch?v=Eu9abP0LIb8) - by Christopher 3D

[Deform an object to follow the surface of another, using Shrink Wrap, but avoid flattening using a Lattice](https://www.instagram.com/reel/C9H1PEhMbUD)

[Draw curves on surfaces](https://x.com/cmzw_/status/1830545955491553774)

[Draw in 3D with Grease Pencil (part 1)](https://www.youtube.com/watch?v=XvkJ9R5lac4) and [(part 2)](https://www.youtube.com/watch?v=PGBs3WgkbRM) - *Fantastic tips to create handmade trees* or any organic branch structure

[Fix crappy surface shading with Data Transfer](https://www.youtube.com/watch?v=KGgYQH5A2eQ) - by Christopher 3D - *Fantastic!!!* - Use the Data Transfer modifier to fix surface shading irregularities that can arise from difficult modeling scenarios

[Fixing shading artifacts around holes using Data Transfer](https://x.com/janvandenhemel/status/1986375360695439520?s=12) - By Jan van den Hemel (quick minitutorial, ¿summarized from to the one by Christopher 3D?)

[Advanced Text Retopology](https://www.youtube.com/playlist?list=PLoSyNsQF2hFDX8gsIhcnl2j2gvhNkhPZk) - A great “course” with 8 videos with FANTASTIC modeling and topology techniques, tips and tricks. Even if you are an experienced modeler. And NOT ONLY FOR TEXTS!!!

[Flower Modeling Hack – Cloth Simulation + Sphere Method ⁣- A quick Blender cloth physics tutorial](https://www.instagram.com/reel/DIRG6l-PnV-)

[Quick Topology Hack - N-gon fix](https://www.youtube.com/shorts/ULCeBXY-D24) for those giant N-gons, like the entire silhouette of a map or an animal

[How to make your own preset in Blender with custom brushes, materials and layouts](https://x.com/cgcookie/status/1922609318907547998?s=12) - Saved and ready to go for your next project

[How to Morph Shapes in Blender](https://www.youtube.com/watch?v=2s2n_PObCnc)

[How to use instances the right way](https://www.youtube.com/watch?v=SDkkQvWzg7Y&t=36s) (downloaded)

[How to use Ngons](https://www.artstation.com/artwork/0n93EV) - I made this guide with the goal of de-mystifying and de-stigmatizing the usage of Ngons within the 3d industry

[How you can use physics to easily populate your scene with objects](https://x.com/cgboost/status/1922579171605139651?s=12)

[Is there a way to Increase the "Thickness" of an Empty?](https://blender.stackexchange.com/questions/302797/is-there-a-way-to-increase-the-thickness-of-an-empty) (answer is NO) - Alternatives

[Loop tools Curve Tool : Panel Beating](https://www.youtube.com/watch?v=goJ4LVHXkC4) - *Really great tips here!!!*

[My Sacred Vector Displacement Tip](https://www.youtube.com/watch?v=Xw2ELWEk27M)

[Blend normals between different surface meshes](https://www.youtube.com/watch?v=jgVEdS6sZsk)

[Render Equations and Code Blocks in Blender](https://www.youtube.com/watch?v=w3FkHDPvp4o) - Tutorial, including link to download free add-on to import Typst files

[Working in Millimeters for modeling small items - YouTube](https://www.youtube.com/watch?v=kep-Fl_XcrI) - Setting up Blender to work in millimeters for jewelry design

[The Jewelry and Watch Bench](https://www.youtube.com/@watchesandjewelry/videos) - Interesting channel for really small models design (jewelry, swatches, etc)

[Snap Face Project + Align Rotation to Target will “sit” our selected object in the surface of other, rotating accordingly and all interactive](https://www.instagram.com/reel/C-Vc_MqPGNS)

[Surface patch from Curves](https://www.youtube.com/shorts/s9l68RY5vLM)

[The Easy Way to Fix Ugly Shading in Blender](https://www.youtube.com/watch?v=ZdNEqv6M7p8) - Specially with high dense n-gons

[Topology Quick Tip: A surprising fact about 3-point poles](https://www.youtube.com/watch?v=2WzDWj11TzA) - A quick tip on reflowing topology with 3-point poles

## CURVES

### To change radius for all points in a Curve

And do it in an Absolute way (not Median). Two methods, both in Edit mode:

**Method A**

1. Select all points, press Alt-S, write 0

2. Go to N panel, change Mean Radius to 1

**Method B**

Select all points, Search (spacebar), write “Set Curve Radius”, write 1

NOTE: I don't find this command in any menu - *Added to quick menu*

### Completely Flat ribbons from Curves

The key is to change spline to 3D (not 2D), maintain it flat, give some Extrude amount and change the **Mean Tilt for all points to 90º**

To convert a curve seen in Front (XZ plane) into a flat ribbon we have to draw a line along the Y axis.

And then, to visualize and edit everything better, rotate it 90º in X

### To work on a symmetrical curve maintaining it symmetrical

Since the Enable Symmetry in 3D Viewport only works for meshes

- Use Mirror Modifier, work on half, and finally apply and merge (or make cyclic)

OR

- Convert curve to mesh, Enable Mesh Symmetry in the 3D viewport, and create an intermediate Geometry Nodes to convert back and visualize final output as curve. Suitable only for Poly and NURBS curve. Bezier are not adequate for this procedure…

And maybe the best approach is to start drawing a single mesh vert, enable modifiers for mirror & merge, and apply another SDS modifier. And convert all to curves at end.

### Batch change setting for all splines on a nurbs curve

Select NURBS in Object mode, Open Text Editor, paste and run this (changing **True** / **False**)

**Endpoint U**

```python
import bpy
obj = bpy.context.object
if obj and obj.type == 'CURVE':
    for spline in obj.data.splines:
        if spline.type == 'NURBS':
            spline.use_endpoint_u = True
```

**Cyclic**

```python
import bpy
obj = bpy.context.object
if obj and obj.type == 'CURVE':
    for spline in obj.data.splines:
        if spline.type == 'NURBS':
            spline.use_cyclic_u = True
```

**Bezier**

```python
import bpy
obj = bpy.context.object
if obj and obj.type == 'CURVE':
    for spline in obj.data.splines:
        if spline.type == 'NURBS':
            spline.use_bezier_u = True
```

### CURVES - QUICK TIPS

#### Tip to Move an Object to another Target Object or Empty Position
Select Object to Move, then select Target (to become active) and then **Ctrl-C > Copy Location**
#### For precise curve creation
first place your 3D Cursor (Shift-RMB), then Create Point in Object Mode, then Extend using E and XYZ. Use Grid Absolute Snapping and Rotate using R + CTRL
#### Hand drawn curves that are CURVES and not Meshes, for use with GN:
After drawing them make sure that in Spline Data > Shape > Fill Mode is set to “None” (if not, it considers it Mesh).
#### To Merge two spline sections on a single curve
Select a couple of extreme points and press F
#### To set first point in a given spline(s)
Thanks to Curve Tool add-on, go to N panel > Edit > Utilities > Spline Order > Set First Point
IMPORTANT: this does not work if curve is open. Then, make it closed temporarily (N panel > Item > Active Spline > Enable Cyclic), Set First Point and then make it open again.
#### To enable Curve Resolution Visibility
Thanks to Curve Tool add-on, go to N panel > Edit > Utilities > Curve Resolution > Set Resolution (press ESC to disable)
### CURVES - LINKS

[Bezier Curves in Blender 3.x - YouTube](https://www.youtube.com/watch?v=z4PxYAKVG9Q) - Fantastic video about drawing with beziers!!!

[Curves & Curve Modifier in Blender - Beginner Tutorial - YouTube](https://www.youtube.com/watch?v=9xNdPA65dJo)

[NURBS CURVES! Why the heck should I use them?. - YouTube](https://www.youtube.com/watch?v=jO40hu7ELfA&t=0s) (downloaded)

[Part 1, Sardines Can Packaging, tab modeling - YouTube](https://www.youtube.com/watch?v=vJb_UioIelA&t=0s) (downloaded)

[The BEST bezier curve tutorial for new Blender users. - YouTube](https://www.youtube.com/watch?v=f53GvpTIO2w) - **Updated version** (downloaded)

## FONTS

[Text - Blender Manual](https://docs.blender.org/manual/en/latest/modeling/texts/index.html)

### Fonts in blender – how they work

Blender does **not** use the operating system’s font registry (unlike Adobe applications).
Fonts must be **explicitly loaded into each .blend file**.

#### Procedure

1. Add or select a **Text** object.
2. Go to **Object Data Properties** (green “F” icon).
3. Open the **Font** panel.
4. In the **Regular** slot, click the **folder icon** → **Load Font…**
5. Select the desired .ttf or .otf font file.

From that moment on, the font is **embedded inside the .blend file**.

#### How fonts differ from textures

Fonts in Blender are **physically embedded into the .blend file**.
They are **not referenced by file path**, unlike: Textures, HDRIs, Videos, Audio, Image references…

Once loaded, the font becomes part of the Blender file itself.

#### Practical consequence

After loading a font and saving the .blend, the original font file can be deleted from disk and:

- The text will still work
- The render output will remain identical
- The font will remain available inside the scene

The font is now stored internally within the .blend.

#### File portability

Because fonts are embedded:

- The file can be opened on any machine
- No system fonts are required
- No font substitutions occur
- Renders are 100% reproducible

Blender treats fonts as **embedded assets**, not as system resources.

#### Pipeline recommendation

For asset management, keep your project fonts in a dedicated folder such as:

`/assets/fonts/`

Then load them into Blender so they become embedded in the project file.

## PHYSICS

[Particle System Panel - Blender Manual](https://docs.blender.org/manual/en/latest/physics/particles/particle_system_panel.html)

[Change Particles Size Over Lifetime - YouTube Tutorial](https://www.youtube.com/watch?v=DhTd5Hhaahk)

### Use a collision object to kill particles outside a mesh

**Goal:** Only keep particles inside a given mesh (e.g. a cube or sphere… or a bottle of wine), and remove any that go outside.

1. Create your emitter
	- Add a Plane or any mesh to emit particles.
	- Set up your Particle System (emit from Face, Render as Object, etc).

2. Create the containment mesh
	- Add a Sphere or Cube (let’s say it’s a Cube) that defines the allowed volume.
	- Scale and position it as needed so particles should stay inside this mesh.

3. Enable Collision on the Cube
	- Select the Cube.
	- Go to the Physics tab > Collision.
	- Check "Kill Particles".
	- Important: This will kill particles that collide with the mesh.
	- But in our case, we want to reverse that logic.

#### Workaround Trick to Invert Behavior:

To kill particles that go outside the cube instead of those that hit it from the outside > Invert Normals (for closed meshes)

- Enter Edit Mode on the Cube.

- Select all (A), then press Alt+N → Flip normals.

Now particles inside the mesh won’t be killed, but particles that exit (collide with the inverted surface) will be killed.

Blender’s particle collision treats the outside of a mesh as the "colliding" surface. Flipping normals makes the "inside" act as the "outer" side.

#### Notes & Caveats:

- The collision detection isn’t mathematically perfect for very fast particles, so you may need to adjust substeps (under Physics > Particle settings > Integration).

- This only works well for closed meshes like cubes, spheres, etc.

- If your particles have no velocity, or they spawn already outside the cube, this method may not stop them immediately. Consider adding a Force Field (e.g., Turbulence or Drag) to push them and make them interact.

### Liquids

[Introduction to Fluids (Liquid & Gas) - Blender Manual](https://docs.blender.org/manual/en/latest/physics/fluid/introduction.html)

[Liquid Settings - Manual](https://docs.blender.org/manual/en/latest/physics/fluid/type/domain/liquid/index.html)

[Flow - Blender Manual](https://docs.blender.org/manual/en/latest/physics/fluid/type/flow.html)

[Common Mantaflow Problems & How to Fix Them! - YouTube](https://www.youtube.com/watch?v=2O0QcLpAxV4) - Downloaded, very interesting tips and tricks.

#### Add liquid to fill volumes - Basic steps

- Add any object like a Sphere

- Select Sphere in Object Mode > Object > Quick Effects > Quick Liquid

- This will create a Liquid Domain, a box bigger than your Sphere, with a small cube at bottom corner

- Press Play: you will see the animation of particles moving from Sphere to the bottom or our cubic Liquid Domain

- Select the Liquid Domain and go to Physics Tab: you can disable Liquid (particles) or Mesh

#### To fill our Liquid Domain with a constant flow of liquid coming from Sphere:

- Move the Liquid Domain to place bottom at Z=0

- Move the Sphere to up, while inside the Liquid Domain.

Play again to check all remains working properly.

- Select Sphere > Physics > Flow Behavior > Change from Geometry to Inflow.

- Select the Liquid Domain > Physics > Cache > Change Type from Replay to Modular and Enable Resumable.

- Select the Liquid Domain > Physics > Settings > Bake Data

Play to see the resulting liquid-particle animation.

Select the Liquid Domain > Physics > Mesh > Bake mesh

You can now disable Liquid to hide particles and show only animated Mesh (but remember to enable again, if further simulations are created!)

- You can scale Sphere to be smaller.

- Free Mesh and Free Data to remove stored cache.

- Bake Data and Bake Mesh to see new results.

To Scale both Liquid Domain or Mesh source use always Object Mode, then Apply Scale with **Cmd/Ctrl-A > Scale**

#### To fill any custom geometry (like a bottle, cup or glass):

- Create the object, with a thickness (you can use Solidify modifier)

- Put the object completely inside the Liquid Domain (resize this if necessary)

- Select the cup > Physics > Press on Fluid Button > Type > Effector

- Generate a new data cache

- Play with cup > Physics > Surface Thickness if system does not recognize thickness (increase to something like 0.5 to start). Alternately you can use a thicker object just for the simulation, instead of final rendered thin cup…

- And also, you can use Boolean to remove extra volume from Liquid.

- Use Smooth and Weighted Normal modifiers to smooth resulting surface.

#### Tips:

If you change animation duration, from 250 to 150, remember also to change it at Physics > Cache

Physics > Settings > **Time Scale** will create a slow motion

Physics > Settings > **Resolution Divisions** will create a finer-detail simulation, both for liquid-particles and for resulting mesh (change from 32 to 48 for example)

**Upres Factor** is the factor by which to resolve the resolution of the mesh. x2 means it’s double resolution than Resolution Divisions (x1 gives greater polys, x3 smaller)

**Particle Radius** ishow much area is covered by a particle and thus determines how much area around it can be considered as liquid. A greater radius will let particles cover more area.

- Leaving a default 2 will inflate a bit the resulting mesh

- Leaving 1 will create a mesh more similar to the original volume occupied by particles BUT it will create holes easily

Generally speaking: use a low Resolution Divisions (32-48) to design your animation, then increase to 64-96-128 or even 256 for final detailed result (will increase calculation times a lot… but it’s necessary)

**Speed Vectors** creates a velocity Attribute which records the velocity of each vertex per frame. These will be used (automatically) when rendering with motion blur enabled

For better final result add a Smooth modifier, with Factor 1

---

**Al these tips are from these tutorials:**

[Water Filling Invisible Volume [Blender Tutorial]](https://www.youtube.com/watch?v=SjvDmf4ovv4) (downloaded)

[Fill a Cup with Water in Blender 3D! - YouTube](https://www.youtube.com/watch?v=GDTncMGdLWs) (similar, but a good complement)

[Fill a bottle with liquid - Blender Stack Exchange](https://blender.stackexchange.com/questions/170112/i-am-trying-to-fill-a-bottle-with-liquid)

[Fill any Object with Fluid in Blender [Mantaflow] | English - YouTube](https://www.youtube.com/watch?v=3ud6Hozy0vw)

## GREASE PENCIL

**Tip for a Grease Pencil stroke:** set the 3D cursor to your vertex by selecting it and then using **Shift+S** and then Cursor -> Selection and then read the 3D cursor position in the View panel, View Properties.

To change Radius for any GP stroke (or selected GP vert) use **Alt-S**. Like in radius for Curves

[Applying gradient as stroke is drawn (Grease Pencil, Blender) - YouTube](https://www.youtube.com/watch?v=0-zqwUTNEUI)


## COLLECTIONS, HIERARCHY & OUTLINER

### About collections and hierarchies with common parents but uncommon siblings

#### Strange situation for a Blender newbie

Imagine this scene in Blender

- Collection 1 with these items: a parent Empty with 2 objects: a Cube and a Sphere

- Collection 2 with these items: the same parent Empty with same objects: a Cube and a Sphere

This is: initially, the Empty belongs to two collections, 1 and 2 and also the children, Cube and Sphere.

Now imagine that we remove the Cube from Collection 1 and also remove the Sphere from Collection 2

OK, now all works as expected, but Cube still appears **greyed** under Empty inside Collection 1

And, on the other side, the Sphere still appears **greyed** under Empty inside Collection 2

(and in both cases, without the eye and camera icons for visibility, and also without the data)

This seems like a strange behavior. But it's complete valid, inside Blender, because **the same Object or Empty can be inside two different Collections or even inside more!**

#### Longer explanation

**In Blender, hierarchy (parent–child) and collections are two separate systems.**

When you parent objects under an Empty, the Outliner will always show the child objects indented under the parent — in every collection where the parent appears.

If one of those children does not actually belong to that collection, Blender shows it there but greyed out. That’s Blender’s way of saying:

>“This object is part of the parent’s hierarchy, but it does not belong to this collection.”

The absence of the eye/camera icons and datablock link is also expected — because in that collection, the object has no membership.

You can’t make it disappear completely from the Outliner under that parent, unless you either:

Break the parent–child relationship (so the child isn’t forced to display under the parent in collections where it doesn’t belong), or

Unlink the parent from one of the collections (so the whole parent/child group isn’t duplicated in multiple collections).

#### Conclusion:

**It’s not a bug, it’s just how Blender’s Outliner works.** Greyed-out children are Blender’s way of making sure you can still “see” the hierarchy, even if collection membership doesn’t match. If you want a perfectly “clean” collection listing (no greyed entries), the only way is to avoid parenting across collections, or to restructure your collections so each parent–child set only lives in one collection.

### To move a complete hierarchy from one Collection to another

Select parent / RMB > Select Hierarchy / Move.

We can also select the parent, Shift-G, and then in the popup select “Extend”.

### TIP: different 3D views can show different Collections

Just go to N panel > View > Collections and enable Local Collections to also decide there which collection is visible and which not for that particular view

### Vertex Parenting Feature

NOTE: we can select any object (mesh, camera, light…), then a second mesh object (to make this one ACTIVE), change to Edit mode, select a SINGLE VERT in the mesh object, and then, with Cmd/Ctrl-P we define a “Vertex Parent”. Optionally we can also select 3 Vertices, instead of 1 (but not 2).

### Hide in Viewport

[Hide in Viewport, a crappy Blender default. How to fix it. - YouTube](https://www.youtube.com/watch?v=cL2680MYc0M)

- Difference between Hide in Viewport and Disable in Viewport

- An awesome [little addon](https://github.com/SuperFLEB/BlenderEditCollectionAddon) called Edit Instanced Collection.

### Scene vs Layer vs Collection
[What's the difference between Scene, Layer, and Collection?](https://blenderartists.org/t/whats-the-difference-between-scene-layer-and-collection/1185270)

## WEIGHT

### How do I reset all weights in Blender?

Go into edit mode. Select all vertices. Hit **Ctrl-G** to bring up vertex group specials and select “remove from all”

## RIGGING

### RIGGING - QUICK TIPS

#### Move Parent without affecting Children

Transformations can be limited to affect only the parents. The setting can be found in the N Panel > Tool > Options.

#### Copy & Paste Global PSR Transforms

Use “Copy Global Transforms” add-on, located in 3D Viewport > N-panel > Animation tab.

#### To Fix Roll on Bones

To Fix Roll on Bones and get a nice overall rotation around longitudinal bone Y use the command **Shift-N** in Edit Mode. **NOTE: Better to do this before creating the IKs**

---

### Copy & Paste Bone Constraints

And also other stuff, between Bones:

1. Switch to **Pose Mode.**

2. Select the Target Bones.

3. Then select the Source Bone with the constraint.

4. Press **Ctrl-C** (also in Mac: Ctrl-C, not Cmd-C) and choose Copy Bone Constraints to transfer all constraints from the source bone to the selected target bones.

---

### Copy Rotation Constraint with an influence higher than 1?

1.0 is the maximum influence for any given constraint, so setting it beyond 1.0 is impossible.

Using the **Transformation** constraint, you could easily map any kind of simple transformation from one object to the other. [In the following example](https://blender.stackexchange.com/questions/5108/is-there-a-way-to-put-a-copy-rotation-constraint-with-an-influence-higher-than-1), the object being constrained will rotate twice the amount of Cube_target's rotation in the Y axis.

Checking **Extrapolation** will extend the transformation beyond stated range of values.

---

### Basic rigging procedure and tips

**All learned from this great tutorial:**
[Let's Learn Blender!: Character Rigging 101 (Armatures, Bones, & IK)](https://www.youtube.com/watch?v=iZBLtooU2Cs)

- Add a first Bone using Add > Armature

- Modify this and further Bones in Armature **EDIT** Mode

- For Bones is a good thing to use the Move Gizmo (to select and move both the Start/Root/**Head** & End/Tip/**Tail** Joints and the Bone **Body** itself)

- Activating the Armature Data > Viewport Display > **Axes** checkbox will show local axes for each bone’s tip.

- The **Y axis** is always aligned **along the bone**, oriented from root to tip, this is the “roll” axis of the bones.

- Also, showing the **Names** for bones is a good thing. And enable the **In Front** option.

- Select the Bone Tip, press E to extrude and creating a new child bone

- Selecting the Body you can RMB > Subdivide the bone in two ones (parent and child)

- Being in EDIT mode you can move any Root, Body or Tip, freely.

- Press F2 to rename bones. As “spine1” or “legUp.R”

- Better to use lowerCase.L and lowerCase.R structure for naming.

- Use **.L** and **.R** suffixes to naming **Left** and **Right** bones (this allows automatic recognition for symmetrize)

- Use **Cmd/Ctrl-R** to manually Roll a bone. Look at N panel > Item for more details (with a bone selected)

- While in Armature **EDIT** we can see the Head & Tail coordinates for each bone.

- Both in Armature **OBJECT** or **POSE** mode all standard coordinates will be zeroed.

- While in **POSE** mode we can change (and animate) the BONE coordinates. Caution: do not change the **OBJECT** coordinates.

- No matter how change the Pose, you can return to default by Pose > Clear Transform > All (added to Quick Favorites)

**To add or replace Parent for a given Bone:** go back to **EDIT** mode, select bone to be child, then Shift select the one to be parent, and **Cmd/Ctrl-P** and choose **Keep Offset**

#### To create ik controllers

- First, in **EDIT** mode, duplicate the last bone for your IK chain (example: first bone for hand)

- Make it longer going to N panel > Item > Transform > Length

- UN-PARENT the extra added node going to Properties > Bone > Relations > Parent (click that small “X”)

- Also, disable the Deform checkbox, below. Call it something like **hand_IK.L**

- Then go to **POSE** mode, select the PREVIOUS bone, Properties > Bone Constraints > Add Bone Constraint > Inverse Kinematics

- Choose for Target > **Armature**

- Then choose for Bone > **hand_IK.L** (or whatever was your chosen name) It will become soft-yellow

- Change Chain **Length** to something appropriate (like 2, 3 or whatever numbers of bones must be considered for the IK operation - “0” Means all bones to up)

- Also: while in **POSE** mode select the **original hand.L** go to Properties > Bone Constraints > Add Bone Constraint > Copy Rotation

- Choose for Target > **Armature**

- Then choose for Bone > **hand_IK.L** (or whatever was your chosen name) It will become soft-green

#### To create a pole vector for an ik chain

- Being in **EDIT** mode, select a Tail for the Bone for the Elbow, press E to extrude along convenient direction (back, for an arm). Then select this new bone and UNPARENT going to Bone > Relations > Parent (click that small “X”). Also: disable “Deform”.

- Then you can move away this special bone (to be used as Pole Vector). Name it **arm_PV.L** (or whatever you find convenient)

- Then change to **POSE** mode, go back to the bone where you added the IK Constraint (will be soft yellow)

- Just below the Target and Bone for IK, you will see a “Pole Target” field. Choose Armature. A new Bone empty field will appear, choose the **arm_PV.L** special Pole Vector bone.

- CAUTION: if your armature rotate in an strange way, change the **Pole Angle** to a convenient angle (change the pose to create a more evident flexion, if necessary).

- Remember to disable “Deform” for both PoleVectors and IK special bones

#### Special collections for bones

- Go to Armature > Bone Collections to create new Collections to assign your bones. For example “VisibleBones”, “HiddenBones”, “PoleVectors”, etc…

- Then, you can use **M** key to move bones between Collections. And Hide or Solo those Collections.

- Change to **EDIT** mode to create a new general “**Controller**” bone (at bottom) to make all un-parented bones children of it (like PVs, IKs and top hierarchy bones). While in **EDIT** mode use CMD/CTRL-P to parent each main bone to this general controller - Also, while en **EDIT** mode, disable Deform on this special bone

#### Symmetrize

Being in **EDIT** mode, select ALL your bones (both the marked with .L but also the central ones) and choose Symmetrize from RMB or Armature menu

- The bones that already have their symmetric counter part won’t symmetrize again

- And the bones without **.L** nor **.R** suffix will remain alone

#### To bind your armature to your mesh

- Important: be sure to temporarily disable Edit > **Lock Object Modes**. Also disable **X-Ray** mode (if it was enabled)

- Then, make sure that the latest time you selected your armature was in **POSE** mode.

- Enable **OBJECT** mode, select your mesh > Then press **SHIFT** and select your armature (it should change automatically to **POSE** mode) > Also, Select any bone, it doesn’t matter.

- Finally press **Cmd/Ctrl-P** (like to Parent) but mark **Armature Deform > “With Automatic Weights”**

#### To remove all armature influence

- You will need to remove the parent and remove the armature modifier from the mesh.

- Select the mesh object and press **ALT-P -> Clear** Parent to remove parenting. Go to the modifier properties and remove all armature modifiers with the X on the right. Do not apply the modifier nor apply it as a shapekey.

#### Best an quick method to bind your armature to your mesh rigidly

This is: objects to Bones like in a robot, insect or armature, without “bending” deformations

- Object Mode > Select a single o various objects to be controlled by a single bone

- Shift-Click to also Select the Armature (still in Object Mode)

- Ctrl-Tab to change to Pose Mode

- Select the single Bone

- Parent using Cmd-P > “Bone”

To Un-parent just use Alt-P > Clear and keep transform

This method really makes each bone a PARENT for our objects. There is also another method, using “Armature Deform / With Empty Groups”, that created Weights and then you need to assign full weights for bones to object vertices (details are below)

### Using bones for all in blender rigging

In Blender rigging, it is orthodox (and very common) to use bones for everything:

- Bones for deformation (the ones that actually influence the mesh).

- Bones for mechanics (IK targets, pole vectors, constraints, etc.).

- Bones for controllers (the ones animators grab and move around).

So when you see IK targets and pole vector controls built as bones in tutorials, that’s not a quirk of the author — that’s the standard Blender workflow.

#### Why Blender does it this way

- Armature object design: Blender groups all bones inside a single Armature object. Unlike Modo/C4D, you don’t have a free hierarchy of “nulls” and “joints.” Everything inside the Armature has to be a bone.

- Animation workflow: Bones can live in different layers, can be marked as Deform or Non-Deform, and you can use custom bone shapes so they look and feel like nulls, arrows, circles, etc. to the animator.

- Constraints: IK and Pole Vector constraints in Blender are designed to point to bones inside the same armature, not external empties/nulls. This keeps rigs compact and self-contained.

- Portability & performance: A rig that’s “all bones” is easier to transfer, duplicate, and animate efficiently, without mixing multiple object types.

#### Equivalent to “nulls/locators” in Blender

The non-deforming control bones in Blender are effectively your locators. Best practice is:

- Mark them as Non-Deforming (so they don’t affect the mesh).

- Put them in separate bone layers (so animators see only the controls they need).

- Assign custom shapes (so they look like curves, circles, arrows, etc. instead of bones).

That way, from an animator’s perspective, they’re not “bones” at all — they look and behave just like nulls or controllers in Modo/C4D.

So yes: in Blender the orthodox way is to use bones for both deformation and control. Empties/nulls exist, but they’re rarely used in rigs beyond some helper objects — everything important usually stays inside the armature as bones.

### How to use “With automatic weights”

And do it in a “selective” way on different objects of a single armature.

If you want to use “With Automatic Weights” in a “selective” way on different objects of a single Armature, Blender only follows one internal logic:

>It considers all bones with Deform enabled at the moment you run the parenting operation.

Therefore, if you apply this method several times (abdomen, head, elytra, legs…), you would indeed need to keep turning the Deform flag ON and OFF for each round of “With Automatic Weights” if you want each object to be weighted only to its own subset of bones.

That is the expected behavior.

#### Ways to avoid this constant Deform ON/OFF toggling

Here are a few more convenient workflows commonly used by animators:

##### A. Use With Empty Groups from the start

- Parent each object to the armature with With Empty Groups.

- Blender creates vertex groups only for the bones you have selected at that moment (this is not exactly so: no matter you select a single bone, it creates empty vertex groups for all bones in an armature. Just remove the ones not needed for each object)

- Then, in Edit Mode, select the mesh area and press Assign (Weight = 1) for each group.

- After that, if you need smoothing, you can switch to Weight Paint and use Auto Normalize.

> Advantage: you never have to touch the Deform flag.

> Disadvantage: you don’t get the “magic” of automatic calculations, but for rigid pieces (head, elytra, abdomen) simple weight 1.0 is enough.

##### B. Manual “Weight Collection” with Vertex Groups

If the pieces are rigid, automatic weights are basically unnecessary.

- Parent simply with Armature Deform > With Empty Groups (or even Parent > Object and add an Armature Modifier manually).

- Create the vertex groups that correspond to each bone and assign all vertices to 1.

> Especially quick if the pieces are already separated.

##### C. Run Automatic Weights once for the WHOLE model

Another common strategy:

- Deform the entire insect at once using With Automatic Weights (with all deform bones enabled).

- Then, for each object, delete the vertex groups you don’t need (Object Data Properties > Vertex Groups > Remove).

- Since the pieces are separate objects, cleaning groups only takes seconds.

> Sometimes it’s actually faster to clean groups than to toggle Deform repeatedly.

##### Practical recommendation for an insect divided into rigid parts:

**Fastest and cleanest:**

- With Empty Groups + assign vertices with weight 1 to the bones that actually move each piece.

- (No Deform toggling and no reliance on auto-weight.)

**If you truly need smooth auto-weights (for example a soft abdomen):**

- Do the abdomen first with Deform enabled only on those bones, then re-enable the rest for the next parts.

- But for head/elytra/legs, automatic weighting doesn’t add much.

In short: yes, with pure Automatic Weights you would need to toggle Deform each time,

But for a model split into separate pieces it’s usually more efficient to skip auto-weight altogether and work with Empty Groups + Assign.

### Bendy bones (bbones) quick setup

Next steps are from [Blender 2.78 Bendy Bones Tutorial - YouTube](https://www.youtube.com/watch?v=BsJ3Grq_3GM) (old, but simple and direct - *Downloaded*)

- Add an Armature (a single bone)

- In EDIT mode change Display for that bone to B-Bone instead of “Armature Defined” and subdivide it in 3 bones

- Make first and last very small, leaving a longer bone in the middle (quick way: scale the middle

- First one in Outliner (Parent) is the HEAD and last one is the TAIL. Middle will be the BBONE (rename all)

- Also, increase segments for BBONE to something like 10

- While in EDIT mode, select the Tail and **Alt-P** to Clear Parent

- Change to POSE mode, select the BBONE > Constraints > Add Stretch To

	- Target: Armature

	- Bone: Tail

- Now you can freely move the Head and Tail and BBone will adapt and stretch to both.

- To allow rotation for Head and Tail and having your BBone follow both:

- Select the BBONE > Bendy Bones

	- Start Handle: Absolute

	- Custom: Head

	- End Handle: Absolute

	- Custom: Tail

Now you can move and rotate both the Head and Tail and our BBone adapts fine to both transformations and also stretch

More advanced setup:

[The Most POWERFUL Way To Rig Bendy Bones in Blender - YouTube](https://www.youtube.com/watch?v=s0xE0G_uhZs&t=177s) (more complete and complex - *Downloaded* and also the sample **“Ultimate Bendy Bone Rig”** .blend)

### Shape keys by bone transforms

Shape keys (a.k.a. morph targets) can be driven by bone transforms, usually location, rotation, or scale.

So we can:

- Create a control bone (for example “CTRL_Eyelid” or “CTRL_Nose”)

- Move or rotate that bone

- And have the Shape Key value automatically change accordingly.

#### How to Set It Up

- Select your mesh (the one with the Shape Keys)

- Go to the Shape Keys panel

- Right-click on the Value slider of the Shape Key you want to control

- Choose “Add Driver”

- Open a Graph Editor → Drivers view

#### Then set up your driver:

- Type: Average Value (usually fine)

- Object: your Armature

- Bone: the control bone you want to use

- Transform Channel: for example X Location or Z Rotation, usually Local Space

- Adjust influence (min/max) using the “Driver Variables” and “Modifier” settings until the value goes from 0 → 1 nicely when you move/rotate the control bone.

#### Typical Workflow

- Create a small custom bone near the area you want to control (eyelid, nose, etc.) - Disable Deformation

- Assign it a custom shape (like a circle or arrow) in Pose Mode so it’s intuitive to use

- Lock unnecessary transforms (e.g., only allow movement in one axis)

- Drive the Shape Key with that transform

- Add a Limit Location (or Rotation) constraint to the control bone to limit min and max transformation. Owner: Local Space. Enable “Affect Transform”

You can even create multiple drivers for one Shape Key (e.g., both left and right eyelids), or blend several Shape Keys from one bone using different value ranges.

## CONTINUE CLEANING HERE ---------

### How to add an f-modifier to an animated channel in a bone, but transforming it in world coordinates, and not local

Simply use an extra floating control bone (inside the same Armature) oriented as you need:

**Why it’s a great approach**

Keeps everything inside the Armature → no external objects cluttering the scene.

Fully pose-space aware → you can still work in Pose Mode, with keying sets, bone groups, colors, etc.

More stable and portable → exporting, appending, or reusing the rig won’t lose the link.

Can use bone constraints directly → no need for object-level constraints.

**Setup Steps for this “Floating Noise Bone” method**

In Edit Mode of your Armature, add a new bone — call it NoiseDriver or whatever makes sense. Place it anywhere convenient (it doesn’t need to be connected and deformation must be disabled).

In Pose Mode, select that bone and add your Noise F-Modifier to its Location X F-Curve (or whichever world axis you want).

Now, on the target bone (the one you want to wiggle):

Add a Copy Location constraint.

Target: NoiseDriver.

Both Target Space and Owner Space → World Space.

Influence controls how strong the noise is.

Now your bone will follow the world-aligned noise, but everything stays neatly contained inside the armature.

**Important to use:**

TARGET: **Local Space (Owner Orientation)**

OWNER: **Local Space**

By this way you’re telling Blender:

*“Take the noise movement in the target bone’s local space, but first interpret its axes in the owner’s orientation.”*

So if your whole armature (or its parent object) is rotated in the world — for example, the character is walking uphill, or the whole rig is turned 45° — the noise still travels in what feels like global X relative to the rig, instead of being baked into absolute world space.

**Why this works so elegantly**

The Owner Orientation option effectively re-maps the target’s local axes through the owner’s transform matrix.

That means the “floating noise bone” stays inside the armature hierarchy, yet its motion is evaluated consistently when the rig is rotated or scaled.

This makes the noise transform-agnostic — a must for reusable rigs or linked characters.

---

### Fk/ik switch setup

See also this video: [How to Quickly Rig IK FK in Blender (For Beginners)](https://www.youtube.com/watch?v=xEnu_EsnzjI) (downloaded)

**Basic Concept**

You’ll have two parallel control systems:

FK Chain – You directly rotate each bone for precise posing.

IK Chain – You move a single controller (with a Pole Target) to pose the whole neck at once.

Deform Chain – The actual bones that deform the mesh.

Then you blend between the two systems with a custom “IK/FK” slider

STEP-BY-STEP SETUP

1. **Duplicate Your Deform Chain**

Let’s assume your neck bones are:

neck_01 → neck_02 → neck_03 → head

Create:

FK Chain: neck_FK_01, neck_FK_02, neck_FK_03, head_FK

IK Chain: neck_IK_01, neck_IK_02, neck_IK_03, head_IK

Deform Chain: the original ones (these deform the mesh)

Each chain should be a separate copy (but aligned perfectly).

**2. Add an IK Constraint**

On neck_IK_01, add an IK constraint:

Target: an IK controller bone (e.g., neck_IK_CTRL)

Pole Target: a Pole Vector bone (optional, for twist control)

Chain Length: number of neck bones (e.g., 3)

Now moving the IK control will pose the IK chain.

3. **Add Copy Rotation Constraints to the Deform Chain**

Each Deform Bone (neck_01, neck_02, …) should copy from both the FK and IK versions:

Constraint 1: Copy Rotation → neck_FK_01

Constraint 2: Copy Rotation → neck_IK_01

Now you’ll blend between these two using a driver.

**4. Create a Custom Property on a Control Bone**

Add a custom property (e.g. on a main “Neck Settings” bone):

Property name: IK_FK_Switch

Default value: 0.0

Min: 0

Max: 1

**5. Drive the Constraint Influence**

For each Deform Bone:

FK constraint Influence → driven by 1 - IK_FK_Switch

IK constraint Influence → driven by IK_FK_Switch

Now:

When the property = 0 → Full FK (manual rotation)

When the property = 1 → Full IK (controller)

You can smoothly blend between them too.

---

**CREATE A SPLINE IK (for a Long Neck or a Tail)**

**1. Create the Neck Bones**

Say you have:

neck_01

neck_02

neck_03

neck_04

neck_05

head

All connected in a chain.

**2. Create a Curve**

Add a Bezier Curve (e.g. along the neck).

Align it roughly to your bones in Edit Mode.

Name it something like neck_curve.

**3. Apply Spline IK**

Select your neck bones (not the head).

Go to the last bone in chain (neck_05) → Add Constraint → Spline IK.

Target → neck_curve.

Chain Length → 5.

Uncheck “Use Curve Radius” (optional).

Enable “Y Stretch” if you want subtle elongation.

Now all neck bones follow that curve — beautifully smooth bending, no twist flips.

**4. Add Control Bones for the Curve**

To make it animator-friendly:

Add 3 control bones:

neck_base_ctrl → controls start of curve.

neck_mid_ctrl → controls mid curvature.

neck_tip_ctrl → controls top/head zone.

Use Hooks Hook Modifiers” **(*)**

Now moving or rotating those control bones shapes the curve → the whole neck follows.

**(*) Hook Curve Points to Bones**

Still in Edit Mode on the Curve:

Select one control point (or handle) you want the base bone to control.

(e.g. the first vertex of the curve)

Hit **Ctrl + H** → Hook new Object (will create a new Empty)

Now go to your Modifier Hook and choose your Armature’s bone (neck_base_ctrl).

Repeat for each region (bezier points and handles)

---

### Controlling child bone pivot placement in blender

Specially useful for mechanical rigs

**Option 1 — Disconnect and Reposition (Simple & Practical)**

Disable Connected on the child bone, then freely move its Head to any position (e.g., mid-point of the parent bone).

Keeps the parent–child hierarchy

Fast and flexible

Ideal for mechanical rigs when you just need a different pivot location

**Option 2 — Intermediate (Dummy) Bone (Structured & Precise)**

Insert a small helper bone at the desired pivot location.

Parent chain becomes: A → Dummy → B

Keeps everything properly connected

Provides clean, explicit articulation points

Preferred for more precise or scalable mechanical setups

**Option 3 — Separate Structure from Visualization (Advanced)**

Use two layers of bones:

Technical bones (optimized for IK and constraints)

Visual/deform bones driven via constraints (e.g., Copy Transforms)

Maximum control and flexibility

Clean rigs without compromising behavior

Common in more complex or production-level rigs

**Key Insight**

Bone position is not just visual — it defines the actual pivot and affects the mechanics. Adjusting it changes the system’s behavior, not just its appearance.

---

[Pose Library - Blender 4.5 LTS Manual](https://docs.blender.org/manual/en/latest/animation/armatures/posing/editing/pose_library.html)

---

[Rigify - Blender 4.4 Manual](https://docs.blender.org/manual/en/latest/addons/rigging/rigify/index.html) (for the moment I prefer to have it **disabled**)

Rigify helps automate the creation of character rigs. It is based around a building-block approach, where you build complete rigs out of smaller rig parts (e.g. arms, legs, spines, fingers…)

---

[richstubbsanimation - YouTube](https://www.youtube.com/@richstubbsanimation) - Lots of GREAT tutorials on rigging here. Visit also the shop with free assets: [Buy Rich a Coffee](https://ko-fi.com/richstubbsanimation/shop)

[How to Quickly Rig IK FK in Blender (For Beginners)](https://www.youtube.com/watch?v=xEnu_EsnzjI) (downloaded)

[Setting Up an IK Arm Rig](https://www.youtube.com/watch?v=vZaNZhAoMts&t=0s)

[The Secret to Preserve Volume in Blender](https://www.youtube.com/watch?v=_5H-vXYotUU)

[Simple IK Solver - Tutorial for Articulating Single Plane Mechanics with Geometry Nodes](https://www.youtube.com/watch?v=kmFt4-SkKIo)

[Spline IK Constraint - Blender 4.4 Manual](https://docs.blender.org/manual/en/latest/animation/constraints/tracking/spline_ik.html)

[The Easiest Way To Rig Creatures In Blender (For Beginners) - YouTube](https://www.youtube.com/watch?v=rOcNY00Mv1I) (using Rigify)

[DemNikoArt - YouTube](https://www.youtube.com/DemNikoArt) - Tutorials on mechanical rigging

- [Mechanical Rigging - A Blender Tutorial - YouTube](https://www.youtube.com/watch?v=nyC57_HN6B0) - how to set up a rather complex rig for a robot hand

[Level Pixel Level - YouTube](https://www.youtube.com/@LevelPixelLevel) - Fantastic tutorials on mechanical riggins

- [Level Pixel Level](https://levelpixellevel.gumroad.com/) - Files with free examples

---

## UVS

**Flip or adjust the mesh in general while keeping the image texture static**

While in 'Edit' mode, click on 'Options' just below the 'Viewport Shading' modes on the top right corner, then click on 'Correct Face Attributes'. Now when you scale the mesh on the X-axis by -1, it will flip the mesh while keeping the image texture in place.

---

**IMPORTANT:** take always a second look to UVs in POINT mode to **detect if vertex are in RED (pinned)**, specially before proceed to Packing, using tools like UVPackmaster

---

If a given UV Map for an object hast a name like **“UVMap.001”** and you can not simple rename to **“UVMap”**, try this:

**Object > Relations > Make Local > All**

**OR ALSO THIS** (probably even better):

Go to **Data > Attributes** and search for an existent (not used) “UVMap”, if any, delete and create your new “UVMap” in **Data > UV Maps**.

---

[How to convert UV to mesh in blender](https://blender.stackexchange.com/questions/231662/how-to-convert-uv-to-mesh-in-blender) - See Update for Blender 3.2 and up

---

[A UV Unwrapping Guide – Blog — Blender Studio](https://studio.blender.org/blog/a-uv-unwrapping-guide/) - Collection of advice for specific cases you might need a UV map for and how to unwrap your UV maps.

[Packing UV Maps for Production – Blog — Blender Studio](https://studio.blender.org/blog/packing-uv-maps/) - All about packing them together into a useful arrangement. You could pack all of them into a single 1:1 UV tile but there are more powerful tools at your disposal

---

**To “rectify” UVs**

Select a polygon that is already “almost” perfectly orthogonal. If necessary, rotate the entire UV island so that it is close to being orthogonal.

Make sure that this polygon is the ACTIVE polygon, so that it has been selected last also in 3D (it is not enough to select it only in UVs).

Use RMB with its 4 edges to align them horizontally and vertically.

Move to faces, select all (A), RMB > Follow Active Quads

In addition to that:

["Using pin and relax is a great way to straighten a lot of UV layouts in #Blender without plugins." / X](https://twitter.com/kasperarnklit/status/1788543991668949285)

---

**To center the selected UVs in the middle (or in other places we need)**

Enable built-in Add-on Magic UV. Now, there is an easy option to align the Cursor to the center of UV space:

1. In the menu bar go to UV, at the bottom section of the dropdown menu choose "Align UV cursor", then choose "Center".

2. Select the UV island you want to center and press Shift + S to display the cursor wheel menu and choose "Selected to Cursor (Offset)".

You can also use the UV Position (UV Vertex XY) in the N menu.

---

**Pack Islands Tip**

It’s important to have enough space (Margin) between UV Islands to avoid visual artefacts connected with texture filtering in game engine renders. Here are suggested Margin values to use for different size textures:

256 - 2px

512 - 4px

1024 - 8px

2048 - 16px

4096 - 32px

8192 - 64px

---

**Stack identical shell islands**

Just select first, then second island, and make a Cmd/Ctrl-C, Cmd/Ctrl-V

---

**How to avoid UV stretching after subdivision, with or without bevels**

[Thanks for BlenderBob for the tip!](https://x.com/robertrioux/status/1994060622833516762?s=12)

In a model like a primitive cube with bevels and subdivision is important to have each face separated away from the others.

TIP: while in SYNC mode OFF, select faces, press “Y” (Rip) and then, immediately move away a bit. Repack UVs.

In the Subdivision Modifier, change UV Smooth from “Keep Boundaries” to “Keep Corners”

---

**To match UVs in two objects with same meshes bur different UV maps**

Caution: it’s necessary that both objects have not only the same components (verts, edges and faces) but also the **same indices**.

This is: the same TOPOLOGY. Otherwise this will create weak UVs

Select object B to receive UVs from the other A

Add a **Data Transfer** Modifier

Put in Source the other object A (to receive UVs from)

Enable “Face Corner Data”

Enable “UVs” tab

Change Mapping to “Topology”

UVs will transfer from A to B

Now you can apply Modifier and Join if necessary

UPDATE: **How to copy UVs from one object to another with the same topology but different vert ID?** ([source X thread](https://x.com/henningsanden/status/1991479453399363783))

ANSWERS:

Select active object and other - Transfer Mesh Data (Ctrl + L). Or Data Transfer modifier

Separate them into two different objects and use the data transfer modifier targeting the uvs

---

[Zen UV for Blender - 10 Tips to Transform UVs like a Pro - YouTube](https://www.youtube.com/watch?v=_Zp1mLsV_ao) — !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! (VERY GOOD)

[Per object Uv projection in camera view. Blender Geometry nodes](https://x.com/f_rimasson/status/2035444232517775662?s=12)

## SCULPTING

### How to sculpt with curves:

**1. Enable Dynamic Topology** (optional)

If you want more detail on your mesh, enable Dynamic Topology (found in the Sculpt mode's header).

**2. Select the Brush:**

Choose a sculpting brush like the "Snake Hook" brush, as it works well with curves.

**3. Change Stroke Method:**

Go to the Stroke panel and change the Stroke Method to "Curve".

**4. Draw the Curve:**

Hold down **Ctrl** and **right-click-drag** to create points and handles, forming a bezier curve. You can add multiple points and adjust their handles.

**5. Sculpt Along the Curve:**

Once you're happy with the curve, **left-click while still holding Ctrl to apply the curve to your sculpting**.

You can refine the curve further by:

Editing Points: Select points by left-clicking and move with G or adjust handles by right-clicking and dragging.

Adding/Removing Points: Add points by Ctrl + clicking and remove them by Shift + Ctrl + clicking.

---

**To add details to a Shape key using Sculpt brushes**, be sure to change your Value slider for the Shape Key to 1.0 instead of 0.0

---

[Improve Sculpting Performance Instantly | Blender Secrets - YouTube](https://www.youtube.com/watch?v=j-GQDMypLDI)

[Perfect displacement with Low Poly meshes](https://www.youtube.com/watch?v=WB2JYYpFwW8)

[Gabor Texture In Blender 4.3](https://80.lv/articles/check-out-updated-gabor-noise-node-in-blender-4-3/) - Gabor noise in Blender 4.3 looks really promising for quickly creating some sick stylized shapes

[The Complete Guide to Cloth Simulations in Blender](https://www.youtube.com/watch?v=WV8uv5fZub0)

[Sculpting sharp corners perfectly can be tricky, but the Curve Stroke Method is the solution](https://x.com/janvandenhemel/status/2071307276472775027?s=66)

---

### Metaballs and geometry nodes

**Metaballs are NOT “officially” supported by GN. But there is workaround:s**

First of all, we need to create a **Mesh** object, but it should be empty:

Add an empty Mesh

Rename it as BaseGeo

Add Metaball > Ball and make it a child of BaseGeo

Select BaseGeo > Go to Object Properties > Instancing > Enable Vertices

With BaseGeo selected, add a Geometry Nodes Modifier—this will display the Group Input and Group Output

Now, for the setup in Geometry Nodes:

Mesh Line → Connect it directly to Group Output → And voilà! The Metaball is now instanced along the line.

You can replace it with a Cube > Set Size to 2m, and the same happens—the Metaballs behave as expected.

By selecting the Metaball, you can adjust its resolution, scale, etc.

If you select BaseGeo, go to Object Properties > Instancing > Vertices, and disable Instancing in the Viewport, the Cube added in Geometry Nodes will disappear.

Then, you can go back to Geometry Nodes, adjust the Cube’s size or change the number of vertices.

---

[Metaball Instances not displaying in Render using Geometry Nodes?](https://blender.stackexchange.com/questions/272588/metaball-instances-not-displaying-in-render-using-geometry-nodes/294616#294616)

Export an image sequence, this way blender updates the metaballs and shows them.

If you animated the metaballs don't worry if they don't show up in a single image render, render the whole animation and they will be there.

One thing: in the first frame the metaballs don't show up, so you need to render out an additional frame before the first frame, so change the start frame from 1 to 0, and then delete the exported 0th frame bc that's blank.

If you want to make a still image, render out two frames as an animation and save the one that has the metaballs in it.

---

## PAINTING

[You can fix this annoying issue with one click and save yourself many hours of retexturing](https://x.com/mvjagaimo/status/1910379677832872196?s=12) - Fix issue painting at border of an object

[How to make Basic Sculpt and Texture Paint in Blender -- Using Ucupaint, Auto Reload & Krita](https://www.youtube.com/watch?v=96ppCrgb2JI)

[Texture Painting in Blender Made Simple](https://www.youtube.com/watch?v=V-u6S64ym38)

[Paint panel cuts directly on your Normal map with UcuPaint](https://preview.mailerlite.com/j1h1h2i3i9/3045358746227186278/j5l3/)

## FUR

[Hair Nodes - Blender 4.5 LTS Manual](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/hair/index.html) (this is the NEW system, based on Geometry Nodes. USE THIS)

[Hair - Blender 4.5 LTS Manual](https://docs.blender.org/manual/en/latest/physics/particles/hair/index.html) (this is the OLD system)

---

**To transfer fur from a Sphere to a Cube object:**

Select cube

Open add menu ->curve -> fur

Select the cube fur and then shift select the sphere fur

Hit Ctrl +L -> Copy Modifiers

Then select Cube fur -> Modifier Section -> interpolate Hair Curves -> Surface and then change it from sphere to cube

**To change length of quick fur**

Add the "Trim hair curves" modifier to the existing hair.

Now you get an option to adjust the length.

BTW: when you first create the "Fur" if you untick "Apply Hair Guides" in the quick fur menu, then you could modify these options in the modifiers tab after the quick menu disappears.

---

**TO COMB YOUR FUR** use that **Comb** brush in combination with **Puff** (the opposite)

You can disable all GN fur modifiers to see only the Curve Guides.

Reduce Strength to 50% (generally speaking, do this with all brushes) and try Projected instead of Sphere.

Change Radius with **“F”**

---

### Apply fur (and curve guides) in a small area of an object only

No matter I only want my final Fur in some a small portion of polygons (achieved via Vertex/Weight Group mask), Blender always cover my entire object with the Base Curve Profiles. I mean: not the final fur, but the original curve splines to serve as guides for my fur. And what if I only this fur covering just a 6x6 faces matrix inside my sphere? (not the whole object)

Best solution AFAIK to economize the curve-guide amount and concentrate in the desired area only:

Select your desired small amount of faces to receive fur (and a bit extra boundary, for security)

Press “P” to separate into another object, temporarily.

RMB > Add > Curve > Fur to create Fur here

Join and merge again both object.

Great advantage: **Curve Guides** will be only in the desired small patch of faces (and not in the whole object)

Then, even is the final fur appears in the whole object (once we join both objects), we can add an extra Vertex Map Group to determine where fur must be added, through Curves > Modifiers > Interpolate hair Curves > Density Mask > Our Vertex Map Group . Again: that small patch of faces.

---

### To pass surface material to fur material

Check my setup project **“Pass Surface material to Fur Material - ETR”** inside ”Setups_Tips_Tricks”

Basically, use an Attribute node to catch **“surface_uv_coordinate”** and pass this to Principled Hair BSDF, using an intermediate common mapping Group to contain the common material for Surface and Fur

---

[Hair Simulation: From Cosmos Laundromat to Geometry Nodes — Blender Conference 2025 - YouTube](https://www.youtube.com/watch?v=sfUDDKSx-1c)

[Hair Rendering Secret: Make Your Hair Softer!](https://x.com/vfxgrace/status/2005975413609406723?s=12)

---

## NODES

[Node Parts - Blender Manual](https://docs.blender.org/manual/en/latest/interface/controls/nodes/parts.html) - Sockets Colors - Valid Conversions

[All about SOCKETS - ALL THE NODES | Blender Geometry Nodes - YouTube](https://www.youtube.com/watch?v=HLMRM8_80cQ)

[Attributes - Blender Manual](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/attributes_reference.html) - All about Attributes, including the names for the default ones

[Geometry Nodes Overview 4.5.0.1 documentation](https://geometry-nodes-overview.docs.quellenform.at/en/latest/) - A complete list of all Geometry Nodes that have been added to Blender over time.

---

### Important, for blender 5.1 and up

*Node tools from previous versions must be opened and saved with 5.1*

---

### Notes on “set curve radius” in blender 4.5!

We no more need the Set Curve Radius node in Blender 4.5 Use the scale parameter in Curve to Mesh which is new in 4.5

Set Curve Radius is there so old files keep working. When you open a file from previous blender that had set curve radius, the named attribute and switch node are created automatically in 4.5

(if we connect a Radius node to the Scale input in Curve to Mesh, then, our Set Curve Radius would work like before, but this is completely unnecessary and convoluted. Use the scale parameter in Curve to Mesh

[Blender 4.5 LTS: Geometry Nodes Changes](https://developer.blender.org/docs/release_notes/4.5/geometry_nodes/)

---

### Also, about the “use radius” setting in the bounding box node in 4.5

Other change that may cause confusion is the new "Use Radius" setting in the Bounding Box node. It is enabled by default. So the default Bezier curve gives about twice as big BB than without radius.

[#143080 - Bounding Box incompatibility with version 4.5 - blender - Blender Projects](https://projects.blender.org/blender/blender/issues/143080)

---

**Multi-line text on Frames:** When you need to display more comprehensive text, frame nodes can display the contents of a **text data-block**. This is read-only, so you will need to use the Text Editor (Shift-F11) to modify the contents.

---

Way to **retype “-inf” and “inf”** once we have clicked on these fields: write **-4e44** and **4e44**

---

**Tips by Kimmo on Random Value & Repeat Zone**

Random Value outputs a **Field** by default. If we need **single value**:

Link a Integer node to ID input, so it will be single Random value, not a field.

If you want to have own random value for each iteration, use the Iteration output from the random node as a Group. And remove that link that goes in the Repeat node.

You can also remove the link if you want to use single Random value for all iterations, there are no need to wire that through Repeat node. You can plug the random value straight to the Math Multiply node

---

A **Switch (Geometry)** could only handle a *singular boolean value and not a field*. For that reason, for nodes like **Is Spline Cyclic** you'd have to pull out the value from a specific spline via Sample Index. If you're only dealing with one spline, then it should be the 0th one.

[Link at Discord](https://discord.com/channels/314131871376080906/734779545454116918/1332674634973315072) - More, related: [Is there a way to connect a field Boolean output to a geometry switch node?](https://blender.stackexchange.com/questions/296335/is-there-a-way-to-connect-a-field-boolean-output-to-a-geometry-switch-node/296337#296337)

---

**Automatic (or not) Domain Conversions in GN** - Advice by Quackers

Blender does domain conversions implicitly, if you plug a Face attribute into a node that's set to Edge, it'll do the conversion.

But for fields that exist in multiple domains (Position, Normal, etc.), you could also explicitly specify a domain using Evaluate on Domain

How it works is that everything before the Evaluate on Domain is computed per Face, before it gets converted and transferred to the Edge domain.

When converting fields across domains, two things can happen:

• If the conversion is from a domain to another domain it's composed of. (i.e. a Face -> Face Corner conversion):

- It'll just copy the Face values to every Face Corner that belongs to that Face.

• If it's the other way around. (i.e. Face Corner -> Face):

- The Face gets the average value of all the Face Corners that belong to it.

All this is for fields that aren't Boolean.

For **booleans**, the behavior is slightly different.

It's outlined by this table in the Blender documentation: [Attributes - Blender 5.0 Manual](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/attributes_reference.html#boolean-domain-interpolation)

---

When you use **Separate Geometry on Instances**, the selection and inverted become **two different geometry sets**. So you can safely flip one without affecting the other.

GN is smart enough to not do that if nothing is changed between the two

But otherwise they become distinct sets of instances.

Thank god for the 4.3 spreadsheet for just making this visible, this used to be just something you mentally tracked

[ [context in Discord](https://discord.com/channels/314131871376080906/734779545454116918/1370385684568739960) ]

---

**Step by Step to create Custom Nodes and store as Assets for future use**

Group your Node Tree using Cmd/Ctrl-G

Inside the internal Node Tree > N panel:

- > Group > Group > Rename your Group (ie: “Curve to Ribbon”)

- > Group > Usage > Enable Modifier (if you want it to use so)

Return back to the general Geometry Node Tree. Save the present Node Tree (containing your recently create Group) something clever, like “YourName Nodes” (ie: ETR Nodes)

In the Node Tree leave only the Group, isolated (not connected) and a Group Input connected to a Group Output.

All your other future groups will live here, unconnected.

Remove ALL in your document except the current mesh. Leave there some very basic stuff, like a single Plane.

Go to Display Mode > Blender File > Node Groups

You will see your “YourName Nodes” (ie: ETR Nodes) and the existent Groups (ie: “Curve to Ribbon”)

RMB on your most recently created group and Mark as Asset

Create a Panel with the Asset Browser. Your recently created item will live in the “Unassigned” Library.

If it's your first custom node, **change view from “All libraries” to “Current File”**, press the “+” symbol to create a new Catalog (ie: “Eterea”) and you can also add a sub-catalog inside (ie: “Curves”)

Move your recently created asset from “Unassigned” to “Curves” sub-catalog.

Press N here (or use the small Gear) to open local side panel and add a Preview Icon previously stored as PNG or JPG (something as 256x256 is enough)

Save your Blender document, ideally inside:

*/Users/***cristobal***/Library/Application Support/Blender/***4.3***/nodes/***Eterea***/***etr_nodes_source.blend**

(change bold references to your needs)

Also press the small floppy disk at side of Catalog. This will save a “blender_assets.cats.txt” side by side with your .blend file.

You will end with an almost empty document, containing only a single mesh item (it doesn't matter: something like a plane or a single vert)

And you will put all your future Groups there.

Now, no matter you have any other open document, you can look inside All Libraries, and an “Eterea” & “Curves” catalog and sub-catalog should appear.

And also a new submenu inside Add Modifier > Eterea > Curves > Curve to Ribbon (or whatever nomenclature you use

---

[Interesting comments by Quackers user on Discord](https://discord.com/channels/314131871376080906/734779545454116918/1333794271307759677) on CAPTURE ATTRIBUTES and EVALUATE ON DOMAIN

Every geometry operation in GN has an inherent domain, *Set Position* is inherently a **Point** domain operation.

This is important because it informs everything in your tree that doesn't have an explicit domain, which in this case is the chunk with the Random Value node.

Blender doesn't see an explicit domain being set and assumes you want to randomize per point.

**Evaluate on Domain** is how you explicitly specify the domain of whatever's plugged to it, so setting it to **Face** allowed the randomization to be done per face instead of per point. *(It's worth to note the effect of* **Evaluate on Domain** *is backwards, not forwards,* **Set Position** *is still a* **Point** *operation, but how much those points are offset by is random per Face)*

As for why changing the domain of **Capture Attribute** doesn't do anything here, that's because going from **Point/Edge** to **Face** has an effect of averaging the field.

Coincidentally, the **Face** position is defined as the average position of all points of that face.

So capturing the face position has the same result as capturing the point positions and averaging them via domain conversion.

---

**Interesting comments by Quackers about Repeat / For Each Zones** (better to avoid these options and using Fields, when possible)

[Fields](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/fields.html) can have different values per geometry element (per point, edge, spline, etc.)

A lot of people starting out in GN would gravitate to doing things one at a time either via Repeat/For Each. But a lot of use cases can be done with a "create all the geometry you need > apply the operation in one go with fields", which is often the simpler & more performant way to go about GN.

To clarify this further with an example, say I have multiple splines that I wanna rotate randomly.

You could do it with the For Each Zone, but this is unnecessary, as both Set Position and Random Value support fields:

So you can do this directly. Adding a zone here just adds extra links you have to make.

For more complex use-cases, doing it via fields might not be as straightforward but reasoning about them get easier with familiarity.

The main thing there is the performance cost when you increase the iteration count.

A lot of that is as Erin explained, where each iteration has to wait for the previous iteration to finish, so there's a cap to how fast it could be.

Performance-wise, it's a good rule of thumb to avoid Repeat Zone whenever possible. It's pretty much only necessary if what you're computing cannot be done directly and instead uses an iterative approach.

Here's a performance comparison I did (Quackers) where the idea was just to generate a ton of circles with different radii and resolution:

[https://discord.com/channels/314131871376080906/734779371549753364/1297386822329958471](https://discord.com/channels/314131871376080906/734779371549753364/1297386822329958471)

Field Based: 5.2 ms / For Each Based: 84 ms

Another comparison by Quackers:

[https://discord.com/channels/314131871376080906/734779371549753364/1297387800521474069](https://discord.com/channels/314131871376080906/734779371549753364/1297387800521474069)

Field Based: 4.04 ms / For Each: 399 ms / Repeat Zone: 53 s

---

**Interesting comments and considerations by Quackers about Set Materials and Instances**

(and why it’s necessary to separate instances to assign different Materials)

Keep in mind that instances acts as containers for other geometry types.

Set Material isn't acting on the instances but rather the mesh those instances point to.

And keep in mind that the same geometry data could be shared by multiple instances.

If you have 8 instances of the same cube data, when I set the material on this cube data, it will always have the same result for all instances because a.) it does not have access to the instance index so that'll always be 0.000, and b.) all instances shared the same geometry data.

When you split the instances to separate groups and assign different materials to them, GN creates a separate copy of the geometry data for each branch and is able to do different things to them.

(Note how the spreadsheet will list two geometry sets, one with some instances and another with others. Instead of one geometry set with all instances, like before the separate operation)

Also: Evaluate on Domain and Evaluate at Index won't work. You could think of there being a barrier between "instance data" and "geometry data", meaning you can't really mix both.

Like if it's an instance operation (Translate, Rotate, Scale Instances, etc.) it won't have access to geometry data and vice versa for geometry operations (Set Position, Set Material, Set Curve Resolution, etc.)

The exception to that is For-Each, as whatever field you plug into it turns into a constant.

And everything can access constants, so using a For-Each is typically how you get around that limitation.

---

• If a node's name starts with **Sample**, it's for getting data from other meshes.

• If it starts with **Evaluate**, it's for getting the data from whatever's the current mesh.

These nodes serve the same function of getting the value at a specific index, but you'd ideally use them for different purposes.

**Capture Attribute** doesn't sample attributes, it stores them.

"Sampling", in the context of geonodes means transferring a field's values from one geometry to another.

Fields are computed in context of the current geometry, capturing them allows you to get a field's value at a specific part of the nodetree and use it later down the line.

These values persist even when converting the geometry, which is largely what makes them useful to have in node trees.

(In contrast, sampling may require you to manipulate indices yourself should the source and target geometry be different.)

---

If a range of values is -100/100 and we want to remap them to -20/50 while 0=0 on both maps we have to break the range into: -100/0 to -20/0 and 0/100 to 0/50 and write the driver like this:

(Linear interpolation for negative side formula) * (x<0) + (Linear interpolation for positive side formula) * (x>=0)

If you have multiple domains, just have to break it more (like color ramp thingy)

---

**Compute a Noise as a Single Value instead of a Field**

Add a Scene Time node

Use the Seconds output.

Add a Noise Texture node

Set it to 4D

Set W = Time

**Here comes the trick: For the Vector, use (0, 0, 0) — just a dummy fixed point.**

→ This way, it outputs a single scalar value.

Optionally: Use Map Range to convert from [0,1] to [-1,1]

Plug this into a single value input (like a Bend) — now it’s not a field, just a float.

---

**Unlike the Random Value node, the Noise Texture node doesn’t have a direct Seed input.**

But! You can absolutely generate different results by varying the inputs that influence the noise:

- Option 1: Use different Vector Inputs (or offset by a constant)

- Option 2: Use W in 4D Noise as a Seed

---

**From Erindale - It looks VERY useful - WATCH IT AND PUT IT INTO PRACTICE:**

[Supercharge Your Geometry Nodes Workflow - Blender Tutorial - YouTube](https://www.youtube.com/watch?v=xBM4BPpfbUg) (BAJADO)

I'm going to show you my special technique that opens the door to infinitely more complex, more integrated procedural workflows in Blender. Super easy to do. Super effective.

---

Like all data-blocks, **node groups with names that start with “.” are normally hidden** from lists and menus and can only be accessed through search. This can be useful for node asset authors to hide their internal sub-groups from the final user.

---

### Understanding append, link and pack in blender asset libraries

When adding a custom Node Group from an Asset Library, Blender offers three different import methods: **Append**, **Link** and **Pack**. Although they may appear similar at first, they behave very differently internally.

### Append

**Append** is the simplest case. Blender creates a complete copy of the Node Group inside the current .blend file.

From that point on:

the Node Group becomes a l**ocal datablock;**

it has no remaining relationship with the original Asset Library;

it is fully editable;

it appears under:

```
Current File
    Node Groups
```

If the original Asset Library is later deleted or moved, nothing happens. The scene still contains its own independent copy of the Node Group.

### Link

With **Link**, Blender does **not** copy the Node Group into the scene. Instead, the .blend file simply stores a reference similar to:

```
This Node Group is located in:
/Users/.../etr_nodes.blend
Node Groups
    Thickness - Stepped
```

Whenever the scene is opened, Blender loads that Node Group directly from the external library.

If the library file is missing, renamed or moved, the link breaks because the data never existed inside the scene itself.

### Pack

This is the most confusing—and most interesting—case. **Pack is not a third type of import.**

Internally, the Node Group **remains a linked library datablock.**

The difference is that Blender embeds a copy of the external library inside the current .blend file.

Conceptually, the file now looks something like this:

```
MyScene.blend

    Scene
    Objects
    Materials

    Embedded Library
        etr_nodes.blend

            Thickness - Stepped
            Noise
            Curve Width
            ...
```

The library still exists as a library… but it now lives **inside the .blend file itself.**

Because of this, Blender no longer needs to access the original file on disk.

### Why does the outliner still show the original library path?

This is the part that usually causes confusion.

Even after packing, the Node Group is **still a Library datablock**, not a local one.

Blender preserves the original library information as metadata, including its original path, for example:

```
Library:

/Library/Application Support/Blender/5.2/nodes/Eterea/etr_nodes.blend
```

This information is retained only to identify the asset's origin. It is not necessarily used to load the data anymore.

In other words, the displayed path becomes historical information rather than an active dependency.

### Why does the scene still work after deleting the asset library?

Suppose you perform the following test:

Add the Node Group using Pack.

Save the scene.

Close Blender.

Delete the original Asset Library.

Reopen the scene.

Everything still works. This proves that Blender is **not** reading the Node Group from the deleted library.

Instead, it loads the embedded copy stored inside the .blend file.

The original path shown in the Outliner is simply the asset's recorded origin.

### Why doesn't the node group appear under "current file → node groups"?

Because it is **not** a local datablock. Its internal type is still a **Library datablock,** even though the library itself has been embedded into the .blend.

Conceptually:

```
Append
Node Group
    Local datablock

Pack
Node Group
    Library datablock
        ↓
Library stored inside the .blend file
```

This distinction explains why the Outliner continues to display the Node Group under the embedded library instead of under **Current File → Node Groups**.

### A useful analogy

Imagine you have a book.

**Append**

You photocopy one chapter and glue it into your notebook.

The chapter is now completely independent.

You can edit it freely, and the original book is no longer needed.

**Link**

You simply write a note in your notebook that says:

*"Read Chapter 8 from the book on the shelf."*

If someone removes the book, your note still exists—but the chapter is no longer accessible.

**Pack**

You place the entire book inside a compartment attached to your notebook.

The book's cover still says:

*"Central Library"*

even if that library no longer exists.

Whenever you open your notebook, the book is already inside it.

That is essentially what Blender does with a packed library.

### An elegant detail

One particularly elegant aspect of **Pack** is that Blender preserves the identity of the original library.

Because it still knows where the asset originally came from, Blender can later **Unpack** the library and restore it as an external dependency if desired.

If packing had converted the Node Group into a local datablock (as **Append** does), that library identity would be lost, making such an operation impossible.

In other words:

**Append** converts the asset into local data.

**Link** keeps the asset external.

**Pack** keeps the asset as a linked library while embedding that library inside the .blend file.

This subtle distinction explains why packed assets behave like linked data in the Outliner while remaining completely self-contained and functional, even if the original Asset Library has been deleted.

---

[ALL 300+ Geometry Nodes in Blender](https://www.youtube.com/watch?v=Y0zAZnbBcQU) (4.3) - Outdated, but can be useful for a lot of nodes, as a QUICK and FAST review.

[All models can be 1 face - YouTube](https://www.youtube.com/watch?v=Cxr0neZ3Psg)

[Alternative to Instancing in Blender](https://www.youtube.com/watch?v=75NVQzmbZ9w) - By Redjam9 - Use the For Each Element Zone in geometry nodes **to get a unique object for each copy**

[Animating a Wave Front with Simulation Zone](https://www.youtube.com/watch?v=0sVu0qpeUyg) - How to use the Simulation Zone in order to animate a wave front in Blender 4.4 and up

[Attributes - Blender 4.3 Manual](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/attributes_reference.html) - Important to understand **Attribute Domains** and **Boolean Domain Interpolation**

[Camera Control with Geometry Nodes](https://www.youtube.com/watch?v=JX3iCOMMzfM) - how to use the new Geometry Attribute constraint in Blender 5.0 to control the camera

[Can't find the node! Which node is available in which Blender version? - Blender Stack Exchange](https://blender.stackexchange.com/questions/273541/cant-find-the-node-which-node-is-available-in-which-blender-version/273542#273542)

[Cloth simulation with Geometry Nodes](https://www.youtube.com/watch?v=81vfj1Ui-bc) - Tutorial and link to scene ($10), by Seanterelle

[Control ANYTHING with Geometry Nodes](https://www.youtube.com/watch?v=h4BTgkdHd30) - By Erindale

[Control and animate growing structures (like opening flowers) using Geometry Nodes by Cartesian Caramel](https://x.com/genesis_2303/status/1838629568011198574?s=12)

[Cosmology with Geometry Nodes](https://www.blender.org/user-stories/cosmology-with-geometry-nodes/) - And also: [How-to use Blender's geometry nodes for visualizing CMB | MH Jamshidi](https://jamshidi3d.github.io/posts/cmb_in_geometry_nodes/)

[Create Wires With Blender Geometry Nodes](https://www.youtube.com/watch?v=Uf_v3RE4F_Y) - 3 methods, each with its own advantages and disadvantages: Proximity / Transfer position / Raycast

[Creating Procedural Hexagons with Blender's Shader Nodes](https://www.youtube.com/watch?v=PZqXoKPvZ2s) - Why the nodes are set up the way they are - Linear algebra and trigonometry

[Cumulative Trim Curve](https://x.com/quackarooners/status/1889651336595030283) by Quackers - Instead of trimming curves simultaneously, it trims them one after another. Useful for "drawing" text or svgs.

[Curve to Mesh in Reverse](https://www.youtube.com/watch?v=RFsugiNrDXg) - Create central curves from elongated meshes

[Curve to Mesh with UVs in Blender](https://blender.stackexchange.com/questions/258246/curve-to-mesh-with-uvs-in-blender-3-x/323324#323324) - Interesting topic with lots of tips and info

[Delaunay Triangulation using GN](https://www.youtube.com/watch?v=HyW54cI8Qdo) - Tutorial and link to scene, by Seanterelle

[Distance to edge circle packing ](https://x.com/higgsasxyz/status/1841861413213470896)circle packing. Show setup of nodes. I think it is already implemented in the latest versions.

[Easy Edge Mask in Eevee](https://www.youtube.com/watch?v=U6uker9RDwg) - Give your Eevee renders that extra pop with a non-destructive edge mask

[Edge Loops / Face Loops in Geometry Nodes](https://discord.com/channels/314131871376080906/1233474640723185684) - (Discord link) - An interesting threat started by Shmuel The Noder in erindale.xyz Discord

[Even (or constant) radius tip on curves in Geometry nodes - Blender tutorial ENG](https://www.youtube.com/watch?v=3OSPdpVZ76E) - There is a custom node by Higgsas for this, but a tutorial with the maths behind is also welcome

[Fix UVmap on profile curve in Geometry nodes](https://www.youtube.com/watch?v=t1WDulM7wBU) - **Not** the typical trim along sweep method

[Fixing / moving indexes around curve to fix loft / bridge between curves using geometry nodes - Blender Stack Exchange](https://blender.stackexchange.com/questions/326795/fixing-moving-indexes-around-curve-to-fix-loft-bridge-between-curves-using-g/326844#326844)

[Flip indices in curves](https://www.youtube.com/watch?v=TTgtrqO1llw&t=692s) - Goes to 11:32 in this video tutorial by Erindale - NOTE: is not about “reversing” indices, but FLIPPING them (X/Y) for a loft curves operation

[Fluid Simulation via Vertex Animation Textures](https://www.youtube.com/watch?v=xoLxKinzBwI) - two experimental techniques for encoding fluid simulation into Vertex Animation Textures using OpenVAT

[Geonodes: which is faster, Set Position or Transform node?](https://blender.stackexchange.com/questions/297620/geonodes-which-is-faster-set-position-or-transform-node)

[Get edge seams from UV islands in Geometry Nodes](https://blender.stackexchange.com/questions/302193/get-edge-seams-from-uv-islands-in-geometry-nodes) (method recommended by Kimmo)

[Handy use of dot product](https://x.com/spaghetmen0t/status/1944787208709280198?s=12)

[Hexagonal Sci Fi Shield with Hit Effects | Blender Geometry Nodes Tutorial](https://www.youtube.com/watch?v=1znotkH7y78) - Recommended for [this work](https://x.com/ryanlykos/status/1992744835858755864?s=12) by Ryan Lykos

[How make the noodles see-through the nodes](https://x.com/cmzw_/status/1865775793994928432?s=12)

[How to Actually Use Align Euler to Vector in Blender's Geometry Nodes](https://www.youtube.com/watch?v=IQdT5kACMQc) - 'Align Euler to Vector' node is one that we end up needing a lot, but it's not very intuitive.

[How to create proper UV Maps with Geometry Nodes in Blender](https://www.youtube.com/watch?v=Ubeot7lIvTM)

[How to Easily Import Node Groups in Blender](https://www.youtube.com/watch?v=URoA-cI8vLs)

[How to fill mesh polys in Geometry Nodes](https://blender.stackexchange.com/questions/327708/fill-mesh-polys-in-geometry-nodes) - Answer with screen-captured nodes also includes the .blend file

[How to read geonodes](https://blender.stackexchange.com/questions/251292/combine-two-position-nodes-from-different-mesh-primitives-inside-a-geometry-node/251310#251310) - Interesting explanation by Etherlorde (Markus von Broady)

[How to subdivide triangles into four triangles with Geometry Nodes? - Blender Stack Exchange](https://blender.stackexchange.com/questions/291926/how-to-subdivide-triangles-into-four-triangles-with-geometry-nodes/291928#291928)

[How to Use Texture Paint as Selection in Blender Geometry Nodes](https://www.youtube.com/watch?v=Plb3knwqts8)

[Implementing shape keys in Geometry Nodes](https://www.youtube.com/watch?v=0awxRsDK2uc) - Shape Keys = Morph States

[Inflated Text](https://www.youtube.com/watch?v=z11px5n6hc0) - Tutorial and link to scene ($10), by Seanterelle

[Loft Curves Properly - Geometry Nodes in Blender 3.6](https://www.youtube.com/watch?v=TTgtrqO1llw&t=692s) - By Erindale - Link goes directly to **Flipping Indices** (if running right to left, to reorder them to run bottom to top... 0,1,2,3, then 4,5,6,7 etc)

[Looping 3D Noise Textures - Geometry Nodes](https://www.youtube.com/watch?v=6r8Dsqwp_u0) - An easy and simple method to loop the animation of 3D Noise Textures by Ilir Beqiri

[Make a Simple Sticky Objects Simulation](https://www.youtube.com/watch?v=VdM2slY__s8) - To download go to [Make a Simple Sticky Objects Simulation NodeGroups](https://alexandrealbisser.gumroad.com/l/StickySimulation)

[Making Trail effect is easier now in Blender](https://www.youtube.com/watch?v=Ir1qGy5ycdA)

[Making UV Maps in Geometry Nodes](https://www.youtube.com/watch?v=549UXbGAw-k)

[MFGD - Intro to Matrices](https://www.youtube.com/playlist?list=PLW3Zl3wyJwWNQjMz941uyOIq3Nw6bcDYC) - Math for Game Developers

[Matrix Nodes in Blender 4.2](https://www.youtube.com/watch?v=9qOKu5BW9NE) - The basics behind matrices and how they are used to make transformations in Blender

[Modifying and Saving Asset in Library file turn Packets assets to Linked Assets in files that use those Assets](https://projects.blender.org/blender/blender/issues/157303) - **Caution with this BUG REPORT BY KIMMO on Blender 5.x**

[More on the same topic, unbending leaves, using nodes by Higgas and Bradley (see screencaptures)](https://x.com/genesis_2303/status/1838859160324022737?s=12)

[Introducing multi-line text into Geometry Nodes](https://x.com/ilirbeqiri/status/1986404932183118209?s=66) - Tip by Ilir Beqiri, and also an alternative by Kimmo.

[Neuron or coral fractal structures using the shortest edge path node](https://www.youtube.com/watch?v=nXCSMO4iioA) - learn to create procedural growing fractal tree-like shapes - Custom node available [here](https://straycreations.gumroad.com/l/neuronfractal) ($2)

[New FOR EACH in Blender 4.3 Explanied](https://www.youtube.com/watch?v=zQTTJv0zF8w)

[New Socket Shapes — Blender Developers Blog](https://code.blender.org/2025/08/new-socket-shapes/)

[Obj node caching](https://x.com/quackarooners/status/1919822118625108117?s=12) - (**for 4.5**) - Great tips for OBJ animation sequences - Read response by Quackers: *“You can even squeeze out a lot more performance out of this by not importing an OBJ for every point. Instead, you can use as many points as the sequence length, load all OBJs, and use Instance on Points. Pretty much an 80x speedup for 39k”*

[How to Fracture Anything with Blender 3.0 and Geometrynodes!](https://www.youtube.com/watch?v=keKDABQfxQU) - Great tutorial by Cartesian Caramel

[How to make an Organic Vein / Neurons system](https://blender.stackexchange.com/questions/321735/geometry-nodes-how-can-i-make-an-organic-vein-system/) - Write tutorial by Etherlorde, with .BLEND file.

[Particle Flow Animation Loop](https://www.youtube.com/watch?v=eBNolzjnHtE) - Set up the particles, animate the particles in looping animation using a noise pattern, use textures to color the particles

[Particle flow on Curve](https://www.youtube.com/watch?v=8RYW4s2i0E8) - Procedural modifier that will allow you to have any object/particle flow along a curve in a simple geo nodes setup

[Photoreal Ocean Simulation in Blender](https://www.youtube.com/watch?v=ok1ViHVcXYs) - Tips and tricks to create photoreal ocean simulations using Flip Fluids addon. Enhance simulation with GN, create realistic ocean and foam shaders, and choose the right lighting

[Pixels dissolve effect with Geometry Nodes in Blender - Tutorial](https://www.youtube.com/watch?v=14Vr-Waaazk) - Recommended for [this work](https://x.com/ryanlykos/status/1992744835858755864?s=12) by Ryan Lykos

[Plexus Effect Done Right](https://www.youtube.com/watch?v=JJ3WzvRICSE) (using Fields) - Great tutorial by the master Ilir Beqiri - File downloaded and to be converter to Node Group ASAP

[Procedural Adaptive Subdivision with curves in Geometry nodes](https://www.youtube.com/watch?v=rP6mujoskmw) - Free Tutorial - But also nodes available in Gumroad (*$2*)

[Procedural scales with flow control](https://www.youtube.com/watch?v=_MDgKb-l7nk) - How to procedurally create **scales** on an object with geometry nodes and use a **hair system** to help controlling their orientation

[Procedural shrinkwrap modifier for curves](https://www.youtube.com/watch?v=xAlagQT5k04) - Also: Discussion on Discord Erindale.XYZ on [how I can control the tilt of the curve based on the normal of the mesh](https://discord.com/channels/314131871376080906/734779545454116918/1349725514499100682)

[Procedural Straight Skeleton in Geometry nodes](https://www.youtube.com/watch?v=Q3wvJJKLxaw) - Useful for roof generator or similar needs - [Nodes in Gumroad](https://andreaciani85.gumroad.com/l/qjqhqr) *$2*

[Progress on a new Bevel Geometry Node](https://www.youtube.com/watch?v=16dpUQ57Xv8) - Work has begun on a remake of Bevel as a Geometry Node. As well as rewriting in C++ for better future maintainability…

[Recursive Subdivision Tutorial](https://www.youtube.com/watch?v=PgZrIToTdJE) - By Bradley - Custom Nodes available free at description

[Rig with Geometry Nodes? Using a node tree to drive an armature in Blender](https://www.youtube.com/watch?v=enzcwSTX5YU)

[Road generator with GN and SDS solving T intersections](https://www.youtube.com/watch?v=6Dbb-pOz3us&t=548s) - To study and check if this can be useful for non-ribbon modeling (something like tree branches)

[Rock Waterfall in Blender – No Rigid Bodies, Just Geo Nodes](https://www.youtube.com/watch?v=OfHgxVN-2iA) - all done with curves, randomness, ping pong math, and instancing.

[Self-Wrapping Ribbons with Geometry Nodes | Blender 3.1 Tutorial - YouTube](https://www.youtube.com/watch?v=8KbNJMS9vR4)

[Selectively join points using geometry nodes](https://blender.stackexchange.com/questions/253173/selectively-join-points-using-geometry-nodes/293797#293797) - Find the nearest point (BTW, there's a special node coming to find nearest element not counting self), but also multiple nearest points

[Set Material Index Tutorial](https://www.youtube.com/watch?v=rkE_di1GagY) - A curious (and different) way to apply Materials in Geometry Nodes using **Set Material Index**

[Simple setup to grow Face selection by Khellstr](https://x.com/khellstr3d/status/1888878408983081432) - See response by Quackers explaining WHY this occurs.

[Snow Crystal Growth Simulation](https://x.com/higgsasxyz/status/1865421595482689621?s=12) - Video + Screen captures for setup

[Sorting Vertices Tips and Tricks](https://www.youtube.com/watch?v=v-X02qFTF0Y) - How to sort elements to control how the geometry is processed, how to reorder with your own logic, and how to specify multiple sort criteria

[Supercharge Your Geometry Nodes Workflow](https://www.youtube.com/watch?v=xBM4BPpfbUg) - Great technique by Erindale to control inputs/values in different objects/GN with a common “external” setting.

[Texture Coordinates in Geometry Nodes](https://blenderartists.org/t/texture-coordinates-in-geometry-nodes/1519653) - Interesting discussion on this topic in BlenderArtists.org

[The "Evil" Domain Node | Curious Blends](https://curiousblends.blogspot.com/2023/11/the-evil-domain-node.html) - **Evaluate on Domain** - Some other interesting topics on Geometry Nodes here…

- [The "Evil" Domain Node (continued) | Curious Blends](https://curiousblends.blogspot.com/2023/11/the-evil-domain-node-continued.html)

[The perfect IK rig in Blender?](https://www.youtube.com/watch?v=JBIdruWylDQ)

[The Secret CGI of Leaves](https://www.youtube.com/watch?v=lU0jplEoFoU)

[Transfer an image texture from Geometry Nodes into Materials](https://blender.stackexchange.com/questions/260251/how-do-i-transfer-an-image-texture-from-geometry-nodes-into-materials)

[Transferring normals from one mesh to another allows smooth transitions between objects, very useful for environment creation](https://x.com/thomas__marcos/status/1916148689061429339?s=12) - Small video and screen-capture with nodes

[Trick for stable points on deformed meshes](https://x.com/mattercg/status/2069129029085519907?s=66)

[Using empties as controllers is a powerful feature in blender 5.2](https://x.com/fares51364668/status/2080264108650238040?s=66) - See second tweet for a screen capture with nodes

[Using Repeat Zone to "automatically" select 4 curves for patches (patch group is from the Higgas Nodes)](https://x.com/khellstr3d/status/1864443182903124366?s=12) - By Kimmo

[Volume Cube](https://www.youtube.com/watch?v=jhegSFPA03I) - Interesting tips using Smooth Minimum combined with Volume Cube to create blend transitions between objects

[Voronoi Fracture with Dual Mesh Node](https://www.youtube.com/watch?v=a6oMMzRBIfo) - Interesting tutorial by Bradley

[Workflow for interesting generative graphics in a processing or cavalry style](https://x.com/redjam_9/status/1860665259125887212?s=12) - Doing 2d mograph using the new 4.3 Grease Pencil and Geometry Nodes - Node graph in reply

---

### Node tools

[Node-Based Tools - Blender Manual](https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/tools.html)

[Node Tools in Blender 4.0 — Blender Developers Blog](https://code.blender.org/2023/10/node-tools/) - Introduction

[How to use Node Tools in Blender 4.0](https://www.youtube.com/watch?v=rU_j1Jw3ev4) - Developer Hans Goudey walks us through the Node Tools system

[Introduction to Node Tools in Blender 4.0](https://www.youtube.com/watch?v=Y8Udi1AkdGY) - Short (10m) and concise. With an example.

### Steps to create a node tool

Switch to TOOLS (be sure to check N panel > Group > Properties > Enabled TOOL (not Modifier)

Once we created a new Node Tool a new icon appears just right after UV menu (a “document” icon) menu with our Tool, to be applied.

Be sure to generate data that is same type than existing geo (ie: curves, or meshes…)

Use Group Inputs to expose parameters that will be accessed through bottom tool options panel.

---

**Interesting tip on FOR-EACH feature, by Ilir Beqiri:**

[Using the newly added For Each Element node I'm instancing a unique text block on each vertex. Drag the points around in edit mode to position the text](https://x.com/ilirbeqiri/status/1846887190736863381)

---

From Quackers, [comment on Twitter/X](https://x.com/quackarooners/status/1888913461134123302) about the FOR-EACH feature:

The For-Each isn't actually always needed, even if you want to modify things on a “per component” way.

EXAMPLE: as both Set Curve Radius and Trim Curve support field inputs (diamond sockets) you can plug values derived from Index directly without any issues.

Just replace the For Each's Element output w/ the base geometry, and the Index output w/ the Index node.

To just add a bit of what the For-Each is usually needed for: **it's for applying fields on nodes that only support CONSTANTS (circle sockets)**.

Notice how fields turn into constants when they go inside the zone, and vice versa when going out of them.

What makes constants and fields different and incompatible is a longer technical discussion. 😅

But yeah, using For-Each to make these two play together is a good rule-of-thumb to remember.

## SHADING & LIGHTING

[Materials assignment - Blender Manual](https://docs.blender.org/manual/en/latest/render/materials/assignment.html) (specially important the LINK section)

[Principled BSDF - Blender Manual](https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/principled.html)

---

**How to override all materials**

Be sure to select **Cycles** engine

Go to **View Layer tab**

See that **Override** section. Open and select your overrides both for Materials and World

---

### Light linking in cycles (viewport gpu vs cpu)

Sometimes Light Linking doesn’t work in GPU viewport initially, but starts working after switching to CPU and back. This is not random.

**What’s happening:**

Cycles uses cached GPU kernels and shader states in the viewport.

Light Linking may fail to initialize correctly on GPU.

Switching to CPU forces a full rebuild of shading and scene state.

When switching back to GPU, it reuses the now-correct state.

**Key takeaway:**

The issue is state initialization / cache invalidation, not your setup.

GPU viewport can display Light Linking correctly, but may need a refresh.

**Possible Quick fixes (without switching CPU/GPU):**

Toggle viewport shading (Solid <> Rendered)

Slightly change samples

Adjust any light parameter

Toggle Light Linking on/off

These actions force a kernel/shader refresh and usually resolve the issue.

---

### Anisotropy

More details here: [Anisotropy in Blender 4.3 - YouTube](https://www.youtube.com/watch?v=7HeDHWsotkk)

For a nice cylindrical “automatic” Anisotropy shading effect be sure to orient the object along the Z axis OR make your dominant local axis to be **Z**.

This is: for a cylindrical object, to have nice radial reflections in the top and bottom caps, these caps MUST be along LOCAL Z axis

If the cylinder is along a different axis, then just rotate the ORIGIN for that object to make the local Z being the dominant axis.

If you need a different axis to place the Anisotropy reflections, then add a Tangent Node > Radial, and change Axis to Y or Z

Another approach is to change this Tangent Node to UV Map and create a SPECIFIC uv map for that object, to be used exclusively in combination of this tangent node, and make these rectified.

---

### Why a linear uv gradient looks non-linear in blender (and how to fix it)

When using a linear gradient in Blender via: UV → Separate X → Color

the gradient is mathematically linear, but it does not appear perceptually linear on screen.

The midpoint (0.5) seems shifted toward the darker side. This is expected behavior.

Blender works in linear color space, but the image is displayed through sRGB gamma correction (≈ 2.2) before reaching the monitor. As a result, linear values are remapped non-linearly for display. For example:

0.5 (linear) ≈ 0.73 (display brightness)

Because of this, linear ramps are visually misleading when used as analytical or control tools.

### How to view a perceptually linear gradient

To make the gradient appear linear to the eye, you must pre-compensate the gamma before display.

CAUTION: all this is only for VISUAL FEEDBACK, don’t leave these adjustments active in your node tree.

**Option A — Recommended (Simple and Effective)**

Insert a Power node:

Separate X → **Power** (Exponent = 2.2) → Combine XYZ → Color

Separate Y → **Power** (Exponent = 2.2) → Combine XYZ → Color

This counteracts the sRGB display gamma, so the gradient appears perceptually linear.

The 0.5 value will now visually sit at the center.

**Option B — Equivalent (More Explicit)**

Use a Gamma node:

Separate XYZ → Operate with separate channels → Combine XYZ → **Gamma** = 2.2 → Color

Key Takeaway:

The gradient is not wrong — the display is non-linear.

For ramps, masks, thresholds, and analytical shader tools, always compensate gamma when judging values visually.

---

[Bump Node](https://docs.blender.org/manual/en/latest/render/shader_nodes/vector/bump.html) - How to work with “bump” maps in Blender (to convert to Normal input)

**Strength (Visual Influence)**

Controls the influence of the bump effect on the surface's normal.

It answers: *“How much should this bump affect how the surface reacts to light?”*

1.0 = full effect, 0.0 = no effect at all.

Think of this as the intensity of the illusion — like how harsh the lighting trick is, not how tall the bump actually is.

**Distance (Physical Displacement Scale)**

Controls the scale of height difference in world/virtual units.

It answers: *“How far apart is the highest point from the lowest one?”*

Larger values = deeper or taller bumps.

Think of this as the actual virtual "height" you're simulating.

**When to Adjust What:**

STRENGTH Make the bump appear more or less strong without changing shape

STRENGTH Fine-tune how it looks under lighting (less aggressive effect)

DISTANCE Make bumps taller or deeper

DISTANCE Match bump scale to object size (e.g., real-world height of a texture)

**Common Practice**

Set Distance first — based on your model scale and how tall bumps should appear.

Then tweak Strength to dial in the visual intensity you want under lighting.

**Blender’s Distance value in the Bump node is unit-aware, meaning:**

• If your scene scale is set to use millimeters, then a value of 1.000 = 1 mm.

• If your scene is in meters, then 1.000 = 1 meter.

---

### Get "true" displacement using micro-displacement in cycles

This allows for subpixel-level displacement without adding actual geometry subdivisions manually. This results in incredibly detailed surfaces using only displacement maps, and it's much more efficient than traditional subdivision.

Here's a step-by-step guide to setting up Subpixel Displacement (Micro-displacement) in Blender Cycles:

**1. Switch to Cycles + Experimental Feature Set**

Go to Render Properties (the camera icon).

Set Render Engine to **Cycles**.

Set Feature Set to **Experimental**.

**2. Set the Displacement Method**

In Material Properties, scroll down to the **Settings** panel.

Under Surface > Displacement, change **from Bump Only to**:

- Displacement Only (for pure geometry displacement), or

- **Displacement and Bump** (for extra detail combining both) < **Much better this one!**

**3. Add a Subdivision Surface Modifier**

Add a **Subdivision Surface modifier** to your object.

Important:

Set the modifier to **"Adaptive"** (only available in Experimental mode).

- In the Subdivision Modifier, check **Adaptive Subdivision**.

- You can leave the "Levels Viewport" low (like 1), as the real detail comes from the adaptive tessellation.

- Leave also “Optimal Display” enabled

**4. Enable Adaptive Subdivision in Render Settings**

Go back to **Render Properties.**

Under the **Subdivision section** (now visible due to Experimental mode), ensure:

- Dicing Rate Render is set appropriately. Default is **1.0**, increase to **2.0** for 4K renders. Or even up to **4.0 or 5.0**, specially if Displaced mesh has other animated deformations

- Smaller values = more geometry detail = heavier render.

- Render > Subdivision > Max Subdivision from > **12** to **8** for 4K renders. Or even down to **5**, specially if Displaced mesh has other animated deformations

**5. Create and Connect a Displacement Map**

Go to the **Shader Editor.**

Add a Displacement node:

- Add > Vector > **Displacement** (caution: just “Displacement”, not “Vector Displacement”)

Connect:

- Your Height Map Texture (e.g., from an Image Texture or Noise Texture) to the Height input.

- The Displacement node's output to the Material Output > Displacement input.

Set the Displacement node's:

- Midlevel (usually 0.5 for height maps).

- Scale to control intensity.

**6. Optional: Use Vector Displacement**

If you have a Vector Displacement Map (3D displacement), set the Displacement node to Vector and use an RGB map.

**7. Render**

Render the scene to see the fine subpixel-level displacement. You’ll notice high geometric detail even on flat planes.

*See TIPS FOR FAST CYCLES RENDERING before rendering scenes with REAL DISPLACEMENT.* Optimizations are needed, specially for 4K

**Tips for Better Results**

Ideally use 16-bit or 32-bit EXR height maps for best results (avoid 8-bit JPG for displacement).

You can preview the displacement in the viewport by enabling Viewport Shading > Rendered.

---

**To find out on which objects in our scene a certain Material is applied**: go to the “Material” tab, click on the small arrow to the right of the list (even if it is blank) and choose “Select by Material”.

---

**To make a material fully transparent depending on surface normals:**

Material Properties > Settings > Surface > Enable Camera Backface Culling

---

**IMPORTANT:** for **Normal Maps** change the Color Space from sRGB (or whatever) to **Non-Color**

ALSO: After setting the Color Space to Non-Color, don’t forget to plug the normal map through a **Normal Map** node (not directly into a shader's Normal input). That node interprets the RGB data as a vector. CAUTION: **Normal Map** node (not a simple “Normal” node)

---

**FIX NORMAL MAPS READY FOR DirectX TO BE USED WITH OpenGL**

If we perceive some strange artifact in Normal Maps, it can be because it’s DirectX-Ready

To fix, just invert the Green channel.

Use a Separate Color > Invert Green > Combine Color Again

---

### Caution with normal maps on procedural geometry (with uvs stored at gn level)

If we apply a normal map on a procedural geometry (created with GN, for example a Grid) then, do NOT specify the UVMap inside the Normal Map node. It doesn’t work on Cycles (!)

Instead, just declare the UVMap at the start of Shading Nodes and leave empty the UV field on the Normal Map node

Why this happens (explanation by ChatGPT):

When you manually connect a UV Map node to the Normal Map node, you're forcing it to use the object-level named UVMap — but your UVs are not at the object level. They're stored as an attribute inside Geometry Nodes, not as a built-in UVMap layer.

In EEVEE, that works because it’s more lenient — it can sometimes "guess" or pull attributes automatically. But Cycles expects exact data.

When you don't plug anything into the "UV" input of the Normal Map node, Blender automatically falls back to the active UVs on the geometry, including attributes passed from Geometry Nodes (via Store Named Attribute).

So in your case:

• You used Store Named Attribute in Geometry Nodes (e.g., uvmap)

• In the shader, you use a UV Map node with that attribute name (great! ✅)

• If you plug this into the Normal Map node, Cycles treats it as a separate vector input and doesn’t link it properly as UVs.

But if you leave the UV input empty, Blender magically uses the active UV attribute (as long as your UV Map node is named correctly, which it is).

---

### Caution with normal maps on procedural geometry + real displacement and deformations

This is a common and tricky issue when combining real displacement with deforming geometry in Blender (Cycles). Real displacement modifies actual mesh geometry at render time, and when you deform that base mesh (e.g., with an animated bulge), it can lead to severe shading artifacts—especially if normals or tangent space calculations break due to the displacement no longer aligning with the underlying topology.

Here’s a breakdown of what’s likely happening and what you can do to fix or work around it:

**What’s Going Wrong**

Real displacement happens after modifiers/deformations.

The displacement can exaggerate small topology issues, especially in areas of high curvature, like your bulge.

Normals and tangent space may get distorted, particularly if the normal map or bump uses Tangent Space.

Self-intersections or non-manifold geometry can occur in highly deformed areas, confusing Cycles’ shading.

**Solution & Workaround**

Avoid Tangent Space Normal Maps

If using tangent-space normal maps, they can break with real displacement and deformation.

Consider switching to object-space normals if possible.

Or rely more on bump mapping instead of normals in the bulging area.

Or even better: if using a good Displacement Map in “Displacement and Bump” mode produces a good result, consider completely REMOVE the normal map. Lot of times, this Normal could even produce an exaggerated sense of relief (like artificial)

Using just a good Displacement Map set to “Displacement and Bump” can absolutely replace the need for a separate normal map in many cases.

Here’s why that approach works well:

**• Displacement and Bump Combines Best of Both**

Real displacement adds actual mesh detail (depth, shadowing, silhouette).

Bump mapping (from the same displacement source) simulates finer detail not captured by geometry, enhancing shading at render time.

This setup is physically consistent, avoiding the mismatch that sometimes occurs when using normal maps that "fight" the displaced geometry.

**• Normal Maps Are Static by Nature**

They don’t adapt to deformation unless baked per frame (which is complex).

Tangent-space normals get especially problematic with animated topology changes.

Removing them avoids that entire layer of issues.

**• Cleaner Workflow**

One less texture to manage and synchronize.

Less confusion in blending maps and shading artifacts.

---

**NORMAL VS. HEIGHT MAPS (used as Bump)**

If you're not using real displacement, then using only the Normal Map is generally best.

Using Height as Bump on top of a Normal Map can sometimes enhance microdetail, but must be blended carefully.

Using both improperly can cause shading conflicts, double-ups, or a muddy result.

**Best Practice in Blender (no real displacement):**

If you:

Already have a good-quality Normal Map

Don’t need true displacement (i.e., no real surface deformation)

Then: Use the Normal Map only. It’s sharper, more performant, and handles directional lighting better.

**Can I Combine Both (Normal + Bump from Height)?**

You can, and sometimes it’s used like this:

Normal Map: mid/high frequency detail (e.g., veins on a leaf)

Height Map as Bump: low-frequency forms (e.g., subtle waviness or curvature)

BUT: This must be done carefully using Blender’s "Bump" node, and combining normals like this:

• Height Map --> Bump Node (connect to Normal input)

• Normal Map --> Normal Map Node --> Normal input of the Bump Node

• Final output of Bump Node --> Shader's Normal input

This adds bump detail on top of the normal, blending them properly.

Caution: Overdoing this can cause lighting artifacts, shadow oddities, or overemphasized relief.

---

### Combining bevel and bump/normal maps in blender

When working on the shading of mechanical parts such as gears, it is often desirable to combine multiple sources of normal perturbation:

A Bevel node to simulate rounded edges without adding geometry.

One or more Bump nodes to create scratches, dents, or other relief details from grayscale textures.

A Normal Map node to add additional surface detail from tangent-space normal maps.

The important point is that these effects should not be connected independently to the same Normal input of the shader. Instead, they must be chained together.

**Bevel + Bump**

A common setup is:

*Bevel → Bump → Principled BSDF*

The Bevel node generates smoothed normals that simulate rounded edges.

The Bevel output is connected to the Normal input of the Bump node.

The Bump node adds scratches, dents, or other height-based details.

The Bump output is connected to the Normal input of the Principled BSDF.

This allows the bump details to be calculated on top of the beveled surface normals.

**Bevel + Normal Map**

The same principle applies:

*Bevel → Normal Map → Principled BSDF*

The Normal Map node provides a Normal input specifically so that it can receive and modify an existing normal field (NO, THIS IS NOT TRUE)

**Multiple Bump Nodes and Normal Maps**

For more complex materials, several normal-modifying nodes can be chained together:

*Bevel → Bump (large scratches) → Bump (micro-scratches) → Normal Map → Principled BSDF*

Each node receives the output normal of the previous node and adds its own perturbation.

---

**To apply different maps (or even materials) to FRONT and BACK side of a surface, like both sides of a leaf**

Create both materials inside a single material with 2 shaders (Principled BSDF or other), then use Mix Shader an add a Geometry Node (inside Shader Editor), connecting the “Backfacing” socket to the Fac one in the Mix Shader. There is an *“Apply different maps to front and back of a plane”* sample saved in my files.

---

*CAUTION with Bump node in Blender 4.4 and up!!!*

The new “Filter Width” could ruin your renders if you use the default 0.1 value.

Up to Blender 4.3 this setting was hardcoded as 1.0, and this value could be better for much situations

[Blender 4.4.3. Bump Map node Filter Width can mess your surfaces up!](https://www.youtube.com/watch?v=GOYqQ_q1fVg) - By Christopher 3D

[Bump Node & Filter Width, what you need to know](https://www.youtube.com/watch?v=2WNS88ofUZE) - By Christopher 3D - With more in-depth info on this new setting

---

**CAUTION: Render > Color Management > View Transform** defaults to **AgX**, but in the Blender Studio tutorial they recommend using **Filmic**.

And in fact, pure R, G or B colors look much more realistic using Filmic than AgX (with the latter they become more “pastel”).

---

**“Force” and reload all textures** Press Alt+R with the mouse cursor over the Shader Editor and Blender will re-load all the textures.

---

**To copy material on active object to all selected**

Select objects, keep one active, the one with the material you want to copy from;

Then, from the drop-down list (below it), choose Copy Material to Selected.

This is also useful to completely remove all materials on all selected object, by choosing an active object free of materials.

Another option is to use Link (Cmd/Ctrl-M) > Materials - But this does NOT works for removing from all selected object (picking on an object without mat)

---

**TRANSPARENCY (like in a Glass or Water)**

*THIS AREA NEEDS MORE STUDY*

The “orthodox” way to handle transparency (Glass / Water / Oil) AKA Physically correct vs. artistically controllable

**1. Physically correct approach (for realism in Cycles):**

Use only the [Glass BSDF](https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/glass.html) (or [Principled BSDF](https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/principled.html) with Transmission = 1).

It already handles refraction + reflection correctly.

The material is fully transparent in the sense of light passing through, but opaque to alpha.

Real glass doesn’t have a “transparency factor” — it either refracts light or reflects it.

The Glass BSDF simulates physical refraction: it bends light, reflects it, and allows it to pass through the surface depending on the IOR (index of refraction).

That means it’s always “opaque” to the renderer — it doesn’t have an alpha channel you can fade like a Transparent BSDF.

So you can’t control how see-through it is directly — it’s physically “fully transparent,” just with light distortion.

+ Best for photoreal renders.

- But hard to “tune” visually or for compositing (because alpha = opaque).

For this to actually look transparent in Eevee:

In Material Properties → Settings → Blend Mode: set to Alpha Blend or Alpha Hashed.

Enable Screen Space Refraction and Refraction in material settings if you use those effects.

In Render Properties → Screen Space Refraction, enable it too.

In Cycles, no special settings — it just works.

**2. Artistically controllable / practical approach (most common for windows, architectural glass, stylized materials, or Eevee):**

You should mix the [Glossy BSDF](https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/glossy.html) shader with a [Transparent BSDF](https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/transparent.html), using a Mix Shader node.

Control **transparency**:

Mix Factor = 0.0 → fully glass (opaque to renderer)

Mix Factor = 1.0 → fully transparent

Intermediate (e.g. 0.2 → 0.4) gives you window-like glass

You can expose that as a single “Transparency” slider in your node group if you wish.

To control **tint color**: there is two ways:

1. Color input of the Transparent BSDF → sets the tint of what passes through.

2. Color input of the Glass BSDF → sets the color of the refracted/reflected light.

A good approach:

Use a slightly desaturated color for the Glass BSDF (e.g. light blue/green)

Use a lighter, similar hue for Transparent BSDF that mimics how real window glass slightly tints light.

All this allows for easy alpha blending / masking / fade effects

+ Best for Eevee and fast look-dev.

+ You can expose a simple “Transparency” slider.

+ You can layer it with reflections or textures.

- Slightly less physically accurate (light energy not perfectly conserved).

---

### Translucency

### Subsurface

In Cycles, Subsurface Color is part of the Base Color — the Base Color is used for both surface color and SSS tint.

There is no separate “Subsurface Color” slot anymore in most cases.

**Method:**

Christensen-Burley = faster, less accurate, good for soft forms.

Random Walk = more accurate, ideal for thin/fine detail.

Random Walk (Skin) = designed for Skin shading

**Settings:**

• Base Color > Controls what color the subsurface scattering has, not only the base color.

• Subsurface Weight > Controls how much subsurface scattering is applied.

• Radius > Controls the scattering distance per RGB channel.

- For example, Radius = (1.0, 0.2, 0.1) means red light scatters farther than blue.

• Scale > Multiplies the radius globally.

• IOR (Index of Refraction)

Controls how much light bends inside the material (like it does in glass or skin).

In SSS, IOR affects the intensity and angle of internal scattering.

Typical values: 1.3 – 1.5 for most plastics and skin.

Higher IOR = stronger internal reflections and more focused scattering.

Think of it as the “density” of the material to light. Water is ~1.33, plastic ~1.45.

• Anisotropy (for Subsurface)

Controls directionality of subsurface scattering.

Values range from:

0.0 → Isotropic scattering (light spreads equally in all directions).

> 0.0 → Forward scattering (light mostly travels forward — like wax or gelatin).

< 0.0 → Backward scattering (light tends to bounce back — useful for thin, fibrous materials).

Example use: Wax, skin, or frosted plastic > try Anisotropy = 0.2 – 0.8

Powdery or soft materials > use lower or zero anisotropy

---

[Eevee 'sss' translucency method](https://x.com/gleb_alexandrov/status/1962432373678620840?s=12) - [Eevee Fake Translucency Trick - YouTube](https://www.youtube.com/watch?v=mjK5ppSTjOg)

* no translucency whatsoever

* subsurface scattering weight = 1

* 'thickness' shader input - to taste

* SSS scale to taste

* raytraced transmission = on (not sure if it matters though)

### Transmission

Simulates clear materials like glass or fully transparent plastic.

Use only if your plastic is see-through, like colored acrylic.

Transmission: Set 0.0 – 1.0 depending on how transparent it should be.

### Roughness

Controls how blurry the reflections are but also how blurry the transparency is.

For frosted/matte plastic: increase Roughness (0.4 – 0.8).

For shiny plastic: lower Roughness.

**USE CASE: GRAPE FRUITS WITH SUBSURFACE AND INNER SEEDS SLIGHTLY TRANSLUCENT** - By ChatGPT

A mix between SSS and subsurface transmission / translucency (like in thin fruit skins or jelly), where internal objects are barely visible but blurred.

Here are some approaches in Blender to get the “see-through skin with blurred seeds” look:

**1. Use Subsurface Scattering + Transmission**

In your **grape skin material**:

Keep **Subsurface Scattering** enabled (as you already have).

Add some **Transmission** (in the Principled BSDF → Transmission = 0.2–0.5, experiment).

Increase **Subsurface Radius** slightly to allow light to spread inside (try 1.0, 0.5, 0.3 in RGB channels).

Balance **Roughness**: higher values will blur the seeds more.

- > > > This will let the inner seeds show through, but always slightly diffused, not crystal clear.

**2. Fake Blurred Transparency with Thin Shell + Volume Scatter**

Give the grape skin object some **thickness** (a solidify modifier helps).

In the **material**, add a small **Volume Scatter** node plugged into the *Volume* input of the Material Output.

Density: very low (0.02–0.05).

Anisotropy: slightly positive (0.2–0.3).

This acts like a foggy medium inside the grape flesh, softening the visibility of seeds.

- > > > Result: seeds visible, but washed in a translucent “pulp” look.

**3. Mix Glass / Transmission Shader with SSS**

Use a **Mix Shader** between:

A **Principled BSDF** with strong SSS (for the grape flesh look).

A **Glass BSDF** or Principled with Transmission=1 and high Roughness (to blur refraction).

Control the mix with a Fresnel or Layer Weight node → so you get more transmission on edges and SSS on frontal parts.

- > > > This gives that “slightly see-through” feel mostly at the grape edges.

**4. Cheat with Object for Seeds Visibility**

If you want **more blur than transmission can give**, you can duplicate the seeds:

One set is **real seeds** inside (for volume/occlusion).

A second, **blurred fake projection** baked as a texture onto the grape’s inner shell, so they appear diffused through the flesh.

Rendering tip:

These effects require **Cycles** (not Eevee) for correct transmission/SSS.

Make sure **“Subsurface Translucency”** and **“Transmission”** are enabled in render settings (in Cycles, this is automatic).

If render times explode, try **Clamp Indirect** to reduce fireflies.

Easiest starting point:

Use **Principled BSDF** with **SSS + Transmission + Roughness**.

If too sharp, add **Volume Scatter** to soften.

---

**FRESNEL EFFECTS** - By ChatGPT

Fresnel effect or facing ratio is: a value that changes depending on the angle between the camera view and the surface normal. In Blender’s Shader Editor you can do it in a couple of different ways. Let me give you the clearest ones:

**Method 1: Using the Fresnel Node**

1. Add a Fresnel node (Shift+A → Input → Fresnel).

2. Connect its Fac output → to drive a Mix Shader or ColorRamp.
- With Mix Shader: mix between two shaders (e.g. Glossy vs Diffuse), so the edges are more reflective.

- With ColorRamp: map the 0–1 range into colors (e.g. black = red, white = green).
3. The IOR value controls how sharp the transition is (higher = more narrow rim).

In ColorRamp: left = red, right = green.

**Method 2: Using the Layer Weight Node**

This one is often more controllable:

1. Add a Layer Weight node (Shift+A → Input → Layer Weight).

2. Use its Facing output (this is basically “how much the surface faces the camera”).
- Facing = 1 for surfaces perpendicular to the camera (front),

- Facing = 0 near grazing angles (edges).
3. Plug Facing into a ColorRamp to remap or invert.

4. Use this output to:
- Blend shaders (like Diffuse vs Glossy).

- Drive color (red at facing = 1, green at facing = 0).

If it’s inverted, just flip the ColorRamp handles.

**Quick Comparison**

Fresnel node = physically based (uses IOR).

Layer Weight (Facing) = more artistic control (linear gradient with a Blend slider).

---

**RANDOM COLOR* VARIATION FOR EACH INSTANCE USING SAME MATERIAL** - By ChatGPT

(*) or any other channel

**In Shader Nodes you can use:**

• Object Info → Random

- This outputs a random value per object instance. Perfect when using instancing (Geometry Nodes, particle systems, etc.). The random value is stable: each instance always gets the same number between 0–1.

• Hue/Saturation or ColorRamp

- Plug the Random into a ColorRamp to map it into a gradient or a set of discrete colors.

Add an Object Info node.

Use the Random output.

Connect that into a ColorRamp.

Feed the ColorRamp output into Base Color (or whatever you want to vary).

That’s it — each sphere instance now gets its own color variation even though they share the same material.

**If you want variation inside Geometry Nodes**

You can use the Random Value node in Geometry Nodes and store it as a custom attribute (for example, instance_random).

Then pass it to the shader via a Named Attribute node.

This gives you more control (like controlling the seed or ensuring specific distributions).

---

### About uvmaps / texture coordinates in blender

In Blender, if you do NOT manually connect a Texture Coordinate node or a UVMap to a texture (whether it's procedural like Noise Texture or an Image Texture), the system uses certain default values, but they vary depending on the type of texture:

**1. Noise Texture node (or any procedural texture):**

If you don't connect any coordinates, Blender defaults to using **Generated** coordinates.

These coordinates are automatic and based on the bounding box of the object.

They are suitable for procedural shaders because they don't need UV unwrapping.

They work well on objects without defined UVs.

Common example: If you add a sphere and apply a Noise Texture without coordinates, you'll see the texture projects correctly because it uses Generated

**2. Image Texture node (image-based texture)**:

If you don't connect any coordinates, Blender tries to use the object's UV coordinates (typically named in Blender **UVMap**)

Specifically, it tries to use the first available UV layer of the object.

If the object has no UVs, the texture may not display correctly (it might appear black, distorted, or random).

This is because an image needs specific mapping to know how to "wrap" onto the geometry.

---

**Apply a Noise Texture to a bunch of Instanced Objects. But with a global coordinates, not “per object” or “per UV”**

**And, at the same time, if our instances are moving or scaling, allow the Noise to remain attached to each instance (but different for all)**

SOLUTION:

[https://chatgpt.com/share/68c31054-88f0-8010-b28d-9c9ef24056d3](https://chatgpt.com/share/68c31054-88f0-8010-b28d-9c9ef24056d3)

(applied on scene with Grapes for Brocard animation)

---

[2 Blender lighting tips](https://www.instagram.com/reel/C-GFwfbKkl5/?igsh=OXZhbDI2bWRtOGpk):

• I think the view transform should be AGX by default, but this is the most realistic I find.

• Colour temperature is a great way of creating realistic lighting by using Kelvins - I have a colour temperature tutorial already.

---

### Liquids

[Liquid inside glass, proper setup for Cycles](https://blender.stackexchange.com/questions/35726/fluid-in-a-glass) - A couple of alternatives. #2 seems more accurate/technical, following this other notes: [Liquid / glass interface IOR and normals in Cycles](https://blender.stackexchange.com/questions/2823/liquid-glass-interface-ior-and-normals-in-cycles)

[Liquid inside Glass Simulation Tutorial | EASY](https://www.youtube.com/watch?v=V_LEc4r9_a0)

[Liquid Movement inside a bottle with KennyPhases](https://www.youtube.com/watch?v=UomqA5jNMas)

[Liquids - Creating a Basic Fluid Simulation](https://www.youtube.com/watch?v=vBCHQGALHZc)

**Liquid inside a bottle or cup (Cycles)**

1. Coincident surfaces (glass and liquid touching)

Problem: coplanar faces with opposite normals cause artifacts.

Cycles can’t decide which material to prioritize → leads to noise, black spots, or discontinuities.

2. Liquid slightly overlaps into the glass

The liquid mesh penetrates into the glass thickness.

Avoids coplanar issue, but not physically correct → creates double refraction and wrong thickness perception.

3. Liquid slightly smaller, leaving a tiny gap (**recommended**)

Create a minimal air gap (e.g. ~0.001 m).

Cycles sees clear material transitions: air → glass → air → liquid.

Physically accurate and free of artifacts.

---

[32 procedural textures that use the Wave node in Blender](https://www.youtube.com/watch?v=_Ewq6e-HSWE) by Sam Bowman - I usually do all this kind of stuff with Substance Designer - Interesting to have a Blender perspective

[8+ Blender Lighting Tips to Improve Your Renders](https://www.youtube.com/watch?v=Sfi5IiV-s6U)

[A way to use logic operators in Blender Shader nodes?](https://blender.stackexchange.com/questions/161370/is-there-a-way-to-use-logic-operators-in-blender-shader-nodes)

[And did you use cycles experimental adaptive subdiv for better displacement here?](https://x.com/HogneeDZN/status/1810822352172630304) >>> YES

[Animated “paint on” effect](https://x.com/cgboost/status/1925827307291197459?s=12) - Small 1min tutorial

[Anisotropy in Blender 4.3 - YouTube](https://www.youtube.com/watch?v=7HeDHWsotkk) by Christopher 3D

[Array Lights in Blender - Simple Trick](https://www.youtube.com/shorts/ZObhhlkRcOU)

[Better Fur, Hair, and Anime shaders](https://www.youtube.com/watch?v=DptPx8sY7Bg)

[Bevel Shader TIP onCycles](https://x.com/pitiwazou/status/1912802347505377501)

[Bevel Shader - Another way is to use Geometry Nodes. It's much simpler and works with one shader per object](https://x.com/pitiwazou/status/1912802347505377501)

[Blender: How to Rotate HDRI / Environment Texture](https://www.youtube.com/watch?v=LB1_Ls1qkEg)

[Bumps are determined by distance, not by strength](https://x.com/ilyassel_/status/1836924290119389213?s=12)

[Cleaning the table leaves wipe streaks](https://x.com/ilyassel_/status/1837224975708631348?s=12)

[Color Management - Blender Developer Documentation](https://developer.blender.org/docs/release_notes/4.0/color_management/) - The AgX view transform has been added, and replaces Filmic as the default in new files. This view transform provides better color handling in over-exposed areas compared to Filmic.

[Control a Color Ramp Gradient Outside of a Node Group](https://www.youtube.com/watch?v=WaDkMP5ruh4) - Another similar tutorial: [FULLY Control a color ramp outside a node group in Blender - YouTube](https://www.youtube.com/watch?v=IoBOtar9REQ)

[Control the Material of Instances in Blender Geometry Nodes](https://www.youtube.com/watch?v=v52W39yvkjs) - Tutorial by Kimmo

[Displacement Maps in Blender](https://3dmodels.org/blog/displacement-maps-in-blender-tutorial/)

[Displacement in real time (for Blender 4.5)](https://x.com/ilyassel_/status/1904689949598773376) - Test by Ilyasse - See node tree on same thread

[Doing Surface Imperfections Right | Vray, Cycles, Arnold…](https://www.youtube.com/watch?v=OW4L0vdo_e4)

### Edge masks

[How to Make an Edge Mask](https://www.youtube.com/watch?v=hEbvGHceid4) - Basic setup

[How to use EDGE MASKS in Blender](https://www.youtube.com/watch?v=yZku65ONVOw) - A bit more advanced and pretty good

[Blender Secrets - Eevee Edge Wear](https://www.youtube.com/watch?v=2stkQE0buqA) - Alternate method

[Blender Let's Build Create an Outer Edge Mask Node](https://www.youtube.com/watch?v=Jqm0g02F85M) - Alternate method for inner and outer edges

[Better Edge Masks in Blender - Procedural Texturing](https://www.youtube.com/watch?v=Aa8gf1pwb4E) - Learn how to use the bevel node, and dot product vector math node in Blender, for perfect edge masks.

[Edge Masks - Blender Smart Materials](https://alaaeldien.gumroad.com/l/lzqZZF) - 12 Mask Group To be Used for masking Materials - *FREE* (or donate)

[Edges are crucial for realism](https://x.com/ilyassel_/status/1839034573537292693?s=12)

[Edging when doing texturing using Ucupaint addon](https://x.com/passivestar_/status/1837877883383025767?s=12) (metal effect on the edges of painted objects)

[Eevee Fake Translucency Trick](https://www.creativeshrimp.com/eevee-fake-translucency-trick.html)

[EEVEE refraction trick](https://x.com/thecgcy/status/1965766479070351544?s=12) - By The CGCY combining shader and compositing nodes, including Cryptomatte (screen-capture saved in my Setups_Tips_Tricks folder)

[Fix for some ugly normal map issues in Blender](https://x.com/gleb_alexandrov/status/1954874961350345156?s=12)

[Forgotten Metal Knowledge](https://www.youtube.com/watch?v=r3bkGPobpTw) - Tutorial on how to create better and more complex and realistic metals

[Get realistic lights with IES textures](https://x.com/ilyassel_/status/1841121588516630779?s=12) - [IES-Library: Browse](https://ieslibrary.com/browse) - [IES Downloads](https://www.acuitybrands.com/resources/technical-resources/ies-downloads)

[Glittering or “brilli-brilli” effect](https://x.com/ilyassel_/status/1838645096465437126?s=12)

[Hacked procedure to get blur using Shading Nodes](https://x.com/cmzw_/status/1855479571468222495) (see second post doing it horizontally first then vertical) - **Needed Blender 4.4**

[Had never thought of using this technique for RGB](https://x.com/ilyassel_/status/1840179992581263454?s=12)

[How to Bake Perfect Normals in Blender](https://www.youtube.com/watch?v=0r-cGjVKvGw) - Blender tutorial showing you how to bake a normal map from a high poly model, to a low poly mode (includes starter file)

[How to Blur a Texture in Blender](https://www.artstation.com/blogs/bjayers/zBNW/how-to-blur-a-texture-in-blender) (fake & noisy blur, really) - [Another technique, also fake and blur](https://www.youtube.com/watch?v=Ci2FDxsUjyQ)

[How To Combine Normal Maps Correctly (Adding Texture Detail, Blender Tutorial)](https://www.youtube.com/watch?v=S9sz00l3FqQ)

[How to create and access custom Node Groups in all your Blender Projects](https://www.youtube.com/watch?v=HzFUeOfCJzo)

[How to easily make a Wireframe in Blender in 1 Minute](https://www.youtube.com/watch?v=38ZC9BnN24U)

[How to make beautiful water shaders in blender](https://www.youtube.com/watch?v=v8LdfvwDKVY)

[How to Use Light Groups in Blender](https://www.youtube.com/watch?v=Op73b27ng5g)

[Is there an alternative to Random per Island for EEVEE?](https://blender.stackexchange.com/questions/258449/is-there-an-alternative-to-random-per-island-for-eevee)

[It's easier when math does the work (great glow or bloom effect)](https://x.com/ilyassel_/status/1840062360683499730?s=12)

[Keep the texture scale consistent when scaling stuff in Object Mode](https://x.com/quackarooners/status/1838162856019104106)

[Keyframe DESIGNER exposed parameters using the Substance add-on in your DCC of choice](https://www.instagram.com/p/DEVEBzxu6EG/) - Here Wes McDermott uses Cinema4D add-on, but this should be also possible with Blender add-on -> TO TEST

[Make CG Smudges better using this simple trick](https://x.com/sai_charan_md/status/2065421169927618938?s=66) - With direcional light smearing (anisotropy)

[Metallic BSDF node is underrated. Here is how you can use it!](https://x.com/sai_charan_md/status/2071982972216225864?s=66)

[Mixing Materials](https://x.com/ilyassel_/status/1810814622787637666?s=12) (terrains) - View entire thread

[My New FAVORITE Shading Technique](https://www.youtube.com/watch?v=8MTj9BrYGE4) - techniques for subsurface scattering and transmission using geometry proximity

[Nebula Setup with Stars Made in Blender Using Raymarching](https://80.lv/articles/dreamy-nebula-setup-created-in-blender-using-raymarching)

[Normal maps - DirectX vs OpenGL: what's the difference?](https://x.com/cgcookie/status/1923022306143567948?s=61)

[Realistic Gaussian beams in Blender - Part 1 (Creating the shader) - This video will show how to build a volumetric shader that plots the intensity distribution equation for Gaussian beams. ](https://www.youtube.com/watch?v=JVWi-ji-C1Q)

[Realistic Gaussian beams in Blender - Part 2 (Asset overview)](https://www.youtube.com/watch?v=15NtAyWRybE) - How to get started using the procedural Gaussian beam shader, which you can download from my Gumroad for free.

[Save a node group for later use ](https://blender.stackexchange.com/questions/270632/how-can-i-save-a-node-group-for-later-use-without-going-through-a-blend-file) (various methods, for all Geometry Nodes, Shading Editor, Compositor)

[Separate the background image and the actual lighting from an HDRi environment in Blender - It works in both EEVEE and Cycles, just use the Light Path - is Camera Ray output as a mix factor between 2 hdri's. #b3d https://t.co/OXW2usvvVT" / X](https://x.com/gleb_alexandrov/status/2035646803169673443?s=12)

[Shader based welding](https://x.com/jessemiettinen/status/1839391552424247355?s=12) (screenshots to recreate it)

[Shader based welding](https://blenderesse.gumroad.com/l/weld) (to buy, $1)

[Shader Control with Geometry Nodes](https://www.youtube.com/watch?v=TpDV1DbY434)

[Shampoo Bottle Part 3, UV mapping, texturing, lighting, & rendering - YouTube](https://www.youtube.com/watch?v=LFFvBn2NaG0) (DOWNLOADED) In the final part he gives very good advice on lighting and shading (changing parameters).

[Should You Micro-fillet? (Plasticity 3d)](https://www.youtube.com/watch?v=pB0dBXNcnXg) - Go to the part about how to use the Bevel Shade in Blender

[Small tip, link textures. They are amazing in Blender](https://x.com/ilyassel_/status/1757940287614206030?s=12)

[Smart materials in ucupaint | passivestar](https://passivestar.xyz/posts/procedural-materials-in-ucupaint/) - For UCUPAINT add-on (not installed… yet)

[Surface Imperfections Right | Vray, Cycles, Arnold…](https://www.youtube.com/watch?v=OW4L0vdo_e4) - How to improve the "Roughness variation" workflow to add surface imperfection by taking inspiration from real phenomenons

- [Original thread in X with some ideas about how to transfer this to Blender](https://x.com/PrismalDesign/status/1990710691402297388)

[Switch Node for Blender Materials - Support / Materials and Textures](https://blenderartists.org/t/switch-node-for-blender-materials/1487587)

[Texture Coordinates in Geometry Nodes](https://blenderartists.org/t/texture-coordinates-in-geometry-nodes/1519653) - Interesting discussion on this topic in BlenderArtists.org

[Textures Don’t Work on Curves—How to Fix It](https://www.youtube.com/watch?v=b-scwnmZ79o&t=249s) - If you need to add procedural textures to curves in Blender and want said textures to conform to the form of the curve even while animated

[The easiest way to render wireframe](https://www.youtube.com/watch?v=FdjJzOM9DkI)

[The viewport can shine since 4.2](https://x.com/ilyassel_/status/1840456560637575178?s=12)

[The RIGHT Way to do Edge Wear (in Cycles!)](https://www.youtube.com/watch?v=EQ149bMtKRA)

[Those slightly clammy hands left their mark](https://x.com/ilyassel_/status/1840722031823741034?s=12) (trace left by fingers on a cell phone screen)

[Tip for adding clouds and fog using black and white decals](https://x.com/ilyassel_/status/1835763374094754242?s=12)

[Use object viewport display color to assign different colors to the same material shader applied to different objects](https://x.com/cgboost/status/1958076068809637917?s=12)

[Using Ray Portal Plane](https://x.com/cmzw_/status/1989270791058583994?s=66) - By Celestialmaze

[Using voronoi Texture to create a TV screen](https://x.com/ilyassel_/status/1838264878189924483?s=12)

---

### Add decals and logos

[Adding Decals And Logos To 3D Models (two ways)](https://www.youtube.com/watch?v=UBBx-kZcmzI)

[How To Add Decals Without Shrinkwrap Modifier in Blender](https://www.youtube.com/watch?v=RTyxITv6Qr4)

[How to add DECALS and LOGOS](https://www.youtube.com/watch?v=LQExGvs_rRQ) (DOWNLOADED)

[The correct way to make decals in Blender (NO SHRINKWRAP) - YouTube](https://www.youtube.com/watch?v=rUP8aAG4AQ8) (DOWNLOADED)

## CAMERAS

**Local Cameras**

The active camera is normally defined on the scene level, so that it’s the same across all 3D Viewports. However, it’s also possible t**o make a camera the active one within one Viewport only** - [LOCAL CAMERA](https://docs.blender.org/manual/en/latest/editors/3dview/sidebar.html#bpy-types-spaceview3d-use-local-camera)

---

### Animated camera switching

While a scene contains only one camera by default, it’s possible to have multiple. You can then **bind the cameras to specific time points in your animation to create jump cuts showing different viewpoints**

Bind Camera to Markers is a special operator only available in the Timeline. Keymap: **Cmd/Ctrl-B** (select camera at Outline, call operator over Timeline) The operator allows markers to be used to set the active object as the active camera. IMPORTANT: no need to change the name for these markers, because once we bind a camera to a marker, this one catch his name from camera.

To use this operator, select the object to become the active camera and select a marker to bind the active camera to. If no marker is selected when the operator is applied, a marker will be added. When an object is bound to a marker, the marker will be renamed to the name of the active object. These markers also have a camera icon next to the left of the name to easily distinguish them from other informative markers.

These markers can be moved to change the frame at which the active camera is changed to the object the marker is bound to.

---

**Change Camera Passepartout Opacity**

This is NOT a General Preference, only Passepartout Color is (black)

It's a “per-camera” setting. Go to *Camera > Data > Viewport Display > Passepartout Opacity*. Change from 0.5 to 0.9

---

LENS-SIM ADD-ON - [Lens-Sim - Main tutorial](https://www.youtube.com/watch?v=1eDwnidoAME) - Overview of first part:

Once we convert a Default Camera to a Lens Sim one, the add-on try to inherit main parameters from it:

- Focus Distance

- Focus Object

- Minimum Clipping Distance

- F-Stop

The Ray Portal Plane is where we shot rays over this plane. And it's simulating the camera (the sensor?)

We can Scale Camera (and Ray Portal Plane) to see smaller. The camera scale does not interfere with the render image. But it's important not scale down to a very small value (like 0.001), because we could get floating point issues. 0.2 or 0.1 is perfectly fine, in any case.

The most important thing is to **consider this as a real camera**. Lenses are in real world size.

We shoot rays from the camera (at back) to the portal plane (in front). That means that every object, or any other Lens Sim Camera, that is in the middle will interfere with the rays!

Another important thing: this is an Orthographic Camera that only works (showing Perspective) in Cycles. This means that if we change to Solid View or Eevee, the Field of View will totally change. On those cases, simple press Disable Lenses to return back to regular (perspective) camera view for Wireframe, Solid of Eevee shading.

However, for those case where we have a fish-eye or very distorted lenses, we will find greater differences on Enabling/Disabling Lenses.

Even if we Disable Lenses, once we press F12 for rendering, the lenses will be enabled automatically.

We can have multiple Lens Sim Cameras, just caution not to overlap the area between camera and portal plane, between 2 cameras.

We can Pin the Lens Sim Camera to not loose it when selecting any other object in scene.

With the small Heart we can mark as favorite any Lens

**“Best Fit”** drop menu sets the camera sensor size. Read the tips on-tool!

- • “Best Fit” will fill the largest usable image area with an aspect ratio of 1.777

- • “Focal Length” will mimic Blenders focal length. Benefit of this is that we can change our lenses and will maintain the same focal length

- • “Sensor Width” allows a manual resizing of sensor.

Button at right allows to rotate camera 90º (convenient for vertical formats, to maintain coherence on settings)

Play with **Focal Length** when using really anamorphic aspect ratios, to avoid black vignetting.

**Distance**: take in consideration that not all lenses work for all distances. For this reason, if you choose some extreme distance (or non appropriate for selected lens) the image will “break” into total noise

Enabling “Render Schematics” we can see the real relation between lenses and focal distance, as a kind of helper

---

### Achieving stronger depth of field blur with lens-sim
(orthodox workflow)

**Core Principle**

Lens Sim is designed to preserve physically plausible lens behavior.

Exaggerated depth of field should therefore be achieved by camera emulation scaling, not by breaking lens parameters.

**What Not to Rely On**

Forcing the F-Stop below the physical limit

Produces stronger blur, but:

- Breaks the real lens model

- Alters sharpness, aberrations, and contrast

- Triggers warning indicators

Valid for artistic effects, not orthodox lens simulation

*The Correct Control: Global Scale*

*Location: Advanced Settings > Camera > Emulation > Controversial > Global Scale*

*Increase from 1 to 10, 20, 40 or even more, like 100 (*) (Remember to compensate Z distance variation with extra empty)*

- *(*) I have the suspicion that working using CENTIMETERS as unit in my scenes, instead of METERS, has something to do with this so hight Global Scale requirement*

**What Global Scale Does**

Rescales the camera–scene relationship

Effectively adjusts:

- Lens size

- Sensor size

- Distance perception

Narrows the focal plane without changing aperture

Preserves the lens’ optical character

Does not trigger warnings

**Recommended Workflow**

1. Keep F-Stop Physical
- Use the real lens value (e.g. f/4.1)

- Optionally push slightly lower, but stay plausible
2. Use Manual Focus
- Disable autofocus / ray-guided focus

- Slightly offset focus distance if needed
3. Increase Global Scale
- Start at 1.2–1.5

- Increase progressively until desired blur is achieved

- High values (10–20) are normal in:

- Macro shots

- Very close camera distances

- Scenes using centimeters instead of meters
4. Ensure Strong Distance Separation
- Subject close to camera

- Background significantly farther away

**Macro & Scene Scale Considerations**

Macro photography behaves non-linearly:

- DOF collapses rapidly at short distances

Changing Blender units from meters to centimeters compresses the optical scale

High Global Scale values compensate for this and are expected

**When to Break the Rules**

Lowering F-Stop below physical limits is acceptable when:

- A stylized or narrative look is desired

- Physical accuracy is not required

- “Impossible” macro or dreamy blur is intentional

---

**Lens Sim Dark Vignetting Accumulative in Layers issue - HEINZELNISSE (add-on author answer)**

Question: On rendering with multiple view layers, since the barrel vignette is visible on all layers it accumulates into a very dark vignette around the final composited image. Is there any way of disabling only the barrel vignette?

Answer: I haven't found any good ways to do it, it is a render limitation of tracing the lens system and not something I have direct control over. However, if you use crypto mattes you should be able to mask out your objects, so that you can set the vignetting to be transparent.

- *(screen capture saved in my Setups, Tips & Tricks folder)*

---

[Achieving True Photorealism With Lens Simulation](https://www.youtube.com/watch?v=jT9LWq279OI)

[Simulated Anamorphic Lens in Blender (preview)](https://www.youtube.com/watch?v=1nb78pP-2RE)

[Lenses. How to use them properly in Blender](https://www.youtube.com/watch?v=_AXwPrkWuMo&t=12s)

## ANIMATION

Here are some of the best Blender shortcuts combo:

**A / Alt-G-R-S**

This is: Select All, and then rest all Locations and Rotations to 0.0 and Scale to 1.0

---

**To switch Cameras along animation use “Bind Cameras to Markers”**

Select the object to become the active camera and select a marker to bind the active camera to. Marker > Bind Camera to Marker

**Or even better workflow:**

You don't even need to create marker nor setting active camera. Just select the camera in the outliner, hit **Cmd/Ctrl-B** (over the Timeline at a given frame) and marker with selected camera will be created automatically. **NOTE:** use DOPE SHEET EDITOR or TIMELINE, not Graph Editor

---

Channel > **Extrapolation** Mode > Constant / Linear / Cyclic **Shift-E**

---

[Map the new ''View in graph editor" to a hotkey to quickly find your curves (tweet with images)](https://twitter.com/RamenLook/status/1781036280681501052)

1) open up prefs

2) go to keymap -> user interface, hit "add new"

3) search graph editor and select

4) assign hotkey (i use F) and turn isolate on

---

Write **#frame** in any parameter to control that with time. Or, for example, **#frame*0.1**, or **#sin(frame*0.1)**

(then, open the Drivers Editor to full access)

---

**Using the new PORTAL node (in 4.2)**

[Not just duplicate the scene, ray portal can also make it fractal](https://twitter.com/chiu_hans/status/1789287820697506234?s=12)

---

**How to add keyframes for multiple objects at once**

[Keyframe selected — Blender Extensions](https://extensions.blender.org/add-ons/keyframe-selected/) - Free, installed

[Key Selected Objects - Blastframe](https://blastframe.com/product/key-selected-objects/) - Add-on *$10* (a bit expensive for such a basic, simple need…Maybe create my own add-on for this)

[How to add keyframes for multiple objects at once - Blender Stack Exchange](https://blender.stackexchange.com/questions/1621/how-to-add-keyframes-for-multiple-objects-at-once)

For things like Location, Rotation, Scale… press **K** to Insert Keyframe for selected objects.

**Linked Animation datablocks:**

If creating the *same animation* on all object, you can animate just the active object and then link the action to the rest of the selection: Object > Make links… (Cmd/Ctrl+L) > Animation Data).

---

**How to get a clean Apply Modifiers for F-Curves in Graph Editor**

1. Select channel

2. Channel > Bake Channel (choose Linear in bottom Option if necessary)

3. Channel > Simplify F-Curves (usually you need to put your mousse over bottom Options “Distance Errors”, leaving it as zero)

4. RMB > Interpolation Mode > Linear (if necessary)

---

**TIP FOR ANIMATED CAMERAS aka “LOCAL CAMERAS”**

Doing a scene animation is very usual to have **Cam1**, **Cam2**, **Cam3**… being used and changing on timeline (using Cmd/Ctrl-B to create Camera-Markers)

But sometimes we need to see or animated items through a different camera (say “**CamTest**” or “**CamHead**”) not through the final to-render cameras

On these cases is very useful to use the **N-Panel > View > View > Local Camera** feature

But important: REMEMBER TO DISABLE THIS ONCE NO LONGER IS NEEDED!!!

---

### Visualize motion paths

[Motion Paths - Blender Manual](https://docs.blender.org/manual/en/latest/animation/motion_paths.html)

The Motion Paths tool allows you to visualize the motion of points as paths over a series of frames. These points can be object origins and bone joints.

To create or remove motion paths, it is necessary to first select the bones. Then:

To show the paths (or update them, if needed), click on the Calculate Path button.

To hide the paths, click on the Clear Paths button.

Remember that only selected bones and their paths are affected by these actions!

Tech Stuff on Motion Paths

Motion Paths in Blender (the ones you see when you enable them for bones or objects in Pose Mode or Object Mode) are not stored as geometry, nor as Grease Pencil or Annotation data.

They are purely a viewport visualization, computed on the fly and drawn by Blender’s internal drawing system (part of the GPU module).

These are not regular datablocks (like Meshes, Curves, or GPencil objects).

They live in memory only — they’re generated, displayed, and discarded as needed.

Motion Paths are:

Computed from evaluated animation data

Stored temporarily in RAM (not in the .blend)

Rendered directly via GPU API (no object, no mesh, no grease pencil)

So, motion paths are ephemeral: they exist only in memory, like a viewport helper, not as a datablock you can save or link

---

[Animate Algebra formulas and equations with multiple steps](https://www.youtube.com/watch?v=MX90CkWzRtA) - Using the Typst importer extension [https://extensions.blender.org/add-on](https://extensions.blender.org/add-ons/typst-importer/), here's how to animate algebra in Blender.

[Find Lost Keyframes In Blender - YouTube](https://www.youtube.com/watch?v=zx-xcJlw5Ss)

[The 'Child Of' Constraint Demystified](https://www.youtube.com/watch?v=ul6dDAOc7zY)

[Driver Expressions for Animations in Blender](https://www.youtube.com/watch?v=9cX9GKry9ns) - by Passivestar - How driver expressions can be used for quickly animating stuff

[Every Rigid Body Constraint Exampled in 10 Minutes](https://www.youtube.com/watch?v=6BALmm_uN-c)

[Film emulation in the viewport compositor](https://www.youtube.com/watch?v=1DHL3nCoIhk)

[Rigging switchable parents and equipment slots in Blender - YouTube](https://www.youtube.com/watch?v=L0yWGPPEI1Q)

[WHY ARE CONSTRAINTS SO HARD? - Child Of Constraint Explained!](https://www.youtube.com/watch?v=zjz_9v29Rmk)

[You can use 1 camera per viewport](https://x.com/ilyassel_/status/1792710213914763577?s=12) - This is how

[How to sync animation to music in blender](https://www.youtube.com/watch?v=eFWN3x84NcU)

## PREVIEWS & RENDER

[Principled BSDF - Blender 4.2 Manual](https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/principled.html)

[File Paths - Blender 4.5 LTS Manual](https://docs.blender.org/manual/en/latest/files/file_paths.html#path-templates) - **variables** are currently available in template expressions

---

**To read all Metadata included on a rendered image**, use **XnViewMO** free app. It shows all PNG text chunks, not just the standard EXIF/XMP

You can open any render, hit *Info → Properties → PNG → Text*, and boom: RenderTime, Scene, Frame, Camera… exactly like in Blender’s Image Editor.

---

### Render region

Activate: Press **Cmd-B** in the 3D view and drag to select the region.

Final Render: You can enable **"Render Region"** in the Output Properties to apply this to your final F12 render.

Crop: Check **"Crop to Render Region"** in the Output Properties to render only the selected area's resolution rather than the whole image with empty space.

Clear: Press **Cmd-Alt-B** to remove the render region.

---

### Wireframe render

[Create Wireframe Renders In Blender - 3 Quick And Easy Methods | Gachoki Studios](https://gachoki.com/create-wireframe-renders-in-blender/) (start here. Method 2 or 3)

[3 easy ways to render Wireframe in Blender 4.2 - YouTube](https://www.youtube.com/watch?v=AS867TnAaT0)

[Easy Ways to Create Wireframe Renders in Blender (2025) | Blender Render farm](https://irendering.net/easy-ways-to-create-wireframe-renders-in-blender-2025/)

---

**TO RENDER VIEWPORT OPEN-GL aka PLAYBLASTS, FOR ANIMATICS**

[Viewport Render - Blender Manual](https://docs.blender.org/manual/en/latest/editors/3dview/viewport_render.html)

**CAUTION: DESELECT ALL** (because selections appear on playblast renders)

Give a **Name to the Current Scene** (same that Filename) going to **Outliner > Scenes -** *Go back to Outliner View*

Go to **Geometry Nodes Workspace**

Change Object **Color Random**

Hide **3D Cursor, Origins, Grid & Axis -** *Enable later*

Enable **Wireframe 0.5 to 0.8 opacity**

Enable **Cavity > Both**

Hide **Cameras, Lights & Controls -** *Enable later*

Optional: Temporarily **increase Viewport SDS** for needed objects **-** *Return back to original later*

Resolution (**3840 x 2160**)

Frame Rate (**24**)

Frame Start & End for **each camera** - *Go back to Whole Frame Range later*

Output Path (To avoid saving at hidden /tmp/ folder) - Example: **“Soil_Cam_01_”** - *REVISE AT WIN*

Media Type **Video -** *Go back to Image > PNG or EXR later*

Encoding > Container > **MPEG-4**

Output Quality to **High Quality**

For Metadata, enable only: **Frame, Frame Range, Camera & Scene**

Enable Output > Metadata > **Burn Into Image -** *Disable later*

Font Size to **48 px**

3D Viewport > View > **Render Playblast** (also at Quick Menu)

---

**Fix Pink/Purple Blender Missing Textures Issue (and Missing Files in general):**

**FIRST: To get a Report with all missing files:**

File > External Data > Report Missing Files (prepare an Info viewport to read all)

**SECOND: To Find/Locate all those missing files:**

File > External Data > Find Missing Files > Locate main folder with maps

---

**DISABLE BACKGROUND FROM CAMERA / Transparent or solid color**

EEVEE/CYCLES - Render Tab > Film > Enable “Transparent”.

ALSO, ONLY IN CYCLES - World Tab > Ray Visibility > Disable Camera

That gives you a transparent background.

---

### And what if you just want some flat color instead?

Disable the Render > Film > Transparent (if that was enabled)

Go to the Shader window, and as shader type choose "World".

Use the Light Path node as a factor between the HDRI Background and an RGB Background color. Use the "Is Camera Ray" output.

[Blender Secrets - Use HDRI only for foregrounds - YouTube](https://www.youtube.com/watch?v=vkJByvYAfzI)

**Or also: a GRADIENT background:**

[How-to have color accurate gradient backgrounds or pure white backgrounds](https://x.com/multimicah/status/2078196629296107978)

---

**To hide or disable an object from appear on camera** (but affect reflections or shadows)

Object Properties > Visibility > Ray Visibility > Disable Camera

Note that there is also a Disable Shadows there.

---

**To render an Object (or Collection) with shadows on a transparent background (Cycles only)**

Set Render Engine to **Cycles**

Still in Render Properties, scroll to the Film section, and Set **Film** to **Transparent**. This makes everything except visible objects (and shadows from shadow catchers) transparent.

Select your Floor object. Go to the Object Properties tab, Scroll down to **Visibility** > **Enable Shadow Catcher**.

When you render now, object will be there and the background will be transparent, and only shadows will appear where the floor was.

---

**To render two separate layers:**

- • Objects with full transparent background (and no shadows)

- • Only the floor shadows

Set **Film** to **Transparent**

Put all your Objects into a Collection and your Floor into another Collection

Go to the Outliner

Right-click your Floor Collection in the Outliner > View Layer > **Set Indirect Only**

- This makes them not visible to the camera, but they can still affect shadows, reflections, etc.

To disable this effect: View Layer > **Clear Indirect Only**

---

**To get Shadow only over pure white, instead of transparent, we can use Compositing Nodes:**

2 Methods:

Render Layers - Image output > Alpha Over Node (top layer, this is bottom input) > Composite

- or

Render Layers - Alpha output > Invert Color > Composite

---

**To See & Control Depth of Field**

1. Select Camera > Cam Data > Enable Depth of Field

2. Select Camera > Cam Data > Viewport Display > Enable Show Limits

3. To see Depth on Solid Mode > Viewport Shading > Enable Depth of Field

Play with Focus Distance and Aperture Settings, specially F-Stop & Blades

- [Cameras - Blender Manual](https://docs.blender.org/manual/en/latest/render/cameras.html)

- [What is f-stop on a camera? | F-stop photography | Adobe](https://www.adobe.com/creativecloud/photography/discover/f-stop.html)

---

**How to have an Environment A for reflections & Environment B for the camera background**

Use the Light Path trick:

[Blender Eevee - Removing Background in Eevee - YouTube](https://www.youtube.com/watch?v=CUKxtvmY2pk)

[Is there a way to have a separate HDRI for reflections/background using Eevee? - Support / Lighting and Rendering - Blender Artists Community](https://blenderartists.org/t/is-there-a-way-to-have-a-separate-hdri-for-reflections-background-using-eevee/1185932)

[Cycles - Use an HDRI for reflections only, and not have its light affect the scene](https://blender.stackexchange.com/questions/178080/can-i-use-an-hdri-for-reflections-only-and-not-have-its-light-affect-the-scene)

---

**TIPS FOR FAST CYCLES RENDERING (compiled from different sources)**

First of all: launch a first test render with all settings at default.

Then, apply these changes to check if speed is increased, but also if quality is not compromised too much.

In any case: check all this by yourself.

Preferences > System > Cycles Render Devices > OptiX, **Enable GPU** / **Disable CPU**

Render > Device > **Enable GPU Compute** *(important to enable this every single time, at first time opening in PC coming from Mac)*

*IMPORTANT: check RGBA or RGB* depending on if you need or not the alpha or background transparency in PNGs. Caution: for some reason, even if using RGB (and not RGBA) images seems to have a transparent background in still frames render checks, in the final render window, but alpha is NOT there if just using RGB.

**TESTED: To decrease rendering time at 4K or 6K** (this decreased time from **17m** to **6m** for my Brocard Animation Soil Cam 1, without apparent drawback - Also very useful for Mondo)

Render > Sampling > Render > Noise Threshold > from 0.01 to **0.025** or even **0.05** or **0.1 - Double check this comparing zooms on various tests VS render time**

Render > Sampling > Render > Max Samples from 4096 to **1024**

Render > Sampling > Render > Denoise > **Use GPU**

Render > Performance > Memory > Tile Size: from 2048 to 128, **256** or 512

**TESTED: For scenes with real displacements**

To avoid possible OPTIX_ERROR_INVALID_VALUE at **4K** render (coming because Displacement)

Render > Subdivision > Dicing Rate Render from 1 to **2** or even **4 or 5** for animated displacements

Render > Subdivision > Max Subdivision from 12 to **8** or even **6 or 5** for animated displacements

**MORE tips to decrease render time:**

Render > Sampling > Render > **Turn ON Denoise** (try options)

Render > Sampling > Lights > **Disable Light Tree**

Render > Light Paths > Max Bounces > **from 12 to 1/8**

Render > Light Paths > Caustics > **Disable Reflective & Refractive Caustics** (if not necessary)

Render > Performance > Final Render > **Enable Persistent Data** (NOT with modified topology)

Render > Film > Pixel Filter > **Width from 1.5 px to 1.0 px**

Render half or quarter frames and use [Flowframes - Fast Video Interpolation](https://nmkd.itch.io/flowframes)

---

**MORE CYCLES SETTINGS TO CONSIDER AT 4K (***TO BE CHECKED***)** - BY CHAT GPT

### 1. light paths

Reducing path complexity has one of the biggest impacts on render time, especially at high resolutions.

Recommended changes:

**Max Bounces:** Lower from the default 12 to 8 (or even 6 for many indoor scenes).

**Diffuse / Glossy / Transmission Bounces:** Lower to 3 (default is 4).

**Transparent Max Bounces:** Lower from 8 to 4.

**Volume Bounces:** Lower to 0–1 unless you really need volumetrics.

**Clamping:**

- **Indirect Clamp:** Set to 1.0 or 1.5 (prevents fireflies, stabilizes sampling).

- Leave **Direct Clamp** at 0.0 unless you see sparkle artifacts.

These changes usually produce very similar visual quality while cutting noise early.

### 2. performance panel

These settings affect how efficiently Cycles uses your GPU/CPU.

**Tile Size (GPU + OptiX):**

For modern GPUs (RTX cards), set Render > Performance > Tiles to 256 × 256.

(OptiX likes larger tiles than CUDA did.)

**Persistent Data:**

Enable Render > Performance > Persistent Data.

Significantly reduces rebuild time when rendering multiple frames, but also helps somewhat for single large frames (4K) with heavy geometry.

**Use Spatial Splits (CPU only, if you ever use CPU rendering):**

Keep enabled. Improves BVH efficiency at the cost of pre-processing time.

### 3. film settings

**Transparent Background:**

If your scene does not need Transparent Film, disable it.

Alpha processing adds overhead (small but measurable at 4K).

**Pixel Filter:**

If you use Gaussian, consider switching to Blackman-Harris (the default) or even Box with size 0.5–0.75 for slightly sharper renders and lower filtering cost.

### 4. cycles sampling (additional considerations)

You already adjusted Max Samples and Noise Threshold. A few small adjustments:

**Min Samples:**

Set Min Samples to 0 (default is fine).

At 4K the adaptive sampler converges faster; forcing minimum samples only wastes time.

**Scrambling Distance (Advanced settings):**

Increase Scrambling Distance to 1.0 (default 0.0) to push more approximate sampling.

This reduces noise substantially at high resolutions with almost invisible quality loss.

Works best under OptiX.

**Blur Glossy:**

Set 0.1–0.2 if you have a lot of micro-faceted reflections.

It softens ultra-sharp highlights a little, which is physically reasonable and reduces noise.

### 5. shadow caustics / caustics

Only enable caustics if absolutely required.

**Disable entirely:**

Render > Light Paths > Caustics: Off

This alone can cut render times dramatically in scenes with glass or water.

### 6. volumes (if applicable)

If your scene includes fog, smoke, or volume lights:

Volumetric Tile Size: set to 2 px instead of 1 px.

Step Rate: increase slightly (e.g., 0.1–0.2).
These changes have almost no visual impact at 4K unless the volume is hero-quality.

### Typical “4k-optimized” configuration (safe baseline)

To give you a concrete benchmark, this is a safe but efficient setup I often recommend for 4K Cycles:

Max Samples: 800–1200

Noise Threshold: 0.02–0.03

Max Bounces: 8

Diffuse/Glossy/Transmission: 3

Transparent: 4

Volume: 0–1

Indirect Clamp: 1.0

Tiles: 256×256 (GPU OptiX)

Persistent Data: ON

Caustics: OFF

Dicing Rate Render: 2 (or 3 if displacement is modest)

Max Subdivision: 8

Scrambling Distance: 1.0

---

**TIPS FOR DISPLACEMENTS COMBINED WITH ANIMATED DEFORMATIONS IN 4K** - BY CHAT GPT

To avoid errors like:
*“Failed to build OptiX acceleration structure” & “System is out of GPU and shared host memory”*

SUCCESSFULLY APPLIED:

• Render > Subdivision > Dicing Rate (Render): from 2 to 5 (originally 1)

• Render > Subdivision > Max Subdivision: from 8 to 5 (originally 12)

• Render > Performance > Tile Size: from 2048 to 512

COMPLETE TIPS BY CHAT GPT:

**1. Increase the Render Dicing Rate**

You already raised it from 1 to 2, but this is still relatively fine for 4K rendering with deforming displacement.

Try Render > Subdivision > Dicing Rate (Render): 3 or even 4 or 5

Visual impact: very low for rocky or irregular ground, but it drastically reduces generated micro-geometry.

This is the most effective and first recommended action.

**2. Lower the Maximum Subdivision Level**

If the displacement deformation becomes intense at frame 146, Cycles may try to subdivide more deeply to capture those folds.

Try Render > Subdivision > Max Subdivision: from 8 down to 6 or even 5

Usually no visible difference on rough ground, but significantly reduces geometry spikes.

**3. Reduce the Displacement Bound (if used)**

Cycles uses a “displacement bound” to estimate how far surfaces may move. If set too high, it forces more subdivision to avoid clipping.

If you are using Displacement Only or Displacement + Bump:

Try Material > Settings > Displacement Scale: slightly lower

Material > Settings > Displacement Bound: reduce modestly (e.g., from 0.5 to 0.3)

This helps prevent extreme micro-subdivision bursts during deformation.

**4. Switch the Material to “Bump Only” for Those Frames**

If visually acceptable, this eliminates real micro-displacement during the problematic moments.

Material > Settings > Displacement:

Bump Only (you can keyframe this if needed only for frames 146–150, etc.)

High visual fidelity is usually preserved (90–95%) with drastically lower memory usage.

**5. Check Any Geometry Nodes Increasing Mesh Density**

Even though you have only a few stones, verify:

Any Subdivision Surface nodes in GN: lower the Render level.

If using Volume to Mesh: reduce voxel density.

If multiple meshes are joined, ensure none becomes overly dense on that specific frame.

**6. Use Smaller Render Tiles**

In 4K scenes with heavy displacement, memory spikes can be reduced by manually setting tile size:

Render Properties > Performance:

Tile Size: 128 or even 64 (finally used 512)

This does not reduce geometry but reduces memory pressure during BVH construction.

**7. Disable “Spatial Splits”**

Turning this off sometimes reduces memory consumption for scenes with extreme micro-displacement.

Render > Performance > Acceleration Structure:

Disable Spatial Splits

Minimal impact on speed, but can lower memory usage.

**Recommended Order of Application**

Increase Dicing Rate to 3 or 4

Reduce Max Subdivision to 6

Use Tile Size = 128

Disable Spatial Splits

Material adjustments if needed:

– Lower Displacement Scale slightly

– Or temporarily use “Bump Only” during heavy deformation frames

In almost all OptiX memory failures caused by displacement, raising the dicing rate solves the issue.

---

### Tips to get better renderings with eevee

**Enable High-Quality Settings (Render Properties)**

Render → Sampling

- Increase Render Samples to at least 64–128 (more if needed).

- Enable Viewport Denoising (if previewing interactively).

Enable Ambient Occlusion

- Increase Distance to match your scene scale.

- Use Bent Normals and Only Local for more realistic contact shadows.

Enable Screen Space Reflections

- Turn on:

- Refraction

- Half-Res Trace (turn off for better quality)

- Increase Trace Precision

- Increase Max Roughness to 1.0 (captures more materials)

- Enable Screen Space Global Illumination (SSGI) if available (Blender 3.5+)

Enable Soft Shadows

- Increase Cube Size and Cascade Size to 2048 or higher for crisper shadows

- Set Bias carefully (too low = artifacts; too high = floating shadows)

Indirect Lighting (GI)

- Bake Irradiance Volume or Reflection Cubemap probes manually

- Place multiple irradiance volumes for large/complex interiors

- Don’t forget to rebake after changes to geometry or lighting

Volumetrics (if used)

- Lower Tile Size for better quality

- Increase Samples for smoother fog/smoke

**Lighting Tips (to Mimic Cycles More Closely)**

Use Area Lights or Sun Lamp (not Point unless needed)

Enable Contact Shadows per light for more realism

Simulate bounce light manually with extra subtle fill lights (EEVEE doesn’t do real GI unless using SSGI or baked probes)

Use color-accurate HDRIs and enable Screen Space Reflections + Irradiance Volumes

**Materials & Transparency**

In Material Settings:

- Use Alpha Blend / Alpha Hashed for transparency

- Enable Refraction if your material needs it (e.g., glass), and enable it in the SSR panel too

- Use Clearcoat, Subsurface Scattering, and Sheen sparingly (not all are perfect in EEVEE)

**Advanced**

Screen Space Global Illumination (SSGI): A newer feature that simulates bounce lighting similar to Cycles. Works best with:

- High sample counts

- Proper indirect lighting setup

---

### Eevee viewport vs f12 render: what shares and what doesn't

**Shared between Viewport and F12 Render:**

Most of the Render Settings (in the Render Properties tab) apply to both the interactive viewport render (Z key → Rendered, or Shift+Z) and the F12 render.

So when you tweak these:

- Ambient Occlusion

- Screen Space Reflections

- Shadow Settings

- Volumetrics

- SSGI

- Soft Shadows

- Lighting Probes (after baking)

- Render Sampling

All of these affect both the viewport and F12.

**Not shared or handled differently:**

Some settings or behaviors can differ between viewport and F12:

Viewport Sampling: Viewport samples are often lower than Render samples

- Go to:

- Render Properties → Sampling → Viewport

- Increase this if your interactive render is noisy.

Viewport Denoising must be enabled separately:

- Render Properties → Sampling → Viewport Denoising

Overlays and Display Settings: The viewport might show things like wireframes, outlines, or other overlays that aren’t present in the final F12 render.

Material and Lighting Preview Modes (Z key): Make sure you’re in Rendered mode (not Material Preview), which uses EEVEE with your actual render settings, not the simplified lookdev setup.

---

### To see any channel (roughness, metallic, etc.) while rendering in cycles in the viewport or render

**1. Direct in the Shader (most flexible)**

In your material, plug the property you want (Roughness) into the Material Output → Surface through an Emission node.

Roughness > Emission Color > Material Output

This will render the scene in grayscale corresponding to that channel. It updates in real-time with Cycles interactive rendering.

Advantage: Works with any attribute, not just those Blender exposes as passes.

**2. Using Render Passes (if you need to export)**

Blender has built-in Render Passes (Properties > View Layer > Passes).

But note: Metallic and Roughness are not included as standard passes.

You only get things like Diffuse Color, Glossy Color, Normal, Z, etc.

So this won’t help for Roughness unless you bake it or use method 1.

**3. Shader AOVs (custom passes)**

If you want something cleaner than rewiring the shader:

In Properties > View Layer > Passes > Shader AOVs, add a new AOV (name it “roughness”).

In your shader, connect Roughness into an AOV Output node.

Now you can render normally, but in the Render View (Image Editor) you can pick your custom pass.

Still gives you the full 3D render, but isolating the property.

For pure interactive study in viewport Method 1 (Emission trick) is the fastest — you can even duplicate your material, keep it as “analysis shader”, and swap quickly.

For analysis + final export of that pass Method 3 (Shader AOVs) is the clean way.

---

**MOTION BLUR ARTIFACTS WITH ANIMATED GEOMETRY NODES - Causes and Practical Solutions**

Like the artifacts and glitches appearing on rendering my vines growing in Brocard animation.

*My quick and fast solution was to add a very small and subtle NOISE to the Factor animated parameter for growing.*

**What is actually happening**

When Motion Blur is enabled, Blender does not render a single static frame.

Instead, it evaluates the scene at multiple sub-frames before and after the current frame in order to estimate motion.

In this case:

The vine is animated using Geometry Nodes

The animation is driven by a 0–1 growth factor

The geometry is not temporally continuous

- segments appear / disappear

- curve length changes abruptly

- thresholds, compares, clamps, resampling, etc.

At a specific sub-frame (e.g. 461.95 or 462.05), Blender evaluates a geometry state that is topologically incompatible with the main frame.

Motion Blur then interpolates between two incompatible geometries, producing:

triangular streaks

translucent fan-shaped surfaces

random-looking “glitches”

That is why:

frame 462 fails

frames 461 and 463 are perfectly clean

changing the factor from 0.871 to 0.872 fixes the issue

This is a classic Motion Blur + procedural animation interaction.

**Why it only affects the vine**

The vine is the only object that meets all three risk conditions:

Geometry Nodes evaluated per frame

Animation driven by a scalar factor

Effective topology changes over time

Other objects are either static, transform-only, or deforming without changing connectivity — all of which are Motion Blur–safe.

**Solutions (from best practice to fastest workaround)**

**1. Enforce temporal continuity in Geometry Nodes (best practice)**

Avoid hard thresholds on animated values.

Do not do:

if (factor > X) → geometry appears

Instead:

Keep geometry always present

Animate:

- scale

- radius

- offset

- visibility via smooth falloffs

Replace:

Compare

Greater Than

Less Than

With:

Smoothstep

Map Range with soft transitions

For curve growth:

Keep the full curve alive at all times

Control only trim or thickness smoothly

Ensure Resample Curve point count does not change over time

**2. Bake the animated geometry (very robust)**

If the animation is final:

Duplicate the vine object

For each frame:

- Object > Apply > Visual Geometry to Mesh

Use the baked version only for final rendering

This produces frame-by-frame stable geometry that Motion Blur can interpolate safely.

**3. Reduce Motion Blur shutter length**

Lower the Shutter value (e.g. from 0.5 to 0.2).

This reduces the temporal window of sub-frame evaluation and often avoids crossing critical growth thresholds.

**4. Disable Motion Blur only for the vine**

Render the vine in a separate collection or render layer with Motion Blur disabled, then composite it back.

This is a very common production solution when an asset is not Motion Blur–safe.

**5. Temporal offset hack (fastest workaround)**

Instead of animating the factor directly:

- factor = animated_factor(frame - 0.25)

Or simply add a tiny offset:

- factor = animated_factor + 0.0005

This moves the threshold crossing away from the center of the frame and avoids sub-frame conflicts.

It is a hack — but a perfectly acceptable one.

*My quick and fast solution was to add a very small and subtle NOISE to the Factor animated parameter for growing.*

**Why Blender does not “fix this automatically”**

Geometry Nodes do not guarantee temporal coherence.

Motion Blur assumes that geometry evaluated at sub-frames is valid and compatible.

From Blender’s point of view, this is not a bug but a known limitation of procedural animation combined with temporal sampling.

If you ever want to revisit this properly, the exact culprit node is always one of:

hard comparisons

topology-changing trims

resampling driven by an animated value

But for now, your very small noise in factor animation fix is 100% reasonable and production-safe.

---

Render Specific Frames > **Ctrl-Shift-F12** *(using* [Loom Add-on](https://github.com/p2or/blender-loom)*) >>> Look add-on preferences*

---

Use Compositor Alpha Convert node to render “**Un-Premultiplied**” or **“Straight alphas”**

[Alpha Convert Node - Blender 4.4 Manual](https://docs.blender.org/manual/en/latest/compositing/types/color/alpha_convert.html)

---

**Render fast tutos:**

[5 Tips for FASTER 3D Rendering (Blender Cycles) - YouTub](https://www.youtube.com/watch?v=4NX2ubz8GW8)*e* - (Downloaded) Not exactly tips to increase Cycles speed, but techniques like multilayer, light groups and so…

[How to Render Faster In Blender Cycles - YouTube](https://www.youtube.com/watch?v=boMoTlnj9Mw) - (Downloaded) Not bad… Too much cats

[The FASTEST Cycles Renders you can get in Blender! - YouTube](https://www.youtube.com/watch?v=Jv1vk8YWCsQ)

[Realistic Shading in Blender Explained - YouTube](https://www.youtube.com/watch?v=bjr08a48VK0)

---

**Optimization In Blender - 5 Chapters - VERY GOD TIPS, ADVICES AND OVERALL INFO**

1. [Smaller, faster .blend files](https://www.youtube.com/watch?v=u_Kw7VqA0O8)

2. [Open .blend files faster](https://www.youtube.com/watch?v=_pP9gkM3anc)

3. [Make any Blender viewport smooth](https://www.youtube.com/watch?v=tyVnxy_7t6s) - THIS IS TOP NOTCH!

4. [Level up your render skills in 10 mins | Advanced Cycles tutorial](https://www.youtube.com/watch?v=MzJ-w6Zmpco) - ALSO TOP NOTCH!

5. [Why I never render PNG](https://www.youtube.com/watch?v=NxzMAYckaV4)

---

**Custom Noise Reduction Tip**

[3 Tips for better renderings in Blender 3.4 - YouTube](https://www.youtube.com/watch?v=Dpg0fcqIKhg) (2:20)

WARNING, if you leave the “Use Nodes” checkbox activated in Compositing, you will have to deactivate it if you do not want to use it.

---

**Optimizing Renders** > [Reducing Noise - Blender Manual](https://docs.blender.org/manual/en/latest/render/cycles/optimizations/reducing_noise.html)

**Optimizing Renders** > [Shader Nodes - Blender Manual](https://docs.blender.org/manual/en/latest/render/cycles/optimizations/nodes.html)

---

**Transparency**

[How to Use Eevee Transparency in Blender 4.2 (Tutorial)](https://www.youtube.com/watch?v=Ti9s4OAe4uc) - GOOD, considering it's EEVEE

[Realistic Eevee Glass Shader for Blender 4.2 (Tutorial)](https://www.youtube.com/watch?v=tHfAxAiT1zs) + LINK to [Realistic Eevee Glass Shader (Free Download)](https://ryankingart.gumroad.com/l/eevee-glass)

---

[Burn into image: dynamic Note value](https://blender.stackexchange.com/questions/308588/burn-into-image-dynamic-note-value) (using Python)

[Everything About Volumetrics](https://www.youtube.com/watch?v=A8KkY9zLbDI&t=7s) - Volumetric Settings, Volume Absorption, Volume Scattering, Emission, Mixing With Surface Shaders, Volumetrics with no render time

[Render all render passes to files in Cycles](https://blender.stackexchange.com/questions/28740/how-can-i-render-all-render-passes-to-files-in-cycles) (see scene **Bose_023_PC.blend** > Compositing Tab)

[How to Render Millions of Objects in Blender](https://www.youtube.com/watch?v=CQ9VmCN2EsE) - Using a combination of rigid body simulations, baking and displacement maps

[How to Rendering Vibrant Colors with AgX in Blender using the Raw Workflow](https://www.youtube.com/watch?v=hS7uaTquwWc)

[Free Sample | Eevee Lighting and Rendering Video Course • Creative Shrimp](https://www.creativeshrimp.com/free-sample-eevee-lighting) - Eevee settings for better HDRI Lighting and maximum realism **(downloaded)**

---

### Motion blur

Just enable it at Render > Motion Blur. Leaving all by default does a pretty good job.

**DOUBT: It is worth segmenting for rendering with MB just those timeline areas where objects or camera goes fast?**

It’s not worth splitting the render just for that, because the impact of having Motion Blur enabled in “calm” frames is practically zero.

**Cycles** doesn’t cast “extra rays” to simulate blur. Instead, it shifts the geometry according to the shutter time and “blends” those positions in the render.

If an object doesn’t move between subframes, the result is identical to having Motion Blur disabled. In those cases, the extra render time is almost nothing.

**Eevee** applies Motion Blur as a screen-space post-process. There’s no significant overhead when there’s little or no movement, because the shader doesn’t have to stretch pixels much.

Here’s how you can **control Motion Blur per object** instead of globally for everything in the scene:

Select your object. Go to Properties > Object Properties > Visibility > Motion Blur.

If you disable it, that object will render without motion blur, even if global Motion Blur is enabled.

This is useful if you have some static background geometry, or objects where the blur is negligible, so Blender doesn’t bother calculating them.

---

**Convert Blender's linear output to logarithmic (Roberto's tip):**

Save the EXRs in ACEScg / Linear Rec.709 and then do a simple transformation in Davinci.

Transform to ACES (which is the industry standard) and in DaVinci tell it that what goes in is ACES and that you want to see it in sRGB.

---

**Very interesting tips about AgX and how to fine tune it** (thread)

[Jonathan Lampel en X: "Some people's complaint about AgX in Blender is that it shifts the hues or desaturates the highlights too much. But that's completely controllable! Let's look at two examples. First, a room with a fully red light. What should that look like? Standard gives us this: https://t.co/CTc459EXTN" / X](https://x.com/jonlampel/status/1930430848844607925?s=12)

NODE SETUP: [Jonathan Lampel en X: "Here are the nodes. All of this is going into Render Raw as easy adjustable sliders btw, so grab a copy if you find this useful: https://t.co/OenmMcSdrL https://t.co/qaNm2sSlfp" / X](https://x.com/JonLampel/status/1930430861423587782)

Related product: [Render Raw - Color Correction & Effects - Superhive (formerly Blender Market)](https://superhivemarket.com/products/render-raw) - *$25*

---

**About that nasty** *“LOADING RENDER KERNELS (may take a few minutes the first time)”*

[Source](https://blender.stackexchange.com/questions/293661/loading-render-kernels-what-exactly-that-means)

That should be a one-time process, but it may happen again on a **driver upgrade** or **a new version of Blender.**

Cycles Blender kernels are software libraries containing the computing routines necessary to produce the rendered images.

They are part of the Blender source code and included in the installation, not loaded from the internet nor authored by third parties like NVidia. Requiring a network connection, or loading data from the internet without explicit user permission is generally considered against Blender philosophy.

Kernels are targeted for a certain computing device architecture, like CUDA, Optix, HIP, or OneAPI and are included in its installation, you typically can find them under Blender\##\scripts\addons\cycles\lib.

I suspect the reason they need to be loaded is because they are further optimized locally by compiling for your specific device. This should only happen the first time you use them, they are then cached locally for further utilization and should no longer need any loading on subsequent uses.

Local cache for Nvidia Optix devices is likely saved under either C:\Users\<username>\AppData\Local\NVIDIA\OptixCache for Windows, or /var/tmp/OptixCache_** for Linux, much like the DirectX and OpenGL cache next to it.

Reinstalling graphics card drivers, clearing the cache, or using a different version of Cycles with different kernel version that requires recompilation generally triggers the Loading Kernels again for every first use.

RELATED: [Fix for slow "Loading render kernels" · Issue #200 · DLR-RM/BlenderProc](https://github.com/DLR-RM/BlenderProc/issues/200)

---

### Longer explanation by chatgpt:

What that message actually means

That “Loading kernels…” message appears when Blender (using Cycles) is compiling the render kernels, which are small internal programs optimized for your computing device (CPU or GPU).

In other words:

it’s building the low-level code that your GPU or CPU will use to perform ray tracing, shading, and other rendering calculations.

**Why it takes so long the first time**

The first time you use Cycles with a given Blender version, device (e.g., a new GPU or switching between CUDA / OptiX / HIP / Metal), or set of libraries, Blender needs to compile those kernels from scratch.

This process can take anywhere from 30 seconds to several minutes, depending on:

The power of your CPU/GPU.

The render backend (OptiX tends to compile faster than CUDA, and Metal on macOS can take longer the first time).

The complexity of the Cycles code in that specific Blender version.

**The good news: it only happens once (generally when you update Blender)**

Blender caches the compiled kernels on your system, usually in one of these folders:

Windows:

C:\Users\<your_username>\AppData\Roaming\Blender Foundation\Blender\<version>\cache\kernels

macOS:

~/Library/Application Support/Blender/<version>/cache/kernels

Linux:

~/.cache/blender/<version>/kernels

So the next time you render with the same version and device, it won’t need to compile again — the render will start immediately.

**If it seems “frozen” for too long**

It’s normal for the message to stay up for a few minutes, but if it never progresses, check the following:

**Update your GPU drivers** (if you’re using GPU rendering).
On macOS, this is handled by the system; on Windows or Linux, update NVIDIA/AMD drivers manually.

**Check your render device in Preferences → System** (CPU, CUDA, OptiX, Metal, etc.).
Sometimes switching the backend fixes the issue.

**Delete the kernel cache** (in case it’s corrupted).
Simply remove the “cache/kernels” folder mentioned above and restart Blender.

**If you’re on macOS with Metal,** be aware that the very first compile can take a long time, especially after updating Blender — since it has to rebuild all Metal shaders.

**In summary**

The message is normal and may take several minutes.

It happens only the first time or after changing version/device.

Blender is compiling render kernels (optimized Cycles code).

You can clear the cache if it gets stuck or corrupted.

---

[Tonemapping in Blender - Explained in Under 4 Minutes](https://www.youtube.com/watch?v=sXHuha-rQ5c) - By Richard Yot

[Making user defined metadata texts by using python add-on in Blender VSE](https://www.youtube.com/watch?v=HOyyxzi5J6o)

[My Secret Blender Render Settings](https://www.youtube.com/watch?v=LS1GRru7z_U) - how to quickly render cinematic animations in blender

[Secret Cycles Denoising Feature!? Blender 3.5 - Speed up Renders](https://www.youtube.com/watch?v=NsR0UybO-PY)

---

## DAVINCI RESOLVE AND BLENDER

[DaVinci Resolve – Training | Blackmagic Design](https://www.blackmagicdesign.com/products/davinciresolve/training) - The official ones - CONTINUE HERE, nobody will know better this app!

- Lots of LOG samples to download here, also!

DaVinci for 3D artists

[Blender to Resolve: a Freemium Video Course](https://creativeshrimp.gumroad.com/l/blender-to-resolve) - By Gleb Alexandrov AKA Creative Shrimp (mine!)

[Davinci Resolve | ACES + EXR Workflow for 3D Artists](https://www.youtube.com/watch?v=qUbel17Jvcs)

[How to export HDR videos for YouTube and Instagram](https://www.youtube.com/watch?v=9gLuGBYnjsg) - By the great Polyfjord

According to Roberto, these two guys are great for Resolve:

[Cullen Kelly - YouTube](https://www.youtube.com/@CullenKelly)

[Darren Mostyn - YouTube](https://www.youtube.com/@DarrenMostyn)

More:

[Danny Gan - YouTube](https://www.youtube.com/@dannygan)

[MasterClass — drew simms](https://www.drewsimms.com/master-class) - Davinci Resolve Master Class - *$150*

### Log samples to download

[Blackmagic Pocket Cinema Camera – Gallery | Blackmagic Design](https://www.blackmagicdesign.com/products/blackmagicpocketcinemacamera/gallery)

[Sample RED Files](https://www.red.com/sample-r3d-files) (needs register, free, I think…)

[ACES is now even more deeply integrated into Blender 5.2](https://x.com/thomasmarcoscom/status/2035640690462347717?s=12)

## SEQUENCER + COMPOSITOR

---

**INTERESTING TECHNIQUE** - [Scene Strip](https://docs.blender.org/manual/en/latest/video_editing/edit/montage/strips/scene.html)

Scene strips are a way to insert the render output of another scene into your sequence. Instead of rendering out a video, then inserting the video file, you can insert the scene directly

IMPORTANT: Scene strips cannot be used to reference the sequence’s own scene; a secondary scene must be used instead.

---

To export video + audio from Sequencer, I must choose Audio Codec > **AAC**. For some reason it doesn’t work with MP3 (to investigate)

---

[Why Blender 4.4's Video Editor is Revolutionary](https://www.youtube.com/watch?v=9tWEsqIgeDY)

[Intro to Blender 5.0 Sequencer - Alternative to Adobe Premiere?](https://www.youtube.com/watch?v=4s8nsGqgmbc)

[Speed Up, Slow Down, Freeze Time, & Add Transitions in VSE](https://www.youtube.com/watch?v=TGAzRngLTwE)

[Speed Control - Speed UP or Slow DOWN your VIDEO & AUDIO in Blender's VSE](https://www.youtube.com/watch?v=VqP1j87aeU4)

[How to outline an object with the compositor](https://x.com/ilyassel_/status/2035761617204355251?s=12)

[Making custom glare shapes in Blender's compositor](https://blenderartists.org/t/making-custom-glare-shapes-in-blenders-compositor/1524260) - Read the entire thread for great tips and resources

[Temporal Glare: Real-Time Dynamic Simulation of the Scattering in the Human Eye (Eurographics 2009 Supplemental Video)](https://www.youtube.com/watch?v=5ewKMOodT1Y)

[What is bloom? (And how is it simulated?)](https://www.youtube.com/watch?v=QWqb5Gewbx8)

[Where is BLOOM in Blender 4 2](https://www.youtube.com/watch?v=bqmmKpeQ_rw)[ - Basically you have to go to the compositor and use the glare node (there was a more direct access before…)](https://www.youtube.com/watch?v=QWqb5Gewbx8)

[Gaze Dependent Simulation of Light Perception in Virtual Reality](https://www.youtube.com/watch?v=FNkA-fYdPPE&t=229s)

[Watercolor-like compositing in Blender - YouTube](https://www.youtube.com/watch?v=chfGe0aTDjs)

[Depth, mist passes and depth of field in Blender, Nuke, Natron and Fusion](https://www.youtube.com/watch?v=4NI6yeVM4TM)

[How to Use Light Groups in Blender](https://www.youtube.com/watch?v=Op73b27ng5g) - Light groups can be used to separate lighting in render and play with them in composition

[ACES Doc – Léonel NGUYEN | Lighting – Compositing – Color Management |](https://nguyenleonel.wordpress.com/aces-doc/)

[Amazing technique by Ilyasse to make things and environments grow from the ground using Compositor](https://x.com/ilyassel_/status/1972745323966808555?s=12) (see second post with node setup)

[Start COMPOSITING in Blender 5.0 in 16 minutes | Blender Compositor Tutorial #b3d - YouTube](https://www.youtube.com/watch?v=kAWfjBKcgFc)

## IMPORT / EXPORT

---

To Append stuff in my **etr_dones.blend**, **mark as ASSETS both the Objects and/or the Nodes BEFORE appending**. Because sinde 5.x I detect a high amount of crashes when marking as Asset once the stuff is in that master file… It’s really strange…

---

### Export to painter

• Remember to create a **different Material** for each desired group of final maps.

*• Check normals to find flipped faces, before exporting. Also, check overlapping UVs (mirror operations give both problems)*

• Use the **Collection Tab > Exporters** inside the Properties panel, to export only the content of that Collection.

• Add an **FBX** and parametrize it. **Include only Mesh** and **Disable Animation**.

• Be sure that **“Apply Modifiers”** is active (it’s by default, usually)

• Export two versions, LOW and HIGH, after changing the SDS viewport levels for all objects (use my add-on)

• Define the File Path to be saved **side by side to our .blend** file *(for some reason —to further analysis— I can not store into another child directory…)*

• Important to write the extension “**.fbx**”

- //model_low.fbx

- //model_high.fbx

---

**Multiple UVsets to Painter**

Substance Painter does not support multiple Uv sets.

HACK / WORKAROUND: If you have multiple UVsets and you want them as separate materials in Painter, these are the steps you should take:

In Blender, separate the objects According to your UVsets.

Assign them individual materials, and name them also according to your UVsets

Now if you export the FBX and import it into Painter, It will read the materials as different objects.

---

**From Illustrator to Blender**

Just hide layers what you don’t need and export as **.SVG** - All by default!

---

**To Pack Resources to copy (and render) to another computer**

First of all, *File > External Data > Report Missing Files / Find Missing Files*

(Open and Info viewport to read persistent results)

*Save As > Give another name*, example “MyFile_ToRender.blend”

*File > External Data > Pack Resources*

- This ensures all external data is safely embedded in the file

Alternatively, if you want to extract the image maps to a separate folder

*File > External Data > Unpack Resources*

- *> Use files in current directory (create when necessary)*

## SCRIPTING & MATHS

Go to Scripting Tab > Text Editor > Templates > **Python** to see lot of small examples. Also the **Blender Manifest**

Apart from pressing the Arrow, use **Alt-P** while Text Editor is in focus to call the script opened on it

If you want a Python .PY add-on to be a .ZIP you can just rename it to __init__.py and put it in a folder with the add-on name and then zip that and it can be installed

For an add-on with 1500 lines of code like that you might split it into separate python files to make development more manageable

[Create an addon that uses multiple files](https://blenderartists.org/t/create-an-addon-that-uses-multiple-files/634670/2)

[How to Convert Your One File Blender Addon to an Addon Package - Blender Market Documentation](https://support.blendermarket.com/article/296-how-to-convert-your-one-file-blender-addon-to-an-addon-package)

[Create a Custom Blender Panel with less than 50 lines of Python code](https://www.youtube.com/watch?v=Qyy_6N3JV3k)

- • [Final Code at GitHub](https://github.com/CGArtPython/blender_plus_python/blob/main/add-ons/simple_custom_panel/simple_custom_panel.py)

- More interesting add-ons by same author, Victor Stepanov: [add-ons at main · CGArtPython](https://github.com/CGArtPython/blender_plus_python/tree/main/add-ons)

- And also, more interesting YouTube video tutorials on scripting: [CG Python - YouTube](https://www.youtube.com/@CGPython)

[The secret behind Blender’s tool icons - SVGs? PNGs? Nope. They're actual 3D models](https://x.com/cgcookie/status/1949505708937891927?s=12) - “X” Thread

[A Comprehensive Overview of Gaussian Splatting | Towards Data Science](https://towardsdatascience.com/a-comprehensive-overview-of-gaussian-splatting-e7d570081362/#4cd8)

[Creating custom icons for Blender toolbar](https://b3d.interplanety.org/en/creating-custom-icons-for-blender-toolbar/)

[Fibonacci Lattices / Amit Sch](https://observablehq.com/@meetamit/fibonacci-lattices) - Interesting to translate Fibonacci distributions to Plane, Circle and Sphere

[Algorithmic Trees / Amit Sch | Observable](https://observablehq.com/@meetamit/algo-trees) - Also, to create procedural trees

[Point, Line, Plane](https://paulbourke.net/geometry/pointlineplane/) - Various notes and algorithms dealing with points, lines, and planes by [Paul Burke](https://paulbourke.net/)

- Minimum Distance between a Point and a Line

- Minimum Distance between a Point and a Plane

- Intersection point of two line segments in 2 dimensions

- The shortest line between two lines in 3D

- Intersection of a plane and a line

- Equation of a plane

- The intersection of two planes

- Intersection of three planes

- Equation of a line in polar coordinates

---

**BEVEL V2 - Creating a new super-bevel node for Blender - Journey and work diary by Howard Trickey**

Howard Trickey is a developer who likes 3D programming, and contributes to Blender in his free time, responsible for such things as Bevel and Boolean. His day job is as a Software Engineering Manager at Google.

[#98674 - Bevel V2 - blender - Blender Projects](https://projects.blender.org/blender/blender/issues/98674)

[Bevel notes - Documentos de Google](https://docs.google.com/document/d/1QXt5gJxB8I2UPFUpdwALfCAsRsS5OQMW8HrB5zoRXW0/edit?tab=t.0)

[Bevel notes 2 - Documentos de Google](https://docs.google.com/document/d/1zFU7TfiJo3sByf5pTyDvZSICxFnFIYfXkM8gDAj3LJY/edit?tab=t.0#heading=h.dizf4f3cdyc1)

[howardtrickey](https://sites.google.com/site/howardtrickey/home)

---

