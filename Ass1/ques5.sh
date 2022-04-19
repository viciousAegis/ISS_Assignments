read -p "Enter String: " str

echo "PART A:"
echo ${str} | rev

echo "PART B:"
str=$( echo ${str} | rev )
echo ${str} | tr "a-zA-Z" "b-zaB-ZA"

echo "PART C:"
revStr1=${str:${#str}/2}

revStr2=${str:0:${#str}/2}
revStr2=$(echo ${revStr2} | rev)

echo ${revStr1}${revStr2}

