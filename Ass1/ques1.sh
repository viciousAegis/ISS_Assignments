echo "~~~~~~~~~~~~~~~~~Printing lines without whitespaces~~~~~~~~~~~~~~~~~"
echo
grep "\S" quotes.txt > out1a.txt #printing to file for part 1b
grep "\S" quotes.txt #printing out to terminal

echo
echo "~~~~~~~~~~~~~~~~~Printing after deleting duplicate lines~~~~~~~~~~~~~~~~~"
echo
awk '!a[$0]++' out1a.txt > out1b.txt #printing to file for part 2
awk '!a[$0]++' out1a.txt #printing out to terminal