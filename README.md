# MERN_G06
This is repository for g06 batch.

Create folder structure like day_01.... day_10

1..10 | ForEach-Object { $folder = "day_{0:D2}" -f $_; mkdir $folder; "## $folder" | Out-File "$folder/README.md" }

this will create folders and add readme file

For Mac

for i in {1..10} do folder=$(printf "day_%02d" $i) mkdir $folder echo "## $folder" > $folder/README.md done
