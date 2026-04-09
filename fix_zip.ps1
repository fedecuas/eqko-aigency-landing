Add-Type -AssemblyName System.IO.Compression.FileSystem
$dest = "eqko_final_v2.zip"
if (Test-Path $dest) { Remove-Item $dest }
$zip = [System.IO.Compression.ZipFile]::Open((Join-Path (Get-Location) $dest), 'Create')
$distPath = (Get-Item "dist").FullName
Get-ChildItem -Path "dist" -Recurse | Where-Object { !$_.PSIsContainer } | ForEach-Object {
    $relativePath = $_.FullName.Substring($distPath.Length + 1).Replace('\', '/')
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $_.FullName, $relativePath)
}
$zip.Dispose()
Write-Host "ZIP fixed created successfully: $dest"
