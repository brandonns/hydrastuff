osc(69, 0.25, 1)
  .mult(osc(2, 0.8, 0))
  .repeat(2, 20)
  .rotate(0.25)
  .modulate(o1)
  .color(0.9568627450980393, 0.9450980392156862, 0.8705882352941177)
  .scale(1, () =>  (a.fft[0]*0.75 + 2))
  .diff(o1)
.out(o0)
osc(20, 0.2, 0)
  .color(0.8784313725490196, 0.47843137254901963, 0.37254901960784315)
	.mult(osc(42,.1,0))
  .modulateRotate(o0, 0.25)
  .rotate(0.75)
.out(o1)
