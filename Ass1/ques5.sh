read str

echo "PART A"
echo ${str} | rev

echo "PART B"
str=$( echo ${str} | rev )
echo ${str} | tr 0-9A-Za-z 1-9A-Za-z

echo "PART C"
revStr1=${str:${#str}/2}

revStr2=${str:0:${#str}/2}
revStr2=$(echo ${revStr2} | rev)

echo ${revStr1}${revStr2}

