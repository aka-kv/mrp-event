Add-Type -AssemblyName System.Drawing
$img=[System.Drawing.Bitmap]::FromFile('poster-assets/sethi.jpg')
$step=[math]::Max([int]($img.Width/200),1)
$r=0;$g=0;$b=0;$count=0
for($x=0;$x -lt $img.Width;$x+=$step){
  for($y=[int]($img.Height/2);$y -lt $img.Height;$y+=$step){
    $p=$img.GetPixel($x,$y)
    $r+=$p.R; $g+=$p.G; $b+=$p.B; $count++
  }
}
$r=[int]($r/$count); $g=[int]($g/$count); $b=[int]($b/$count)
"avg RGB: $r,$g,$b"
"hex: #{0:X2}{1:X2}{2:X2}" -f $r,$g,$b
