# PnP-Powershell script to depoy SPFx solution to SharePoint. 
# SharePoint AssetLibrary is used as CDN
# Manually activate the app at AppCatalog
Clear-Host

gulp bundle --ship
gulp package-solution --ship

$siteUrl = "https://bipulr.sharepoint.com/"
$appCatalogUrl = "https://bipulr.sharepoint.com/sites/appcatalog"
$projectPath = "D:\TFS\SPFx\WEBPARTS"
$pkgName = "webparts.sppkg"
$cdnPath = "CDN/WEBPARTS"

$fileDirectory = $projectPath + "\temp\deploy" 
$pkgDirectory = $projectPath + "\sharepoint\solution"
$AppCatalogLibrary = "AppCatalog"
$pkgPath = $pkgDirectory + "\" + $pkgName

Connect-PnPOnline -Url $siteUrl
foreach($file in Get-ChildItem $fileDirectory)
{
    $path = $fileDirectory + "\" + $file.Name
    Add-PnPFile -Path $path -Folder $cdnPath
    Write-Host $file.FullName uploaded at $cdnPath  -ForegroundColor Green
}
Disconnect-PnPOnline

Connect-PnPOnline -Url $appCatalogUrl
Add-PnPFile -Path $pkgPath -Folder $AppCatalogLibrary
Write-Host SPFx webpart uploaded at $AppCatalogLibrary  -ForegroundColor Green
Disconnect-PnPOnline