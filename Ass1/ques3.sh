input="inp5.txt"
read size <<< $(wc -c < "$input")
echo "Size of file in BYTES: ${size}"

read lines <<< $(wc -l < "$input")
echo "Number of lines present: ${lines}"

read words <<< $(wc -w < "$input")
echo "Number of words present: ${words}"

lineNo=1
while IFS=$'\n' read -r line
do	
	read words <<< $(wc -w <<< "$line")
        echo "Line No: ${lineNo} - No. of Words: ${words}"
        ((lineNo=lineNo+1)) 
done < "$input"

(tr ' ' '\n' | sort | uniq -c | awk '{
if($1 > 1)
	print "Word: "$2" - Count of repetition: "$1
} ') < "$input"
 
