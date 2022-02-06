# Creative Coding Examples 2022

A collection of creative coding sketches created in P5.js. The purpose of this collection is to introduce to artists and designers coding examples based on the JavaScript library P5.js. The examples introduce fundamental coding concepts and techniques, as they are necessary in understanding how to use code as a medium for creating art and design works. In addition to the technical analysis the code examples have, the user may also find certain methods to enhance creative conception and implementation.

---

### S1-01_Project_Setup
In this basic example we see how to create a canvas window, set and display the frame rate of the rendering system, and use text that shows the frame count and rate on our screen.
<!-- ![Image](images/S1-01_Project_Setup.png) -->
<img src="images/S1-01_Project_Setup.png" width="500"/>

---

### S1-02_Coordinates
This example demonstrates the use of standard shape and text functions, and how we can utilize the coordination system to place them on certain locations on the canvas. Here, we also make an extensive use of the fill() function, which controls the color of the shape, text, and we also see how to perform associated alignments.

<img src="images/S1-02_Coordinates.png" width="500"/>

---

### S1-03_Variables
The example here demonstrates the use of variables, and how we can use the console to print and see our values. Also, it shows the technique of concatenation: how to add text together with other text, or add text together with numbers - all extremely useful techniques especially for debugging.

<img src="images/S1-03_Variables.png" width="500"/>

---

### S1-04_Mario
Super Mario is an excellent example of pixel art. Here, we utilize vanilla P5 shapes to create a dynamic figure of Mario. On every second, Mario moves 10 pixels from left to right, and has his clothes changing color randomly.

<img src="images/S1-04_Mario.png" width="500"/>

---

### S1-05_Mario_BGimage
This example extends S1-04, and shows how to add image for the background, having the Mario figure added on top of it.

<img src="images/S1-05_Mario_BGimage.png" width="500"/>

---

### S2-01_GenerativeRandom
On each new loop, we generate and display on the canvas a shape (ellipse) with randomized values for color and position. The color is extracted from an array that has stored certain color values (palette).

<img src="images/S2-01_GenerativeRandom.png" width="500"/>

---

### S2-02_BouncingBallWithColor
The bouncing ball is a great example that demonstrates the uses of conditionals. The ball moves on the X and Y axis by moving one pixel to left or right (X), or up and down (Y). When the ball reaches the edges of the window (i.e. when the position variable approximates 0 or 800), we reverse its speed by multiplying it with -1 (which appears as bouncing off the canvas edge).

<img src="images/S2-02_BouncingBallWithColor.png" width="500"/>

---

### S2-03-BouncingBallMirror
Here, we extend the bouncing ball example, by creating 4 objects that move into mirrored directions. By not erasing the background, we can keep the trails, which altogether create interesting generative patterns. Every time we run the example, a new pattern emerges.

<img src="images/S2-03-BouncingBallMirror.png" width="500"/>

---

### S2-04_MotionRandomSpeed_(No_Background)
As an extension of the bouncing ball, instead of reversing the speed when hitting the edges, we can switch the direction of the shape to come from the opposite direction after it goes off screen. On each switch, the parameters of the shape change (color, size, speed). Moreover, we add a PNG ink image on top for variation and contrast.

<img src="images/S2-04_MotionRandomSpeed_(No_Background).png" width="500"/>

---

### S2-05_CircularMotionColorWithBlend
This example focuses on demonstrating motion techniques used for color change. Using a sin() function, we rotate around certain color ranges. In addition, we make use of blendMode, to blend color pixels of multiple shapes.

<img src="images/S2-05_CircularMotionColorWithBlend.png" width="500"/>

---

### S2-06_CircularMotion_(Position)
This example combines a moving object on a circular pattern around the center of the canvas, rotating its color variables as well.

<img src="images/S2-06_CircularMotion_(Position).png" width="500"/>

---

### S3-01_InteractiveButton
This example demonstrates a simple use of mouse interaction. When the mouse position is top of the button, and if we click it, the color of the shape changes randomly.

<img src="images/S3-01_InteractiveButton.png" width="500"/>

---

### S3-02_CircleInteraction
Here we see how to utilize mouse interaction, random motion, and color rotation. When the mouse is moved, the circle enlarges and shrinks accordingly.

<img src="images/S3-02_CircleInteraction.png" width="500"/>

---

### S3-03_SineWaves
This is an automatic generative sketch that uses sine waves with different properties such as frequency, amplitude, size, color. It also uses a gradient background (made of multiple shapes), and a shading function that brings more depth to the final result.

<img src="images/S3-03_SineWaves.png" width="500"/>

---

### S3-04_NoiseWaves
Following example S3-03_SineWaves, here we utilize a Perlin noise function to generate the position of the shapes.

<img src="images/S3-04_NoiseWaves.png" width="500"/>

---

### S3-05a_NoiseCircle
This example demonstrates a random walk of an ellipse. The shape always remains within the window as the position is constrained. Also, the user can change the color of the shape when the mouse is clicked.

<img src="images/S3-05a_NoiseCircle.png" width="500"/>

---

### S3-05b_NoiseCirclesMirrored
Here, the noise circle is mirrored 3 times, and all shapes move autonomously within the boundaries of the canvas. Their color and size gradually shifts using a sin() motion.

<img src="images/S3-05b_NoiseCirclesMirrored.png" width="500"/>

---

### S3-05c_MirrorredCirclesMouse
This example extends S3-05b_NoiseCirclesMirrored, and instead of having an autonomous motion, the shapes are controlled by the mouse position. Here, we also add a PNG image to enhance the composition.

<img src="images/S3-05c_MirrorredCirclesMouse.png" width="500"/>

---

### S4-01_For-Loop Console
A simple example demonstrating how a nested for loop operates calculations. The console is used here, to help as observed more clearly the printed statements.

<img src="images/S4-01_For-Loop_Console.png" width="500"/>

---

### S4-02_For-Loop
Basic example of a for-loop that draws multiple shapes on the X-axis.

<img src="images/S4-02_For-Loop.png" width="500"/>

---

### S4-03_Nested_For-Loop
An example about a nested for-loop. Draws shapes on the X, and Y axis.

<img src="images/S4-03_Nested_For-Loop.png" width="500"/>

---

### S4-04_Loops_And_Random_Color
This example demonstrates how to set different properties within the nested for-loop, and more specifically, by randomizing the color of each shape.

<img src="images/S4-04_Loops_And_Random_Color.png" width="500"/>

---

### S4-05_Loops_And_Module_Rotations
The example demonstrates how to select certain elements within the nested loop, and assigns certain colors for rows and columns (on odds and events). In addition, it shows the use of transformations, as well as shape rotations.

<img src="images/S4-05_Loops_And_Module_Rotations.png" width="500"/>

---

### S4-06_GridMesh
The following example shows how to utilize loops, transformations, and geometrical shapes to create a 3D illusion grid.

<img src="images/S4-06_GridMesh.png" width="500"/>

---
