^5.2.1


Semantic Versioning Format
X.Y.Z
Major.Minor.Patch

Major Mean?
Huge Change
Minor Mean?
Another Release
Patch Mean?
Hotfixes


Breaking Change ==> Non Backward compatible Change
* .listen(PORT: Integer, {}) -> 5
* .listen(HOST, PORT, {}) -> 6

Additive changes
.emit()  --> v7


* .listen(PORT: Integer, {}) -> 5
Develope Identified it and fixed the memory leak --> Hotfix

Breaking Change --> Major Version
Non Breaking --> Minor / Patch

modifier
* --> Keep the package update to the latest version
^ -> Keep the package updated to the latest minor version
~ -> Keep the package updated to the latest patch version
No Modifier ==> Exact version