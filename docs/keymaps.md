Compiled by [Cristóbal Vila](https://etereaestudios.com/resources/blender-resources/) - Latest update: August 28, 2026

# PREFS & KEYMAPS

This is a compilation of **Default Keymaps** that I find important or interesting. There are tips also.
Also, in *ITALIC*, I mark my Custom Keymaps, just for my personal reference.

> NOTE: I highly recommend you not to change default keymaps in Blender until you are really sure about it. **Believe me: this is a very good tip!!!**

The *[ WIN ]* tag means, pending to install, add, change on my Windows machine, since I usually work on a Mac, using Win just for rendering and turning it on from time to time.

---

## I HAVE MODIFIED THESE PREFERENCES

**Interface** > Status Bar > Scene Statistics ON / *System Memory ON*

**Viewport** > Display > 3D Viewport Axes > *Simple Axes / Size 50 / Brightness 10*

**Animation** > F-Curves > Default Interpolation: *Linear*

**Lights** > MatCaps > *Install*

**Themes** > Node Editor > Grid - change color from #282828 to #*383838*

**Themes** > Node Editor > Node Backdrop - change alpha from 1.0 to *0.94* (to see wires behind nodes)

**Themes** > 3D Viewport > Face Angle Text - change color from #0000CC to #*1AFF00* (to change color for Indices from Blue to Green)

**Themes** > 3D Viewport > Face Orientation Front - change color from #0000FF00 to #*0000FFB3* (to return back blue tint at front normals)

**Themes** > 3D Viewport > View Overlay - change color from Black to *White* - Leave *Black on PC*

**Navigation** > Orbit & Pan > *Orbit Around Selection ON / Depth ON*

**Navigation** > Zoom > Zoom Axis > *Horizontal*

**Navigation** > Zoom > *Zoom to Mouse Position ON*

**Keymap** > Preferences > Spacebar Action > *Search*

**System** > Cycles Render Devices > Metal: Apple M4 Max (GPU - 40 cores)

**System** > Network > *Allow Online Access ON*

**System** > Memory & Limits > *Undo Steps 128*

**Save & Load** > Blend Files > Save Versions > *Change from 1 to 0* (to disable that .blend1 extra files)

**Save & Load** > Blend Files > *Disable Auto Run Python Scripts* (is Disabled by Default) *[ WIN ]*

**File Paths** > Asset Libraries > /Users/cristobal/Library/Application Support/Blender/5.x/nodes/...

- Import Method > **Pack** > Relative Path ON
- In 5.x Import Method is: “Pack” and no more “Append (Reuse Data)”

## TIPS ON KEYMAPS

[Default Keymap — Blender Manual](https://docs.blender.org/manual/en/latest/interface/keymap/blender_default.html)

[Keymap Customization - Blender 4.2 Manual](https://docs.blender.org/manual/en/latest/advanced/keymap_editing.html)

[Blender Shortcuts](https://hollisbrown.github.io/blendershortcuts/) (Not any complete or exhaustive, but with beautiful examples and animations)

[How to Transfer Keyboard Shortcuts to Another Blender Version](https://www.youtube.com/watch?v=gFw4EyNi5Vg)

[interface - how to export out keymaps? - Blender Stack Exchange](https://blender.stackexchange.com/questions/147957/how-to-export-out-keymaps)

[Have you modified your keyboard shortcuts? Explain yourself! : r/blender](https://www.reddit.com/r/blender/comments/1cs92vo/have_you_modified_your_keyboard_shortcuts_explain/)

[I studied Blender's shortcuts, Here's what I found:](https://www.youtube.com/watch?v=uYjbylNqUpI)

- [Radium's Hotkey Graph](https://b3dkey.space/)
- [Radium's Guide To Blender Hotkeys - Radium's Ko-fi Shop](https://ko-fi.com/s/f03814f636)

## ADDED TO QUICK FAVORITES

*[ This is the “Q” menu ]*

Note that tools that only work in Edit mode only appear when we are in Edit mode. Just like those that do so in Object mode (or any other, like Draft, Weight, etc)

### Object mode

- **Copy Modifiers** — Object > Link / Transfer Data > Copy Modifiers
- **Object Data** — Select Linked > Object Data
- **Object & Data** — Object > Relations > Make Single User > Object & Data
- **Origin to 3D Cursor** — Object > Set Origin > Origin to 3D Cursor
- **Remove Annotation Layer** — N Panel > Tool > Annotate
- **Purge Unused Data** — File > Clean Up > Purge Unused Data
- **Manage Unused Data** — File > Clean Up > Manage Unused Data
- **Find Missing Files** — File > External Data > Find Missing Files
- **Render Playblast** — 3D Viewport > View > Render Playblast *[ WIN ]*
- **Show in Outliner** — KeKit > Select & Align > Show in Outliner
- **Remove Subdivision Modifiers** — N Panel > Tool > Remove Subdivision Modifiers - From all selected objects - Add-on
- **Set Attributes** — Depending on N > YT Tools > Viewport Display - Select an object, press here and then all other objects will appear as WFR
- **Sync Material & Viewport** — Depending on N > Ke-Kit > Render & Shade
- **Custom Properties** — To reset object custom properties to default value - Depends on add-on “[Reset Custom Properties](https://extensions.blender.org/add-ons/bl-reset-custom-properties/)”
- **Parent to Empty** — Menu Object > Parent > Parent to Empty (Blender Bob add-on, modified to add active object Rotation) *[ WIN ]*
- **Round Values to 0 or 1** — Menu Object > Transform > Round Values to 0 or 1 (etr\_round\_values add-on) *[ WIN ]*
- **Viewport Vis** — Modifiers > Viewport Vis (Show/Hide Modifiers in the active objects) - Depends on add-on [“Modifier Tools” ](https://extensions.blender.org/add-ons/modifier-tools)- *[ WIN ]*

### Edit mode (mesh)

- **Bridge Edge Loops** — Menu Edge > Bridge Edge Loops
- **Subdivide** — Menu Edge > Subdivide
- **Extrude along local normals** — Alt-E > Extrude faces along normals
- **Extrude Manifold** — Alt-E > Extrude Manifold
- **Flip** — Mesh > Normals > Flip or Alt-N, F
- **Faces by Edges** — Mesh > Split > Faces by Edges (to split faces using selected edges)
- **Dissolve Edges** — Del > Dissolve Edges
- **Edge Loops** — Menu Select > Select Loops > Edge Loops
- **Edge Rings** — Menu Select > Select Loops > Edge Rings
- **Coplanar** — Select Similar > Coplanar
- **Set Attribute** — Menu Mesh > Set Attribute
- **Mark Seam** — Menu Edge > Mark Seam (for UVs)
- **Clear Seam** — Menu Edge > Clear Seam (for UVs)
- **Symmetrize** — Menu Mesh > Symmetrize (default mirrors from -X to +X. Look at bottom to change this)
- **Select Boundary Loop** — Menu Select > Select Loops > Select Boundary Loops
- **Set Dimensions** — Add-on from Blender for Artists / Jake Dube, modified by ChatGPT - Sets dimensions for selected vertices in world coordinates *[ WIN ]*
- **New Object from Clipboard (#1)** — N Panel > **Taz** > Sub Tools > Clipboard > New Object from Clipboard *[ WIN ]*
- **Kushiro Tools** — RMB (in Edit Mode) > Kushiro Tools *[ WIN ]*
- **Select Loop Inner Region** — Menu Select > Select Loops > Select Loop Inner Region *[ WIN ]*

### Edit mode (curve)

- **Set Curve Radius** — RMB > Set Curve Radius (write 1.0 or whatever and press Enter to apply that value to selected points) *[ WIN ]*
- **Clear Tilt** — Menu Control Points > Clear Tilt
- **Apply Uniform Radius (1.0)** — RMB on selected curve points and call Custom add-on “etr\_set\_curve\_radius\_to\_1” *(not really needed this addon)*
  - *TO DO: work on all selected separate curve objects*
- **New Object from Clipboard** *(#1)* — N Panel > **Taz** > Sub Tools > Clipboard > New Object from Clipboard *[ WIN ]*

> *(#1)* This seems broken for Copy & Paste Splines between different Curve Objects - Test again and bug it!!!

### Pose mode

- **Clear Transform All** — Menu Pose > Clear Transform > All

### Geometry nodes editor

- **Node Options** — RMB over Node Group > Show/Hide > Node Options *[ WIN ]*

### Shading nodes editor

- **Node Options** — RMB over Node Group > Show/Hide > Node Options *[ WIN ]*

### Edit mode (armature)

- **Scale BBone** — Armature > Transform > Scale BBone **(PENDING IN MacStudio)**

### Graph editor

- **Remove Static FCurves** — Spacebar, write “Remove Static FCurves” > Add-on - *(#2)* - *[ WIN ]*
- **Show Cursor Toggle** — Graph Editor N Panel > Show Cursor Check *[ WIN ]*

> *(#2)* Caution with single keyframe + noise modifiers - I created a modified version for this, asking the author to fix itself…

## PANELS & AREAS

**LMB** on the panel header expands or collapses it.

**A** expands/collapses the panel under the mouse pointer.

**Ctrl-LMB** on the header of a collapsed panel will expand it and collapse all others.

**Ctrl-LMB** on the header of an expanded panel will expand/collapse all its sub-panels.

**Dragging with LMB** over the headers will expand or collapse many at once.

**RMB on Viewport Border** to Vert/Horiz Splits and also Join & Swaps

- Open Side Panel — **N**
- Simple N-Panel — **Shift-<** (using Simple N-Panel add-on)

---

### Quick change viewports

- *F5* — *Editor Type Drop Menu*
- **Shift-F1** — File Browser / Asset Browser
- Shift-F2 — Movie Clip Editor
- **Shift-F3** — Compositor / Texture Node Editor / Geometry Node Editor / Shader Editor
- Shift-F4 — Python Console
- **Shift-F5** — 3D Viewport
- Shift-F6 — Graph Editor / Drivers
- Shift-F7 — Properties
- Shift-F8 — Video Sequencer
- Shift-F9 — Outliner
- **Shift-F10** — Image Editor / UV Editor
- **Shift-F11** — Text Editor
- Shift-F12 — Dope Sheet / Timeline

## GENERAL

- Preferences — **Cmd-Comma**
- Search — **Spacebar** (changed from “Play” on Preferences > Keymap > Preferences)
- Pop-Up Toolbar — *Shift-Spacebar* (removed and changed from “Play” on Preferences > Keymap > Preferences)
- Rename Active Object — **F2** (Menu Edit)
- Batch Rename — **Cmd-F2** (Menu Edit)
- Return to default value — **Backspace** (just put your mouse over a setting —not clicking— and press Backspace)

## NAVIGATION, VIEW & CAMERAS

- Toggle Single / 4 views — **Ctrl-Alt-Q**

### View2D

- Pan View — *Shift-Alt-LMB* (it was MMB)
- Pan View — *Alt-LMB* (it was Shift-MMB)
- Zoom 2D View — *Ctrl-Alt-LMB* (it was Cmd-MMB)
### 3D View (Global)

I keep the Blender navigation standard AND also add the Modo one:

- Rotate View — *Alt-LMB* (it was Mouse / Trackpad Rotate)
- Rotate View — **MMB**
- Pan View — *Shift-Alt-LMB* (it was Shift - Mouse / Trackpad Pan)
- Pan View — **Shift-MMB**
- Zoom View — *Ctrl-Alt-LMB* (it was Cmd-MMB)
- Pan View — **Ctrl-MMB**

### Image (Global)

- Pan View — *Shift-Alt-LMB* (it was MMB)
- Pan View — *Alt-LMB* (it was Shift-MMB)
- Zoom View — *Ctrl-Alt-LMB* (it was Cmd-MMB)

### Misc

- Orbit & Snap to Ortho — **MMB + Alt**
- Top, Front, Right — **Num7, Num1, Num3**
- Bottom, Back, left — **Add Cmd or Ctrl to previous**
- Relative to Selected — **Add Shift to previous**
- Change point of interest — **Alt-MMB-Click on a point** (the central point which the view orbits around)
- 3D Cursor Direct Placement — **Shift-RMB**
- Reset 3D Cursor Pos & Rot — **Shift-C**
- Orbit around 3D Cursor — **Side Bar (N)** / View tab / View Lock / **Lock To 3D Cursor**
- Orbit around an object — **Side Bar (N)** / View tab / View Lock / **Lock to Object** and clicking on the object
- N View > Lock Camera to View — *Alt-0* (toggle)
- N View > Lock to 3D Cursor — *Shift-<* (toggle) *[ WIN ]*
  - In order to work, disable 3D View (Global) > View Navigation (Walk/Fly) - Key Binding appears as Shift ´ not as Shift >
- Look from Active Camera — **Numpad 0**
- View from Selected Object — **Cmd-Numpad 0**
  - Valid also to Change and look from Active Camera, the one to Render. Look also in Scene Properties.
  - And also to look from Selected Light (great for Spots)
- Align Active Camera with view — **Cmd-Alt-Numpad0**
- Frame Camera Bounds — **Home**
- Zoom Camera 1:1 — **View ‣ Navigation ‣ Zoom Camera 1:1**
  - Zooms the view so that the camera frame has the exact same size as the output resolution.
  - Note that on a Mac Studio Retina, this is half-size.
- Toggle Visual Axis Add-on — *End/Fin* (Select Face > End to enable Select Nothing > End to disable)
  - Use with Select face > RMB > Kushiro Tools > Visual Axis
- View Trackball Rotation — Prefs / Navigation / Orbit Method / **Trackball**
  - Also, use **N > View > Orbit** (thanks to [Orbit](https://github.com/LiquideBleu/Orbit) free Add-on)

### Roll, Pan, Dolly, and Track

To perform camera moves looking from Camera, **the camera must first be selected** (click on cam border) so transform operations apply to it.

- Roll (Z rot) — **R**
- Vertical Pan or Pitch — **R + XX**
- Horizontal Pan or Yaw — **R + YY**
- Dolly (Z travel) — **G + ZZ**
- Sideways Tracking — **G + XX or YY**

## VISIBILITY

- Fit all visible objects — **Home**
- Fit selected — **Num-Comma**
- Toggle Local View — **/** This will fit & isolate selected OBJECT (not geo island)
  - Local view is contextual, meaning that it can be set per 3D Viewport.
- Remove from Local View — **Alt-/**
- Toggle Floor Visibility (Persp) — *Asterisk*
- Toggle Grid Visibility (Ortho) — *Ctrl-Asterisk*
  - Assign both directly using Viewport Overlays
- Toggle Solid Wireframe — *Z* (Originally Z opened the PieMenu “3D View > Shading” > Changed to next one)
- Pie Menu 3D View > Shading — *Alt-Shift-Ctrl-Z* (it was Z)
- Toggle Wireframe — **Shift-Z**
- Toggle X-Ray — **Alt-Z**
- Toggle All Overlays — **Alt-Shift-Z**
- Toggle Fade Inactive Geometry — *Alt-Ctrl-Z* (important to change in Edit Mode) *\*[ WIN ]**
- Lighting — *X* (cycle Studio, MatCap, Flat) (it was 3D View > Object Mode > Delete)
  - Important to disable all “Deletes or Remove > X” in Keymaps
- Viewport Shading Color — *Alt-X* (cycle Material-Random-Texture) - *[ REMOVED - Remove in WIN ]*
- Toggle Persp/Active Cam — **Num-0**
- Set selected Cam as Active — **Cmd-Num-0**
- Define region to zoom — **Shift-B**
- Toggle Maximize Area — **Ctrl - Spacebar**
- Toggle Fullscreen Area — **Ctrl - Alt - Spacebar**
- Toggle visibility of the Toolbar — **T**
- Toggle visibility of the Sidebar — **N**
- Toggle Edit mode — **Tab** (Edit Mode / Object Mode)
- Show Open Boundaries — **Select > Select All by Trait > Non-Manifold**
- Show Selected in Outliner — KeKit > Select & Align > Show in Outliner *[ Quick Favorites ]*
- Toggle View Face Orientation — *<* (it was 3D View / 3D View Global / View Pie Menu - Disable it. Key Bind appears as an accent)
- Shade Smooth — *=* *[ WIN ]*
- Shade Flat — *Alt-=* *[ WIN ]*
- Shade Autosmooth — *Alt-Shift-=* *[ WIN ]*

## TRANSFORM

- Move, Scale, Rotate — **G, S, R**
- Restrict Scene X/Y/Z — add **X/Y/Z**
- Restrict Local X/Y/Z — add **XX/YY/ZZ**
- Exclude an axis — add **Shift-X, Shift-Y, Shift-Z,**
- Shrink/Fatten — **Alt-S** (move selected verts along normals)
- Transform various — **Alt-Click** on coords properties to transform PSR of various selected objects
- Placement Pie Menu — **Shift-S**
- Orientation Pie Menu — **, (comma)**
- Object Trackball Rotation — **RR**
- Clear Move, Scale, Rotate — **Alt-G, Alt-S, Alt-R**
- Apply Transforms & to Deltas — **Cmd-A** (apply PSR, and also Modifiers)
- Snap Base — **B** - Start moving in object or edit mode, press B, then click on a vert and a second click on another vert to snap -[Snap Base Tutorial \| New Snapping Tool for Blender - YouTube](https://www.youtube.com/watch?v=8Q5HoFn5Kxg&t=34s)
- Mirror Selection — **Ctrl-M** and **X/Y/Z** (or **XX/YY/ZZ** for Normal orientation) - Duplicate using **Shift-D + Esc** before - Use **3D Cursor** for axis
  - Better Mirror using [Rotor Ext](https://extensions.blender.org/add-ons/rotor/) — **Alt-X** - [Rotor \| Rotor Documentation](https://rotor.ezelar.com/) *[ WIN ]*
- Skin Resize — **Ctrl-A** ([+Info](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/transform/skin_resize.html) - to change radius on selected vertices at using [Skin Modifier](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/skin.html))
- Add SubD Modifier to selected — **Cmd-1, 2, 3, 4…** (applying that subdivision to Editor, not render.

  **Use 0 for cage** - CAUTION: use top numbers, not numpad) - Works only in Object Mode - [Subdivision Surface Modifier - Blender 4.1 Manual](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/subdivision_surface.html)
- Edit XYZ values at same time — **LMB** click on the first property, drag your cursor down to the last one and you can enter one value for all of them - Both editing numerically or just after your drag, pressing **Shift** to move the 3 sliders at a time at small increments

## PIVOT, ORIGIN & 3D CURSOR

- Pivot Pie Menu — **. (dot)**
- Set Origin to… — **Object Menu** (3D View, Object Mode)

To Move/Rotate the Origin of object(s) and not the object(s) themselves:

- N > Tool > Options > Transforms > Affects Only > **Origins**

To Rotate/Scale Origins of several objects, but not geometry:

- N > Tool > Options > Transforms > Affects Only > **Locations**

To use 3D Cursor as a pivot — **Dot-4** (Pivot > Select 3D Cursor)

- 3D Cursor Direct Placement — **Shift-RMB** (it always stores viewport perspective orientation)
  - Also: N > View > 3D Cursor, for **3D Cursor parametric position and rotation**

(\*) Adding objects to scene you can orient them with 3D Cursor (left-bottom floating temporal palette)

- Reset Cursor & View Pos & Rot — **Shift-C**
- Cursor to Selected — *F6* (Object > Snap >…) *[ WIN ]*
- Selected to Cursor — *F7* (Object > Snap >…) *[ WIN ]*
- Cursor Fit & Align — *Alt-F6* (KeKit) *[ WIN ]*
- Align Object to Cursor — *Alt-F7* (KeKit) *[ WIN ]*
- Cursor to World Origin — *F8* (Object > Snap >…) *[ WIN ]*
- Object Origin to Cursor — *Alt-F8* (Object > Set Origin >…) *[ WIN ]*

## SELECTIONS

- Select Box — **W**
  - Search for “Set Tool by Name” > Disable Cycle in 3D View, UV Editor, Node Editor and Video Sequence Editor  *[ WIN - Assign for UV-Node-Video ]* - While dragging Box or Lasso, you can additionally hold **Spacebar** to move the shape around with the mouse.
- Tweak — *D* (assigned both for Object, Edit Mesh, UVs, Armature)  *[ WIN - Assign for Edit UVs, Armature, Pose and Object Mode ]* - Select the tool in the toolbox and use RMB > Assign Shortcut
- Selection Pie Menu — **Alt-W**
- Select Verts/Edges/Faces — **1-2-3**
- Multiple Selection Modes — **Shift + 1-2-3**
- Select all — **A**
- Select none — **Alt-A** or **AA** (twice A)
- Invert selection — **Cmd-I**
- Hide (and Lock) selection — **H**
- Hide invert — **Shift-H**
- Reveal hidden items — **Alt-H**

### In EDIT mode:

- Select Linked under mouse — **L** (no need previous selection. And its ADDITIVE, by nature)
- Select Linked — **Cmd/Ctrl-L** (need previous selection, and need to add Shift to add more to a previous selection)
- Deselect Linked — **Shift-L** (works with just mousse over)

### In OBJECT mode:

- Link/Transfer Data — **Cmd/Ctrl-L** (to transfer data from Active to Selected Objects)
- Select Linked — **Shift-L** (perfect to **select all Objects with same materia**l than selected one)

---

- Select More/Less — **Cmd-Num+/-**
- Loop Select — *Alt-RMB* (it was Alt-LMB - Because conflict with new Orbit)
- Loop Select (Add) — *Shift-Alt-RMB* (it was Shift-Alt-LMB - Because conflict with new Orbit)
- Ring Select — *Cmd-Alt-RMB* (it was Cmd-Alt-LMB - Because conflict with new Orbit)
- Ring Select (Add) — *Cmd-Alt-Shift-RMB* (it was Cmd-Alt-Shit-LMB - Because conflict with new Orbit)
  - Change both for Mesh & UV Editor (including all variations)
- Rings from various Edges — **Menu Select > Select Loops > Edge Rings** *[ Quick Favorites ]*
- Continue Selection Pattern — **Cmd-Shift-+**
- Select “square lasso polys” — **Ctrl-Shift-LMB** (front Top-Left to Bottom-Right)
- Select Pick Shortest Path — **Cmd** (between 2 selected Verts, Edges or Faces)
- Select Loop Inner Region — **Menu Select > Select Loops > Select Loop Inner Region** (select faces inside an Edge Loop)
- Select Loop Boundary — **Menu Select > Select Loops > Select Boundary Loop** (inverse: select Edge Loop from Selected Faces)
- Selected to Group — **Cmd-G** (similar to Assign to Selection Set in Modo)
- Select Coplanar — **Shift-G, C** (Menu Select > Select Similar > Coplanar)
- Select Grouped Objects — **Shift-G** (various options + Popup > Extend) - Children, Siblings, Color, etc
- Select Creased Edges — **TIP** - In edge selection mode select a creased edge, go to Select > Select Similar > Crease
- Select Side — No shortcut > Menu Select > https://discord.gg/PuCYpuAB. Change axis. To select a vert, apply, change to faces and remove half or any side
- Select Invert Linked — *Cmd-Shift-I* (using KeKit add-on > Select and Align > Select > Select Invert Linked) *[ WIN ]*
- Select List Objects Under — *Alt-RMB* (it was Alt-LMB - Because conflict with new Orbit)
  - 3DView Global > Select List (Enumerate)
- Switch Objects in Edit Mode — **Alt-Q** while having your mousse pointer over the desired mesh item (to Switch Between Different Objects in Edit, Sculpt, Weight or Draw Mode)

## EDIT

- Add Object Origin Only — *Alt-N* (Dependent on Add-on) *[ WIN ]*
- Add Single Vert — *Alt-Ctrl-N* (Dependent on Add-on) *[ WIN ]*
- Toggle Subdivision — *Alt-Tab* - Important to Select Object - Dependent on KeKit add-on (doesn't work in Windows?)
- Mode switching pie menu — **Ctrl-Tab** (to change to Object, Edit, Weight Paint, etc)
- Toggle Snap — **Shift-Tab**
- Quick Favourites — **Q** (add to it using RMB on buttons)
- Duplicate (copy) — **Shift-D** (Start drawing a copy, and we move it)
- Duplicate (copy in place) — **Shift-D-Esc** (we duplicate in the same place)
  - In Edit mode a new object is NOT generated, but more geometry is added to the same object.
- Duplicate (instance) — **Alt-D**
- Duplicate (instance in place) — **Alt-D-Esc**

> **TIP:** If you want to make changes to an object in the new linked duplicate independently of the original object, you will have to manually make the object a “single-user” copy by LMB the number in the Object Data panel of the Properties.

- Join Objects — **Cmd-J**
- Repeat last action — **Shift-R**
- Adjust last operation — **F9** (if you click outside a recent added object, to recover settings before doing anything)
- Face, Edge, Vertex Tool Menus — **Cmd-F, Cmd-E, Cmd-V**
- Edge Crease — **Shift-E** (same as Edge Weight)
- Edit Crease — **N - Item - Edges Data - Mean Crease**
- Normals Menu — **Alt-N**
- Flip Normals — **Mesh > Normals > Flip** or **Alt-N, F** *[ Quick Favorites ]*
- Change settings at a time — **Alt** (Press Alt when changing a parameter to affect to all selected objects)
- Link / Transfer Data — **Cmd-L** (from the Active to the others selected) For example for Modifiers, to copy from Active to Selected
  - Copy Modifiers — *[ Quick Favorites ]*
- Change Brush Size — **F** (press F and move LMB at the same time to change size)
- Delete (while painting) — **Ctrl**
- Toggle [Proportional Modeling](https://docs.blender.org/manual/en/latest/editors/3dview/controls/proportional_editing.html) — **O**
- Proportional Modeling Falloff — **Shift-O**
- Proportional Modeling Size — **Wheel Up & Down, or PageUp & Down**

### Dragging

**Ctrl** – While dragging, snap to discrete steps.

**Shift** – Gives precision control over the value.

**Shift-Ctrl** – Precise snap will move the object with high precision along with the snapping constraint.

- Scale of certain regions (?) — **Ctrl-MMB** or **Num+ and Num-**
- Reset region scale to the default — **Home** (different behaviours depending on region)
- Cycle through vert tabs — **Ctrl-Wheel** or **Ctrl-Tab** / **Ctrl-Shift-Tab**
- Copy/Paste vector/color — **Cmd-Alt-C** / **Cmd-Alt-V**
- Apply edit to all selected items — **Alt** (hold while editing values)
- Define Clipping Region — **Alt-B** (draw rectangle). Press Alt+B again to exit this mode
  - [View Regions - Blender Manual](https://docs.blender.org/manual/en/latest/editors/3dview/navigate/regions.html)
- Increase Font Kerning — **Alt-Right Arrow** (place cursor between 2 characters in edit mode)
- Decrease Font Kerning — **Alt-Left Arrow** (place cursor between 2 characters in edit mode)
- Move Parent Only — In Viewport **Options** (top-right) choose Transform **Affect Only** (to) **Parents**
- Move Origins Only — In Viewport **Options** (top-right) choose Transform **Affect Only** (to) **Origins**

## TOOLS

- Align Tools — **Alt-Ctrl-A** (using [Popoti Align Helper](https://extensions.blender.org/add-ons/popoti-align-helper/))
- [Extrude Menu](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/extrude.html) — **Alt-E**
- Extrude / Extend — **E** (for verts, edges & polys)
- Extrude / Extend — **Cmd/Ctrl-RMB-Click** (ideal to extrude edges to create ribbons)
- Extrude along avg normal — **E**
- Extrude along local normals — **Alt-E** > Extrude faces along normals *[ Quick Favorites ]*
- Extrude Inner Manifold — **Alt-E** > Extrude Manifold *[ Quick Favorites ]*
- [Connect Vertex Path](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/vertex/connect_vertex_path.html) — **J** (auto knife between 2 selected vertices, even passing through other faces)
- [Inset Faces](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/face/inset_faces.html) — **I**
  - **Ctrl** for Depth
  - **O** for Outset
  - **I** for Individual
- [Bevel Edges](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/edge/bevel.html) — **Cmd-B**
  - Adjust number of segments — **Mouse Wheel**
  - Width Type — **M** (toggle between Offset, Width, Percent, Absolute)
  - Shape — **P** (between 0 and 1)
  - Width — **A**
- [Bevel Verts](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/vertex/bevel_vertices.html) — **Cmd-Shift-B**
  - Adjust number of segments — **Mouse Wheel**
  - Width Type — **M** (toggle between Offset, Width, Percent, Absolute)
  - Shape — **P**
  - Width — **A**
  - Switch edge/verts — **V**
- [Loop Cut](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/edge/loopcut_slide.html#bpy-ops-mesh-loopcut-slide) — **Cmd/Ctrl-R** (edge loops at faces / subdivisions at polylines)
  - Adjust number of segments — **Mouse Wheel**
  - Even — **E** (press once it's interactive, just after first Enter)
  - Flip Even — **F**
- ETR Flat Stripes — **Alt-Shift-E** - Custom Node Tool to extrude Edges *[ WIN ]*

### YT Tools by Taz-San
- Loop Slice - Taz — *Alt-Shift-R* (original was **Alt-L**) *[ WIN ]*
- Add Loop - Taz — *Alt-R* (defined new) *[ WIN ]*
- Copy Selected Components — *Cmd-C* (original was Ctrl-C)  *[ WIN - Only activate in preferences, leaving default ]*
- Cut Selected Components — *Cmd-X* (original was Ctrl-X)  *[ WIN - Only activate in preferences, leaving default ]*
- Paste Selected Components — *Cmd-V* (original was Ctrl-V)  *[ WIN - Only activate in preferences, leaving default ]*
---

- [Offset Edge Slide](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/edge/offset_edge_slide.html) — **Cmd-Shift-R**
  - Adjust number of segments — **Mouse Wheel**
  - Even — **E** (press once it's interactive, just after first Enter)
  - Flip Even — **F**
  - Clamp — **C**
- [Slide Verts](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/vertex/slide_vertices.html) — **Shift-V**
- [Slide Edges](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/edge/edge_slide.html) — **G-G**
  - Even — **E** (press once it's interactive, just after first Enter)
  - Flip Even — **F**
  - Clamp — **C**
  - [Difference between various sliding tools [Blender] - Support / Tutorials, Tips and Tricks - Blender Artists Community](https://blenderartists.org/t/difference-between-various-sliding-tools-blender/682356)
- [Rip Vertices/Edges](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/vertex/rip_vertices.html) — **V** (press G after for lateral edges guiding)
- [Rip Fill Vertices/Edges](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/vertex/rip_vertices_fill.html) — **Alt-V** (press G after for lateral edges guiding) - Same than Modo Slicing
  - For all: press **E for Even**; **F for Flipped**; **C for Clamp**
  - Rip depends on your mouse position. So if you want to rip off other side, you should place your cursor on the right side of
  - your edge. THIS WORKS BETTER LOOKING FROM ORTHO VIEWS.
- Split (selected) — **Y** (caution: this splits, separates, selected elements themselves, not faces)
  - Use Mesh > Split > **Faces by Edges** to split faces using selected edges *[ Quick Favorites ]*
- Bridge Edge Loops — **Menu Edge > Bridge Edge Loops** *[ Quick Favorites ]*
- Separate on new object — **P** (ALSO: selecting various islands in Edit Mode **> P > By Loose Parts** will separate every single island in an object)
- Merge Vertices — **M**
  - CAUTION: use Select Box, Lasso or Tweak to select 2 or more vertices to have “To Last” “To First” option (**Select Circle does not offer these options**). For me this seems a bug…

- New Edge from Vertices — **F**
- New Face from Edges — **F**
  - With a closed succession of Edges, create an interior polygon
  - With a succession of U-shaped edges, just select the first one and they will close, one by one, with each F ([example](https://www.instagram.com/reel/C-UzvqwqLzO))
  - With two selected verts, this creates a new one connecting both
- New Quad from Corner Vert — **F** (thanks to [F2 Add-on](https://docs.blender.org/manual/en/latest/addons/mesh/f2.html))
- Make Segment — **F** (we select two verts, add edge, also in curves - **Note: do not use for sewing**)
- SEWING — **J** (auto knife between 2 selected vertices, even passing through other faces)
- Subdivide — **Menu Edge > Subdivide** *[ Quick Favorites ]*
- Un-Subdivide — **Menu Edge > Un-Subdivide**
- Triangulate — **Cmd-T**
- Un-triangulate — **Alt-J** (Triangles to Quads)
- Dissolve Edges — **Del > Dissolve Edges** *[ Quick Favorites ]*
- Merge Coplanar Faces — **Del > Limited Dissolve**
- Merge Coplanar Faces — **F**
- Shrink/Fatten — **Alt-S** (move selected verts along normals)
- Move Along Normals **(?)** — **comma-2 + dot-2 + G-Z** - Transform Orientation **(,)** to Normal **(2)** + Pivot Point **(.)** to Individual Origins **(2)** + **G-Z**
- Round edges — **Shift-Alt-S** (it's gradual)
  - To convert square holes into circular ones
- Bend Deform 1 side — **Shift-W** (on respect to 3D cursor)
- Bend Deform Symmetric — **Shift-W and then ALT** (on respect to 3D cursor)
- Spherize — **Alt-Shift-S** (select vertices or edges > Mesh > Transform > To Sphere

### Knife

- **Knife** — **K**
  - Snap to Edge Middle — **Shift**
  - New Cut — **RMB**
  - Cancel — **Esc**
  - Confirm — **Return or Spacebar**
  - Only Selected — **Shift-K**
  - Axis Constraint — **X,Y,Z or XX,YY,ZZ**
  - Angle Constraint — **A**

Knife has it's own snapping method which does not need to be enabled (yellow, snap to edge / red, snap to vert)

[Knife Topology Tool - Blender 4.2 Manual](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/knife_topology_tool.html)

If the green square indicating the knife's position is hovered over an edge this turns yellow to indicate, if you now click the cut will be snapped to the edge. If you move over closer to a vertex, a red outline around the green square will indicate the knife is now snapping to the vertex.

## SCULPTING

- Brush Size — **F**
- Brush Strength — **Shift-F**
- Brush Angle — **Ctrl-F**
- Invert Effect — **Ctrl**
- Mask Operations Pie Menu — **A**
- Enable Mask Brush — **M**
- Soft Mask — **Shift-Drag**
- Clear Mask — **Alt-M**
- Invert Mask — **Cmd/Ctrl-I**
- Box Mask — **B**
- Face Sets Pie Menu — **Alt-W**
- Hide face set under cursor — **H**
- Isolate face set under cursor — **Shift-H**
- Show All — **Alt-H**
- Grow/Shrink Face Set — **Ctrl-W / Ctrl-Alt-W** (acts under mouse)
- Remove all Face Sets — **Alt-W > Face Set from Visible** (with ALL visible)
- Remesh — **Cmd/Ctrl-R**
- Remesh Preview — **R**
- Draw — **V**
- Smooth — **S** or **Shift-Drag, with any brush**
- Grab Brush — **G**
- Clay Strips — **C**
- Inflate — **I**
- Crease Polish — **Shift-C**
- Snake Hook — **K**
- Scrape — **Shift-T**
- Pinch/Magnify — **P**
- Brush Assets Search — **Shift-Space**
- Invert Line Trim/Project — **Fz**
- Snap Line Trim/Project — **Ctrl** (Constrains the rotation of the line to 15 degree intervals)
- Move Line Trim/Project — **Ctrl-Spacebar** (Reposition the line)
- Limit Trim/Project to Segment — **N** > Tool > Active Tool > Limit to Segment

## CURVES

**TIP:** For precise curve creation first place your 3D Cursor (Shift-RMB), then Create Point in Object Mode, then Extend using E and XYZ. Use Grid Absolute Snapping and Rotate using R + CTRL

- Set handle type — **V**
- Add point on existing curve — **Ctrl-LMB** on curve with the Curve Pen selected
- Extend Curve — **E** and move mouse
- Adjust Point Radius — **Alt-S**
- Adjust Point Tilt — **Cmd/Ctrl-T**

**While using the Curve Pen** (drawback > no snaps):

- Change-Break Handle — **Shift** - LMB Move
- Add point over curve — **Cmd** - LMB Click on curve
- Move handle maintain direction — **Alt** (caution: first click, then press Alt)
- Delete point — **Cmd - LMB Click on point**
- Re-position live point — **Spacebar (?)**

Complete Keymaps and Tips with [Using Blender's Curve Pen Tool](https://www.youtube.com/watch?v=APxkUd7OAAk) (downloaded)

## GREASE PENCIL

- Line Thickness — **Alt-S**
  - In Object Mode select the GPencil object, then go into Edit Mode > Select the curves/vertices you want to modify > Use **Alt-S**

While any tool is active:

- Annotate — **D-LMB**
- Annotate Stabilized — **Shift-D-LMB**
- Annotate Straight HV Lines — **Alt-D-LMB**
- Annotate Polygon — **Alt-Shift-D-LMB** (press ESC to exit)
- Erase Annotations — **D-RMB**
- Remove Annotation Active Layer — *[ Quick Favorites ]*
- Change Eraser Radius — **Rotate Wheel** while active
- Rotate Annotate Rectangle tool — Press **CTRL** once the rectangle is drawn (add-on [Annotate Plus](https://superhivemarket.com/products/annotate-plus))

## UVS

- UV Menu — **U**
- Unwrap Angle Based — *Alt-U*
- Pin Selected — **P**
- Unpin Selected — **Alt-P**
- Select Pinned Verts — **Shift-P**
- Brush Change Radius — **F** and **move mouse**
  - This works for any tool

### Zen UV shortcuts

[Introduction - Zen UV 4.4 for Blender](https://zenmastersteam.github.io/Zen-UV/latest/)

- Toggle Checker — **Alt-T**

### Zen UV tips

If I assign the Seams manually, do not forget to check **“Seams by UV Borders”** in the Unwrap Panel (otherwise the add-on will create its own borders)

You do not have to select all the polygons of the islands that we are going to unwrap. Instead, leave everything prepared, with its seams, and apply the Unwrap Zen command.

For the “Zen Unwrap” command to work, you must be in UV Sync mode

## WEIGHT PAINT

- Vertex Group Specials — **Ctrl-G** (to reset all weights)
- Change Radius Size — **F > LMB**
- Change Width — **Ctrl-F > LMB**
- Select Bone for Paint — **Alt-RMB-Click** on bone

## OUTLINER, COLLECTIONS & RELATIONS

- Move to Collection — **M**

> Move selected objects to an existing or new collection. IMPORTANT: object must be direct child of this Collection, not to be inside a hierarchy.

- Link to Collection — **Shift-M**

> Add selected objects to a collection, while keeping them in their current collection. This way objects can appear in multiple collections. A new collection can be created in the pop-up.

- Create New Collection — **Cmd/Ctrl-G**

> Creates a new collection and adds the selected object(s) to it. The name of the new collection can be specified in the Create New Collection Adjust Last Operation panel. This collection is not linked to the active scene.

- Remove from Collection — **Cmd/Ctrl-Alt-G**

> Remove the selected objects from a collection. If the object belongs to more than one collection, a pop-up lets you select the collection and an option to remove it from all collections.

- Remove from All Collections — **Cmd/Ctrl-Shift-Alt-G**

> Remove the selected objects from all collections.

- Add Selected to Active Collection — **Cmd/Ctrl-Shift-G**

> Adds the selected objects to the collections to which the active object belongs.

- Remove Selected from Active Collection — **Shift-Alt-G**

> Causes the selected objects to be removed from the collections to which the active object belongs.

- Duplicate hierarchy — **Select Hierarchy (or Shift-G > Children) > Shift-D > ESC**

> If you are doing this multiple times you can open the toolbar(T) and check 'Extend' after doing 'Select Grouped', so the parent remains selected when the children are selected. Any future selection of children will respect this 'Extend' setting.

- Set Parent — **Cmd-P** (select child and last one the parent > Keep Transformation Without Inverse) - Also: drop using **Shift**
- Unparent or Clear Parent — **Alt-P** (select only the child) > Clear Parent and Keep Transformation
- EasyWeight Paint Pie — **W** (thanks to EasyWeight add on) - [Easy Weight Documentation](https://studio.blender.org/tools/addons/easy_weight)

### OUTLINER

[Introduction](https://docs.blender.org/manual/en/latest/editors/outliner/introduction.html) - [Interface](https://docs.blender.org/manual/en/latest/editors/outliner/interface.html) - [Selecting](https://docs.blender.org/manual/en/latest/editors/outliner/selecting.html) - [Editing](https://docs.blender.org/manual/en/latest/editors/outliner/editing.html) - [Usage](https://docs.blender.org/manual/en/latest/editors/outliner/usage.html)

Next keymaps works always WHILE the mouse is over the Outliner:

- Show Active — **Numpad (.)** > Good to select in 3D viewport and show in Outliner
- Expand/Collapsed All — **Shift-A** (note, this is ALL, not “all-selected”)
- Show Object Hierarchy — **Home**
- Expand ALL 1 level — **+**
- Collapse ALL 1 level — **-**
- Select the next element in the list — **Down**
- Select the previous element in the list — **Up**
- Select the next element without deselecting — **Shift-Down**
- Select the previous element without deselecting — **Shift-Up**
- Open the data-block to view children — **Right**
- Open this and all child data-blocks — **Shift-Right**
- Close the data-block — **Left**
- Close this and all child data-blocks — **Shift-Left**
---
- Link/Transfer Data — **Cmd-L* 

  - IMPORTANT: select object in 3D viewport (not in Outliner) - And various options to choose

**TIP To make the coordinates of a child LOCAL with respect to the parent** ([from here](https://www.reddit.com/r/blenderhelp/comments/1b4otn1/i_dont_understand_the_transform_coordinates/))

If they are NOT related yet, and acting in the 3D Viewport:

- Select Children, Select Parent / **Cmd-P** > Set Parent > **Object (Keep Transform Without Inverse)**
- Then clean the coordinates because there is a little junk left

If I have already related them by dragging in the Outliner with Shift:

- Select Children > Object > Apply > **Parent Inverse**

To undo parent: **Alt-P** > Clear Parent > **Clear and Keep Transformation**

---

**Disable 0-9 keys to Hide Other Collections** - Now those keys are available in Object Mode

Preferences > Keymap > Search for all “Hide Other Collections” > Disable All

[Fix the number keys hiding objects in Blender - YouTube](https://www.youtube.com/watch?v=D-6mWi8qsQQ)

---

## GEOMETRY NODES

- Node-Wrangler Menu — **Shift-W**
- Add new node — **Shift-A / Spacebar**
- Remove Node — **X** or **Delete** (break connection)
- Dissolve Node — **Cmd-X** or **Cmd-Delete** (maintain connection)
- Detach Node — *Cmd/Ctrl-LMB-Move* (it was Alt-LMB-Move - Changed because conflict with new Orbit) - node.move\_detach\_links
- Duplicate node — **Shift-D**
- Duplicate node - Connected — **Shift-Ctrl-D**
- Mute selected nodes — **M**
- Reset Node Values — **Backspace** (all to default settings)
- Combine Selected Nodes — **Ctrl-0** (also to Merge with Shading Nodes) - Thanks to Node Wrangler
- Break connection — **Cmd/Ctrl-RMB** (and draw a “break” line through a connection)
- Toggle Mute connection — **Ctrl-Alt-RMB** (and draw a “break” line through a connection)
- Add reroute in connection — **Shift-RMB** (and draw a line through a connection)
- Dissolve selected reroute — **Cmd-X** or **Cmd-Delete**
- Move selected reroute — **G**
- Connect to Output — **O** (thanks to Node Wrangler)
- Connect to Output — *Shift-Ctrl+MMB* on a node (was Shift-Alt+LMB) - To solve conflict with new ALT nav
- Link Viewer — **Shift-Ctrl+LMB** - Press again to cycle through sockets
- Show/Hide unconnected sockets — **Ctrl-H** (on selected nodes)
- Join selected nodes in a frame — **Cmd-J**
- Remove from frame — **Alt-P**
- Rename frame — **F2**
- Convert to Node Group — **Cmd-G / Ctrl-G**
- Toggle Edit Node Group — **TAB**
- Go back to Parent Node Group — **Ctrl-TAB**
- Toggle Snap — **Shift-Tab** (temporarily by holding Ctrl after starting to drag nodes)
- Snap Node Element — **Shift-Ctrl-Tab** (to choose between grid or node sides)
- Reposition connection(s) — **Cmd/Ctrl** in output socket and click to move
- Swap Links — **Alt-S** - NodeWrangler Add-on - When two nodes are selected, this swaps each other’s output link
- Node Align (main) — **Shift-Q** - Using [Node Align](https://extensions.blender.org/add-ons/node-align/) add-on
- Node Align (options) — **Ctrl-Q** - Using [Node Align](https://extensions.blender.org/add-ons/node-align/) add-on
- Select Grouped Nodes — **Shift-G** - Selects nodes that have similar properties as the active node: Type, Color, Prefix, Suffix
- Find Node — **Ctrl-F** - Shows a search pop-up for finding a node by name
- More on **Selecting Nodes** — [Selecting Nodes - Blender Manual](https://docs.blender.org/manual/en/latest/interface/controls/nodes/selecting.html)
- Split/Merge Group Inputs — **Shift-1** (add-on Group Input Helper)
- Quick Add Inputs/Outputs — **Ctrl-1** (add-on Group Input Helper)
### Node Editor Switcher

[Free add-on from Blender Extensions](https://extensions.blender.org/add-ons/node-editor-switcher/)

- Open Node Editor Switcher — **E**
- Geometry Node Editor — *Numpad-1* (original 1)
- Shader Node Editor — *Numpad-2* (original 2)
- World Node Editor — *Numpad-3* (original 3)
- Compositor Node Editor — *Numpad-4* (original 4[)](https://extensions.blender.org/add-ons/node-editor-switcher/)

## SHADING & LIGHTING

---
### HDRI Rotator

- Rotation HDR — **Ctrl-Alt-RMB** (Add-on [HDRI Rotator](https://extensions.blender.org/add-ons/hdrirotator/))
  - Hold the **Shift** key to rotate your light with finer accuracy
    **NOTE from author, if anytime this keymap stops working** (as I suffered in May 2026) - [LINK](https://discord.com/channels/1292293905097822260/1500835055713648823):
1. Open Blender with a fresh file (File > New).

2. From now on, make sure not to change any other settings as we’re gonna deal with your Startup file
3. Open Edit > Preferences > Keymap, navigate to 3D View > 3D View (Global), scroll to the bottom of that section and click Add New

4. In the operator field, enter: **view3d.hdri\_rotator**, then set the shortcut you want in the key binding fields: Right / Drag / Direction Any / Ctrl / Alt

5. Save your preferences, then go to File > Defaults > Save Startup File

6. Restart Blender.

7. Check if the keymap is still there after restart. If successful, do this last check: disable/re-enable the addon to check if the keymap registration persisted

---

- Quick connect node to Output — **Shift-Ctrl+LMB** on a node
- Reload all Image Maps — **Alt-R** (with the mouse cursor over the Shader Editor) - *Important to restart the interactive render to notice changes!*
- Add Texture Setup — **Ctrl-T** (thanks to Node Wrangler) - *Remember to have a Texture Node SELECTED!*

> Add a setup of a texture node, Texture Coordinate, and Mapping nodes to any shader node. If you **select a texture node**, it will only add the Texture Coordinate and Mapping nodes. For a background shader it will add an Environment Texture node.*

- Add Principled Texture Setup — **Ctrl-Shift-T** (thanks to Node Wrangler) - *Remember to have a Principled BSDF SELECTED!!!*

> Add a principled texture setup from the selected texture files. **Select a Principled BSDF node**, select **Add Principled Setup** from the quick access menu (or press **Shift-Ctrl-T**), and select texture files. It automates the process of adding Image Texture nodes, loading images, selecting the appropriate Color Space, and connecting their outputs to the Principled BSDF node. It detects the type of textures by looking at their file names. You can edit the tags used for this matching process in the add-on preferences.

## RIGGING

- Toggle Object/Edit — **Tab**
- Toggle Object/Pose — **Ctrl-Tab**
- Rename Selected Bone — **F2**
- Parent Bone to Bone — **Cmd/Ctrl-P** (choose Keep Offset or Connected)
- Assign IK — **Shift-I** (select Target first, then Bone and then press Shift-I)
- Roll Bone — **Cmd/Ctrl-R**
- Recalculate Roll — **Shift-N** (better to do BEFORE assigning IKs and Poles)
- Select Bones in WP — **Alt-Click** (to Select Bones while being in Weight Paint mode)
- Move Bone to Collection — **M**
- Scale B-Bones Thickness — **Ctrl-Shift-Alt-S**
- Add Hook Constraint — **Ctrl-H** (select a Vert or a Curve Control Point or a Handle and press Ctrl-H to create a Hook Constraint)
- Add Constraint with Target — **Ctrl-Shift-C** (first select Target, then select bone to be constrained, then this shortcut)

## ANIMATION / TIMELINE
- Toggle Time-Dope/Graph — **Ctrl-Tab**
  - Toggle Time/Dope

- Frame Selected — **Numpad (.)**
- Frame All — **Home**
- Frame Scene Range — *Shift-Home*
- Add Keyframe — **Ctrl-RMB** (click on curve)
- Interpolation Mode — **T**
- Extrapolation Mode — **Shift-E**
- Go to current frame — **Numpad (0)**
- Go to selected keyframe — **Cmd/Ctrl-G**
- Mark IN — **Ctrl-Home**
- Mark OUT — **Ctrl-End**
- 2D Cursor Placement — **Shift-RMB**
### Markers

[Markers](https://docs.blender.org/manual/en/latest/animation/markers.html) — NOTE: Use next keymaps while mouse over markers area

- Bind Camera to a Marker — **Cmd/Ctrl-B** (select camera at Outline, call operator over Timeline) - NOTE: use DOPE SHEET EDITOR or TIMELINE, not Graph Editor. This can be done “from scratch”. No need to create first the marker. This keymap does all.

- Create Marker — **M**

- Duplicate Marker — **Shift-D**

- Select All Markers — **A**

- Select None Markers — **Alt-A**

- Select Invert Markers — **Cmd/Ctrl-I**

- Box Select Markers — **B**

- Rename Selected Marker — **F2**

## RENDER
- Render Image — **F12**
- Render Animation — **Cmd-F12**
- Set Render Region — **Cmd-B** (create a frame in Object Mode)
- Reset Render Region — **Cmd-Alt-B**
- Render Specific Frames — *Ctrl-Shift-F12* (using [Loom Add-on](https://github.com/p2or/blender-loom)) > Look add-on preferences

## ANNOTATE TOOL

**TEMPORAL (while not enabled the tool):**

- Enable — **D** and draw
- Enable with stabilizer — **Shit-D** and draw
- Enable draw H/V straight lines — **Alt-D** and draw
- Erase — **D + RMB** and draw

**Once enabled the tool:**

- Erase — **Ctrl** and draw

## SEQUENCER - VSE
- Add Marker — **M** (to the entire Timeline, not possible to the Strip only)
- Split — **K**
- Slide — **S**
- Clear Strip Offsets — **Alt-O**

## MISC ADD-ON SPECIFIC

- Copy-Paste Global Transform — **N - Animation - Global Transform** (Copy Global Transform Add-on)
- Copy Attributes — **Ctrl-C** (select +2 objects to copy attributes from active to selected - Copy Attributes Add-on)
  - CAUTION: **Ctrl** not Cmd, even on a Mac

