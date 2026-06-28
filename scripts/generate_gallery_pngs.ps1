$imgDir = "C:\MEOW\RYLT\public\images"
Add-Type -AssemblyName System.Drawing
$titles = @(
    'Pool Heating Installation',
    'Resort Swimming Pool',
    'Industrial Facility',
    'Office Ventilation',
    'Product Storage',
    'Hotel Rooftop Pool'
)
$colors = @(
    [Drawing.Color]::FromArgb(40,116,166),
    [Drawing.Color]::FromArgb(76,175,80),
    [Drawing.Color]::FromArgb(255,193,7),
    [Drawing.Color]::FromArgb(233,30,99),
    [Drawing.Color]::FromArgb(156,39,176),
    [Drawing.Color]::FromArgb(3,169,244)
)
for ($i = 0; $i -lt $titles.Length; $i++) {
    $bmp = New-Object System.Drawing.Bitmap 800,600
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear($colors[$i])
    $font = [System.Drawing.Font]::new('Arial', 36, [System.Drawing.FontStyle]::Bold)
    $brush = New-Object System.Drawing.SolidBrush ([Drawing.Color]::White)
    $rect = New-Object System.Drawing.RectangleF 20,240,760,120
    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = [System.Drawing.StringAlignment]::Center
    $format.LineAlignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString($titles[$i], $font, $brush, $rect, $format)
    $output = Join-Path $imgDir ("gallery-img{0}.png" -f ($i + 1))
    $bmp.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}
