input="out1b.txt"
while IFS=$'\n' read -r line
do
	IFS='~' read -ra arr <<< "$line"
	echo "${arr[1]} once said, \"${arr[0]}\""
done < "$input"
