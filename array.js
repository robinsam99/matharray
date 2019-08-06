

function highestodd(Numbers)
{
const oddNumbers = Numbers.filter((number) => number%2!==0);
largest = oddNumbers[0];

for(var i = 0;i < oddNumbers.length; i++)
{
    if(oddNumbers[i]%3===0 && largest < oddNumbers[i])
    {
        largest = oddNumbers[i];
        return oddNumbers[i];
    }
}
}
document.getElementById("test").innerHTML = highestodd([12,33,34,23,15,11,23,25,23,72,22,81,82]);

   
