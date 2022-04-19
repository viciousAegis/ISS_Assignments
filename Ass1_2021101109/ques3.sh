input="inp3.txt"

echo "PART A"
echo

read size <<< $(wc -c < "$input")
echo "Size of file in BYTES: ${size}"

echo
echo "PART B"
echo

read lines <<< $(wc -l < "$input")
echo "Number of lines present: ${lines}"

echo
echo "PART C"
echo

read words <<< $(wc -w < "$input")
echo "Number of words present: ${words}"

echo
echo "PART D"
echo

lineNo=1
while IFS=$'\n' read -r line
do	
	read words <<< $(wc -w <<< "$line")
        echo "Line No: ${lineNo} - No. of Words: ${words}"
        ((lineNo=lineNo+1)) 
done < "$input"

echo
echo "PART E"
echo

dict=()

containsElement () {
  local e match="$1"
  shift
  for e
  do [[ "$e" == "$match" ]] && echo 0;
  done
  echo 1
}


while IFS=$'\n' read -r line
do
        IFS=' ' read -ra arr <<< "$line"

        for val in "${arr[@]}"
        do
                flags=$( containsElement "$val" "${dict[@]}" )
                IFS=' ' read -ra flag <<< "$flags"
                if [ ${flag[0]} -eq 1 ]
                then
                        dict+=($val)
                fi

        done
done < "$input"

for word in "${dict[@]}"
do
        freq=$( tr '[:space:]' '[\n*]' < $input | grep -c $word )
        if [ $freq -gt 1 ]
        then
                echo "Word: $word - Count of repetition: $freq"
        fi
done
